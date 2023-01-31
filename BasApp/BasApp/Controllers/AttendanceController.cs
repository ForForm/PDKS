using System;
using System.IO;
using System.Data.SqlClient;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using System.Data;
using BasApp.Translator;
using System.Collections.Generic;
using System.Runtime.Serialization.Formatters.Binary;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;
using BasApp;
using Newtonsoft.Json;
using System.Security;
using BASApp.PersonnelModel;
using BASApp.Models;

namespace BASApp.Controllers
{

    [Route("attendance")]
    [ApiController]
    public class AttendanceController : Controller
    {
        private readonly IOptions<MySettingsModel> appSettings;

        public AttendanceController(IOptions<MySettingsModel> app)
        {
            appSettings = app;
        }


        //[EnableCors("CorsPolicy")]
        //[HttpPost("filter/columns")]
        //public IActionResult PostFilterColumns([FromBody]List<PersonnelPostFilterColumnsRequest> model)
        //{CompanyId}/{Username}/{begin}/{end}
        [EnableCors("CorsPolicy")]
        [HttpPost("filter")]
        public IActionResult GetAttendance(GetAttendanceRequest model)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                OkObjectResult result = null;
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", model.CompanyId), new SqlParameter("@Username", model.Username),
                    new SqlParameter("@Type", model.Type),
                    new SqlParameter("@BeginDate", model.StartDate),
                    new SqlParameter("@EndDate", model.EndDate),
                    new SqlParameter("@Emp1", model.Emp1==string.Empty?null:model.Emp1),
                    new SqlParameter("@Emp2", model.Emp2==string.Empty?null:model.Emp2),
                    new SqlParameter("@EmpType1", model.EmpType1==string.Empty?null:model.EmpType1),
                    new SqlParameter("@EmpType2", model.EmpType2==string.Empty?null:model.EmpType2),
                    new SqlParameter("@Depart1", model.Depart1==string.Empty?null:model.Depart1),
                    new SqlParameter("@Depart2", model.Depart2==string.Empty?null:model.Depart2),
                    new SqlParameter("@Cost1", model.Cost1==string.Empty?null:model.Cost1),
                    new SqlParameter("@Cost2", model.Cost2==string.Empty?null:model.Cost2),
                    new SqlParameter("@Cadre1", model.Cadre1==string.Empty?null:model.Cadre1),
                    new SqlParameter("@Cadre2", model.Cadre2==string.Empty?null:model.Cadre2),
                    new SqlParameter("@Prof1", model.Prof1==string.Empty?null:model.Prof1),
                    new SqlParameter("@Prof2", model.Prof2==string.Empty?null:model.Prof2),
                    new SqlParameter("@Task1", model.Task1==string.Empty?null:model.Task1),
                    new SqlParameter("@Task2", model.Task2==string.Empty?null:model.Task2), 
                    new SqlParameter("@Group1", model.Group1==string.Empty?null:model.Group1),
                    new SqlParameter("@Group2", model.Group2==string.Empty?null:model.Group2),
                    new SqlParameter("@Unit1", model.Unit1==string.Empty?null:model.Unit1),
                    new SqlParameter("@Unit2", model.Unit2==string.Empty?null:model.Unit2),
                    new SqlParameter("@Branch1", model.Branch1==string.Empty?null:model.Branch1),
                    new SqlParameter("@Branch2", model.Branch2==string.Empty?null:model.Branch2),
                    new SqlParameter("@Service1", model.Service1==string.Empty?null:model.Service1),
                    new SqlParameter("@Service2", model.Service2==string.Empty?null:model.Service2),
                    outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetAttendance", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetAttendance", model.Username, model.CompanyId, model, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetAttendance", model.Username, model.CompanyId, model, ex.Message + " - " + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpGet("filter/{CompanyId}/{Username}/{Table}")]
        public IActionResult GetFilterColumns(string CompanyId, string Username, string Table)
        {
            DateTime operationTime = DateTime.Now;  
            string strOutParam = string.Empty;
            try
            {
                OkObjectResult result = null;
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@Table", Table), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetFilterColumns", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetFilterColumns", Username, CompanyId, "attendance/filter/" + CompanyId + "/" + Username, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetFilterColumns", Username, CompanyId, "attendance/filter/" + CompanyId + "/" + Username, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpPost("filter/columns")]
        public IActionResult PostFilterColumns([FromBody]List<PersonnelPostFilterColumnsRequest> model)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {

                foreach (var item in model)
                {
                    var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                    SqlParameter[] param = { new SqlParameter("@CompanyId", item.CompanyId), new SqlParameter("@Username", item.Username), new SqlParameter("@table", item.table), new SqlParameter("@name", item.ColumnName), new SqlParameter("@label", item.Label), new SqlParameter("@active", item.Active), outParam };
                    result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostEmployeeFilterColumns", param, out strOutParam));
                    Util.CreateLog(appSettings, operationTime, "PersonnelPostFilterColumns", item.Username, item.CompanyId, model, result);
                }

                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PersonnelPostFilterColumns", model.ToArray()[0].Username, model.ToArray()[0].CompanyId, model, ex.Message + " - " + ex.InnerException);
                throw ex;
            }

        }

        [EnableCors("CorsPolicy")]
        [HttpPost("")]
        public IActionResult PostAttendance([FromBody]EntranceExitRequest model)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {

                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyID", model.CompanyId), new SqlParameter("@Username", model.Username), new SqlParameter("@IID", model.IID),
                    new SqlParameter("@OID", model.OID),new SqlParameter("@Code", model.Code),new SqlParameter("@EmployeeID", model.EmployeeID),new SqlParameter("@StartDate", model.StartDate), new SqlParameter("@StartTime", model.StartTime), new SqlParameter("@In", model.In),new SqlParameter("@InFlag", model.InFlag),
                    new SqlParameter("@InWorkingTypeID", model.InReason),new SqlParameter("@EndDate", model.EndDate),new SqlParameter("@EndTime", model.EndTime),new SqlParameter("@Out", model.Out)
                    ,new SqlParameter("@OutFlag", model.OutFlag),new SqlParameter("@OutWorkingTypeID", model.OutReason),outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostAttendance", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "BAS_PostAttendance", model.Username, model.CompanyId, model, result);

                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "BAS_PostAttendance", model.Username, model.CompanyId, model, ex.Message + " - " + ex.InnerException);
                throw ex;
            }

        }

        [EnableCors("CorsPolicy")]
        [HttpDelete("{CompanyId}/{Username}/{IIDNO}/{OIDNO}")]
        public IActionResult DeleteAttendance(string CompanyId, string Username, int? IIDNO, int? OIDNO)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyID", CompanyId), new SqlParameter("@Username", Username),
                    new SqlParameter("@ID", IIDNO), new SqlParameter("@OID", OIDNO),outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_DeleteAttendance", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "DeleteAttendance", Username, CompanyId, "attendance/" + CompanyId + '/' + Username + '/' + IIDNO.ToString() + '/' + OIDNO.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DeleteAttendance", Username, CompanyId, "attendance/" + CompanyId + '/' + Username + '/' + IIDNO.ToString()
                    + '/' + OIDNO.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }
    }

}