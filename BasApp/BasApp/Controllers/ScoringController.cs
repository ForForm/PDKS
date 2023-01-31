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
using System.Threading;

namespace BASApp.Controllers
{



    [Route("scoring")]
    [ApiController]
    public class ScoringController : Controller
    {
        private readonly IOptions<MySettingsModel> appSettings;

        public ScoringController(IOptions<MySettingsModel> app)
        {
            appSettings = app;
        }


        #region ScoringDeff

        [HttpPost("deff")]
        public IActionResult PostScoringDeff([FromBody]ScoringDeffRequest item)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {

                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", item.CompanyId),
                    new SqlParameter("@Username", item.Username),
                    new SqlParameter("@ID", item.ID),
                    new SqlParameter("@Code", item.Code),
                    new SqlParameter("@Name", item.Name),
                    new SqlParameter("@Type", item.Type),
                    new SqlParameter("@DailyScoring", item.DailyScoring),
                    new SqlParameter("@MonthlyScoring", item.MonthlyScoring),
                    new SqlParameter("@WorkingTypeID", item.WorkingTypeID),
                    new SqlParameter("@EmptyRows", item.EmptyRows),
                    new SqlParameter("@Default", item.Default),
                    outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostScoringDeff", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "PostScoringDeff", item.Username, item.CompanyId, item, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PostScoringDeff", item.Username, item.CompanyId, item, ex.Message + " - " + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpGet("deff/{CompanyId}/{Username}/{Id}")]
        public IActionResult GetScoringDeff(string CompanyId, string Username, string Id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                OkObjectResult result = null;
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId),
                    new SqlParameter("@Username", Username),  new SqlParameter("@ID", (Id=="0"?null:Id)), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetScoringDeff", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetScoringDeff", Username, CompanyId, "scoring/deff" + CompanyId + "/" + Username, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetScoringDeff", Username, CompanyId, "scoring/deff/" + CompanyId + "/" + Username, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpDelete("deff/{CompanyId}/{Username}/{Id}")]
        public IActionResult DeleteScoringDeff(string CompanyId, string Username, int Id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@ID", Id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_DeleteScoringDeff", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "DeleteScoringDeff", Username, CompanyId, "scoring/deff/" + CompanyId + '/' + Username + '/' + Id.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DeleteScoringDeff", Username, CompanyId, "scoring/deff/" + CompanyId + '/' + Username + '/' + Id.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

        #endregion


        #region DailyScoring

        //string CompanyId, string Username, string Type, string WorkingTypes, int Id, DateTime? StartDate, DateTime? EndDate, int view, string Filter
        [EnableCors("CorsPolicy")]
        [HttpPost("")]
        public IActionResult GetScoring([FromBody]GetScoringRequest item)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                string strEmployees = string.Empty;
                if (item.EmployeeList.Count>0)
                    foreach (var eItem in item.EmployeeList)
                        strEmployees += eItem + ",";


                //new SqlParameter("@Filter", model.ToArray()[0].Filter == "null" ? null : model.ToArray()[0].Filter),
                OkObjectResult result = null;
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", item.CompanyId),
                    new SqlParameter("@Username", item.Username), new SqlParameter("@Type", item.type),
                    new SqlParameter("@Type", item.type), new SqlParameter("@View", item.view),
                    new SqlParameter("@StartDate", item.StartDate), new SqlParameter("@EndDate", item.EndDate),
                    new SqlParameter("@EmployeeList", strEmployees.Length>0? strEmployees.Substring(0,strEmployees.Length-1):null),
                    //new SqlParameter("@EmpId2", item.filterObject.EmpId2),
                    //new SqlParameter("@EmpType1", item.filterObject.EmpType1), new SqlParameter("@EmpType2", item.filterObject.EmpType2),
                    //new SqlParameter("@Depart1", item.filterObject.Depart1), new SqlParameter("@Depart2", item.filterObject.Depart2),
                    //new SqlParameter("@Cost1", item.filterObject.Cost1), new SqlParameter("@Cost2", item.filterObject.Cost2),
                    //new SqlParameter("@Cadre1", item.filterObject.Cadre1), new SqlParameter("@Cadre2", item.filterObject.Cadre2),
                    //new SqlParameter("@Prof1", item.filterObject.Prof1), new SqlParameter("@Prof2", item.filterObject.Prof2),
                    //new SqlParameter("@Task1", item.filterObject.Task1), new SqlParameter("@Task2", item.filterObject.Task2),
                    //new SqlParameter("@Group1", item.filterObject.Group1), new SqlParameter("@Group2", item.filterObject.Group2),
                    //new SqlParameter("@Unit1", item.filterObject.Unit1), new SqlParameter("@Unit2", item.filterObject.Unit2),
                    //new SqlParameter("@Branch1", item.filterObject.Branch1), new SqlParameter("@Branch2", item.filterObject.Branch2),
                    //new SqlParameter("@Service1", item.filterObject.Service1), new SqlParameter("@Service2", item.filterObject.Service2),
                    //new SqlParameter("@CollarColor1", item.filterObject.CollarColor1), new SqlParameter("@CollarColor2", item.filterObject.CollarColor2),
                    outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetScoring", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetScoring", item.Username, item.CompanyId, item, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetScoring", item.Username, item.CompanyId, item, ex.Message + " - " + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpGet("employee/{CompanyId}/{Username}/{Employee}/{StartDate}/{EndDate}")]
        public IActionResult GetScoringByEmployee(string CompanyId, string Username, string Employee, DateTime? StartDate, DateTime? EndDate)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                OkObjectResult result = null;
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@Employee", Employee)
                        ,new SqlParameter("@StartDate", StartDate), new SqlParameter("@EndDate", EndDate), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetScoring", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetScoringByEmployee", Username, CompanyId, "scoring/employee/" + CompanyId + "/" + Username, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetDailyScoringByEmployee", Username, CompanyId, "scoring/daily/employee/" + CompanyId + "/" + Username, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

        //[EnableCors("CorsPolicy")]
        //[HttpGet("calculate/{CompanyId}/{Username}/{Type}/{Id}/{StartDate}/{EndDate}/{bCalc}")]
        [HttpPost("calculate/daily")]
        public IActionResult CalculateDailyScoring([FromBody]List<CalculateScoringRequest> model)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                foreach (var item in model)
                {
                    var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                    SqlParameter[] param = { new SqlParameter("@CalculateID", item.Id), new SqlParameter("@CompanyID", item.CompanyId),
                        new SqlParameter("@EmployeeID", item.EmployeeId),new SqlParameter("@SendResult", item.SendResult),
                        new SqlParameter("@StartDate", item.StartDate), new SqlParameter("@EndDate", item.EndDate), outParam };
                    result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_CalculateDailyScoring", param, out strOutParam));
                    Util.CreateLog(appSettings, operationTime, "CalculateDailyScoring", item.Username, item.CompanyId, model, result);

                    //Thread.Sleep(1000);
                    
                }

                return result;
                //return Ok(model.Count);
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "CalculateScoring", model.ToArray()[0].Username, model.ToArray()[0].CompanyId, model, ex.Message + " - " + ex.InnerException);
                throw ex;
            }
        }

        [HttpPost("daily")]
        public IActionResult PostDailyScoring([FromBody]List<PostScoringRequest> model)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                foreach (var item in model)
                {
                    var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                    SqlParameter[] param = { new SqlParameter("@CompanyId", model[0].CompanyId), new SqlParameter("@Username", model[0].Username),
                        new SqlParameter("@EmployeeID", item.EmployeeID),
                        new SqlParameter("@ShiftGroupID", item.ShiftGroupID),
                        new SqlParameter("@ShiftID", item.ShiftID),
                        new SqlParameter("@Date", item.Date),
                        new SqlParameter("@Approve", item.Approve),
                        new SqlParameter("@WorkingTime", item.WorkingTime),
                        new SqlParameter("@Value", item.Value),outParam };
                    result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostDailyScoring", param, out strOutParam));
                    Util.CreateLog(appSettings, operationTime, "PostDailyScoring", item.Username, item.CompanyId, model, result);

                    //Thread.Sleep(1000);
                    //return Ok(bCalc);
                }

                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "BAS_PostScoring", model.ToArray()[0].Username, model.ToArray()[0].CompanyId, model, ex.Message + " - " + ex.InnerException);
                throw ex;
            }
        }

        #endregion


        #region MonthlyScoring

        //[EnableCors("CorsPolicy")]
        //[HttpGet("calculate/{CompanyId}/{Username}/{Type}/{Id}/{StartDate}/{EndDate}/{bCalc}")]
        [HttpPost("calculate/monthly")]
        public IActionResult CalculateMonthlyScoring([FromBody]List<CalculateScoringRequest> model)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                foreach (var item in model)
                {
                    var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                    SqlParameter[] param = { new SqlParameter("@CalculateID", item.Id), new SqlParameter("@CompanyID", item.CompanyId),
                        new SqlParameter("@EmployeeID", item.EmployeeId),new SqlParameter("@SendResult", item.SendResult),
                        new SqlParameter("@StartDate", item.StartDate), new SqlParameter("@EndDate", item.EndDate), outParam };
                    result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_CalculateMonthlyScoring", param, out strOutParam));
                    Util.CreateLog(appSettings, operationTime, "BAS_CalculateMonthlyScoring", item.Username, item.CompanyId, model, result);

                    //Thread.Sleep(1000);

                }

                return result;
                //return Ok(model.Count);
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "CalculateScoring", model.ToArray()[0].Username, model.ToArray()[0].CompanyId, model, ex.Message + " - " + ex.InnerException);
                throw ex;
            }
        }



        #endregion


    }

}