using System;
using System.IO;
using System.Data.SqlClient;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using System.Data;
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


    public static class Translator
    {

        public static CalculatePermitsRequest GetPermitsInfo(this SqlDataReader reader)
        {
            CalculatePermitsRequest item = new CalculatePermitsRequest();
            while (reader.Read())
            {
                item.EmployeeID = SqlHelper.GetNullableInt32(reader, "EmployeeID");
                item.EmployeeCode = SqlHelper.GetNullableString(reader, "EmployeeCode");
                item.ReasonID = SqlHelper.GetNullableInt32(reader, "ReasonID");
                item.StartDate = SqlHelper.GetNullableDateTime(reader, "StartDate");
                //item.StartTime = SqlHelper.GetNullableDateTime(reader, "StartTime");
                item.Day = SqlHelper.GetNullableInt32(reader, "Day");
                item.EndDate = SqlHelper.GetNullableDateTime(reader, "EndDate");
                //item.EndTime = SqlHelper.GetNullableDateTime(reader, "EndTime");
                //item.CalcDescription = SqlHelper.GetNullableString(reader, "CalcDescription");
                item.ErrorDesc= SqlHelper.GetNullableString(reader, "ErrorDesc");
                item.Statu= SqlHelper.GetNullableString(reader, "Statu");
                item.WorkDate = SqlHelper.GetNullableDateTime(reader, "WorkDate");
            }

            return item;
        }
    }


    [Route("leaves")]
    [ApiController]
    public class LeavesController : Controller
    {
        private readonly IOptions<MySettingsModel> appSettings;

        public LeavesController(IOptions<MySettingsModel> app)
        {
            appSettings = app;
        }


        [EnableCors("CorsPolicy")]
        [HttpPost("calculate")]
        public IActionResult CalculateLeaves(List<CalculatePermitsRequest> model)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                List<CalculatePermitsRequest> list = new List<CalculatePermitsRequest>();

                foreach (var item in model)
                {
                    var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                    SqlParameter[] param = { new SqlParameter("@CompanyId", item.CompanyId), new SqlParameter("@Username", item.Username),
                    new SqlParameter("@EmployeeID", item.EmployeeID),
                    new SqlParameter("@ID", item.ID),
                    new SqlParameter("@Type", item.Type),
                    new SqlParameter("@ReasonID", item.ReasonID),
                    new SqlParameter("@StartDate", item.StartDate),
                    new SqlParameter("@StartTime", item.StartTime),
                    new SqlParameter("@Day", item.Day),
                    new SqlParameter("@EndDate", item.EndDate),
                    new SqlParameter("@EndTime", item.EndTime),
                    new SqlParameter("@Description", item.Description)};
                    CalculatePermitsRequest rItem = SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB.ConnectionString, "BAS_CalculateLeaves", r => r.GetPermitsInfo(), param);
 
                    list.Add(rItem);
                }

                Util.CreateLog(appSettings, operationTime, "CalculateLeaves", model[0].Username, model[0].CompanyId, model, list);
                return Ok(list);
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "CalculateLeaves", model[0].Username, model[0].CompanyId, model, ex.Message + " - " + ex.InnerException);
                throw ex;
            }
        }



        [EnableCors("CorsPolicy")]
        [HttpGet("{CompanyId}/{Username}/{Type}/{Id}/{StartDate}/{EndDate}/filter")]
        public IActionResult GetLeaves(string CompanyId, string Username, string Type, int Id, DateTime? StartDate, DateTime? EndDate, [FromQuery]string EmployeeCode)
        {

            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                //new SqlParameter("@EmployeeCode", EmployeeCode), 
                OkObjectResult result = null;
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyID", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@Type", Type=="null"?null:Type)
                        ,new SqlParameter("@StartDate", StartDate), new SqlParameter("@EndDate", EndDate),new SqlParameter("@ID", Id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetLeaves", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetLeaves", Username, CompanyId, "leaves/" + CompanyId + "/" + Username, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetLeaves", Username, CompanyId, "leaves/" + CompanyId + "/" + Username, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpPost("filter")]
        public IActionResult GetLeave(GetLeaveRequest model)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                OkObjectResult result = null;
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", model.CompanyId), new SqlParameter("@Username", model.Username),
                    new SqlParameter("@Type", model.Type),
                    new SqlParameter("@StartDate", model.StartDate),
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
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetLeaves", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "BAS_GetLeaves", model.Username, model.CompanyId, model, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "BAS_GetLeaves", model.Username, model.CompanyId, model, ex.Message + " - " + ex.InnerException);
                throw ex;
            }
        }



        [EnableCors("CorsPolicy")]
        [HttpPost("")]
        public IActionResult PostLeaves([FromBody]List<CalculatePermitsRequest> model)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {

                foreach (var item in model)
                {
                    var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                    SqlParameter[] param = { new SqlParameter("@CompanyId", item.CompanyId), new SqlParameter("@Username", item.Username),
                        new SqlParameter("@ID", item.ID),
                        new SqlParameter("@EmployeeId", item.EmployeeID),new SqlParameter("@Type", item.Type),
                        new SqlParameter("@ReasonID", item.ReasonID), new SqlParameter("@ReasonCode", item.ReasonCode), new SqlParameter("@StartDate", item.StartDate),
                        new SqlParameter("@StartTime", item.Type==0?null: item.StartTime),
                        new SqlParameter("@Day", item.Day),new SqlParameter("@EndDate",item.Type==1?item.StartDate:  item.EndDate),
                        new SqlParameter("@EndTime", item.Type==0?null: item.EndTime),new SqlParameter("@WorkDate", item.WorkDate),new SqlParameter("@Description", item.Description),outParam };
                    result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostLeaves", param, out strOutParam));
                    Util.CreateLog(appSettings, operationTime, "BAS_PostLeaves", item.Username, item.CompanyId, model, result);
                }

                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "BAS_PostLeaves", model[0].Username, model[0].CompanyId, model, ex.Message + " - " + ex.InnerException);
                throw ex;
            }

        }


        [EnableCors("CorsPolicy")]
        [HttpDelete("{CompanyId}/{Username}/{Id}")]
        public IActionResult DeleteLeaves(string CompanyId, string Username, int Id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@ID", Id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_DeleteLeaves", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "DeleteLeaves", Username, CompanyId, "leaves/" + CompanyId + '/' + Username + '/' + Id.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DeleteLeaves", Username, CompanyId, "leaves/" + CompanyId + '/' + Username + '/' + Id.ToString(), ex.Message + "-" + ex.InnerException);
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




    }

}