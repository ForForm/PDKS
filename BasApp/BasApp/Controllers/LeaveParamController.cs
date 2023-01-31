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

    [Route("leaveparam")]
    [ApiController]
    public class LeaveParamController : Controller
    {
        private readonly IOptions<MySettingsModel> appSettings;

        public LeaveParamController(IOptions<MySettingsModel> app)
        {
            appSettings = app;
        }

        [EnableCors("CorsPolicy")]
        [HttpGet("extend/{CompanyId}/{Username}")]
        public IActionResult GetLeaveExtendParams(string CompanyId, string Username)
        {

            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                OkObjectResult result = null;
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetLeaveExtendParameter", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetLeaveExtendParams", Username, CompanyId, "leaveparam/extend/" + CompanyId + "/" + Username, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetLeaves", Username, CompanyId, "leaveparam/extend/" + CompanyId + "/" + Username, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpPost("extend")]
        public IActionResult PostLeaveExtendParams([FromBody]PostLeaveExtendParamsRequest item)
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
                        new SqlParameter("@FlexPersonnelGroupID", item.FlexPersonnelGroupID),
                        new SqlParameter("@WorkingTypeID", item.WorkingTypeID),
                        new SqlParameter("@Saturday", item.Saturday),
                        new SqlParameter("@Weekend", item.Weekend),
                        new SqlParameter("@General", item.General),
                    outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostLeaveExtendParams", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "PostLeaveExtendParams", item.Username, item.CompanyId, item, result);

                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PostLeaveExtendParams", item.Username, item.CompanyId, item, ex.Message + " - " + ex.InnerException);
                throw ex;
            }

        }

        [EnableCors("CorsPolicy")]
        [HttpDelete("extend/{CompanyId}/{Username}/{Id}")]
        public IActionResult DeleteLeaveExtendParams(string CompanyId, string Username, int Id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@ID", Id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_DeleteLeaveExtendParameter", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "DeleteLeaveExtendParams", Username, CompanyId, "leaveparam/extend/" + CompanyId + '/' + Username + '/' + Id.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DeleteLeaveExtendParams", Username, CompanyId, "leaveparam/extend/" + CompanyId + '/' + Username + '/' + Id.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpGet("dist/{CompanyId}/{Username}")]
        public IActionResult GetLeaveDistParams(string CompanyId, string Username)
        {

            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                OkObjectResult result = null;
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetLeaveDistParameter", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetLeaveDistParams", Username, CompanyId, "leaveparam/dist/" + CompanyId + "/" + Username, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetLeaveDistParams", Username, CompanyId, "leaveparam/dist/" + CompanyId + "/" + Username, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpPost("dist")]
        public IActionResult PostLeaveDistParams([FromBody]PostLeaveDistParamsRequest item)
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
                        new SqlParameter("@FlexPersonnelGroupID", item.FlexPersonnelGroupID),
                        new SqlParameter("@SourceWorkingTypeID", item.SourceWorkingTypeID),
                        new SqlParameter("@SourceLimit", item.SourceLimit),
                        new SqlParameter("@DestWorkingTypeID", item.DestWorkingTypeID),
                        new SqlParameter("@DestLimit", item.DestLimit),
                    outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostLeaveDistParams", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "PostLeaveDistParams", item.Username, item.CompanyId, item, result);

                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PostLeaveDistParams", item.Username, item.CompanyId, item, ex.Message + " - " + ex.InnerException);
                throw ex;
            }

        }

        [EnableCors("CorsPolicy")]
        [HttpDelete("dist/{CompanyId}/{Username}/{Id}")]
        public IActionResult DeleteLeaveDistParams(string CompanyId, string Username, int Id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@ID", Id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_DeleteLeaveDistParameter", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "DeleteLeaveDistParams", Username, CompanyId, "leaveparam/dist/" + CompanyId + '/' + Username + '/' + Id.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DeleteLeaveDistParams", Username, CompanyId, "leaveparam/dist/" + CompanyId + '/' + Username + '/' + Id.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpGet("limit/{CompanyId}/{Username}")]
        public IActionResult GetLeaveLimitParams(string CompanyId, string Username)
        {

            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                OkObjectResult result = null;
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetLeaveLimitParameter", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetLeaveLimitParams", Username, CompanyId, "leaveparam/limit/" + CompanyId + "/" + Username, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetLeaveLimitParams", Username, CompanyId, "leaveparam/limit/" + CompanyId + "/" + Username, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpPost("limit")]
        public IActionResult PostLeaveLimitParams([FromBody]PostLeaveLimitParamsRequest item)
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
                        new SqlParameter("@FlexPersonnelGroupID", item.FlexPersonnelGroupID),
                        new SqlParameter("@SourceWorkingTypeID", item.SourceWorkingTypeID),
                        new SqlParameter("@LeaveUsageType", item.LeaveUsageType),
                        new SqlParameter("@MonthLimit", item.MonthLimit),
                        new SqlParameter("@YearLimit", item.YearLimit),
                        new SqlParameter("@DayLimit", item.DayLimit),
                        new SqlParameter("@YearLimitControl", item.YearLimitControl),
                        new SqlParameter("@Pieced", item.Pieced),
                        new SqlParameter("@DestWorkingTypeID", item.DestWorkingTypeID),
                    outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostLeaveLimitParams", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "PostLeaveLimitParams", item.Username, item.CompanyId, item, result);

                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PostLeaveLimitParams", item.Username, item.CompanyId, item, ex.Message + " - " + ex.InnerException);
                throw ex;
            }

        }

        [EnableCors("CorsPolicy")]
        [HttpDelete("limit/{CompanyId}/{Username}/{Id}")]
        public IActionResult DeleteLeaveLimitParams(string CompanyId, string Username, int Id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@ID", Id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_DeleteLeaveLimitParameter", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "DeleteLeaveLimitParams", Username, CompanyId, "leaveparam/limit/" + CompanyId + '/' + Username + '/' + Id.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DeleteLeaveLimitParams", Username, CompanyId, "leaveparam/limit/" + CompanyId + '/' + Username + '/' + Id.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpGet("year/{CompanyId}/{Username}")]
        public IActionResult GetYearlyParams(string CompanyId, string Username)
        {

            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                OkObjectResult result = null;
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetYearlyParameter", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetLeaveLimitParams", Username, CompanyId, "leaveparam/year/" + CompanyId + "/" + Username, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "BAS_GetYearlyParameter", Username, CompanyId, "leaveparam/year/" + CompanyId + "/" + Username, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpGet("year/used/{CompanyId}/{Username}/{Id}")]
        public IActionResult GetYearlyParamsUsed(string CompanyId, string Username, int Id)
        {

            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                OkObjectResult result = null;
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetYearlyUsed", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetYearlyParamsUsed", Username, CompanyId, "leaveparam/year/used/" + CompanyId + "/" + Username, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "BAS_GetYearlyParameter", Username, CompanyId, "leaveparam/year/" + CompanyId + "/" + Username, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }



        [EnableCors("CorsPolicy")]
        [HttpGet("year/codes/{CompanyId}/{Username}/{Id}")]
        public IActionResult GetYearlyParamsCodes(string CompanyId, string Username, int Id)
        {

            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                OkObjectResult result = null;
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username),new SqlParameter("@FlexId", Id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetYearlyParameterCodes", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetYearlyParamsCodes", Username, CompanyId, "leaveparam/year/codes/" + CompanyId + "/" + Username, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetYearlyParamsCodes", Username, CompanyId, "leaveparam/year/codes/" + CompanyId + "/" + Username, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpPost("year")]
        public IActionResult PostYearlyParams([FromBody]PostYearlyParamsRequest item)
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
                        new SqlParameter("@FlexPersonnelGroupID", item.FlexPersonnelGroupID),
                        new SqlParameter("@StartDateType", item.StartDateType),
                        new SqlParameter("@Date", item.Date),
                        new SqlParameter("@IsPeriod", item.IsPeriod),
                        new SqlParameter("@CalcNewYear", item.CalcNewYear),
                        new SqlParameter("@CalcStartingDate", item.CalcStartingDate),
                        new SqlParameter("@CancelPeriod", item.CancelPeriod),
                        new SqlParameter("@CancelPeriodMonth", item.CancelPeriodMonth),
                        new SqlParameter("@CancelPeriodDay", item.CancelPeriodDay),
                    outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostLeaveYearlyParams", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "PostYearlyParams", item.Username, item.CompanyId, item, result);

                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PostYearlyParams", item.Username, item.CompanyId, item, ex.Message + " - " + ex.InnerException);
                throw ex;
            }

        }

        [EnableCors("CorsPolicy")]
        [HttpPost("year/codes")]
        public IActionResult PostYearlyParamCode([FromBody]PostYearlyParamsCodeRequest item)
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
                        new SqlParameter("@FlexPersonnelGroupID", item.FlexPersonnelGroupID),
                        new SqlParameter("@WorkingTypeID", item.WorkingTypeID),
                        new SqlParameter("@Time", item.Time), 
                    outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostLeaveYearlyParamCode", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "PostYearlyParamCode", item.Username, item.CompanyId, item, result);

                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PostYearlyParams", item.Username, item.CompanyId, item, ex.Message + " - " + ex.InnerException);
                throw ex;
            }

        }

        [EnableCors("CorsPolicy")]
        [HttpPost("year/seniority")]
        public IActionResult PostYearlyParamSeniority([FromBody]PostYearlyParamsSeniorityRequest item)
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
                        new SqlParameter("@FlexPersonnelGroupID", item.FlexPersonnelGroupID),
                        new SqlParameter("@Type", item.Type),
                        new SqlParameter("@FirstYear", item.FirstYear),
                        new SqlParameter("@LastYear", item.LastYear),
                        new SqlParameter("@VestingDay", item.VestingDay),
                    outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostLeaveYearlyParamSeniority", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "PostYearlyParamCode", item.Username, item.CompanyId, item, result);

                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PostYearlyParams", item.Username, item.CompanyId, item, ex.Message + " - " + ex.InnerException);
                throw ex;
            }

        }


        [EnableCors("CorsPolicy")]
        [HttpPost("year/used")]
        public IActionResult PostYearlyParamUsed([FromBody]PostYearlyParamsUsedRequest item)
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
                        new SqlParameter("@EmployeeID", item.EmployeeID),
                        new SqlParameter("@Type", item.Type),
                        new SqlParameter("@Day", item.Day),
                        new SqlParameter("@Month", item.Month),
                        new SqlParameter("@Year", item.Year),
                    outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostYearlyUsed", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "PostYearlyParamUsed", item.Username, item.CompanyId, item, result);

                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PostYearlyParamUsed", item.Username, item.CompanyId, item, ex.Message + " - " + ex.InnerException);
                throw ex;
            }

        }




        [EnableCors("CorsPolicy")]
        [HttpGet("year/seniority/{CompanyId}/{Username}/{Id}")]
        public IActionResult GetYearlyParamsSeniority(string CompanyId, string Username, int Id)
        {

            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                OkObjectResult result = null;
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@FlexId", Id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetYearlyParameterSeniority", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetYearlyParamsSeniority", Username, CompanyId, "leaveparam/year/seniority/" + CompanyId + "/" + Username, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetYearlyParamsSeniority", Username, CompanyId, "leaveparam/year/seniority/" + CompanyId + "/" + Username, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

        

        [EnableCors("CorsPolicy")]
        [HttpDelete("year/{CompanyId}/{Username}/{Id}")]
        public IActionResult DeleteYearlyParams(string CompanyId, string Username, int Id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@ID", Id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_DeleteYearlyParameter", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "DeleteYearParams", Username, CompanyId, "leaveparam/year/" + CompanyId + '/' + Username + '/' + Id.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DeleteYearParams", Username, CompanyId, "leaveparam/year/" + CompanyId + '/' + Username + '/' + Id.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpDelete("year/codes/{CompanyId}/{Username}/{Id}")]
        public IActionResult DeleteYearlyParamsCode(string CompanyId, string Username, int Id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@ID", Id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_DeleteYearlyParameterCode", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "DeleteYearlyParamsCode", Username, CompanyId, "leaveparam/year/codes/" + CompanyId + '/' + Username + '/' + Id.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DeleteYearlyParamsCode", Username, CompanyId, "leaveparam/year/codes/" + CompanyId + '/' + Username + '/' + Id.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpDelete("year/seniority/{CompanyId}/{Username}/{Id}")]
        public IActionResult DeleteYearlyParamsSeniority(string CompanyId, string Username, int Id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@ID", Id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_DeleteYearlyParameterSeniority", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "DeleteYearlyParamsSeniority", Username, CompanyId, "leaveparam/year/seniority/" + CompanyId + '/' + Username + '/' + Id.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DeleteYearlyParamsSeniority", Username, CompanyId, "leaveparam/year/seniority/" + CompanyId + '/' + Username + '/' + Id.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpDelete("year/used/{CompanyId}/{Username}/{Id}")]
        public IActionResult DeleteYearlyParamsUsed(string CompanyId, string Username, int Id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@ID", Id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_DeleteYearlyUsed", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "DeleteYearlyParamsUsed", Username, CompanyId, "leaveparam/year/used/" + CompanyId + '/' + Username + '/' + Id.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DeleteYearlyParamsUsed", Username, CompanyId, "leaveparam/year/used/" + CompanyId + '/' + Username + '/' + Id.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }
    }

}