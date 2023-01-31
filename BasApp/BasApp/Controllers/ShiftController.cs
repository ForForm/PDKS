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
    [Route("shift")]
    [ApiController]
    public class PoolShiftController : Controller
    {
        private readonly IOptions<MySettingsModel> appSettings;
        public IConfiguration Configuration { get; }

        public PoolShiftController(IOptions<MySettingsModel> app)
        {
            appSettings = app;
        }

        #region Shift

        [EnableCors("CorsPolicy")]
        [HttpGet("type/{CompanyId}/{Username}/{type}")]
        public IActionResult GetShiftTypes(string CompanyId, string Username, int type)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyID", CompanyId),
                    new SqlParameter("@Username", Username),new SqlParameter("@Type", type), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetShift", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetShift", Username, CompanyId, "shift/type/" + CompanyId + '/' + Username + '/' + type.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetShift", Username, CompanyId, "shift/type/" + CompanyId + '/' + Username + '/' + type.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpGet("{CompanyId}/{Username}/{id}")]
        public IActionResult GetShiftById(string CompanyId, string Username, int id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyID", CompanyId),
                    new SqlParameter("@Username", Username),new SqlParameter("@ID", id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetShift", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetShift", Username, CompanyId, "shift/" + CompanyId + '/' + Username + '/' + id.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetShift", Username, CompanyId, "shift/" + CompanyId + '/' + Username + '/' + id.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpGet("code/{CompanyId}/{Username}/{code}")]
        public IActionResult GetShiftByCode(string CompanyId, string Username, string code)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyID", CompanyId),
                    new SqlParameter("@Username", Username),new SqlParameter("@Code", code), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetShift", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetShiftByCode", Username, CompanyId, "shift/code/" + CompanyId + '/' + Username + '/' + code, result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetShiftByCode", Username, CompanyId, "shift/code/" + CompanyId + '/' + Username + '/' + code, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpPost("")]
        public IActionResult PostShift([FromBody]PostDefinitionShiftRequest model)
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
                    new SqlParameter("@Code", model.Code),
                    new SqlParameter("@Name", model.Name),
                    new SqlParameter("@Type", model.Type),
                    new SqlParameter("@Time", model.Time),
                    new SqlParameter("@StartEarly", model.StartEarly),
                    new SqlParameter("@Start", model.Start),
                    new SqlParameter("@LateStart", model.LateStart),
                    new SqlParameter("@EarlyFinish", model.EarlyFinish),
                    new SqlParameter("@Finish", model.Finish),
                    new SqlParameter("@LateFinish", model.LateFinish),
                    new SqlParameter("@WeekHoliday", model.WeekHoliday),
                    new SqlParameter("@TypeOfWeekHoliday", model.TypeOfWeekHoliday),
                    new SqlParameter("@DayTurning", model.DayTurning),
                    new SqlParameter("@DayTurningTime", model.DayTurningTime),
                    outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostShift", param, out strOutParam));
                //}
                Util.CreateLog(appSettings, operationTime, "PostShift", model.Username, model.CompanyId, model, result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PostShift", model.Username, model.CompanyId, model, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }



        [EnableCors("CorsPolicy")]
        [HttpDelete("{CompanyId}/{Username}/{id}")]
        public IActionResult DeleteShift(string CompanyId, string Username, int id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyID", CompanyId),
                    new SqlParameter("@Username", Username),new SqlParameter("@ID", id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_DeleteShift", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "DeleteShift", Username, CompanyId, "shift/" + CompanyId + '/' + Username + '/' + id.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DeleteShiftDist", Username, CompanyId, "shift/" + CompanyId + '/' + Username + '/' + id.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }




        [EnableCors("CorsPolicy")]
        [HttpGet("dist/{CompanyId}/{Username}/{id}")]
        public IActionResult GetShiftDist(string CompanyId, string Username, int id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyID", CompanyId),
                    new SqlParameter("@Username", Username),new SqlParameter("@ID", id),  outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetShiftDistribution", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetShiftDist", Username, CompanyId, "shift/dist/" + CompanyId + '/' + Username + '/' + id.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetShiftDist", Username, CompanyId, "shift/dist/" + CompanyId + '/' + Username + '/' + id.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpPost("dist")]
        public IActionResult PostShiftDist([FromBody]List<PostDefinitionShiftDistRequest> model)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                if (model.ToArray()[0].ID == 0)
                {
                    var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                    SqlParameter[] param = {
                    new SqlParameter("@CompanyID", model.ToArray()[0].CompanyId),
                    new SqlParameter("@Username", model.ToArray()[0].Username),
                    new SqlParameter("@ID", model.ToArray()[0].ID),
                    new SqlParameter("@ShiftID", model.ToArray()[0].ShiftID),outParam};

                    result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostShiftDistTruncate", param, out strOutParam));
                    Util.CreateLog(appSettings, operationTime, "PostShiftDist", model.ToArray()[0].Username, model.ToArray()[0].CompanyId, model, result);
                }

                foreach (var item in model)
                {
                    var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                    SqlParameter[] param2 = {
                    new SqlParameter("@CompanyID", item.CompanyId),
                    new SqlParameter("@Username", item.Username),
                    new SqlParameter("@ID", item.ID),
                    new SqlParameter("@ShiftID", item.ShiftID),
                    new SqlParameter("@WorkingTypeID", item.WorkingTypeID),
                    new SqlParameter("@WorkingTypeCode", item.WorkingTypeCode),
                    new SqlParameter("@FirstHour", item.FirstHour),
                    new SqlParameter("@LastHour", item.LastHour),
                    new SqlParameter("@Time", item.Time),
                    new SqlParameter("@Status", item.Status),outParam};
                    result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostShiftDist", param2, out strOutParam));
                    //}
                    Util.CreateLog(appSettings, operationTime, "PostShiftDist", item.Username, item.CompanyId, model, result);
                }
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PostShiftDist", model.ToArray()[0].Username, model.ToArray()[0].CompanyId, model, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpDelete("dist/{CompanyId}/{Username}/{id}")]
        public IActionResult DeleteShiftDist(string CompanyId, string Username, int id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyID", CompanyId),
                    new SqlParameter("@Username", Username),new SqlParameter("@ID", id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_DeleteShiftDistribution", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "DeleteShiftDist", Username, CompanyId, "shift/dist/" + CompanyId + '/' + Username + '/' + id.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DeleteShiftDist", Username, CompanyId, "shift/dist/" + CompanyId + '/' + Username + '/' + id.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        #endregion




        #region ShiftTolerance

        [EnableCors("CorsPolicy")]
        [HttpGet("tolerance/{CompanyId}/{Username}/{id}")]
        public IActionResult GetShiftTolerance(string CompanyId, string Username, int id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyID", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@ID", id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetShiftTolerance", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetShiftTolerance", Username, CompanyId, "shift/tolerance/" + CompanyId + '/' + Username + '/' + id.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetShiftTolerance", Username, CompanyId, "shift/tolerance/" + CompanyId + '/' + Username + '/' + id.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpPost("tolerance")]
        public IActionResult PostShiftTolerance([FromBody]PostDefinitionShiftToleranceRequest model)
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
                    new SqlParameter("@ShiftID", model.ShiftID),
                    new SqlParameter("@EarlyStartTime", model.EarlyStartTime),
                    new SqlParameter("@StartTime", model.StartTime),
                    new SqlParameter("@LateStartTime", model.LateStartTime),
                    new SqlParameter("@EarlyFinishTime", model.EarlyFinishTime),
                    new SqlParameter("@FinishTime", model.FinishTime),
                    new SqlParameter("@LateFinishTime", model.LateFinishTime),
                    outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostShiftTolerance", param, out strOutParam));
                //}
                Util.CreateLog(appSettings, operationTime, "PostShiftTolerance", model.Username, model.CompanyId, model, result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PostShiftTolerance", model.Username, model.CompanyId, model, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpDelete("tolerance/{CompanyId}/{Username}/{id}")]
        public IActionResult DeleteShiftTolerance(string CompanyId, string Username, int id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyID", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@ID", id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_DeleteShiftTolerance", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "DeleteShiftTolerance", Username, CompanyId, "shift/tolerance/" + CompanyId + '/' + Username + '/' + id.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DeleteShiftTolerance", Username, CompanyId, "shift/tolerance/" + CompanyId + '/' + Username + '/' + id.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        #endregion



        #region ShiftHoliday


        [EnableCors("CorsPolicy")]
        [HttpGet("holiday/{CompanyId}/{Username}/{id}")]
        public IActionResult GetShiftHoliday(string CompanyId, string Username, int id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyID", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@ShiftID", id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetShiftHoliday", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetShiftHoliday", Username, CompanyId, "shift/holiday/" + CompanyId + '/' + Username + '/' + id.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetShiftHoliday", Username, CompanyId, "shift/holiday/" + CompanyId + '/' + Username + '/' + id.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpPost("holiday")]
        public IActionResult PostShiftHoliday([FromBody]PostDefinitionShiftHolidayRequest model)
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
                    new SqlParameter("@ShiftID", model.ShiftID),
                    new SqlParameter("@StartDate", model.StartDate),
                    new SqlParameter("@HolidayType", model.HolidayType),
                    new SqlParameter("@HolidayShiftID", model.HolidayShiftID),
                    outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostShiftHoliday", param, out strOutParam));
                //}
                Util.CreateLog(appSettings, operationTime, "PostShiftHoliday", model.Username, model.CompanyId, model, result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PostShiftHoliday", model.Username, model.CompanyId, model, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpDelete("holiday/{CompanyId}/{Username}/{id}")]
        public IActionResult DeleteShiftHoliday(string CompanyId, string Username, int id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyID", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@ID", id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_DeleteShiftHoliday", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "DeleteShiftHoliday", Username, CompanyId, "shift/holiday/" + CompanyId + '/' + Username + '/' + id.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DeleteShiftHoliday", Username, CompanyId, "shift/holiday/" + CompanyId + '/' + Username + '/' + id.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }




        #endregion
    }



    [Route("freeshift")]
    [ApiController]
    public class PoolFreeShiftController : Controller
    {
        private readonly IOptions<MySettingsModel> appSettings;
        public IConfiguration Configuration { get; }

        public PoolFreeShiftController(IOptions<MySettingsModel> app)
        {
            appSettings = app;
        }

        #region FreeShiftDists


        [EnableCors("CorsPolicy")]
        [HttpGet("dist/{CompanyId}/{Username}/{id}")]
        public IActionResult GetFreeShiftDist(string CompanyId, string Username, int id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId),
                    new SqlParameter("@Username", Username),new SqlParameter("@ID", id),  outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetFreeShiftDistribution", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetFreeShiftDist", Username, CompanyId, "freeshift/dist/" + CompanyId + '/' + Username + '/' + id.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetFreeShiftDist", Username, CompanyId, "freeshift/dist/" + CompanyId + '/' + Username + '/' + id.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpPost("dist")]
        public IActionResult PostFreeShiftDist([FromBody]PostDefinitionFreeShiftDistRequest item)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {

                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = {
                    new SqlParameter("@CompanyID", item.CompanyId),
                    new SqlParameter("@Username", item.Username),
                    new SqlParameter("@ID", item.ID),
                    new SqlParameter("@ShiftID", item.ShiftID),
                    new SqlParameter("@WorkingTypeID", item.WorkingTypeID),
                    new SqlParameter("@State", item.State),outParam};
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostFreeShiftDist", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "PostFreeShiftDist", item.Username, item.CompanyId, item, result);

                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PostFreeShiftDist", item.Username, item.CompanyId, item, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpGet("meal/{CompanyId}/{Username}/{id}")]
        public IActionResult GetFreeShiftMeal(string CompanyId, string Username, int id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyID", CompanyId),
                    new SqlParameter("@Username", Username),new SqlParameter("@ID", id),  outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetFreeShiftMeal", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetFreeShiftMeal", Username, CompanyId, "freeshift/meal/" + CompanyId + '/' + Username + '/' + id.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetFreeShiftMeal", Username, CompanyId, "freeshift/meal/" + CompanyId + '/' + Username + '/' + id.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpPost("meal")]
        public IActionResult PostFreeShiftMeal([FromBody]PostDefinitionFreeShiftMealRequest item)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                    var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                    SqlParameter[] param = {
                    new SqlParameter("@CompanyID", item.CompanyId),
                    new SqlParameter("@Username", item.Username),
                    new SqlParameter("@ID", item.ID),
                    new SqlParameter("@ShiftID", item.ShiftID),
                    new SqlParameter("@WorkingTypeSrcID", item.WorkingTypeSrcID),
                    new SqlParameter("@TotalTime", item.TotalTime),
                    new SqlParameter("@WorkingTypeDestID", item.WorkingTypeDestID),
                    new SqlParameter("@TransferTime", item.TransferTime),outParam };
                    result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostFreeShiftMeal", param, out strOutParam));
                    Util.CreateLog(appSettings, operationTime, "PostFreeShiftMeal", item.Username, item.CompanyId, item, result);
                
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PostFreeShiftMeal", item.Username, item.CompanyId, item, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpGet("night/{CompanyId}/{Username}/{id}")]
        public IActionResult GetFreeShiftNight(string CompanyId, string Username, int id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyID", CompanyId),
                    new SqlParameter("@Username", Username),new SqlParameter("@ID", id),  outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetFreeShiftNight", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetFreeShiftNight", Username, CompanyId, "freeshift/night/" + CompanyId + '/' + Username + '/' + id.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetFreeShiftNight", Username, CompanyId, "freeshift/night/" + CompanyId + '/' + Username + '/' + id.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpPost("night")]
        public IActionResult PostFreeShiftNight([FromBody]PostDefinitionFreeShiftNightRequest item)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = {
                    new SqlParameter("@CompanyID", item.CompanyId),
                    new SqlParameter("@Username", item.Username),
                    new SqlParameter("@ID", item.ID),
                    new SqlParameter("@ShiftID", item.ShiftID),
                    new SqlParameter("@WorkingTypeID", item.WorkingTypeID),
                    new SqlParameter("@FirstHour", item.FirstHour),
                    new SqlParameter("@LastHour", item.LastHour),outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostFreeShiftNight", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "PostFreeShiftNight", item.Username, item.CompanyId, item, result);

                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PostFreeShiftNight", item.Username, item.CompanyId, item, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpDelete("dist/{CompanyId}/{Username}/{id}")]
        public IActionResult DeleteFreeShiftDist(string CompanyId, string Username, int id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyID", CompanyId),
                    new SqlParameter("@Username", Username),new SqlParameter("@id", id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_DeleteFreeShiftDist", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "DeleteFreeShiftDist", Username, CompanyId, "freeshift/dist/" + CompanyId + '/' + Username + '/' + id.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DeleteFreeShiftDist", Username, CompanyId, "freeshift/dist/" + CompanyId + '/' + Username + '/' + id.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpDelete("meal/{CompanyId}/{Username}/{id}")]
        public IActionResult DeleteFreeShiftMeal(string CompanyId, string Username, int id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyID", CompanyId),
                    new SqlParameter("@Username", Username),new SqlParameter("@id", id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_DeleteFreeShiftMeal", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "DeleteFreeShiftMeal", Username, CompanyId, "freeshift/meal/" + CompanyId + '/' + Username + '/' + id.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DeleteFreeShiftMeal", Username, CompanyId, "freeshift/meal/" + CompanyId + '/' + Username + '/' + id.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpDelete("night/{CompanyId}/{Username}/{id}")]
        public IActionResult DeleteFreeShiftNight(string CompanyId, string Username, int id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyID", CompanyId),
                    new SqlParameter("@Username", Username),new SqlParameter("@id", id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_DeleteFreeShiftNight", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "DeleteFreeShiftNight", Username, CompanyId, "freeshift/night/" + CompanyId + '/' + Username + '/' + id.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DeleteFreeShiftNight", Username, CompanyId, "freeshift/night/" + CompanyId + '/' + Username + '/' + id.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        #endregion



    }

}