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
    [Route("shiftgroup")]
    [ApiController]
    public class PoolShiftGroupController : Controller
    {
        private readonly IOptions<MySettingsModel> appSettings;
        public IConfiguration Configuration { get; }

        public PoolShiftGroupController(IOptions<MySettingsModel> app)
        {
            appSettings = app;
        }


        #region ShiftGroup



        [EnableCors("CorsPolicy")]
        [HttpGet("{CompanyId}/{Username}/{id}")]
        public IActionResult GetShiftGroup(string CompanyId, string Username, int id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyID", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@ID", id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetShiftGroup", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetShiftGroup", Username, CompanyId, "shiftgroup/" + CompanyId + '/' + Username + '/' + id.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetShiftGroup", Username, CompanyId, "shiftgroup/" + CompanyId + '/' + Username + '/' + id.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpGet("code/{CompanyId}/{Username}/{code}")]
        public IActionResult GetShiftGroupByCode(string CompanyId, string Username, string code)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyID", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@Code", code), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetShiftGroup", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetShiftGroupByCode", Username, CompanyId, "shiftgroup/code/" + CompanyId + '/' + Username + '/' + code, result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetShiftGroupByCode", Username, CompanyId, "shiftgroup/code/" + CompanyId + '/' + Username + '/' + code, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpPost("")]
        public IActionResult PostShiftGroup([FromBody]PostDefinitionShiftGroupRequest model)
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
                    new SqlParameter("@ShiftCalc", model.ShiftCalc),
                    new SqlParameter("@StartDate", model.StartDate),
                    outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostShiftGroup", param, out strOutParam));
                //}
                Util.CreateLog(appSettings, operationTime, "PostShiftGroup", model.Username, model.CompanyId, model, result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PostShiftGroup", model.Username, model.CompanyId, model, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }



        [EnableCors("CorsPolicy")]
        [HttpDelete("{CompanyId}/{Username}/{id}")]
        public IActionResult DeleteShiftGroup(string CompanyId, string Username, int id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@id", id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_DeleteShiftGroup", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "DeleteShiftGroup", Username, CompanyId, "shiftgroup/" + CompanyId + '/' + Username + '/' + id.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DeleteShiftGroup", Username, CompanyId, "shiftgroup/" + CompanyId + '/' + Username + '/' + id.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }
        #endregion


        #region ShiftGroupDist

        [EnableCors("CorsPolicy")]
        [HttpGet("dist/{CompanyId}/{Username}/{id}")]
        public IActionResult GetShiftGroupDist(string CompanyId, string Username, int id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyID", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@ID", id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetShiftGroupDistribution", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetShiftGroupDist", Username, CompanyId, "shiftgroup/dist/" + CompanyId + '/' + Username + '/' + id.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetShiftGroupDist", Username, CompanyId, "shiftgroup/tolerance/" + CompanyId + '/' + Username + '/' + id.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpPost("dist")]
        public IActionResult PostShiftGroupDist([FromBody]PostDefinitionShiftGroupDistRequest model)
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
                    new SqlParameter("@ShiftGroupID", model.ShiftGroupID),
                    new SqlParameter("@ShiftID", model.ShiftID),
                    new SqlParameter("@NumberOfDays", model.NumberOfDays),outParam};
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostShiftGroupDist", param, out strOutParam));
                //}
                Util.CreateLog(appSettings, operationTime, "PostShiftGroupDist", model.Username, model.CompanyId, model, result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PostShiftGroupDist", model.Username, model.CompanyId, model, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpDelete("dist/{CompanyId}/{Username}/{id}")]
        public IActionResult DeleteShiftGroupDist(string CompanyId, string Username, int id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@id", id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_DeleteShiftGroupDistribution", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "DeleteShiftGroupDist", Username, CompanyId, "shiftgroup/dist/" + CompanyId + '/' + Username + '/' + id.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DeleteShiftGroupDist", Username, CompanyId, "shiftgroup/dist/" + CompanyId + '/' + Username + '/' + id.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

        #endregion


        //#region ShiftGroupTolerance

        //[EnableCors("CorsPolicy")]
        //[HttpGet("tolerance/{CompanyId}/{Username}/{id}")]
        //public IActionResult GetShiftGroupTolerance(string CompanyId, string Username, int id)
        //{
        //    DateTime operationTime = DateTime.Now;
        //    string strOutParam = string.Empty;
        //    OkObjectResult result = null;
        //    try
        //    {
        //        var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
        //        SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@id", id), outParam };
        //        result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetShiftGroupTolerance", param, out strOutParam));
        //        Util.CreateLog(appSettings, operationTime, "GetShiftGroupTolerance", Username, CompanyId, "shiftgroup/tolerance/" + CompanyId + '/' + Username + '/' + id.ToString(), result);
        //        return result;

        //    }
        //    catch (Exception ex)
        //    {
        //        Util.CreateLog(appSettings, operationTime, "GetShiftGroupTolerance", Username, CompanyId, "shiftgroup/tolerance/" + CompanyId + '/' + Username + '/' + id.ToString(), ex.Message + "-" + ex.InnerException);
        //        throw ex;
        //    }
        //}


        //[EnableCors("CorsPolicy")]
        //[HttpPost("tolerance")]
        //public IActionResult PostShiftGroupTolerance([FromBody]PostDefinitionShiftGroupToleranceRequest model)
        //{
        //    DateTime operationTime = DateTime.Now;
        //    string strOutParam = string.Empty;
        //    OkObjectResult result = null;
        //    try
        //    {
        //        var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
        //        SqlParameter[] param = {
        //            new SqlParameter("@CompanyId", model.CompanyId),
        //            new SqlParameter("@Username", model.Username),
        //            new SqlParameter("@ID", model.ID),
        //            new SqlParameter("@ShiftGroupID", model.ShiftGroupID),
        //            new SqlParameter("@EarlyStartTime", model.EarlyStartTime),
        //            new SqlParameter("@StartTime", model.StartTime),
        //            new SqlParameter("@LateStartTime", model.LateStartTime),
        //            new SqlParameter("@EarlyFinishTime", model.EarlyFinishTime),
        //            new SqlParameter("@FinishTime", model.FinishTime),
        //            new SqlParameter("@LateFinishTime", model.LateFinishTime),
        //            outParam };
        //        result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostShiftGroupTolerance", param, out strOutParam));
        //        //}
        //        Util.CreateLog(appSettings, operationTime, "PostShiftGroupTolerance", model.Username, model.CompanyId, model, result);
        //        return result;

        //    }
        //    catch (Exception ex)
        //    {
        //        Util.CreateLog(appSettings, operationTime, "PostShiftGroupTolerance", model.Username, model.CompanyId, model, ex.Message + "-" + ex.InnerException);
        //        throw ex;
        //    }
        //}


        //[EnableCors("CorsPolicy")]
        //[HttpDelete("tolerance/{CompanyId}/{Username}/{id}")]
        //public IActionResult DeleteShiftGroupTolerance(string CompanyId, string Username, int id)
        //{
        //    DateTime operationTime = DateTime.Now;
        //    string strOutParam = string.Empty;
        //    OkObjectResult result = null;
        //    try
        //    {
        //        var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
        //        SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@id", id), outParam };
        //        result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_DeleteShiftGroupTolerance", param, out strOutParam));
        //        Util.CreateLog(appSettings, operationTime, "DeleteShiftGroupTolerance", Username, CompanyId, "shiftgroup/tolerance/" + CompanyId + '/' + Username + '/' + id.ToString(), result);
        //        return result;

        //    }
        //    catch (Exception ex)
        //    {
        //        Util.CreateLog(appSettings, operationTime, "DeleteShiftGroupTolerance", Username, CompanyId, "shiftgroup/tolerance/" + CompanyId + '/' + Username + '/' + id.ToString(), ex.Message + "-" + ex.InnerException);
        //        throw ex;
        //    }
        //}


        //#endregion


        #region ShiftGroupBackup

        [EnableCors("CorsPolicy")]
        [HttpGet("backup/{CompanyId}/{Username}/{id}")]
        public IActionResult GetShiftGroupBackUp(string CompanyId, string Username, int id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@ID", id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetShiftGroupBackUp", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetShiftGroupBackUp", Username, CompanyId, "shiftgroup/backup/" + CompanyId + '/' + Username + '/' + id.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetShiftGroupBackUp", Username, CompanyId, "definitions/shiftgroup/backup/" + CompanyId + '/' + Username + '/' + id.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpPost("backup")]
        public IActionResult PostShiftGroupBackUp([FromBody]PostDefinitionShiftGroupBackUpRequest model)
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
                    new SqlParameter("@ShiftGroupID", model.ShiftGroupID),
                    new SqlParameter("@ShiftID", model.ShiftID),
                    outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostShiftGroupBackUp", param, out strOutParam));
                //}
                Util.CreateLog(appSettings, operationTime, "PostShiftGroupBackUp", model.Username, model.CompanyId, model, result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PostShiftGroupBackUp", model.Username, model.CompanyId, model, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpDelete("backup/{CompanyId}/{Username}/{id}")]
        public IActionResult DeleteShiftGroupBackUp(string CompanyId, string Username, int id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@id", id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_DeleteShiftGroupBackUp", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "DeleteShiftGroupBackUp", Username, CompanyId, "shiftgroup/backup/" + CompanyId + '/' + Username + '/' + id.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DeleteShiftGroupBackUp", Username, CompanyId, "shiftgroup/backup/" + CompanyId + '/' + Username + '/' + id.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }




        #endregion


        #region ShiftGroupCalendar

        [EnableCors("CorsPolicy")]
        [HttpGet("dist/calendar/{CompanyId}/{Username}")]
        public IActionResult GetShiftGroupCalendar(string CompanyId, string Username)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetShiftGroupCalendar", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetShiftGroupCalendar", Username, CompanyId, "shiftgroup/dist/calendar/" + CompanyId + '/' + Username, result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetShiftGroupCalendar", Username, CompanyId, "shiftgroup/dist/calendar/" + CompanyId + '/' + Username, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpPost("dist/get/calendar")]
        public IActionResult GetShiftGroupDistCalendar([FromBody]List<PostDefinitionShiftGroupDistCalendarRequest> model)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            List<ShiftCalendar> list = new List<ShiftCalendar>();

            string strShiftGroupID = string.Empty;
            foreach (var item in model)
            {
                strShiftGroupID += item.ID + ",";
            }


            try
            {

                //if (item.Property == "Tarih") continue;
                //var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = {
                    new SqlParameter("@CompanyId", "1"),
                    new SqlParameter("@Username", model[0].Username),
                    new SqlParameter("@ID", strShiftGroupID.Substring(0,strShiftGroupID.Length-1)),
                    new SqlParameter("@StartDate", model[0].StartDate),
                    new SqlParameter("@BeginDate", model[0].BeginDate),
                    new SqlParameter("@EndDate", model[0].EndDate)};
                List<ShiftCalendar> response = new List<ShiftCalendar>();
                response = SqlHelper.ExecuteProcedureReturnData<List<ShiftCalendar>>(appSettings.Value.BasDB.ConnectionString, "BAS_GetShiftGroupDistCalendar", r => r.GetShiftCalendar(), param);

                //Util.CreateLog(appSettings, operationTime, "DefinitionGetShiftGroupDist", Username, CompanyId, "definitions/shiftgroup/dist/" + CompanyId + '/' + Username + '/' + id.ToString(), result);
                return Ok(response);

            }
            catch (Exception ex)
            {
                //Util.CreateLog(appSettings, operationTime, "DefinitionGetShiftGroupDist", Username, CompanyId, "definitions/shiftgroup/tolerance/" + CompanyId + '/' + Username + '/' + id.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpPost("dist/create/calendar")]
        public IActionResult CreateShiftGroupDistCalendar([FromBody]List<PostDefinitionShiftGroupDistCalendarRequest> model)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            List<ShiftCalendar> list = new List<ShiftCalendar>();
            try
            {
                DateTime ilkTarih = DateTime.Today;
                if (model.ToArray().Length > 0) ilkTarih = model[0].StartDate;

                foreach (var item in model)
                {
                    if (item.StartDate < ilkTarih)
                        ilkTarih = item.StartDate;
                }


                foreach (var item in model)
                {

                    //item.BeginDate = ilkTarih;
                    if (item.Property == "Tarih") continue;
                    //var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                    SqlParameter[] param = {
                    new SqlParameter("@CompanyId", item.CompanyId),
                    new SqlParameter("@Username", item.Username),
                    new SqlParameter("@ID", item.ID),
                    new SqlParameter("@StartDate", item.StartDate),
                    new SqlParameter("@BeginDate", item.BeginDate),
                    new SqlParameter("@EndDate", item.EndDate)};
                    List<Calendar> response = new List<Calendar>();
                    response = SqlHelper.ExecuteProcedureReturnData<List<Calendar>>(appSettings.Value.BasDB.ConnectionString, "BAS_CreateShiftGroupDistCalendar", r => r.GetCalendar(), param);

                    if (response.Count == 0) continue;

                    int rows = 0;
                    //if (item.BeginDate>item.StartDate)
                    //rows = (item.EndDate - item.StartDate).Days + 1;
                    //else
                    //if (item.BeginDate > item.StartDate) item.StartDate = item.BeginDate;
                    rows = (item.EndDate - ilkTarih).Days + 1;
                    DateTime calcDate = ilkTarih;

                    int say = 0;
                    Dictionary<int, string> values = new Dictionary<int, string>();



                    for (int j = 0; j < rows; j++)
                    {
                        if (calcDate >= item.StartDate)
                        {

                            foreach (var sitem in response)
                            {

                                for (int i = 0; i < sitem.NumberOfDays; i++)
                                {
                                    values.Add(say, sitem.ShiftID.ToString() + '@' + sitem.Color);
                                    say++;
                                }
                            }
                        }
                        else
                        {
                            values.Add(say, string.Empty + '@' + "black");
                            say++;
                        }
                        calcDate = calcDate.AddDays(1);


                    }


                    DateTime dateNew = ilkTarih;
                    for (int i = 0; i < rows; i++)
                    {
                        ShiftCalendar shift;
                        if (list.ElementAtOrDefault(i) == null)
                        {
                            shift = new ShiftCalendar();
                            shift.Tarih = dateNew;
                        }
                        else
                        {
                            shift = list.ToArray()[i];
                        }

                        dateNew = dateNew.AddDays(1);
                        if (dateNew >= item.StartDate)
                        {



                            shift.Group0 = item.Property == "Code0" ? item.ID.ToString() : shift.Group0;
                            shift.Group1 = item.Property == "Code1" ? item.ID.ToString() : shift.Group1;
                            shift.Group2 = item.Property == "Code2" ? item.ID.ToString() : shift.Group2;
                            shift.Group3 = item.Property == "Code3" ? item.ID.ToString() : shift.Group3;
                            shift.Group4 = item.Property == "Code4" ? item.ID.ToString() : shift.Group4;
                            shift.Group5 = item.Property == "Code5" ? item.ID.ToString() : shift.Group5;
                            shift.Group6 = item.Property == "Code6" ? item.ID.ToString() : shift.Group6;
                            shift.Group7 = item.Property == "Code7" ? item.ID.ToString() : shift.Group7;
                            shift.Group8 = item.Property == "Code8" ? item.ID.ToString() : shift.Group8;
                            shift.Group9 = item.Property == "Code9" ? item.ID.ToString() : shift.Group9;
                            shift.Group10 = item.Property == "Code10" ? item.ID.ToString() : shift.Group10;

                            shift.Group11 = item.Property == "Code11" ? item.ID.ToString() : shift.Group11;
                            shift.Group12 = item.Property == "Code12" ? item.ID.ToString() : shift.Group12;
                            shift.Group13 = item.Property == "Code13" ? item.ID.ToString() : shift.Group13;
                            shift.Group14 = item.Property == "Code14" ? item.ID.ToString() : shift.Group14;
                            shift.Group15 = item.Property == "Code15" ? item.ID.ToString() : shift.Group15;
                            shift.Group16 = item.Property == "Code16" ? item.ID.ToString() : shift.Group16;
                            shift.Group17 = item.Property == "Code17" ? item.ID.ToString() : shift.Group17;
                            shift.Group18 = item.Property == "Code18" ? item.ID.ToString() : shift.Group18;
                            shift.Group19 = item.Property == "Code19" ? item.ID.ToString() : shift.Group19;
                            shift.Group20 = item.Property == "Code20" ? item.ID.ToString() : shift.Group20;

                            shift.Group21 = item.Property == "Code21" ? item.ID.ToString() : shift.Group21;
                            shift.Group22 = item.Property == "Code22" ? item.ID.ToString() : shift.Group22;
                            shift.Group23 = item.Property == "Code23" ? item.ID.ToString() : shift.Group23;
                            shift.Group24 = item.Property == "Code24" ? item.ID.ToString() : shift.Group24;
                            shift.Group25 = item.Property == "Code25" ? item.ID.ToString() : shift.Group25;
                            shift.Group26 = item.Property == "Code26" ? item.ID.ToString() : shift.Group26;
                            shift.Group27 = item.Property == "Code27" ? item.ID.ToString() : shift.Group27;
                            shift.Group28 = item.Property == "Code28" ? item.ID.ToString() : shift.Group28;
                            shift.Group29 = item.Property == "Code29" ? item.ID.ToString() : shift.Group29;
                            shift.Group30 = item.Property == "Code30" ? item.ID.ToString() : shift.Group30;

                            shift.Code0 = item.Property == "Code0" ? values[i].Split('@')[0] : shift.Code0;
                            shift.Code1 = item.Property == "Code1" ? values[i].Split('@')[0] : shift.Code1;
                            shift.Code2 = item.Property == "Code2" ? values[i].Split('@')[0] : shift.Code2;
                            shift.Code3 = item.Property == "Code3" ? values[i].Split('@')[0] : shift.Code3;
                            shift.Code4 = item.Property == "Code4" ? values[i].Split('@')[0] : shift.Code4;
                            shift.Code5 = item.Property == "Code5" ? values[i].Split('@')[0] : shift.Code5;
                            shift.Code6 = item.Property == "Code6" ? values[i].Split('@')[0] : shift.Code6;
                            shift.Code7 = item.Property == "Code7" ? values[i].Split('@')[0] : shift.Code7;
                            shift.Code8 = item.Property == "Code8" ? values[i].Split('@')[0] : shift.Code8;
                            shift.Code9 = item.Property == "Code9" ? values[i].Split('@')[0] : shift.Code9;
                            shift.Code10 = item.Property == "Code10" ? values[i].Split('@')[0] : shift.Code10;

                            shift.Code11 = item.Property == "Code11" ? values[i].Split('@')[0] : shift.Code11;
                            shift.Code12 = item.Property == "Code12" ? values[i].Split('@')[0] : shift.Code12;
                            shift.Code13 = item.Property == "Code13" ? values[i].Split('@')[0] : shift.Code13;
                            shift.Code14 = item.Property == "Code14" ? values[i].Split('@')[0] : shift.Code14;
                            shift.Code15 = item.Property == "Code15" ? values[i].Split('@')[0] : shift.Code15;
                            shift.Code16 = item.Property == "Code16" ? values[i].Split('@')[0] : shift.Code16;
                            shift.Code17 = item.Property == "Code17" ? values[i].Split('@')[0] : shift.Code17;
                            shift.Code18 = item.Property == "Code18" ? values[i].Split('@')[0] : shift.Code18;
                            shift.Code19 = item.Property == "Code19" ? values[i].Split('@')[0] : shift.Code19;
                            shift.Code20 = item.Property == "Code20" ? values[i].Split('@')[0] : shift.Code20;

                            shift.Code21 = item.Property == "Code21" ? values[i].Split('@')[0] : shift.Code21;
                            shift.Code22 = item.Property == "Code22" ? values[i].Split('@')[0] : shift.Code22;
                            shift.Code23 = item.Property == "Code23" ? values[i].Split('@')[0] : shift.Code23;
                            shift.Code24 = item.Property == "Code24" ? values[i].Split('@')[0] : shift.Code24;
                            shift.Code25 = item.Property == "Code25" ? values[i].Split('@')[0] : shift.Code25;
                            shift.Code26 = item.Property == "Code26" ? values[i].Split('@')[0] : shift.Code26;
                            shift.Code27 = item.Property == "Code27" ? values[i].Split('@')[0] : shift.Code27;
                            shift.Code28 = item.Property == "Code28" ? values[i].Split('@')[0] : shift.Code28;
                            shift.Code29 = item.Property == "Code29" ? values[i].Split('@')[0] : shift.Code29;
                            shift.Code30 = item.Property == "Code30" ? values[i].Split('@')[0] : shift.Code30;


                            shift.Color0 = item.Property == "Code0" ? values[i].Split('@')[1] : shift.Color0;
                            shift.Color1 = item.Property == "Code1" ? values[i].Split('@')[1] : shift.Color1;
                            shift.Color2 = item.Property == "Code2" ? values[i].Split('@')[1] : shift.Color2;
                            shift.Color3 = item.Property == "Code3" ? values[i].Split('@')[1] : shift.Color3;
                            shift.Color4 = item.Property == "Code4" ? values[i].Split('@')[1] : shift.Color4;
                            shift.Color5 = item.Property == "Code5" ? values[i].Split('@')[1] : shift.Color5;
                            shift.Color6 = item.Property == "Code6" ? values[i].Split('@')[1] : shift.Color6;
                            shift.Color7 = item.Property == "Code7" ? values[i].Split('@')[1] : shift.Color7;
                            shift.Color8 = item.Property == "Code8" ? values[i].Split('@')[1] : shift.Color8;
                            shift.Color9 = item.Property == "Code9" ? values[i].Split('@')[1] : shift.Color9;
                            shift.Color10 = item.Property == "Code10" ? values[i].Split('@')[1] : shift.Color10;

                            shift.Color11 = item.Property == "Code11" ? values[i].Split('@')[1] : shift.Color11;
                            shift.Color12 = item.Property == "Code12" ? values[i].Split('@')[1] : shift.Color12;
                            shift.Color13 = item.Property == "Code13" ? values[i].Split('@')[1] : shift.Color13;
                            shift.Color14 = item.Property == "Code14" ? values[i].Split('@')[1] : shift.Color14;
                            shift.Color15 = item.Property == "Code15" ? values[i].Split('@')[1] : shift.Color15;
                            shift.Color16 = item.Property == "Code16" ? values[i].Split('@')[1] : shift.Color16;
                            shift.Color17 = item.Property == "Code17" ? values[i].Split('@')[1] : shift.Color17;
                            shift.Color18 = item.Property == "Code18" ? values[i].Split('@')[1] : shift.Color18;
                            shift.Color19 = item.Property == "Code19" ? values[i].Split('@')[1] : shift.Color19;
                            shift.Color20 = item.Property == "Code20" ? values[i].Split('@')[1] : shift.Color20;

                            shift.Color21 = item.Property == "Code21" ? values[i].Split('@')[1] : shift.Color21;
                            shift.Color22 = item.Property == "Code22" ? values[i].Split('@')[1] : shift.Color22;
                            shift.Color23 = item.Property == "Code23" ? values[i].Split('@')[1] : shift.Color23;
                            shift.Color24 = item.Property == "Code24" ? values[i].Split('@')[1] : shift.Color24;
                            shift.Color25 = item.Property == "Code25" ? values[i].Split('@')[1] : shift.Color25;
                            shift.Color26 = item.Property == "Code26" ? values[i].Split('@')[1] : shift.Color26;
                            shift.Color27 = item.Property == "Code27" ? values[i].Split('@')[1] : shift.Color27;
                            shift.Color28 = item.Property == "Code28" ? values[i].Split('@')[1] : shift.Color28;
                            shift.Color29 = item.Property == "Code29" ? values[i].Split('@')[1] : shift.Color29;
                            shift.Color30 = item.Property == "Code30" ? values[i].Split('@')[1] : shift.Color30;

                        }
                        else
                        {

                            shift.Code0 = item.Property == "Code0" ? string.Empty : shift.Code0;
                            shift.Code1 = item.Property == "Code1" ? string.Empty : shift.Code1;
                            shift.Code2 = item.Property == "Code2" ? string.Empty : shift.Code2;
                            shift.Code3 = item.Property == "Code3" ? string.Empty : shift.Code3;
                            shift.Code4 = item.Property == "Code4" ? string.Empty : shift.Code4;
                            shift.Code5 = item.Property == "Code5" ? string.Empty : shift.Code5;
                            shift.Code6 = item.Property == "Code6" ? string.Empty : shift.Code6;
                            shift.Code7 = item.Property == "Code7" ? string.Empty : shift.Code7;
                            shift.Code8 = item.Property == "Code8" ? string.Empty : shift.Code8;
                            shift.Code9 = item.Property == "Code9" ? string.Empty : shift.Code9;
                            shift.Code10 = item.Property == "Code10" ? string.Empty : shift.Code10;

                            shift.Code11 = item.Property == "Code11" ? string.Empty : shift.Code11;
                            shift.Code12 = item.Property == "Code12" ? string.Empty : shift.Code12;
                            shift.Code13 = item.Property == "Code13" ? string.Empty : shift.Code13;
                            shift.Code14 = item.Property == "Code14" ? string.Empty : shift.Code14;
                            shift.Code15 = item.Property == "Code15" ? string.Empty : shift.Code15;
                            shift.Code16 = item.Property == "Code16" ? string.Empty : shift.Code16;
                            shift.Code17 = item.Property == "Code17" ? string.Empty : shift.Code17;
                            shift.Code18 = item.Property == "Code18" ? string.Empty : shift.Code18;
                            shift.Code19 = item.Property == "Code19" ? string.Empty : shift.Code19;
                            shift.Code20 = item.Property == "Code20" ? string.Empty : shift.Code20;

                            shift.Code21 = item.Property == "Code21" ? string.Empty : shift.Code21;
                            shift.Code22 = item.Property == "Code22" ? string.Empty : shift.Code22;
                            shift.Code23 = item.Property == "Code23" ? string.Empty : shift.Code23;
                            shift.Code24 = item.Property == "Code24" ? string.Empty : shift.Code24;
                            shift.Code25 = item.Property == "Code25" ? string.Empty : shift.Code25;
                            shift.Code26 = item.Property == "Code26" ? string.Empty : shift.Code26;
                            shift.Code27 = item.Property == "Code27" ? string.Empty : shift.Code27;
                            shift.Code28 = item.Property == "Code28" ? string.Empty : shift.Code28;
                            shift.Code29 = item.Property == "Code29" ? string.Empty : shift.Code29;
                            shift.Code30 = item.Property == "Code30" ? string.Empty : shift.Code30;


                            shift.Color0 = item.Property == "Code0" ? string.Empty : shift.Color0;
                            shift.Color1 = item.Property == "Code1" ? string.Empty : shift.Color1;
                            shift.Color2 = item.Property == "Code2" ? string.Empty : shift.Color2;
                            shift.Color3 = item.Property == "Code3" ? string.Empty : shift.Color3;
                            shift.Color4 = item.Property == "Code4" ? string.Empty : shift.Color4;
                            shift.Color5 = item.Property == "Code5" ? string.Empty : shift.Color5;
                            shift.Color6 = item.Property == "Code6" ? string.Empty : shift.Color6;
                            shift.Color7 = item.Property == "Code7" ? string.Empty : shift.Color7;
                            shift.Color8 = item.Property == "Code8" ? string.Empty : shift.Color8;
                            shift.Color9 = item.Property == "Code9" ? string.Empty : shift.Color9;
                            shift.Color10 = item.Property == "Code10" ? string.Empty : shift.Color10;

                            shift.Color11 = item.Property == "Code11" ? string.Empty : shift.Color11;
                            shift.Color12 = item.Property == "Code12" ? string.Empty : shift.Color12;
                            shift.Color13 = item.Property == "Code13" ? string.Empty : shift.Color13;
                            shift.Color14 = item.Property == "Code14" ? string.Empty : shift.Color14;
                            shift.Color15 = item.Property == "Code15" ? string.Empty : shift.Color15;
                            shift.Color16 = item.Property == "Code16" ? string.Empty : shift.Color16;
                            shift.Color17 = item.Property == "Code17" ? string.Empty : shift.Color17;
                            shift.Color18 = item.Property == "Code18" ? string.Empty : shift.Color18;
                            shift.Color19 = item.Property == "Code19" ? string.Empty : shift.Color19;
                            shift.Color20 = item.Property == "Code20" ? string.Empty : shift.Color20;

                            shift.Color21 = item.Property == "Code21" ? string.Empty : shift.Color21;
                            shift.Color22 = item.Property == "Code22" ? string.Empty : shift.Color22;
                            shift.Color23 = item.Property == "Code23" ? string.Empty : shift.Color23;
                            shift.Color24 = item.Property == "Code24" ? string.Empty : shift.Color24;
                            shift.Color25 = item.Property == "Code25" ? string.Empty : shift.Color25;
                            shift.Color26 = item.Property == "Code26" ? string.Empty : shift.Color26;
                            shift.Color27 = item.Property == "Code27" ? string.Empty : shift.Color27;
                            shift.Color28 = item.Property == "Code28" ? string.Empty : shift.Color28;
                            shift.Color29 = item.Property == "Code29" ? string.Empty : shift.Color29;
                            shift.Color30 = item.Property == "Code30" ? string.Empty : shift.Color30;
                        }


                        if (list.ElementAtOrDefault(i) == null)
                        {
                            list.Add(shift);
                        }
                        else
                        {
                            list.ToArray()[i] = shift;
                        }




                    }

                }

                //Util.CreateLog(appSettings, operationTime, "DefinitionGetShiftGroupDist", Username, CompanyId, "definitions/shiftgroup/dist/" + CompanyId + '/' + Username + '/' + id.ToString(), result);

                if (model.ToArray().Length>0)
                list = list.Where(p => p.Tarih>=model[0].BeginDate ).ToList();
                return Ok(list);

            }
            catch (Exception ex)
            {
                //Util.CreateLog(appSettings, operationTime, "DefinitionGetShiftGroupDist", Username, CompanyId, "definitions/shiftgroup/tolerance/" + CompanyId + '/' + Username + '/' + id.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpPost("dist/calendar/save")]
        public IActionResult SaveShiftGroupDistCalendar([FromBody]List<ShiftCalendar> model)
        {

            //return Ok(list);
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            string companyId = model.ToArray()[0].CompanyId;
            string username = model.ToArray()[0].Username;

            int shiftGroupID = 0;
            DateTime? calendarDate;
            string shiftID = "";
            int say = 0;



            var outParam1 = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
            SqlParameter[] param1 = {
                        new SqlParameter("@CompanyId", companyId),
                        new SqlParameter("@Username",username)
                        ,outParam1};
            OkObjectResult result1 = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_DeleteShiftGroupCalendar", param1, out strOutParam));



            List<ShiftCalendar> list = new List<ShiftCalendar>();
            try
            {
                foreach (var item in model)
                {
                    calendarDate = item.Tarih;
                    for (int i = 0; i < 31; i++)
                    {
                        if (i == 0 && (item.Code0 == null || item.Code0 == "")) continue; else if (i == 0) { shiftID = item.Code0; shiftGroupID = Convert.ToInt32(item.Group0); };
                        if (i == 1 && (item.Code1 == null || item.Code1 == "")) continue; else if (i == 1) { shiftID = item.Code1; shiftGroupID = Convert.ToInt32(item.Group1); };
                        if (i == 2 && (item.Code2 == null || item.Code2 == "")) continue; else if (i == 2) { shiftID = item.Code2; shiftGroupID = Convert.ToInt32(item.Group2); };
                        if (i == 3 && (item.Code3 == null || item.Code3 == "")) continue; else if (i == 3) { shiftID = item.Code3; shiftGroupID = Convert.ToInt32(item.Group3); };
                        if (i == 4 && (item.Code4 == null || item.Code4 == "")) continue; else if (i == 4) { shiftID = item.Code4; shiftGroupID = Convert.ToInt32(item.Group4); };
                        if (i == 5 && (item.Code5 == null || item.Code5 == "")) continue; else if (i == 5) { shiftID = item.Code5; shiftGroupID = Convert.ToInt32(item.Group5); };
                        if (i == 6 && (item.Code6 == null || item.Code6 == "")) continue; else if (i == 6) { shiftID = item.Code6; shiftGroupID = Convert.ToInt32(item.Group6); };
                        if (i == 7 && (item.Code7 == null || item.Code7 == "")) continue; else if (i == 7) { shiftID = item.Code7; shiftGroupID = Convert.ToInt32(item.Group7); };
                        if (i == 8 && (item.Code8 == null || item.Code8 == "")) continue; else if (i == 8) { shiftID = item.Code8; shiftGroupID = Convert.ToInt32(item.Group8); };
                        if (i == 9 && (item.Code9 == null || item.Code9 == "")) continue; else if (i == 9) { shiftID = item.Code9; shiftGroupID = Convert.ToInt32(item.Group9); };
                        if (i == 10 && (item.Code10 == null || item.Code10 == "")) continue; else if (i == 10) { shiftID = item.Code10; shiftGroupID = Convert.ToInt32(item.Group10); };

                        if (i == 11 && (item.Code11 == null || item.Code11 == "")) continue; else if (i == 11) { shiftID = item.Code11; shiftGroupID = Convert.ToInt32(item.Group11); };
                        if (i == 12 && (item.Code12 == null || item.Code12 == "")) continue; else if (i == 12) { shiftID = item.Code12; shiftGroupID = Convert.ToInt32(item.Group12); };
                        if (i == 13 && (item.Code13 == null || item.Code13 == "")) continue; else if (i == 13) { shiftID = item.Code13; shiftGroupID = Convert.ToInt32(item.Group13); };
                        if (i == 14 && (item.Code14 == null || item.Code14 == "")) continue; else if (i == 14) { shiftID = item.Code14; shiftGroupID = Convert.ToInt32(item.Group14); };
                        if (i == 15 && (item.Code15 == null || item.Code15 == "")) continue; else if (i == 15) { shiftID = item.Code15; shiftGroupID = Convert.ToInt32(item.Group15); };
                        if (i == 16 && (item.Code16 == null || item.Code16 == "")) continue; else if (i == 16) { shiftID = item.Code16; shiftGroupID = Convert.ToInt32(item.Group16); };
                        if (i == 17 && (item.Code17 == null || item.Code17 == "")) continue; else if (i == 17) { shiftID = item.Code17; shiftGroupID = Convert.ToInt32(item.Group17); };
                        if (i == 18 && (item.Code18 == null || item.Code18 == "")) continue; else if (i == 18) { shiftID = item.Code18; shiftGroupID = Convert.ToInt32(item.Group18); };
                        if (i == 19 && (item.Code19 == null || item.Code19 == "")) continue; else if (i == 19) { shiftID = item.Code19; shiftGroupID = Convert.ToInt32(item.Group19); };
                        if (i == 20 && (item.Code20 == null || item.Code20 == "")) continue; else if (i == 20) { shiftID = item.Code20; shiftGroupID = Convert.ToInt32(item.Group20); };

                        if (i == 21 && (item.Code21 == null || item.Code21 == "")) continue; else if (i == 21) { shiftID = item.Code21; shiftGroupID = Convert.ToInt32(item.Group21); };
                        if (i == 22 && (item.Code22 == null || item.Code22 == "")) continue; else if (i == 22) { shiftID = item.Code22; shiftGroupID = Convert.ToInt32(item.Group22); };
                        if (i == 23 && (item.Code23 == null || item.Code23 == "")) continue; else if (i == 23) { shiftID = item.Code23; shiftGroupID = Convert.ToInt32(item.Group23); };
                        if (i == 24 && (item.Code24 == null || item.Code24 == "")) continue; else if (i == 24) { shiftID = item.Code24; shiftGroupID = Convert.ToInt32(item.Group24); };
                        if (i == 25 && (item.Code25 == null || item.Code25 == "")) continue; else if (i == 25) { shiftID = item.Code25; shiftGroupID = Convert.ToInt32(item.Group25); };
                        if (i == 26 && (item.Code26 == null || item.Code26 == "")) continue; else if (i == 26) { shiftID = item.Code26; shiftGroupID = Convert.ToInt32(item.Group26); };
                        if (i == 27 && (item.Code27 == null || item.Code27 == "")) continue; else if (i == 27) { shiftID = item.Code27; shiftGroupID = Convert.ToInt32(item.Group27); };
                        if (i == 28 && (item.Code28 == null || item.Code28 == "")) continue; else if (i == 28) { shiftID = item.Code28; shiftGroupID = Convert.ToInt32(item.Group28); };
                        if (i == 29 && (item.Code29 == null || item.Code29 == "")) continue; else if (i == 29) { shiftID = item.Code29; shiftGroupID = Convert.ToInt32(item.Group29); };
                        if (i == 30 && (item.Code30 == null || item.Code30 == "")) continue; else if (i == 30) { shiftID = item.Code30; shiftGroupID = Convert.ToInt32(item.Group30); };


                        var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                        SqlParameter[] param = {
                        new SqlParameter("@CompanyId", companyId),
                        new SqlParameter("@Username",username),
                        new SqlParameter("@ShiftGroupID",shiftGroupID),
                        new SqlParameter("@CalendarDate",calendarDate),
                        new SqlParameter("@ShiftID",shiftID)
                        ,outParam};
                        result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostShiftGroupDistCalendar", param, out strOutParam));



                    }


                }

                return Ok(result);

            }
            catch (Exception ex)
            {
                //Util.CreateLog(appSettings, operationTime, "DefinitionPostShiftGroupDist", model.Username, model.CompanyId, model, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }



        [EnableCors("CorsPolicy")]
        [HttpPost("calendar")]
        public IActionResult GetCalendar([FromBody]List<PostDefinitionShiftGroupDistCalendarRequest> model)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            List<ShiftCalendar> list = new List<ShiftCalendar>();
            try
            {
                foreach (var item in model)
                {

                    if (item.Property == "tarih") continue;

                    SqlParameter[] param = {
                    new SqlParameter("@CompanyId", item.CompanyId),
                    new SqlParameter("@Username", item.Username),
                    new SqlParameter("@ID", item.ID),
                    new SqlParameter("@StartDate", item.StartDate),
                    new SqlParameter("@BeginDate", item.BeginDate),
                    new SqlParameter("@EndDate", item.EndDate)};
                    List<Calendar> response = new List<Calendar>();
                    response = SqlHelper.ExecuteProcedureReturnData<List<Calendar>>(appSettings.Value.BasDB.ConnectionString, "BAS_GetCalendar", r => r.GetCalendar(), param);


                }

                return Ok(list);
            }
            catch (Exception ex)
            {
                //Util.CreateLog(appSettings, operationTime, "DefinitionGetShiftGroupDist", Username, CompanyId, "definitions/shiftgroup/tolerance/" + CompanyId + '/' + Username + '/' + id.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }




        #endregion




    }

}