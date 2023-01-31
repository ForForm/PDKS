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

    [Route("syndicate")]
    [ApiController]
    public class SyndicateController : Controller
    {
        private readonly IOptions<MySettingsModel> appSettings;

        public SyndicateController(IOptions<MySettingsModel> app)
        {
            appSettings = app;
        }

        [EnableCors("CorsPolicy")]
        [HttpGet("absence/{CompanyId}/{Username}")]
        public IActionResult GetAbsence(string CompanyId, string Username)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                OkObjectResult result = null;
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetSyndicateAbsence", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetAbsence", Username, CompanyId, "absence/" + CompanyId + "/" + Username, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetAbsence", Username, CompanyId, "absence/" + CompanyId + "/" + Username, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpDelete("absence/{CompanyId}/{Username}/{Id}")]
        public IActionResult DeleteAbsence(string CompanyId, string Username, int Id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@ID", Id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_DeleteSyndicateAbsence", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "DeleteAbsence", Username, CompanyId, "absence/" + CompanyId + '/' + Username + '/' + Id.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DeleteAbsence", Username, CompanyId, "absence/" + CompanyId + '/' + Username + '/' + Id.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpGet("absence/detail/{CompanyId}/{Username}/{SyndicateAbsenceID}")]
        public IActionResult GetAbsenceDetail(string CompanyId, string Username, int SyndicateAbsenceID)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                OkObjectResult result = null;
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username),
                    new SqlParameter("@SyndicateAbsenceID", SyndicateAbsenceID), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetSyndicateAbsenceDetail", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetAbsenceDetail", Username, CompanyId, "absence/detail/" + CompanyId + "/" + Username, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetAbsenceDetail", Username, CompanyId, "absence/detail/" + CompanyId + "/" + Username, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpDelete("absence/detail/{CompanyId}/{Username}/{Id}")]
        public IActionResult DeleteAbsenceDetail(string CompanyId, string Username, int Id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@ID", Id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_DeleteSyndicateAbsenceDetail", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "DeleteAbsenceDetail", Username, CompanyId, "absence/detail/" + CompanyId + '/' + Username + '/' + Id.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DeleteAbsenceDetail", Username, CompanyId, "absence/detail/" + CompanyId + '/' + Username + '/' + Id.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpPost("absence")]
        public IActionResult PostAbsence([FromBody]PostAbsenceRequest model)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {

                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", model.CompanyId), new SqlParameter("@Username", model.Username), new SqlParameter("@ID", model.ID),
                    new SqlParameter("@FlexPersonnelGroupID", model.FlexPersonnelGroupID),
                    new SqlParameter("@WorkingTypeID", model.WorkingTypeID),
                    new SqlParameter("@Day", model.Day),
                    new SqlParameter("@Time", model.Time),
                    new SqlParameter("@Process", model.Process),
                    new SqlParameter("@WeekendWorkingTypeID", model.WeekendWorkingTypeID),
                    outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostSyndicateAbsence", param, out strOutParam));


                Util.CreateLog(appSettings, operationTime, "PostAbsence", model.Username, model.CompanyId, model, result);

                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PostAbsence", model.Username, model.CompanyId, model, ex.Message + " - " + ex.InnerException);
                throw ex;
            }

        }


        [EnableCors("CorsPolicy")]
        [HttpPost("absence/detail")]
        public IActionResult PostAbsenceDetail([FromBody]PostAbsenceRequestDetail model)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {

                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", model.CompanyId), new SqlParameter("@Username", model.Username), new SqlParameter("@ID", model.ID),
                    new SqlParameter("@SyndicateAbsenceID", model.SyndicateAbsenceID),
                    new SqlParameter("@WorkingTypeID", model.WorkingTypeID),
                    new SqlParameter("@ProcessType", model.ProcessType),
                    outParam };

                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostSyndicateAbsenceDetail", param, out strOutParam));


                Util.CreateLog(appSettings, operationTime, "PostAbsenceDetail", model.Username, model.CompanyId, model, result);

                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PostAbsenceDetail", model.Username, model.CompanyId, model, ex.Message + " - " + ex.InnerException);
                throw ex;
            }

        }





        [EnableCors("CorsPolicy")]
        [HttpGet("overtime/{CompanyId}/{Username}")]
        public IActionResult GetOvertime(string CompanyId, string Username)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                OkObjectResult result = null;
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username),
                    outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetSyndicateOvertime", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetOvertime", Username, CompanyId, "overtime/" + CompanyId + "/" + Username, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetOvertime", Username, CompanyId, "overtime/" + CompanyId + "/" + Username, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpDelete("overtime/{CompanyId}/{Username}/{Id}")]
        public IActionResult DeleteOvertime(string CompanyId, string Username, int Id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@ID", Id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_DeleteSyndicateOvertime", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "DeleteOvertime", Username, CompanyId, "overtime/" + CompanyId + '/' + Username + '/' + Id.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DeleteOvertime", Username, CompanyId, "overtime/" + CompanyId + '/' + Username + '/' + Id.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpGet("overtime/deduction/{CompanyId}/{Username}/{SyndicateOvertimeID}")]
        public IActionResult GetOvertimeDeduction(string CompanyId, string Username, int SyndicateOvertimeID)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                OkObjectResult result = null;
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username),
                    new SqlParameter("@SyndicateOvertimeID", SyndicateOvertimeID), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetSyndicateOvertimeDeduction", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetOvertimeDeduction", Username, CompanyId, "overtime/deduction/" + CompanyId + "/" + Username, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetOvertimeDeduction", Username, CompanyId, "overtime/deduction/" + CompanyId + "/" + Username, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpDelete("overtime/deduction/{CompanyId}/{Username}/{Id}")]
        public IActionResult DeleteOvertimeDeduction(string CompanyId, string Username, int Id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@ID", Id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_DeleteSyndicateOvertimeDeduction", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "DeleteOvertimeDeduction", Username, CompanyId, "overtime/deduction/" + CompanyId + '/' + Username + '/' + Id.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DeleteOvertimeDeduction", Username, CompanyId, "overtime/deduction/" + CompanyId + '/' + Username + '/' + Id.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpGet("overtime/payment/{CompanyId}/{Username}/{SyndicateOvertimeID}")]
        public IActionResult GetOvertimePayment(string CompanyId, string Username,int SyndicateOvertimeID)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                OkObjectResult result = null;
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username),
                     new SqlParameter("@SyndicateOvertimeID", SyndicateOvertimeID), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetSyndicateOvertimePayment", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetOvertimePayment", Username, CompanyId, "overtime/payment/" + CompanyId + "/" + Username, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetOvertimePayment", Username, CompanyId, "overtime/payment/" + CompanyId + "/" + Username, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpDelete("overtime/payment/{CompanyId}/{Username}/{Id}")]
        public IActionResult DeleteOvertimePayment(string CompanyId, string Username, int Id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@ID", Id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_DeleteSyndicateOvertimePayment", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "DeleteOvertimePayment", Username, CompanyId, "overtime/payment/" + CompanyId + '/' + Username + '/' + Id.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DeleteOvertimePayment", Username, CompanyId, "overtime/payment/" + CompanyId + '/' + Username + '/' + Id.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpPost("overtime")]
        public IActionResult PostOvertime([FromBody]PostOvertimeRequest model)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {

                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", model.CompanyId), new SqlParameter("@Username", model.Username), new SqlParameter("@ID", model.ID),
                    new SqlParameter("@FlexPersonnelGroupID", model.FlexPersonnelGroupID),
                    new SqlParameter("@WorkingTypeID", model.WorkingTypeID),                    
                    new SqlParameter("@UpperLimit", model.UpperLimit),
                    outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostSyndicateOvertime", param, out strOutParam));


                Util.CreateLog(appSettings, operationTime, "PostOvertime", model.Username, model.CompanyId, model, result);

                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PostOvertime", model.Username, model.CompanyId, model, ex.Message + " - " + ex.InnerException);
                throw ex;
            }

        }


        [EnableCors("CorsPolicy")]
        [HttpPost("overtime/deduction")]
        public IActionResult PostOvertimeDeduction([FromBody]PostOvertimeDeductionRequest model)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {

                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", model.CompanyId), new SqlParameter("@Username", model.Username), new SqlParameter("@ID", model.ID),
                    new SqlParameter("@SyndicateOvertimeID", model.SyndicateOvertimeID),
                    new SqlParameter("@WorkingTypeID", model.WorkingTypeID),                    
                    outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostSyndicateOvertimeDeduction", param, out strOutParam));


                Util.CreateLog(appSettings, operationTime, "PostOvertimeDeduction", model.Username, model.CompanyId, model, result);

                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PostOvertimeDeduction", model.Username, model.CompanyId, model, ex.Message + " - " + ex.InnerException);
                throw ex;
            }

        }


        [EnableCors("CorsPolicy")]
        [HttpPost("overtime/payment")]
        public IActionResult PostOvertimePayment([FromBody]PostOvertimeDeductionRequest model)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {

                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", model.CompanyId), new SqlParameter("@Username", model.Username), new SqlParameter("@ID", model.ID),
                    new SqlParameter("@SyndicateOvertimeID", model.SyndicateOvertimeID),
                    new SqlParameter("@WorkingTypeID", model.WorkingTypeID),
                    outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostSyndicateOvertimePayment", param, out strOutParam));


                Util.CreateLog(appSettings, operationTime, "PostOvertimePayment", model.Username, model.CompanyId, model, result);

                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PostOvertimePayment", model.Username, model.CompanyId, model, ex.Message + " - " + ex.InnerException);
                throw ex;
            }

        }
    }

}