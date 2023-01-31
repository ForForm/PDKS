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

    [Route("personnel")]
    [ApiController]
    public class PersonnelController : Controller
    {
        private readonly IOptions<MySettingsModel> appSettings;

        public PersonnelController(IOptions<MySettingsModel> app)
        {
            appSettings = app;
        }

        [EnableCors("CorsPolicy")]
        [HttpGet("chief/{CompanyId}/{Username}/{Id}")]
        public IActionResult PersonnelChief(string CompanyId, string Username, int Id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                OkObjectResult result = null;
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@Id", Id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetEmployeeChief", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "PersonnelAmir", Username, CompanyId, "personnel/" + CompanyId + "/" + Username + "/" + Id, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PersonnelAmir", Username, CompanyId, "personnel/" + CompanyId + "/" + Username + "/" + Id, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }



        [EnableCors("CorsPolicy")]
        [HttpGet("chiefpersonnels/{CompanyId}/{Username}/{ChiefEmployeeID}")]
        public IActionResult ChiefPersonnels(string CompanyId, string Username, int ChiefEmployeeID)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                OkObjectResult result = null;
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@ChiefEmployeeID", ChiefEmployeeID), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetChiefEmployees", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "ChiefPersonnels", Username, CompanyId, "personnel/" + CompanyId + "/" + Username + "/" + ChiefEmployeeID, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "ChiefPersonnels", Username, CompanyId, "personnel/" + CompanyId + "/" + Username + "/" + ChiefEmployeeID, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpGet("archieve/{CompanyId}/{Username}/{EmployeeID}")]
        public IActionResult GetEmployeeArchieve(string CompanyId, string Username, int EmployeeID)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                OkObjectResult result = null;
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@EmployeeID", EmployeeID), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetEmployeeArchieve", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetEmployeeArchieve", Username, CompanyId, "personnel/" + CompanyId + "/" + Username + "/" + EmployeeID, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetEmployeeArchieve", Username, CompanyId, "personnel/" + CompanyId + "/" + Username + "/" + EmployeeID, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpPost("chief")]
        public IActionResult PersonnelChiefPost([FromBody]PersonnelPostChiefRequest model)
        {

            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = {
                    new SqlParameter("@CompanyID", model.CompanyId),
                    new SqlParameter("@Username", model.Username),
                    new SqlParameter("@ID", model.ID),
                    new SqlParameter("@ChiefEmployeeID", model.ChiefEmployeeID),
                    new SqlParameter("@EmployeeID", model.EmployeeID),
                    new SqlParameter("@Degree", model.Degree),
                    outParam };
                OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostChief", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "PersonnelPost", model.Username, model.CompanyId, model, result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PersonnelPost", model.Username, model.CompanyId, model, ex.Message + " - " + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpDelete("chief/{CompanyId}/{Username}/{Id}")]
        public IActionResult PersonnelChiefDelete(string CompanyId, string Username, int Id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@Id", Id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_DeleteEmployeeChief", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "PersonnelChiefDelete", Username, CompanyId, "personnel/chief/" + CompanyId + "/" + Username + "/" + Id, result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PersonnelChiefDelete", Username, CompanyId, "personnel/chief/" + CompanyId + "/" + Username + "/" + Id, ex.Message + " - " + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpPost("query")]
        public IActionResult PersonnelGet([FromBody]GetAttendanceRequest model )
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                OkObjectResult result = null;
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyID", model.CompanyId), new SqlParameter("@Username", model.Username),
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
                    new SqlParameter("@Type", model.Type==string.Empty?null:model.Type),
                    new SqlParameter("@Code", model.Code==string.Empty?null:model.Code),
                    new SqlParameter("@ID", model.ID),
                    new SqlParameter("@Chief", model.Chief),
                    outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetEmployee", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "PersonnelGet", model.Username, model.CompanyId, model, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PersonnelGet", model.Username, model.CompanyId, model, ex.Message + " - " + ex.InnerException);
                throw ex;
            }
        }

        //[EnableCors("CorsPolicy")]
        //[HttpGet("{CompanyId}/{Username}/{Id}/{Code}/{filterText}")]
        //public IActionResult PersonnelGet(string CompanyId, string Username, string Id, string Code, string filterText)
        //{
        //    DateTime operationTime = DateTime.Now;
        //    string strOutParam = string.Empty;
        //    try
        //    {
        //        OkObjectResult result = null;
        //        var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
        //        SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@Id", (Id == "null" ? null : Id)), new SqlParameter("@Code", (Code == "null" ? null : Code)), new SqlParameter("@FilterText", (filterText == "null" ? null : filterText)), outParam };
        //        result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetEmployees", param, out strOutParam));
        //        Util.CreateLog(appSettings, operationTime, "PersonnelGet", Username, CompanyId, "personnel/" + CompanyId + "/" + Username + "/" + Id, result);
        //        return result;
        //    }
        //    catch (Exception ex)
        //    {
        //        Util.CreateLog(appSettings, operationTime, "PersonnelGet", Username, CompanyId, "personnel/" + CompanyId + "/" + Username + "/" + Id, ex.Message + "-" + ex.InnerException);
        //        throw ex;
        //    }
        //}

        [EnableCors("CorsPolicy")]
        [HttpPost("filter")]
        public IActionResult GetPersonnelFilter(GetAttendanceRequest model)
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
                Util.CreateLog(appSettings, operationTime, "PersonnelPostFilterColumns", model.Username, model.CompanyId, model, ex.Message + " - " + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpPost("")]
        public IActionResult PersonnelPost([FromBody]PersonnelPostRequest model)
        {

            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = {
                    new SqlParameter("@CompanyID", model.CompanyId),
                    new SqlParameter("@Username", model.Username),
                    new SqlParameter("@ID", model.ID),
                    new SqlParameter("@Code", model.Code),
                    new SqlParameter("@Name", model.Name),
                    new SqlParameter("@Surname", model.Surname),
                    new SqlParameter("@Chief", model.Chief),
                    new SqlParameter("@PassID", model.PassID),
                    new SqlParameter("@PassDate", model.PassDate),
                    new SqlParameter("@StartingDate", model.StartingDate),
                    new SqlParameter("@SeniorityDate", model.SeniorityDate),
                    new SqlParameter("@LeavingDate", model.LeavingDate),
                    new SqlParameter("@ExitReasonID", model.ExitReasonID),
                    new SqlParameter("@CommunityDate", model.CommunityDate),
                    new SqlParameter("@CollarColor", model.CollarColor),
                    new SqlParameter("@CollarColorDate", model.CollarColorDate),
                    new SqlParameter("@EmployeeTypeID", model.EmployeeTypeID),
                    new SqlParameter("@EmployeeTypeDate", model.EmployeeTypeDate),
                    new SqlParameter("@ShiftGroupID", model.ShiftGroupID),
                    new SqlParameter("@ShiftGroupDate", model.ShiftGroupDate),
                    new SqlParameter("@DepartmentID", model.DepartmentID),
                    new SqlParameter("@DepartmentDate", model.DepartmentDate),
                    new SqlParameter("@CostCenterID", model.CostCenterID),
                    new SqlParameter("@CostCenterDate", model.CostCenterDate),
                    new SqlParameter("@CadreID", model.CadreID),
                    new SqlParameter("@CadreDate", model.CadreDate),
                    new SqlParameter("@ProfessionID", model.ProfessionID),
                    new SqlParameter("@ProfessionDate", model.ProfessionDate),
                    new SqlParameter("@TaskID", model.TaskID),
                    new SqlParameter("@TaskDate", model.TaskDate),
                    new SqlParameter("@GroupID", model.GroupID),
                    new SqlParameter("@GroupDate", model.GroupDate),
                    new SqlParameter("@UnitID", model.UnitID),
                    new SqlParameter("@UnitDate", model.UnitDate),
                    new SqlParameter("@BranchID", model.BranchID),
                    new SqlParameter("@BranchDate", model.BranchDate),
                    new SqlParameter("@ServiceStationID", model.ServiceStationID),
                    new SqlParameter("@ServiceStationDate", model.ServiceStationDate),
                    new SqlParameter("@Photo", ((model.Photo==null || model.Photo=="")?"assets//img//avatars//who.png":model.Photo)),
                    new SqlParameter("@PayrollCalculation", model.PayrollCalculation),
                    new SqlParameter("@Overtime", model.Overtime),
                    new SqlParameter("@OvertimeDate", model.OvertimeDate),
                    new SqlParameter("@FeeType", model.FeeType),
                    new SqlParameter("@FeeTypeDate", model.FeeTypeDate),
                    new SqlParameter("@YearlyLeaveDate", model.YearlyLeaveDate),
                    new SqlParameter("@DomainUsername", model.DomainUsername),
                    new SqlParameter("@ConfirmationPassword", model.ConfirmationPassword),
                    new SqlParameter("@Active", model.Active),
                    new SqlParameter("@UserID", model.UserID),
                    new SqlParameter("@Shift", model.Shift),
                    new SqlParameter("@ShiftDate", model.ShiftDate),
                    outParam };
                OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostEmployee", param, out strOutParam));
                result.StatusCode = 202;
                Util.CreateLog(appSettings, operationTime, "PersonnelPost", model.Username, model.CompanyId, model, result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PersonnelPost", model.Username, model.CompanyId, model, ex.Message + " - " + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpGet("id/{CompanyId}/{Username}/{id}")]
        public IActionResult PersonnelIDGet(string CompanyId, string Username, int id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {

                OkObjectResult result = null;
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@id", id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetID", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "PersonnelIDGet", Username, CompanyId, "personnel/" + CompanyId + "/" + Username + "/" + id.ToString(), result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PersonnelIDGet", Username, CompanyId, "personnel/" + CompanyId + "/" + Username + "/" + id.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }

        }

        [EnableCors("CorsPolicy")]
        [HttpGet("contact/{CompanyId}/{Username}/{id}")]
        public IActionResult PersonnelContactGet(string CompanyId, string Username, int id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                OkObjectResult result = null;
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@Id", id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetContact", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "PersonnelContactGet", Username, CompanyId, "personnel/" + CompanyId + "/" + Username + "/" + id.ToString(), result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PersonnelContactGet", Username, CompanyId, "personnel/" + CompanyId + "/" + Username + "/" + id.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }


        }


        [EnableCors("CorsPolicy")]
        [HttpPost("contact")]
        public IActionResult PersonnelPostContact([FromBody]PersonnelPostContactRequest model)
        {

            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                //return null;
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = {
                    new SqlParameter("@ID", model.ID),
                    new SqlParameter("@CompanyID", model.CompanyId),
                    new SqlParameter("@Username", model.Username),
                    new SqlParameter("@EmployeeID", model.EmployeeID),
                    new SqlParameter("@Address", model.Address),
                    new SqlParameter("@Province", model.Province),
                    new SqlParameter("@Country", model.Country),
                    new SqlParameter("@Phone1", model.Phone1),
                    new SqlParameter("@Phone2", model.Phone2),
                    new SqlParameter("@MobilePhone", model.MobilePhone),
                    new SqlParameter("@Email", model.Email),
                    new SqlParameter("@PostCode", model.PostCode),
                    outParam };
                OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostContact", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "PersonnelPostContact", model.Username, model.CompanyId, model, result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PersonnelPostContact", model.Username, model.CompanyId, model, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpPost("id")]
        public IActionResult PersonnelPostID([FromBody]PersonnelPostIDRequest model)
        {

            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                //return null;
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = {
                    new SqlParameter("@ID", model.ID),
                    new SqlParameter("@CompanyID", model.CompanyId),
                    new SqlParameter("@Username", model.Username),
                    new SqlParameter("@EmployeeID", model.EmployeeID),
                    new SqlParameter("@CitizenshipNo", model.CitizenshipNo),
                    new SqlParameter("@DateOfBirth", model.DateOfBirth),
                    new SqlParameter("@Gender", model.Gender),
                    new SqlParameter("@SerialNumber", model.SerialNumber),
                    new SqlParameter("@Nationality", model.Nationality),
                    new SqlParameter("@ValidUntil", model.ValidUntil),
                    new SqlParameter("@Mother", model.Mother),
                    new SqlParameter("@Father", model.Father),
                    outParam };
                OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostID", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "PersonnelPostID", model.Username, model.CompanyId, model, result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PersonnelPostID", model.Username, model.CompanyId, model, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }



        [EnableCors("CorsPolicy")]
        [HttpGet("filter/{CompanyId}/{Username}")]
        public IActionResult PersonnelGetFilter(string CompanyId, string Username)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), outParam };
                object result = SqlHelper.ExecuteProcedureReturnData<List<PersonnelGetQueryInfo>>(appSettings.Value.BasDB.ConnectionString, "BAS_GetEmployeeFilter", r => r.GetPersonnelGetQueryInfo(), null);
                Util.CreateLog(appSettings, operationTime, "PersonnelGetFilter", Username, CompanyId, "personnel/" + CompanyId + "/" + Username, result);
                return Ok(result);
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PersonnelGetFilter", Username, CompanyId, "personnel/" + CompanyId + "/" + Username, ex.Message + "-" + ex.InnerException);
                throw ex;
            }

        }

        [EnableCors("CorsPolicy")]
        [HttpGet("status/{CompanyId}/{Username}")]
        public IActionResult PersonnelGetStatus(string CompanyId, string Username)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                OkObjectResult result = null;
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetEmployeeStatus", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "BAS_GetEmployeeStatus", Username, CompanyId, "personnel/status/" + CompanyId + "/" + Username , result);
                return result;
 

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PersonnelGetStatus", Username, CompanyId, "personnel/status/" + CompanyId + "/" + Username, ex.Message + "-" + ex.InnerException);
                throw ex;
            }

        }
        //[EnableCors("CorsPolicy")]
        //[HttpGet("filter/{CompanyId}/{Username}/{filterType}/{filter}")]
        //public IActionResult PersonnelGetQuery(string CompanyId, string Username, string filterType, string filter)
        //{
        //    DateTime operationTime = DateTime.Now;
        //    string strOutParam = string.Empty;
        //    try
        //    {
        //        var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
        //        SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@FilterType", filterType), new SqlParameter("@Filter", filter), outParam };
        //        OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PersonnelGetQuery", param, out strOutParam));
        //        Util.CreateLog(appSettings, operationTime, "PersonnelGetQuery", Username, CompanyId, "personnel/filter/" + CompanyId + "/" + Username + "/" + filterType + "/" + filter, result);
        //        return result;
        //    }
        //    catch (Exception ex)
        //    {
        //        Util.CreateLog(appSettings, operationTime, "PersonnelGetQuery", Username, CompanyId, "personnel/filter/" + CompanyId + "/" + Username + "/" + filterType + "/" + filter, ex.Message + "-" + ex.InnerException);
        //        throw ex;
        //    }

        //}

        [EnableCors("CorsPolicy")]
        [HttpGet("filter/columns/{CompanyId}/{Username}/{Table}")]
        public IActionResult PersonnelGetFilterColumns(string CompanyId, string Username, string Table)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyID", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@Table", Table), outParam };
                OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetFilterColumns", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "PersonnelGetFilterColumns", Username, CompanyId, "personnel/filter/" + CompanyId + "/" + Username, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PersonnelGetFilterColumns", Username, CompanyId, "personnel/filter/" + CompanyId + "/" + Username, ex.Message + "-" + ex.InnerException);
                throw ex;
            }

        }

        [EnableCors("CorsPolicy")]
        [HttpPost("filter/columns")]
        public IActionResult PersonnelPostFilterColumns([FromBody]List<PersonnelPostFilterColumnsRequest> model)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {

                foreach (var item in model)
                {
                    var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                    SqlParameter[] param = { new SqlParameter("@CompanyId", model[0].CompanyId), new SqlParameter("@Username", model[0].Username), new SqlParameter("@name", item.ColumnName), new SqlParameter("@label", item.Label), new SqlParameter("@table", model[0].table), new SqlParameter("@active", item.Active), new SqlParameter("@sort", item.Sort), outParam };
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
        [HttpGet("transfer/{CompanyId}/{Username}")]
        public IActionResult GetEmployeeTransferDef(string CompanyId, string Username)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyID", CompanyId), new SqlParameter("@Username", Username), outParam };
                OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetEmployeeTransferDef", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetEmployeeTransferDef", Username, CompanyId, "personnel/transfer/" + CompanyId + "/" + Username, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetEmployeeTransferDef", Username, CompanyId, "personnel/transfer/" + CompanyId + "/" + Username, ex.Message + "-" + ex.InnerException);
                throw ex;
            }

        }

        [EnableCors("CorsPolicy")]
        [HttpPost("transfer")]
        public IActionResult PostEmployeeTransfer([FromBody]List<PersonnelTransferRequest> items)
        {

            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            foreach (var model in items)
            {
                try
                {
                    //return null;
                    var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                    SqlParameter[] param = {
                    new SqlParameter("@RowNum",model.Rownum),
                    new SqlParameter("@CompanyId",items[0].CompanyId),
                    new SqlParameter("@Username",items[0].Username),
                    new SqlParameter("@CompanyCode",model.CompanyCode),
                    new SqlParameter("@Code",model.Code),
                    new SqlParameter("@Name",model.Name ),
                    new SqlParameter("@Surname",model.Surname),
                    new SqlParameter("@Chief",model.Chief ),
                    new SqlParameter("@PassCode",model.PassCode ),
                    new SqlParameter("@PassDate", model.PassDate),
                    new SqlParameter("@StartingDate",model.StartingDate ),
                    new SqlParameter("@SeniorityDate",model.SeniorityDate ),
                    new SqlParameter("@LeavingDate" ,model.LeavingDate ),
                    new SqlParameter("@ExitReasonCode",model.ExitReasonCode ),
                    new SqlParameter("@CommunityDate",model.CommunityDate ),
                    new SqlParameter("@CollarColor",model.CollarColor ),
                    new SqlParameter("@CollarColorDate",model.CollarColorDate ),
                    new SqlParameter("@EmployeeTypeCode",model.EmployeeTypeCode ),
                    new SqlParameter("@EmployeeTypeDate",model.EmployeeTypeDate ),
                    new SqlParameter("@ShiftGroupCode",model.ShiftGroupCode ),
                    new SqlParameter("@ShiftGroupDate",model.ShiftGroupDate ),
                    new SqlParameter("@DepartmentCode",model.DepartmentCode ),
                    new SqlParameter("@DepartmentDate",model.DepartmentDate ),
                    new SqlParameter("@CostCenterCode",model.CostCenterCode ),
                    new SqlParameter("@CostCenterDate",model.CostCenterDate ),
                    new SqlParameter("@CadreCode",model.CadreCode ),
                    new SqlParameter("@CadreDate",model.CadreDate ),
                    new SqlParameter("@ProfessionCode",model.ProfessionCode ),
                    new SqlParameter("@ProfessionDate",model.ProfessionDate ),
                    new SqlParameter("@TaskCode",model.TaskCode),
                    new SqlParameter("@TaskDate" ,model.TaskDate ),
                    new SqlParameter("@GroupCode" ,model.GroupCode ),
                    new SqlParameter("@GroupDate" ,model.GroupDate ),
                    new SqlParameter("@UnitCode",model.UnitCode ),
                    new SqlParameter("@UnitDate" ,model.UnitDate ),
                    new SqlParameter("@BranchCode",model.BranchCode ),
                    new SqlParameter("@BranchDate" ,model.BranchDate ),
                    new SqlParameter("@ServiceStationCode",model.ServiceStationCode),
                    new SqlParameter("@ServiceStationDate",model.ServiceStationDate ),
                    new SqlParameter("@PayrollCalculation",model.PayrollCalculation ),
                    new SqlParameter("@Overtime"  ,model.Overtime ),
                    new SqlParameter("@OvertimeDate",model.OvertimeDate ),
                    new SqlParameter("@FeeType",model.FeeType ),
                    new SqlParameter("@FeeTypeDate" ,model.FeeTypeDate ),
                    new SqlParameter("@LeaveDate",model.LeaveDate ),
                    new SqlParameter("@Shift"     ,model.Shift),
                    new SqlParameter("@ShiftDate",model.ShiftDate),
                   
                    outParam };
                    result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostEmployeeTransfer", param, out strOutParam));
                    Util.CreateLog(appSettings, operationTime, "PostEmployeeTransfer", items[0].Username, items[0].CompanyId, model, result);
                }
                catch (Exception ex)
                {
                    Util.CreateLog(appSettings, operationTime, "PostEmployeeTransfer", items[0].Username, items[0].CompanyId, model, ex.Message + "-" + ex.InnerException);
                    throw ex;
                }
            }

            //foreach (var model in items)
            //{

            //    if (model.Chief1 == null && model.Chief2 == null && model.Chief3 == null && model.Chief4 == null && model.Chief5 == null) continue;

            //    try
            //    {                    
            //        var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
            //        SqlParameter[] param = { 
            //        new SqlParameter("@CompanyId",items[0].CompanyId),
            //        new SqlParameter("@Username",items[0].Username),
            //        new SqlParameter("@CompanyCode",model.CompanyCode),
            //        new SqlParameter("@Code",model.Code),                    
            //        new SqlParameter("@Chief1",model.Chief1),
            //        new SqlParameter("@Chief2",model.Chief2),
            //        new SqlParameter("@Chief3",model.Chief3),
            //        new SqlParameter("@Chief4",model.Chief4),
            //        new SqlParameter("@Chief5",model.Chief5),
            //        outParam };
            //        result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostChiefTransfer", param, out strOutParam));
            //        Util.CreateLog(appSettings, operationTime, "BAS_PostChiefTransfer", items[0].Username, items[0].CompanyId, model, result);
            //    }
            //    catch (Exception ex)
            //    {
            //        Util.CreateLog(appSettings, operationTime, "PostEmployeeTransfer", items[0].Username, items[0].CompanyId, model, ex.Message + "-" + ex.InnerException);
            //        throw ex;
            //    }
            //}

            return result;

        }



        [EnableCors("CorsPolicy")]
        [HttpGet("transfer/template/{CompanyId}/{Username}/{TemplateName}")]
        public IActionResult GetEmployeeTransferTemplate(string CompanyId, string Username, string TemplateName)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyID", CompanyId),
                    new SqlParameter("@Username", Username),
                    new SqlParameter("@TemplateName", TemplateName=="null"?null:TemplateName),
                    outParam };
                OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetExcelTemplate", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetEmployeeTransferTemplate", Username, CompanyId, "personnel/transfer/template/" + CompanyId + "/" + Username + "/" + TemplateName, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetEmployeeTransferTemplate", Username, CompanyId, "personnel/transfer/template/" + CompanyId + "/" + Username + "/" + TemplateName, ex.Message + "-" + ex.InnerException);
                throw ex;
            }

        }


        [EnableCors("CorsPolicy")]
        [HttpPost("transfer/template")]
        public IActionResult PostEmployeeTransferTemplate([FromBody]PersonnelTransferTemplateRequest items)
        {

            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            foreach (var model in items.TransferExcelTemplate)
            {
                try
                {
                    
                    var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                    SqlParameter[] param = {
                    new SqlParameter("@CompanyId",model.CompanyID),
                    new SqlParameter("@TemplateName",items.TemplateName),
                    new SqlParameter("@RowID",model.ID),
                    new SqlParameter("@SourceField",model.SourceField),
                    new SqlParameter("@Type",model.Type),
                    new SqlParameter("@DestinationField",model.DestinationField),
                    new SqlParameter("@DefaultValue",model.DefaultValue),
                    new SqlParameter("@active",model.Active),
                    outParam };
                    result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostExcelTemplate", param, out strOutParam));
                    Util.CreateLog(appSettings, operationTime, "PostEmployeeTransferTemplate", items.Username, items.CompanyId, model, result);
                }
                catch (Exception ex)
                {
                    Util.CreateLog(appSettings, operationTime, "PostEmployeeTransferTemplate", items.Username, items.CompanyId, model, ex.Message + "-" + ex.InnerException);
                    throw ex;
                }
            }



            return result;

        }



        [EnableCors("CorsPolicy")]
        [HttpPost("transfer/chief")]
        public IActionResult PostChiefTransfer([FromBody]PersonnelTransferRequest model)
        {

            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;

            //foreach (var model in items)
            //{

                //if (model.Chief1 == null && model.Chief2 == null && model.Chief3 == null && model.Chief4 == null && model.Chief5 == null) return OK;

                try
                {
                    var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                    SqlParameter[] param = {
                    new SqlParameter("@CompanyId",model.CompanyId),
                    new SqlParameter("@Username",model.Username),
                    new SqlParameter("@CompanyCode",model.CompanyCode),
                    new SqlParameter("@Code",model.Code),
                    new SqlParameter("@Chief1",model.Chief1),
                    new SqlParameter("@Chief2",model.Chief2),
                    new SqlParameter("@Chief3",model.Chief3),
                    new SqlParameter("@Chief4",model.Chief4),
                    new SqlParameter("@Chief5",model.Chief5),
                    outParam };
                    result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostChiefTransfer", param, out strOutParam));
                    Util.CreateLog(appSettings, operationTime, "BAS_PostChiefTransfer", model.Username, model.CompanyId, model, result);
                }
                catch (Exception ex)
                {
                    Util.CreateLog(appSettings, operationTime, "PostEmployeeTransfer", model.Username, model.CompanyId, model, ex.Message + "-" + ex.InnerException);
                    throw ex;
                }
            //}

            return result;

        }


        [EnableCors("CorsPolicy")]
        [HttpDelete("transfer/control/{CompanyId}/{Username}")]
        public IActionResult DeleteEmployeeTransferControl(string CompanyId, string Username)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username),outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_DeleteEmployeeTransfer", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "DeleteEmployeeTransferControl", Username, CompanyId, "personnel/control/" + CompanyId + "/" + Username ,result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DeleteEmployeeTransferControl", Username, CompanyId, "personnel/control/" + CompanyId + "/" + Username , ex.Message + " - " + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpPost("transfer/control")]
        public IActionResult PostEmployeeTransferControl([FromBody]PersonnelTransferControlRequest model)
        {

            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            //foreach (var model in items)
            //{
            try
            {
                //return null;
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = {
                    new SqlParameter("@RowNum",model.Rownum),
                    outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetEmployeeTransfer", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "PostEmployeeTransferControl", model.Username, model.CompanyId, model, result);
                //}
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PostEmployeeTransferControl", model.Username, model.CompanyId, model, ex.Message + "-" + ex.InnerException);
                throw ex;
            }


        }

        [EnableCors("CorsPolicy")]
        [HttpDelete("{CompanyId}/{Username}/{Id}")]
        public IActionResult PersonnelDelete(string CompanyId, string Username, string Id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@EmployeeID", Convert.ToInt32(Id)), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_DeleteEmployee", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "PersonnelDelete", Username, CompanyId, "personnel/" + CompanyId + "/" + Username + "/" + Id, result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PersonnelDelete", Username, CompanyId, "personnel/" + CompanyId + "/" + Username + "/" + Id, ex.Message + " - " + ex.InnerException);
                throw ex;
            }
        }


        byte[] ObjectToByteArray(object obj)
        {
            if (obj == null)
                return null;
            BinaryFormatter bf = new BinaryFormatter();
            using (MemoryStream ms = new MemoryStream())
            {
                bf.Serialize(ms, obj);
                return ms.ToArray();
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpPost("image")]
        public async Task<IActionResult> UploadImage([FromForm] IFormFile image)
        {
            OkObjectResult result = null;
            //var filePath = Path.Combine(@"E:\Projects\Vex\demo\src\assets\img\avatars", image.FileName);
            var config = new ConfigurationBuilder().SetBasePath(Directory.GetCurrentDirectory()).AddJsonFile("appsettings.json").Build();
            string assetsPath = config["AssetsPath"];
            var filePath = Path.Combine(assetsPath, image.FileName);
            using (var fileStream = new FileStream(filePath, FileMode.Create))
            {
                await image.CopyToAsync(fileStream);
            }
            DateTime operationTime = DateTime.Now;
            return Ok(result);


            //OkObjectResult result = null;
            //try
            //{
            //    var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
            //    SqlParameter[] param = { new SqlParameter("@Code", code), outParam };
            //    result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Emp_DeleteEmployee", param, out strOutParam));
            //    //Util.CreateLog(appSettings, operationTime, "GetLogin", model, strOutParam.Split('@')[0], strOutParam.Split('@')[1]);
            //    return result;

            //}
            //catch (Exception ex)
            //{
            //    //Util.CreateLog(appSettings, operationTime, "GetLogin", model, "500", ex.Message + "-" + ex.InnerException);
            //    throw ex;
            //}
        }


    }

}