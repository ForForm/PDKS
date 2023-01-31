using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using BasApp;
using BASApp.DefinitionModel;
using BASApp.Models;
using BasApp.Translator;
//using BASApp.PersonnelModel;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;

namespace BASApp.Controllers
{
    [Route("definitions")]
    [ApiController]
    public class PoolDefinitionsController : Controller
    {
        private readonly IOptions<MySettingsModel> appSettings;
        public IConfiguration Configuration { get; }

        public PoolDefinitionsController(IOptions<MySettingsModel> app)
        {
            appSettings = app;
        }

        #region Constants

        [EnableCors("CorsPolicy")]
        [HttpGet("constants/groups/{CompanyId}/{Username}")]
        public IActionResult GetConstantGroups(string CompanyId, string Username)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), outParam };
                OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetConstantGroups", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetConstantGroups", Username, CompanyId, "definitions/constants/groups/" + CompanyId + '/' + Username, result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetConstantGroups", Username, CompanyId, "definitions/constants/groups/" + CompanyId + '/' + Username, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpGet("constants/holiday/{CompanyId}/{Username}/{Group}/{Year}")]
        public IActionResult GetConstantsHoliday(string CompanyId, string Username, string Group, string Year)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@Group", Group=="null"?null:Group),
                    new SqlParameter("@Year", Year=="null"?null:Year), outParam };
                OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetPublicHoliday", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetConstantsHoliday", Username, CompanyId, "definitions/constants/holiday/" + CompanyId + '/' + Username, result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetConstantsHoliday", Username, CompanyId, "definitions/constants/holiday/" + CompanyId + '/' + Username, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpPost("constants/holiday")]
        public IActionResult PostConstantsHoliday([FromBody]PostPublicHolidayRequest model)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", model.CompanyId), new SqlParameter("@Username", model.Username), new SqlParameter("@ID", model.ID), new SqlParameter("@Type", model.Type), new SqlParameter("@Date", model.Date), new SqlParameter("@Day", model.Day), new SqlParameter("@Description", model.Description), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostPublicHoliday", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "PostConstantsHoliday", model.Username, model.CompanyId, model, result);

                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PostConstantsHoliday", model.Username, model.CompanyId, model, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }
        [EnableCors("CorsPolicy")]
        [HttpDelete("constants/holiday/{CompanyId}/{Username}/{ID}")]
        public IActionResult DeleteConstantsHoliday(string CompanyId, string Username, int ID)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@ID", ID), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_DeletePublicHoliday", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "DeleteConstantsHoliday", Username, CompanyId, "definitions/constants/holiday/" + CompanyId + '/' + Username + '/' + ID, result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DeleteConstantsHoliday", Username, CompanyId, "definitions/constants/holiday/" + CompanyId + '/' + Username + '/' + ID, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpGet("constants/groups/detail/{CompanyId}/{Username}/{Type}")]
        public IActionResult GetConstantGroupsDetail(string CompanyId, string Username,string Type)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@Type", Type), outParam };
                OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetConstantGroupsDetail", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetConstantGroupsDetail", Username, CompanyId, "definitions/constants/groups/detail/" + CompanyId + '/' + Username + '/' + Type, result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetConstantGroupsDetail", Username, CompanyId, "definitions/constants/groups/detail/" + CompanyId + '/' + Username + '/' + Type, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpGet("constants/{CompanyId}/{Username}/{Type}")]
        public IActionResult GetConstants(string CompanyId, string Username, string Type)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@type", Type), outParam };
                OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetConstants", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetConstants", Username, CompanyId, "definitions/constants/" + CompanyId + '/' + Username + '/' + Type, result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetConstants", Username, CompanyId, "definitions/constants/" + CompanyId + '/' + Username + '/' + Type, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpPost("constants")]
        public IActionResult PostConstant([FromBody]PostReasonsRequest model)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", model.CompanyId), new SqlParameter("@Username", model.Username), new SqlParameter("@ID", model.ID), new SqlParameter("@Type", model.Type), new SqlParameter("@Code", model.Code), new SqlParameter("@Name", model.Name), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostConstant", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "PostConstant", model.Username, model.CompanyId, model, result);

                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PostConstant", model.Username, model.CompanyId, model, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpDelete("constants/{CompanyId}/{Username}/{ID}")]
        public IActionResult DeleteConstant(string CompanyId, string Username, int ID)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@ID", ID), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_DeleteConstant", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "DeleteConstant", Username, CompanyId, "definitions/constants/" + CompanyId + '/' + Username + '/' + ID, result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DeleteConstant", Username, CompanyId, "definitions/constants/" + CompanyId + '/' + Username + '/' + ID, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        #endregion


        #region Definitions


        [EnableCors("CorsPolicy")]
        [HttpGet("{CompanyId}/{Username}/{Type}/{Id}/{Code}")]
        public IActionResult DefinitionGetType(string CompanyId, string Username, string Type, String Id, String Code)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@type", Type),
                    new SqlParameter("@id", Id=="null"?null:Id), new SqlParameter("@TypeCode", Code=="null"?null:Code), outParam };
                OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetType", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "DefinitionGetType", Username, CompanyId, "definitions/" + CompanyId + '/' + Username + '/' + Type + '/' + Id, result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DefinitionGetType", Username, CompanyId, "definitions/" + CompanyId + '/' + Username + '/' + Type + '/' + Id, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpGet("detail/{CompanyId}/{Username}/{type}/{code}")]
        public IActionResult DefinitionGetTypeDetail(string CompanyId, string Username, string type, string code)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@type", type), new SqlParameter("@code", code), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetTypeDetail", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "DefinitionGetTypeDetail", Username, CompanyId, "definitions/detail/" + CompanyId + '/' + Username + '/' + type + '/' + code, result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DefinitionGetTypeDetail", Username, CompanyId, "definitions/detail/" + CompanyId + '/' + Username + '/' + type + '/' + code, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpPost("")]
        public IActionResult DefinitionPostType([FromBody]PostDefinitionRequest model)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                //if (model.type == "personnel")
                //{
                SqlParameter[] param = { new SqlParameter("@CompanyID", model.CompanyId), new SqlParameter("@Username", model.Username), new SqlParameter("@ID", model.id), new SqlParameter("@Type", model.type), new SqlParameter("@Code", model.code), new SqlParameter("@Name", model.name), new SqlParameter("@Subcode", model.subcode), new SqlParameter("@Subname", model.subname), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostType", param, out strOutParam));
                //}
                Util.CreateLog(appSettings, operationTime, "DefinitionPostType", model.Username, model.CompanyId, model, result);

                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DefinitionPostType", model.Username, model.CompanyId, model, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpPost("detail")]
        public IActionResult DefinitionPostTypeDetail([FromBody]PostDefinitionDetailRequest model)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyID", model.CompanyId), new SqlParameter("@Username", model.Username), new SqlParameter("@ID", model.id), new SqlParameter("@Type", model.type), new SqlParameter("@Code", model.code), new SqlParameter("@FirstValue", (model.type == "RoundingDay" ? model.firstDayValue : model.firstHourValue)), new SqlParameter("@finalValue", (model.type == "RoundingDay" ? model.finalDayValue : model.finalHourValue)), new SqlParameter("@PlainValue", (model.type == "RoundingDay" ? model.plainDayValue : model.plainHourValue)), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostTypeDetail", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "DefinitionPostTypeDetail", model.Username, model.CompanyId, model, result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DefinitionPostTypeDetail", model.Username, model.CompanyId, model, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpDelete("{CompanyId}/{Username}/{type}/{code}")]
        public IActionResult DefinitionDeleteType(string CompanyId, string Username, string type, string code)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@Type", type), new SqlParameter("@Code", code == "undefined" ? string.Empty : code), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_DeleteType", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "DefinitionDeleteType", Username, CompanyId, "definitions/" + CompanyId + '/' + Username + '/' + type + '/' + code, result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DefinitionDeleteType", Username, CompanyId, "definitions/" + CompanyId + '/' + Username + '/' + type + '/' + code, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpDelete("detail/{CompanyId}/{Username}/{type}/{id}")]
        public IActionResult DefinitionDeleteTypeDetail(string CompanyId, string Username, string type, int id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyID", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@type", type), new SqlParameter("@ID", id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_DeleteType", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "DefinitionDeleteTypeDetail", Username, CompanyId, "definitions/detail/" + CompanyId + '/' + Username + '/' + id.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DefinitionGetWorkingTypes", Username, CompanyId, "definitions/detail/" + CompanyId + '/' + Username + '/' + id.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

        #endregion


        #region WorkingTypes


        ///filter
        //    , [FromQuery] string Type


        [EnableCors("CorsPolicy")]
        [HttpGet("workingtypes/type/{CompanyId}/{Username}/{type}")]
        public IActionResult DefinitionGetWorkingTypes(string CompanyId, string Username, int? type)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyID", CompanyId), new SqlParameter("@Username", Username),
                    new SqlParameter("@Type", (type==7?99:(type==100? null:type))),   outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetWorkingType", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "DefinitionGetWorkingTypes", Username, CompanyId, "definitions/workingtypes/" + CompanyId + '/' + Username + '/' + type.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DefinitionGetWorkingTypes", Username, CompanyId, "definitions/workingtypes/" + CompanyId + '/' + Username + '/' + type.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }
        [EnableCors("CorsPolicy")]
        [HttpGet("workingtypes/{CompanyId}/{Username}/{id}")]
        public IActionResult DefinitionGetWorkingTypesById(string CompanyId, string Username, int id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyID", CompanyId), new SqlParameter("@Username", Username),
                    new SqlParameter("@ID", id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetWorkingType", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "DefinitionGetWorkingTypesById", Username, CompanyId, "definitions/workingtypes/" + CompanyId + '/' + Username + '/' + id.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DefinitionGetWorkingTypesById", Username, CompanyId, "definitions/workingtypes/" + CompanyId + '/' + Username + '/' + id.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpGet("workingtypes/code/{CompanyId}/{Username}/{Code}")]
        public IActionResult DefinitionGetWorkingTypesByCode(string CompanyId, string Username, string Code)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyID", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@Code", Code), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetWorkingTypeByCode", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "DefinitionGetWorkingTypesByCode", Username, CompanyId, "definitions/workingtypes/code/" + CompanyId + '/' + Username + '/' + Code.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DefinitionGetWorkingTypesByCode", Username, CompanyId, "definitions/workingtypes/code/" + CompanyId + '/' + Username + '/' + Code.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }



        [EnableCors("CorsPolicy")]
        [HttpGet("workingtypes/leave/{CompanyId}/{Username}/{Type}")]
        public IActionResult DefinitionGetWorkingTypesLeave(string CompanyId, string Username, int Type)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@type", Type), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetWorkingType", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "DefinitionGetWorkingTypesLeave", Username, CompanyId, "definitions/workingtypes/" + CompanyId + '/' + Username + '/' + Type.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DefinitionGetWorkingTypesLeave", Username, CompanyId, "definitions/workingtypes/" + CompanyId + '/' + Username + '/' + Type.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpGet("workingtypes/enums/{CompanyId}/{Username}/{type}/{code}")]
        public IActionResult DefinitionGetWorkingTypesEnums(string CompanyId, string Username, string type, string code)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyID", CompanyId), new SqlParameter("@Code", (code == "null" ? null : code)), new SqlParameter("@Type", type), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetEnums", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "BAS_GetEnums", Username, CompanyId, "definitions/workingtypes/enums/" + CompanyId + '/' + Username + '/' + type + '/' + code, result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "BAS_GetEnums", Username, CompanyId, "definitions/workingtypes/enums/" + CompanyId + '/' + Username + '/' + type + '/' + code, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpPost("workingtypes")]
        public IActionResult DefinitionPostWorkingType([FromBody]PostDefinitionWorkingTypesRequest model)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = {
                    new SqlParameter("@CompanyId", model.CompanyId),
                    new SqlParameter("@Username", model.Username),
                    new SqlParameter("@ID", model.ID),
                    new SqlParameter("@Code", model.Code),
                    new SqlParameter("@Name", model.Name),
                    new SqlParameter("@Type", model.Type),
                    new SqlParameter("@RoundingHourID", model.RoundingHourID),
                    new SqlParameter("@RoundingDayID", model.RoundingDayID),
                    new SqlParameter("@LowerLimit", model.LowerLimit),
                    new SqlParameter("@UpperLimit", model.UpperLimit),
                    new SqlParameter("@Multiplier", model.Multiplier),
                    new SqlParameter("@Compulsory", model.Compulsory),
                    new SqlParameter("@Confirmation", model.Confirmation),
                    new SqlParameter("@Saturday", model.Saturday),
                    new SqlParameter("@SaturdayDay", model.SaturdayDay),
                    new SqlParameter("@SaturdayHour", model.SaturdayHour),
                    new SqlParameter("@Weekend", model.Weekend),
                    new SqlParameter("@WeekendDay", model.WeekendDay),
                    new SqlParameter("@WeekendHour", model.WeekendHour),
                    new SqlParameter("@GeneralHoliday", model.GeneralHoliday),
                    new SqlParameter("@GeneralHolidayDay", model.GeneralHolidayDay),
                    new SqlParameter("@GeneralHolidayHour", model.GeneralHolidayHour),
                    new SqlParameter("@WorkCalculator", model.WorkCalculator),
                    new SqlParameter("@LeaveContinued", model.LeaveContinued),
                    new SqlParameter("@ReportCode", model.ReportCode),
                    new SqlParameter("@IntegrationCode", model.IntegrationCode),
                    new SqlParameter("@EqualizationDegrees", model.EqualizationDegrees),outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostWorkingType", param, out strOutParam));
                //}
                Util.CreateLog(appSettings, operationTime, "DefinitionPostWorkingType", model.Username, model.CompanyId, model, result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DefinitionPostWorkingType", model.Username, model.CompanyId, model, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpDelete("workingtypes/{CompanyId}/{Username}/{id}")]
        public IActionResult DefinitionDeleteWorkingType(string CompanyId, string Username, int id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = {   new SqlParameter("@CompanyID", CompanyId),
                    new SqlParameter("@Username", Username),new SqlParameter("@ID", id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_DeleteWorkingType", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "DefinitionDeleteWorkingType", Username, CompanyId, "definitions/workingtypes/" + CompanyId + '/' + Username + '/' + id.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DefinitionDeleteWorkingType", Username, CompanyId, "definitions/workingtypes/" + CompanyId + '/' + Username + '/' + id.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpGet("workingtypes/dist/{CompanyId}/{Username}/{id}")]
        public IActionResult DefinitionGetWorkingTypesDist(string CompanyId, string Username, int id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyID", CompanyId),
                    new SqlParameter("@Username", Username),new SqlParameter("@ID", id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetWorkingTypeDistribution", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "DefinitionGetWorkingTypesDist", Username, CompanyId, "definitions/workingtypes/dist/" + CompanyId + '/' + Username + '/' + id.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DefinitionGetWorkingTypesDist", Username, CompanyId, "definitions/workingtypes/dist/" + CompanyId + '/' + Username + '/' + id.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpPost("workingtypes/dist")]
        public IActionResult DefinitionPostWorkingTypeDist([FromBody]PostDefinitionWorkingTypesDistRequest model)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = {
                    new SqlParameter("@CompanyID", model.CompanyId),
                    new SqlParameter("@Username", model.Username),
                    new SqlParameter("@ID", model.ID),
                    new SqlParameter("@Type", model.Type),
                    new SqlParameter("@WorkingTypeID", model.WorkingTypeID),
                    new SqlParameter("@Code", model.Code),
                    new SqlParameter("@LowerLimit", model.LowerLimit),
                    new SqlParameter("@UpperLimit", model.UpperLimit),
                    new SqlParameter("@Multiplier", model.Multiplier),outParam
             };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostWorkingTypeDist", param, out strOutParam));
                //}
                Util.CreateLog(appSettings, operationTime, "DefinitionPostTypeDetail", model.Username, model.CompanyId, model, result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DefinitionPostTypeDetail", model.Username, model.CompanyId, model, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpDelete("workingtypes/dist/{CompanyId}/{Username}/{id}")]
        public IActionResult DefinitionDeleteWorkingTypeDist(string CompanyId, string Username, int id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId),
                    new SqlParameter("@Username", Username),new SqlParameter("@ID", id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_DeleteWorkingTypeDistribution", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "DefinitionGetWorkingTypes", Username, CompanyId, "definitions/workingtypes/" + CompanyId + '/' + Username + '/' + id.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DefinitionGetWorkingTypes", Username, CompanyId, "definitions/workingtypes/" + CompanyId + '/' + Username + '/' + id.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        #endregion


        #region FlexGroupPersonnels

        [EnableCors("CorsPolicy")]
        [HttpGet("flex/list/{CompanyId}/{Username}/{Type}")]
        public IActionResult GetFlexGroupPersonnelList(string CompanyId, string Username, string Type)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@type", Type), outParam };
                OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetFlexGroupPersonnelList", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetFlexGroupPersonnelList", Username, CompanyId, "definitions/flex/list/" + CompanyId + '/' + Username + '/' + Type, result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetFlexGroupPersonnelList", Username, CompanyId, "definitions/flex/list/" + CompanyId + '/' + Username + '/' + Type, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpGet("flex/{CompanyId}/{Username}/{ID}")]
        public IActionResult GetFlexGroupPersonnel(string CompanyId, string Username, string ID)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@ID", (ID == "null" ? null : ID)), outParam };
                OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetFlexGroupPersonnel", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetFlexGroupPersonnel", Username, CompanyId, "definitions/flex/" + CompanyId + '/' + Username, result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetFlexGroupPersonnel", Username, CompanyId, "definitions/flex/" + CompanyId + '/' + Username, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpPost("flex")]
        public IActionResult PostFlexGroupPersonnels([FromBody]PostFlexGroupRequest model)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", model.CompanyId), new SqlParameter("@Username", model.Username), new SqlParameter("@ID", model.ID), new SqlParameter("@Code", model.Code), new SqlParameter("@Name", model.Name), new SqlParameter("@IsAndOr", model.IsAndOr),  outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostFlexGroupPersonnels", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "PostFlexGroupPersonnels", model.Username, model.CompanyId, model, result);

                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PostFlexGroupPersonnels", model.Username, model.CompanyId, model, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpDelete("flex/{CompanyId}/{Username}/{ID}")]
        public IActionResult DeleteFlexGroupPersonnels(string CompanyId, string Username, int ID)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@ID", ID), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_DeleteFlexGroupPersonnel", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "DeleteFlexGroupPersonnels", Username, CompanyId, "definitions/flex/" + CompanyId + '/' + Username + '/' + ID, result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DeleteFlexGroupPersonnels", Username, CompanyId, "definitions/flex/" + CompanyId + '/' + Username + '/' + ID, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpGet("flex/detail/{CompanyId}/{Username}/{FlexPersonnelGroupID}/{ID}")]
        public IActionResult GetFlexGroupPersonnelDetail(string CompanyId, string Username, string FlexPersonnelGroupID, string ID)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@FlexPersonnelGroupID", (FlexPersonnelGroupID == "null" ? null : FlexPersonnelGroupID)), new SqlParameter("@ID", (ID == "null" ? null : ID)), outParam };
                OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetFlexGroupPersonnelDetail", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetFlexGroupPersonnelDetail", Username, CompanyId, "definitions/flex/detail/" + CompanyId + '/' + Username, result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetFlexGroupPersonnelDetail", Username, CompanyId, "definitions/flex/detail/" + CompanyId + '/' + Username, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpPost("flex/detail")]
        public IActionResult PostFlexGroupPersonnelDetail([FromBody]PostFlexGroupDetailRequest model)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", model.CompanyId), new SqlParameter("@Username", model.Username), new SqlParameter("@ID", model.ID), new SqlParameter("@FlexPersonnelGroupID", model.FlexPersonnelGroupID), new SqlParameter("@Type", model.Type), new SqlParameter("@Value", model.Value), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostFlexGroupPersonnelDetail", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "PostFlexGroupPersonnelDetail", model.Username, model.CompanyId, model, result);

                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PostFlexGroupPersonnelDetail", model.Username, model.CompanyId, model, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpDelete("flex/detail/{CompanyId}/{Username}/{ID}")]
        public IActionResult DeleteFlexGroupPersonnelDetail(string CompanyId, string Username, int ID)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@ID", ID), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_DeleteFlexGroupPersonnelDetail", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "DeleteFlexGroupPersonnelDetail", Username, CompanyId, "definitions/flex/detail/" + CompanyId + '/' + Username + '/' + ID, result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DeleteFlexGroupPersonnelDetail", Username, CompanyId, "definitions/flex/detail/" + CompanyId + '/' + Username + '/' + ID, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }




        #endregion


    }

}