using System;
using System.IO;
using System.Data.SqlClient;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using BasApp.Models;
using System.Data;
using Newtonsoft.Json;
using BasApp.Utility;
using BasApp.Repository;
using BasApp.Translator;

using System.Collections.Generic;
using Microsoft.Extensions.Caching.Memory;
using System.Runtime.Serialization.Formatters.Binary;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;
using System.Security;
using BASApp.Controllers;

namespace BasApp.Controllers
{
    //public static class Util
    //{
    //    public static void CreateLog(IOptions<MySettingsModel> appSettings, DateTime operationTime, string method, string username, string companyID, object request
    //        , dynamic response)
    //    {



    //        string jrequest = JsonConvert.SerializeObject(request);
    //        string jresponse = JsonConvert.SerializeObject(response);
    //        //string text = "Escape characters ： < > & \" \'";
    //        SqlParameter[] param ={
    //            new SqlParameter("@CompanyID",companyID=="null"?null:companyID),
    //            new SqlParameter("@Username",username=="null"?null:username),
    //            new SqlParameter("@MethodName",method),
    //            new SqlParameter("@Request",SecurityElement.Escape(jrequest)),
    //            new SqlParameter("@Response",SecurityElement.Escape(jresponse)),
    //            new SqlParameter("@TranDate",DateTime.Now),
    //            new SqlParameter("@OperationTime", DateTime.Now - operationTime)
    //        };

    //        SqlHelper.ExecuteNonQuery(appSettings.Value.BasDB, "[dbo].[BAS_PostTranLog]", param);
    //    }
    //}

    //[Route("login")]
    //[ApiController]
    //public class LoginController : Controller
    //{
    //    private readonly IOptions<MySettingsModel> appSettings;

    //    public LoginController(IOptions<MySettingsModel> app)
    //    {
    //        appSettings = app;
    //    }



    //    [EnableCors("CorsPolicy")]
    //    [HttpPost("")]
    //    public IActionResult Login([FromBody]GetLoginRequest model)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        try
    //        {
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = { new SqlParameter("@CompanyId", model.CompanyId), new SqlParameter("@UserName", model.Username), new SqlParameter("@Password", model.Password), outParam };
    //            OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Lg_Login", param, out strOutParam));
    //            Util.CreateLog(appSettings, operationTime, "Login", model.Username, model.CompanyId, model, result.Value);
    //            return result;

    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "Login", model.Username, model.CompanyId, model, ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }
    //    }


    //    [EnableCors("CorsPolicy")]
    //    [HttpGet("menu/{CompanyId}/{UserName}/{Lng}")]
    //    public IActionResult LoginGetMenu(string CompanyId, string Username, string Lng)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        try
    //        {
    //            SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@UserCode", Username), new SqlParameter("@Lng", Lng) };
    //            OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData<List<TotalGetMenuInfo>>(appSettings.Value.BasDB.ConnectionString, "BAS_Lg_LoginGetMenu", r => r.GetMenuInfo(), param));
    //            Util.CreateLog(appSettings, operationTime, "LoginGetMenu", Username, CompanyId, "login/" + CompanyId + "/" + Username + "/" + Lng, result);
    //            return Ok(result.Value);
    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "LoginGetMenu", Username, CompanyId, "login/" + CompanyId + "/" + Username + "/" + Lng, ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }

    //    }


    //    [EnableCors("CorsPolicy")]
    //    [HttpGet("label/{CompanyId}/{UserName}/{Lng}")]
    //    public IActionResult LoginGetLabel(string CompanyId, string Username, string Lng)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        try
    //        {
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@UserCode", Username), new SqlParameter("@Lng", Lng), outParam };
    //            OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Lg_LoginGetLabel", param, out strOutParam));
    //            Util.CreateLog(appSettings, operationTime, "LoginGetLabel", Username, CompanyId, "login/" + CompanyId + '/' + Username + '/' + Lng, result);
    //            return Ok(result.Value);
    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "LoginGetLabel", Username, CompanyId, "login/" + CompanyId + '/' + Username + '/' + Lng, ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }

    //    }
    //}

    //[Route("personnel")]
    //[ApiController]
    //public class PersonnelController : Controller
    //{
    //    private readonly IOptions<MySettingsModel> appSettings;

    //    public PersonnelController(IOptions<MySettingsModel> app)
    //    {
    //        appSettings = app;
    //    }



    //    [EnableCors("CorsPolicy")]
    //    [HttpGet("chief/{CompanyId}/{Username}/{Id}")]
    //    public IActionResult PersonnelChief(string CompanyId, string Username, int Id)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        try
    //        {
    //            OkObjectResult result = null;
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@Id", Id), outParam };
    //            result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Emp_GetEmployeeChief", param, out strOutParam));
    //            Util.CreateLog(appSettings, operationTime, "PersonnelAmir", Username, CompanyId, "personnel/" + CompanyId + "/" + Username + "/" + Id, result);
    //            return result;
    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "PersonnelAmir", Username, CompanyId, "personnel/" + CompanyId + "/" + Username + "/" + Id, ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }
    //    }


    //    [EnableCors("CorsPolicy")]
    //    [HttpPost("chief")]
    //    public IActionResult PersonnelChiefPost([FromBody]PersonnelPostChiefRequest model)
    //    {

    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        try
    //        {
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = {
    //                new SqlParameter("@CompanyID", model.CompanyId),
    //                new SqlParameter("@Username", model.Username),
    //                new SqlParameter("@ID", model.ID),
    //                new SqlParameter("@ChiefEmployeeID", model.ChiefEmployeeID),
    //                new SqlParameter("@EmployeeID", model.EmployeeID),
    //                new SqlParameter("@Degree", model.Degree),
    //                outParam };
    //            OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Emp_PostChief", param, out strOutParam));
    //            Util.CreateLog(appSettings, operationTime, "PersonnelPost", model.Username, model.CompanyId, model, result);
    //            return result;

    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "PersonnelPost", model.Username, model.CompanyId, model, ex.Message + " - " + ex.InnerException);
    //            throw ex;
    //        }
    //    }

    //    [EnableCors("CorsPolicy")]
    //    [HttpDelete("chief/{CompanyId}/{Username}/{Id}")]
    //    public IActionResult PersonnelChiefDelete(string CompanyId, string Username, int Id)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        OkObjectResult result = null;
    //        try
    //        {
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@Id", Id), outParam };
    //            result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Emp_DeleteEmployeeChief", param, out strOutParam));
    //            Util.CreateLog(appSettings, operationTime, "PersonnelChiefDelete", Username, CompanyId, "personnel/chief/" + CompanyId + "/" + Username + "/" + Id, result);
    //            return result;

    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "PersonnelChiefDelete", Username, CompanyId, "personnel/chief/" + CompanyId + "/" + Username + "/" + Id, ex.Message + " - " + ex.InnerException);
    //            throw ex;
    //        }
    //    }


    //    [EnableCors("CorsPolicy")]
    //    [HttpGet("{CompanyId}/{Username}/{Id}/{filterText}")]
    //    public IActionResult PersonnelGet(string CompanyId, string Username, string Id, string filterText)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        try
    //        {
    //            OkObjectResult result = null;
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@Id", (Id== "null" ? null : Id)),
    //                new SqlParameter("@FilterText",(filterText== "null" ? null : filterText) ), outParam };
    //            result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Emp_GetEmployee", param, out strOutParam));
    //            Util.CreateLog(appSettings, operationTime, "PersonnelGet", Username, CompanyId, "personnel/" + CompanyId + "/" + Username + "/" + Id, result);
    //            return result;
    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "PersonnelGet", Username, CompanyId, "personnel/" + CompanyId + "/" + Username + "/" + Id, ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }
    //    }



    //    [EnableCors("CorsPolicy")]
    //    [HttpPost("")]
    //    public IActionResult PersonnelPost([FromBody]PersonnelPostRequest model)
    //    {

    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        try
    //        {
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = {
    //                new SqlParameter("@CompanyID", model.CompanyId),
    //                new SqlParameter("@Username", model.Username),
    //                new SqlParameter("@ID", model.ID),
    //                new SqlParameter("@Code", model.Code),
    //                new SqlParameter("@Name", model.Name),
    //                new SqlParameter("@Surname", model.Surname),
    //                new SqlParameter("@Chief", model.Chief),
    //                new SqlParameter("@PassID", model.PassID),
    //                new SqlParameter("@PassDate", model.PassDate),
    //                new SqlParameter("@StartingDate", model.StartingDate),
    //                new SqlParameter("@LeavingDate", model.LeavingDate),
    //                new SqlParameter("@ExitReasonID", model.ExitReasonID),
    //                new SqlParameter("@CommunityDate", model.CommunityDate),
    //                new SqlParameter("@CollarColor", model.CollarColor),
    //                new SqlParameter("@CollarColorDate", model.CollarColorDate),
    //                new SqlParameter("@EmployeeTypeID", model.EmployeeTypeID),
    //                new SqlParameter("@EmployeeTypeDate", model.EmployeeTypeDate),
    //                new SqlParameter("@LoopID", model.LoopID),
    //                new SqlParameter("@LoopDate", model.LoopDate),
    //                new SqlParameter("@DepartmentID", model.DepartmentID),
    //                new SqlParameter("@DepartmentDate", model.DepartmentDate),
    //                new SqlParameter("@CostCenterID", model.CostCenterID),
    //                new SqlParameter("@CostCenterDate", model.CostCenterDate),
    //                new SqlParameter("@CadreID", model.CadreID),
    //                new SqlParameter("@CadreDate", model.CadreDate),
    //                new SqlParameter("@ProfessionID", model.ProfessionID),
    //                new SqlParameter("@ProfessionDate", model.ProfessionDate),
    //                new SqlParameter("@TaskID", model.TaskID),
    //                new SqlParameter("@TaskDate", model.TaskDate),
    //                new SqlParameter("@GroupID", model.GroupID),
    //                new SqlParameter("@GroupDate", model.GroupDate),
    //                new SqlParameter("@UnitID", model.UnitID),
    //                new SqlParameter("@UnitDate", model.UnitDate),
    //                new SqlParameter("@BranchID", model.BranchID),
    //                new SqlParameter("@BranchDate", model.BranchDate),
    //                new SqlParameter("@ServiceStationID", model.ServiceStationID),
    //                new SqlParameter("@ServiceStationDate", model.ServiceStationDate),
    //                new SqlParameter("@Photo", model.Photo),
    //                new SqlParameter("@PayrollCalculation", model.PayrollCalculation),
    //                new SqlParameter("@Overtime", model.Overtime),
    //                new SqlParameter("@OvertimeDate", model.OvertimeDate),
    //                new SqlParameter("@FeeType", model.FeeType),
    //                new SqlParameter("@FeeTypeDate", model.FeeTypeDate),
    //                new SqlParameter("@LeaveDate", model.LeaveDate),
    //                new SqlParameter("@DomainUsername", model.DomainUsername),
    //                new SqlParameter("@ConfirmationPassword", model.ConfirmationPassword),
    //                new SqlParameter("@Active", model.Active),
    //                new SqlParameter("@UserID", model.UserID),
    //                new SqlParameter("@Shift", model.Shift),
    //                new SqlParameter("@ShiftDate", model.ShiftDate),
    //                outParam };
    //            OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Emp_PostEmployee", param, out strOutParam));
    //            Util.CreateLog(appSettings, operationTime, "PersonnelPost", model.Username, model.CompanyId, model, result);
    //            return result;

    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "PersonnelPost", model.Username, model.CompanyId, model, ex.Message + " - " + ex.InnerException);
    //            throw ex;
    //        }
    //    }


    //    [EnableCors("CorsPolicy")]
    //    [HttpGet("id/{CompanyId}/{Username}/{id}")]
    //    public IActionResult PersonnelIDGet(string CompanyId, string Username, int id)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        try
    //        {

    //            OkObjectResult result = null;
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@id", id), outParam };
    //            result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Emp_GetID", param, out strOutParam));
    //            Util.CreateLog(appSettings, operationTime, "PersonnelIDGet", Username, CompanyId, "personnel/" + CompanyId + "/" + Username + "/" + id.ToString(), result);
    //            return result;
    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "PersonnelIDGet", Username, CompanyId, "personnel/" + CompanyId + "/" + Username + "/" + id.ToString(), ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }

    //    }

    //    [EnableCors("CorsPolicy")]
    //    [HttpGet("contact/{CompanyId}/{Username}/{id}")]
    //    public IActionResult PersonnelContactGet(string CompanyId, string Username, int id)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        try
    //        {
    //            OkObjectResult result = null;
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@Id", id), outParam };
    //            result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Emp_GetContact", param, out strOutParam));
    //            Util.CreateLog(appSettings, operationTime, "PersonnelContactGet", Username, CompanyId, "personnel/" + CompanyId + "/" + Username + "/" + id.ToString(), result);
    //            return result;
    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "PersonnelContactGet", Username, CompanyId, "personnel/" + CompanyId + "/" + Username + "/" + id.ToString(), ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }


    //    }


    //    [EnableCors("CorsPolicy")]
    //    [HttpPost("contact")]
    //    public IActionResult PersonnelPostContact([FromBody]PersonnelPostContactRequest model)
    //    {

    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        try
    //        {
    //            //return null;
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = {
    //                new SqlParameter("@ID", model.ID),
    //                new SqlParameter("@CompanyID", model.CompanyId),
    //                new SqlParameter("@Username", model.Username),
    //                new SqlParameter("@EmployeeID", model.EmployeeID),
    //                new SqlParameter("@Address", model.Address),
    //                new SqlParameter("@Province", model.Province),
    //                new SqlParameter("@Country", model.Country),
    //                new SqlParameter("@Phone1", model.Phone1),
    //                new SqlParameter("@Phone2", model.Phone2),
    //                new SqlParameter("@MobilePhone", model.MobilePhone),
    //                new SqlParameter("@Email", model.Email),
    //                new SqlParameter("@PostCode", model.PostCode),
    //                outParam };
    //            OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Emp_PostContact", param, out strOutParam));
    //            Util.CreateLog(appSettings, operationTime, "PersonnelPostContact", model.Username, model.CompanyId, model, result);
    //            return result;

    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "PersonnelPostContact", model.Username, model.CompanyId, model, ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }
    //    }


    //    [EnableCors("CorsPolicy")]
    //    [HttpPost("id")]
    //    public IActionResult PersonnelPostID([FromBody]PersonnelPostIDRequest model)
    //    {

    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        try
    //        {
    //            //return null;
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = {
    //                new SqlParameter("@ID", model.ID),
    //                new SqlParameter("@CompanyID", model.CompanyId),
    //                new SqlParameter("@Username", model.Username),
    //                new SqlParameter("@EmployeeID", model.EmployeeID),
    //                new SqlParameter("@IdNo", model.IdNo),
    //                new SqlParameter("@DateOfBirth", model.DateOfBirth),
    //                new SqlParameter("@Gender", model.Gender),
    //                new SqlParameter("@SerialNumber", model.SerialNumber),
    //                new SqlParameter("@Nationality", model.Nationality),
    //                new SqlParameter("@ValidUntil", model.ValidUntil),
    //                new SqlParameter("@Mother", model.Mother),
    //                new SqlParameter("@Father", model.Father),
    //                outParam };
    //            OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Emp_PostID", param, out strOutParam));
    //            Util.CreateLog(appSettings, operationTime, "PersonnelPostID", model.Username, model.CompanyId, model, result);
    //            return result;

    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "PersonnelPostID", model.Username, model.CompanyId, model, ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }
    //    }



    //    [EnableCors("CorsPolicy")]
    //    [HttpGet("filter/{CompanyId}/{Username}")]
    //    public IActionResult PersonnelGetFilter(string CompanyId, string Username)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        try
    //        {
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), outParam };
    //            object result = SqlHelper.ExecuteProcedureReturnData<List<PersonnelGetQueryInfo>>(appSettings.Value.BasDB.ConnectionString, "BAS_Emp_GetEmployeeFilter", r => r.GetPersonnelGetQueryInfo(), null);
    //            Util.CreateLog(appSettings, operationTime, "PersonnelGetFilter", Username, CompanyId, "personnel/" + CompanyId + "/" + Username, result);
    //            return Ok(result);
    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "PersonnelGetFilter", Username, CompanyId, "personnel/" + CompanyId + "/" + Username, ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }

    //    }


    //    [EnableCors("CorsPolicy")]
    //    [HttpGet("filter/{CompanyId}/{Username}/{filterType}/{filter}")]
    //    public IActionResult PersonnelGetQuery(string CompanyId, string Username, string filterType, string filter)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        try
    //        {
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@FilterType", filterType), new SqlParameter("@Filter", filter), outParam };
    //            OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Emp_PersonnelGetQuery", param, out strOutParam));
    //            Util.CreateLog(appSettings, operationTime, "PersonnelGetQuery", Username, CompanyId, "personnel/filter/" + CompanyId + "/" + Username + "/" + filterType + "/" + filter, result);
    //            return result;
    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "PersonnelGetQuery", Username, CompanyId, "personnel/filter/" + CompanyId + "/" + Username + "/" + filterType + "/" + filter, ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }

    //    }

    //    [EnableCors("CorsPolicy")]
    //    [HttpGet("filter/columns/{CompanyId}/{Username}")]
    //    public IActionResult PersonnelGetFilterColumns(string CompanyId, string Username)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        try
    //        {
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), outParam };
    //            OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Emp_GetEmployeeFilterColumns", param, out strOutParam));
    //            Util.CreateLog(appSettings, operationTime, "PersonnelGetFilterColumns", Username, CompanyId, "personnel/filter/" + CompanyId + "/" + Username, result);
    //            return result;
    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "PersonnelGetFilterColumns", Username, CompanyId, "personnel/filter/" + CompanyId + "/" + Username, ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }

    //    }

    //    [EnableCors("CorsPolicy")]
    //    [HttpPost("filter/columns")]
    //    public IActionResult PersonnelPostFilterColumns([FromBody]List<PersonnelPostFilterColumnsRequest> model)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        OkObjectResult result = null;
    //        try
    //        {

    //            foreach (var item in model)
    //            {
    //                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //                SqlParameter[] param = { new SqlParameter("@CompanyId", item.CompanyId), new SqlParameter("@Username", item.Username), new SqlParameter("@name", item.ColumnName), new SqlParameter("@label", item.Label), new SqlParameter("@active", item.Active), outParam };
    //                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Emp_PostEmployeeFilterColumns", param, out strOutParam));
    //                Util.CreateLog(appSettings, operationTime, "PersonnelPostFilterColumns", item.Username, item.CompanyId,model, result);
    //            }

    //            return result;
    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "PersonnelPostFilterColumns", model.ToArray()[0].Username, model.ToArray()[0].CompanyId, model, ex.Message + " - " + ex.InnerException);
    //            throw ex;
    //        }

    //    }

    //    [EnableCors("CorsPolicy")]
    //    [HttpDelete("{CompanyId}/{Username}/{code}")]
    //    public IActionResult PersonnelDelete(string CompanyId, string Username,string code)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        OkObjectResult result = null;
    //        try
    //        {
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@Code", code), outParam };
    //            result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Emp_DeleteEmployee", param, out strOutParam));
    //            Util.CreateLog(appSettings, operationTime, "PersonnelDelete", Username, CompanyId, "personnel/" + CompanyId + "/" + Username + "/" + code, result);
    //            return result;

    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "PersonnelDelete", Username, CompanyId, "personnel/" + CompanyId + "/" + Username + "/" + code, ex.Message + " - " + ex.InnerException);
    //            throw ex;
    //        }
    //    }


    //    byte[] ObjectToByteArray(object obj)
    //    {
    //        if (obj == null)
    //            return null;
    //        BinaryFormatter bf = new BinaryFormatter();
    //        using (MemoryStream ms = new MemoryStream())
    //        {
    //            bf.Serialize(ms, obj);
    //            return ms.ToArray();
    //        }
    //    }

    //    [EnableCors("CorsPolicy")]
    //    [HttpPost("image")]
    //    public async Task<IActionResult> UploadImage([FromForm] IFormFile image)
    //    {
    //        OkObjectResult result = null;
    //        //var filePath = Path.Combine(@"E:\Projects\Vex\demo\src\assets\img\avatars", image.FileName);
    //        var filePath = Path.Combine(@"C:\Barkodes\Bas\BasWeb\assets\img\avatars", image.FileName);

    //        using (var fileStream = new FileStream(filePath, FileMode.Create))
    //        {
    //            await image.CopyToAsync(fileStream);
    //        }
    //        DateTime operationTime = DateTime.Now;
    //        return Ok(result);


    //        //OkObjectResult result = null;
    //        //try
    //        //{
    //        //    var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //        //    SqlParameter[] param = { new SqlParameter("@Code", code), outParam };
    //        //    result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Emp_DeleteEmployee", param, out strOutParam));
    //        //    //Util.CreateLog(appSettings, operationTime, "GetLogin", model, strOutParam.Split('@')[0], strOutParam.Split('@')[1]);
    //        //    return result;

    //        //}
    //        //catch (Exception ex)
    //        //{
    //        //    //Util.CreateLog(appSettings, operationTime, "GetLogin", model, "500", ex.Message + "-" + ex.InnerException);
    //        //    throw ex;
    //        //}
    //    }


    //}

    //[Route("definitions")]
    //[ApiController]
    //public class PoolDefinitionsController : Controller
    //{
    //    private readonly IOptions<MySettingsModel> appSettings;
    //    public IConfiguration Configuration { get; }

    //    public PoolDefinitionsController(IOptions<MySettingsModel> app)
    //    {
    //        appSettings = app;
    //    }


    //    [EnableCors("CorsPolicy")]
    //    [HttpGet("{CompanyId}/{Username}/{Type}/{Id}")]
    //    public IActionResult DefinitionGetType(string CompanyId, string Username, string Type, int Id)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        try
    //        {
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@type", Type), new SqlParameter("@id", Id), outParam };
    //            OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Def_GetType", param, out strOutParam));
    //            Util.CreateLog(appSettings, operationTime, "DefinitionGetType", Username, CompanyId, "definitions/" + CompanyId + '/' + Username + '/' + Type + '/' + Id, result);
    //            return result;

    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "DefinitionGetType", Username, CompanyId, "definitions/" + CompanyId + '/' + Username + '/' + Type + '/' + Id, ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }
    //    }

    //    #region Workingtypes
       

    //    [EnableCors("CorsPolicy")]
    //    [HttpGet("workingtypes/{CompanyId}/{Username}/{id}")]
    //    public IActionResult DefinitionGetWorkingTypes(string CompanyId, string Username, int id)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        OkObjectResult result = null;
    //        try
    //        {
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@id", id), outParam };
    //            result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Def_GetWorkingType", param, out strOutParam));
    //            Util.CreateLog(appSettings, operationTime, "DefinitionGetWorkingTypes", Username, CompanyId, "definitions/workingtypes/" + CompanyId + '/' + Username + '/' + id.ToString(), result);
    //            return result;

    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "DefinitionGetWorkingTypes", Username, CompanyId, "definitions/workingtypes/" + CompanyId + '/' + Username + '/' + id.ToString(), ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }
    //    }

    //    [EnableCors("CorsPolicy")]
    //    [HttpGet("workingtypes/enums/{CompanyId}/{Username}/{type}/{code}")]
    //    public IActionResult DefinitionGetWorkingTypesEnums(string CompanyId, string Username, string type, string code)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        OkObjectResult result = null;
    //        try
    //        {
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@code", (code == "null" ? null : code)), new SqlParameter("@type", type), outParam };
    //            result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Def_GetWorkingTypeUtils", param, out strOutParam));
    //            Util.CreateLog(appSettings, operationTime, "DefinitionGetWorkingTypesEnums", Username, CompanyId, "definitions/workingtypes/enums/" + CompanyId + '/' + Username + '/' + type + '/' + code, result);
    //            return result;

    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "DefinitionGetWorkingTypesEnums", Username, CompanyId, "definitions/workingtypes/enums/" + CompanyId + '/' + Username + '/' + type + '/' + code, ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }
    //    }


    //    [EnableCors("CorsPolicy")]
    //    [HttpPost("workingtypes")]
    //    public IActionResult DefinitionPostWorkingType([FromBody]PostDefinitionWorkingTypesRequest model)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        OkObjectResult result = null;
    //        try
    //        {
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = {
    //                new SqlParameter("@CompanyId", model.CompanyId),
    //                new SqlParameter("@Username", model.Username),
    //                new SqlParameter("@id", model.id),
    //                new SqlParameter("@code", model.code),
    //                new SqlParameter("@name", model.name),
    //                new SqlParameter("@type", model.type),
    //                new SqlParameter("@roundingHourID", model.roundingHourID),
    //                new SqlParameter("@roundingDayID", model.roundingDayID),
    //                new SqlParameter("@lowerLimit", model.lowerLimit),
    //                new SqlParameter("@upperLimit", model.upperLimit),
    //                new SqlParameter("@multiplier", model.multiplier),
    //                new SqlParameter("@compulsory", model.compulsory),
    //                new SqlParameter("@confirmation", model.confirmation),
    //                new SqlParameter("@saturday", model.saturday),
    //                new SqlParameter("@saturdayDay", model.saturdayDay),
    //                new SqlParameter("@saturdayHour", model.saturdayHour),
    //                new SqlParameter("@weekend", model.weekend),
    //                new SqlParameter("@weekendDay", model.weekendDay),
    //                new SqlParameter("@weekendHour", model.weekendHour),
    //                new SqlParameter("@generalHoliday", model.generalHoliday),
    //                new SqlParameter("@generalHolidayDay", model.generalHolidayDay),
    //                new SqlParameter("@generalHolidayHour", model.generalHolidayHour),
    //                new SqlParameter("@workCalculator", model.workCalculator),
    //                new SqlParameter("@leaveContinued", model.leaveContinued),
    //                new SqlParameter("@reportCode", model.reportCode),
    //                new SqlParameter("@integrationCode", model.integrationCode),
    //                new SqlParameter("@equalizationDegrees", model.equalizationDegrees),outParam };
    //            result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Def_PostWorkingType", param, out strOutParam));
    //            //}
    //            Util.CreateLog(appSettings, operationTime, "DefinitionPostWorkingType", model.Username, model.CompanyId, model, result);
    //            return result;

    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "DefinitionPostWorkingType", model.Username, model.CompanyId, model, ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }
    //    }


    //    [EnableCors("CorsPolicy")]
    //    [HttpDelete("workingtypes/{CompanyId}/{Username}/{id}")]
    //    public IActionResult DefinitionDeleteWorkingType(string CompanyId, string Username, int id)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        OkObjectResult result = null;
    //        try
    //        {
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = {   new SqlParameter("@CompanyId", CompanyId),
    //                new SqlParameter("@Username", Username),new SqlParameter("@id", id), outParam };
    //            result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Def_DeleteWorkingType", param, out strOutParam));
    //            Util.CreateLog(appSettings, operationTime, "DefinitionDeleteWorkingType", Username, CompanyId, "definitions/workingtypes/" + CompanyId + '/' + Username + '/' + id.ToString(), result);
    //            return result;

    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "DefinitionDeleteWorkingType", Username, CompanyId, "definitions/workingtypes/" + CompanyId + '/' + Username + '/' + id.ToString(), ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }
    //    }


    //    [EnableCors("CorsPolicy")]
    //    [HttpGet("workingtypes/dist/{CompanyId}/{Username}/{id}")]
    //    public IActionResult DefinitionGetWorkingTypesDist(string CompanyId, string Username, int id)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        OkObjectResult result = null;
    //        try
    //        {
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId),
    //                new SqlParameter("@Username", Username),new SqlParameter("@id", id), outParam };
    //            result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Def_GetWorkingTypeDistribution", param, out strOutParam));
    //            Util.CreateLog(appSettings, operationTime, "DefinitionGetWorkingTypesDist", Username, CompanyId, "definitions/workingtypes/dist/" + CompanyId + '/' + Username + '/' + id.ToString(), result);
    //            return result;

    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "DefinitionGetWorkingTypesDist", Username, CompanyId, "definitions/workingtypes/dist/" + CompanyId + '/' + Username + '/' + id.ToString(), ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }
    //    }


    //    [EnableCors("CorsPolicy")]
    //    [HttpPost("workingtypes/dist")]
    //    public IActionResult DefinitionPostWorkingTypeDist([FromBody]PostDefinitionWorkingTypesDistRequest model)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        OkObjectResult result = null;
    //        try
    //        {
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = {
    //                new SqlParameter("@CompanyId", model.CompanyId),
    //                new SqlParameter("@Username", model.Username),
    //                new SqlParameter("@id", model.id),
    //                new SqlParameter("@status", model.status),
    //                new SqlParameter("@workingTypeID", model.workingTypeID),
    //                new SqlParameter("@code", model.code),
    //                new SqlParameter("@lowerLimit", model.lowerLimit),
    //                new SqlParameter("@upperLimit", model.upperLimit),
    //                new SqlParameter("@multiplier", model.multiplier),outParam
    //         };
    //            result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Def_PostWorkingTypeDist", param, out strOutParam));
    //            //}
    //            Util.CreateLog(appSettings, operationTime, "DefinitionPostTypeDetail", model.Username, model.CompanyId, model, result);
    //            return result;

    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "DefinitionPostTypeDetail", model.Username, model.CompanyId, model, ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }
    //    }


    //    [EnableCors("CorsPolicy")]
    //    [HttpDelete("workingtypes/dist/{CompanyId}/{Username}/{id}")]
    //    public IActionResult DefinitionDeleteWorkingTypeDist(string CompanyId, string Username, int id)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        OkObjectResult result = null;
    //        try
    //        {
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId),
    //                new SqlParameter("@Username", Username),new SqlParameter("@id", id), outParam };
    //            result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Def_DeleteWorkingTypeDistribution", param, out strOutParam));
    //            Util.CreateLog(appSettings, operationTime, "DefinitionGetWorkingTypes", Username, CompanyId, "definitions/workingtypes/" + CompanyId + '/' + Username + '/' + id.ToString(), result);
    //            return result;

    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "DefinitionGetWorkingTypes", Username, CompanyId, "definitions/workingtypes/" + CompanyId + '/' + Username + '/' + id.ToString(), ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }
    //    }


    //    #endregion


    //    #region Shift


    //    [EnableCors("CorsPolicy")]
    //    [HttpGet("shift/{CompanyId}/{Username}/{id}")]
    //    public IActionResult DefinitionGetShift(string CompanyId, string Username, int id)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        OkObjectResult result = null;
    //        try
    //        {
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId),
    //                new SqlParameter("@Username", Username),new SqlParameter("@id", id), outParam };
    //            result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Def_GetShift", param, out strOutParam));
    //            Util.CreateLog(appSettings, operationTime, "DefinitionGetShift", Username, CompanyId, "definitions/shift/" + CompanyId + '/' + Username + '/' + id.ToString(), result);
    //            return result;

    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "DefinitionGetShift", Username, CompanyId, "definitions/shift/" + CompanyId + '/' + Username + '/' + id.ToString(), ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }
    //    }

    //    [EnableCors("CorsPolicy")]
    //    [HttpPost("shift")]
    //    public IActionResult DefinitionPostShift([FromBody]PostDefinitionShiftRequest model)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        OkObjectResult result = null;
    //        try
    //        {
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = {
    //                 new SqlParameter("@CompanyId", model.CompanyId),
    //                new SqlParameter("@Username", model.Username),
    //                new SqlParameter("@ID", model.ID),
    //                new SqlParameter("@Code", model.Code),
    //                new SqlParameter("@Name", model.Name),
    //                new SqlParameter("@Type", model.Type),
    //                new SqlParameter("@Time", model.Time),
    //                new SqlParameter("@StartEarly", model.StartEarly),
    //                new SqlParameter("@Start", model.Start),
    //                new SqlParameter("@LateStart", model.LateStart),
    //                new SqlParameter("@EarlyFinish", model.EarlyFinish),
    //                new SqlParameter("@Finish", model.Finish),
    //                new SqlParameter("@LateFinish", model.LateFinish),
    //                new SqlParameter("@WeekHoliday", model.WeekHoliday),
    //                new SqlParameter("@TypeOfWeekHoliday", model.TypeOfWeekHoliday),
    //                new SqlParameter("@DayTurning", model.DayTurning),
    //                new SqlParameter("@DayTurningTime", model.DayTurningTime),
    //                outParam };
    //            result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Def_PostShift", param, out strOutParam));
    //            //}
    //            Util.CreateLog(appSettings, operationTime, "DefinitionPostShift", model.Username, model.CompanyId, model, result);
    //            return result;

    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "DefinitionPostShift", model.Username, model.CompanyId, model, ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }
    //    }


    //    [EnableCors("CorsPolicy")]
    //    [HttpDelete("shift/dist/{CompanyId}/{Username}/{id}")]
    //    public IActionResult DefinitionDeleteShiftDist(string CompanyId, string Username, int id)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        OkObjectResult result = null;
    //        try
    //        {
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId),
    //                new SqlParameter("@Username", Username),new SqlParameter("@id", id), outParam };
    //            result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Def_DeleteShiftDistribution", param, out strOutParam));
    //            Util.CreateLog(appSettings, operationTime, "DefinitionDeleteShiftDist", Username, CompanyId, "definitions/shift/dist/" + CompanyId + '/' + Username + '/' + id.ToString(), result);
    //            return result;

    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "DefinitionDeleteShiftDist", Username, CompanyId, "definitions/shift/dist/" + CompanyId + '/' + Username + '/' + id.ToString(), ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }
    //    }


    //    [EnableCors("CorsPolicy")]
    //    [HttpGet("shift/dist/{CompanyId}/{Username}/{id}")]
    //    public IActionResult DefinitionGetShiftDist(string CompanyId, string Username, int id)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        OkObjectResult result = null;
    //        try
    //        {
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId),
    //                new SqlParameter("@Username", Username),new SqlParameter("@ID", id),  outParam };
    //            result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Def_GetShiftDistribution", param, out strOutParam));
    //            Util.CreateLog(appSettings, operationTime, "DefinitionGetShiftDist", Username, CompanyId, "definitions/shift/dist/" + CompanyId + '/' + Username + '/' + id.ToString(), result);
    //            return result;

    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "DefinitionGetShiftDist", Username, CompanyId, "definitions/shift/dist/" + CompanyId + '/' + Username + '/' + id.ToString(), ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }
    //    }


    //    [EnableCors("CorsPolicy")]
    //    [HttpPost("shift/dist")]
    //    public IActionResult DefinitionPostShiftDist([FromBody]List<PostDefinitionShiftDistRequest> model)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        OkObjectResult result = null;
    //        try
    //        {

    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = {
    //                new SqlParameter("@CompanyId", model.ToArray()[0].CompanyId),
    //                new SqlParameter("@Username", model.ToArray()[0].Username),
    //                new SqlParameter("@ID", model.ToArray()[0].ID),
    //                new SqlParameter("@ShiftID", model.ToArray()[0].ShiftID),outParam};

    //            result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Def_PostShiftDistTruncate", param, out strOutParam));
    //            Util.CreateLog(appSettings, operationTime, "BAS_Def_PostShiftDistTruncate", model.ToArray()[0].Username, model.ToArray()[0].CompanyId, model, result);

    //            foreach (var item in model)
    //            {
    //                outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //                SqlParameter[] param2 = {
    //                new SqlParameter("@CompanyID", item.CompanyId),
    //                new SqlParameter("@Username", item.Username),
    //                new SqlParameter("@ID", item.ID),
    //                new SqlParameter("@ShiftID", item.ShiftID),
    //                new SqlParameter("@WorkingTypeID", item.WorkingTypeID),
    //                new SqlParameter("@FirstHour", item.FirstHour),
    //                new SqlParameter("@LastHour", item.LastHour),
    //                new SqlParameter("@Time", item.Time),
    //                new SqlParameter("@Status", item.Status),outParam};
    //                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Def_PostShiftDist", param2, out strOutParam));
    //                //}
    //                Util.CreateLog(appSettings, operationTime, "BAS_Def_PostShiftDist", item.Username, item.CompanyId, model, result);
    //            }
    //            return result;

    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "BAS_Def_PostShiftDist", model.ToArray()[0].Username, model.ToArray()[0].CompanyId, model, ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }
    //    }


    //    #endregion


    //    #region ShiftGroup


    //    [EnableCors("CorsPolicy")]
    //    [HttpGet("shiftgroup/{CompanyId}/{Username}/{id}")]
    //    public IActionResult DefinitionGetShiftGroup(string CompanyId, string Username, int id)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        OkObjectResult result = null;
    //        try
    //        {
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@id", id), outParam };
    //            result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Def_GetShiftGroup", param, out strOutParam));
    //            Util.CreateLog(appSettings, operationTime, "DefinitionGetShiftGroup", Username, CompanyId, "definitions/shiftgroup/" + CompanyId + '/' + Username + '/' + id.ToString(), result);
    //            return result;

    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "DefinitionGetShiftGroup", Username, CompanyId, "definitions/shiftgroup/" + CompanyId + '/' + Username + '/' + id.ToString(), ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }
    //    }


    //    [EnableCors("CorsPolicy")]
    //    [HttpGet("shiftgroup/backup/{CompanyId}/{Username}/{id}")]
    //    public IActionResult DefinitionGetShiftGroupBackUp(string CompanyId, string Username, int id)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        OkObjectResult result = null;
    //        try
    //        {
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@id", id), outParam };
    //            result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Def_GetShiftGroupBackUp", param, out strOutParam));
    //            Util.CreateLog(appSettings, operationTime, "DefinitionGetShiftGroupBackUp", Username, CompanyId, "definitions/shiftgroup/backup/" + CompanyId + '/' + Username + '/' + id.ToString(), result);
    //            return result;

    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "DefinitionGetShiftGroupBackUp", Username, CompanyId, "definitions/shiftgroup/backup/" + CompanyId + '/' + Username + '/' + id.ToString(), ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }
    //    }

    //    [EnableCors("CorsPolicy")]
    //    [HttpGet("shiftgroup/tolerance/{CompanyId}/{Username}/{id}")]
    //    public IActionResult DefinitionGetShiftGroupTolerance(string CompanyId, string Username, int id)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        OkObjectResult result = null;
    //        try
    //        {
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@id", id), outParam };
    //            result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Def_GetShiftGroupTolerance", param, out strOutParam));
    //            Util.CreateLog(appSettings, operationTime, "DefinitionGetShiftGroupTolerance", Username, CompanyId, "definitions/shiftgroup/tolerance/" + CompanyId + '/' + Username + '/' + id.ToString(), result);
    //            return result;

    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "DefinitionGetShiftGroupTolerance", Username, CompanyId, "definitions/shiftgroup/tolerance/" + CompanyId + '/' + Username + '/' + id.ToString(), ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }
    //    }


    //    [EnableCors("CorsPolicy")]
    //    [HttpPost("shiftgroup/tolerance")]
    //    public IActionResult DefinitionPostShiftGroupTolerance([FromBody]PostDefinitionShiftGroupToleranceRequest model)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        OkObjectResult result = null;
    //        try
    //        {
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = {
    //                new SqlParameter("@CompanyId", model.CompanyId),
    //                new SqlParameter("@Username", model.Username),
    //                new SqlParameter("@ID", model.ID),
    //                new SqlParameter("@ShiftGroupID", model.ShiftGroupID),
    //                new SqlParameter("@EarlyStartTolerance", model.EarlyStartTolerance),
    //                new SqlParameter("@LateStartTolerance", model.LateStartTolerance),
    //                new SqlParameter("@EarlyFinishTolerance", model.EarlyFinishTolerance),
    //                new SqlParameter("@LateFinishTolerance", model.LateFinishTolerance),
    //                outParam };
    //            result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Def_PostShiftGroupTolerance", param, out strOutParam));
    //            //}
    //            Util.CreateLog(appSettings, operationTime, "DefinitionPostShiftGroupTolerance", model.Username, model.CompanyId, model, result);
    //            return result;

    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "DefinitionPostShiftGroupTolerance", model.Username, model.CompanyId, model, ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }
    //    }


    //    [EnableCors("CorsPolicy")]
    //    [HttpPost("shiftgroup/backup")]
    //    public IActionResult DefinitionPostShiftGroupBackUp([FromBody]PostDefinitionShiftGroupBackUpRequest model)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        OkObjectResult result = null;
    //        try
    //        {
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = {
    //                new SqlParameter("@CompanyId", model.CompanyId),
    //                new SqlParameter("@Username", model.Username),
    //                new SqlParameter("@ID", model.ID),
    //                new SqlParameter("@ShiftGroupID", model.ShiftGroupID),
    //                new SqlParameter("@ShiftID", model.ShiftID),
    //                new SqlParameter("@NumberOfDays", model.NumberOfDays),
    //                outParam };
    //            result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Def_PostShiftGroupBackUp", param, out strOutParam));
    //            //}
    //            Util.CreateLog(appSettings, operationTime, "DefinitionPostShiftGroupBackUp", model.Username, model.CompanyId, model, result);
    //            return result;

    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "DefinitionPostShiftGroupBackUp", model.Username, model.CompanyId, model, ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }
    //    }


    //    [EnableCors("CorsPolicy")]
    //    [HttpDelete("shiftgroup/backup/{CompanyId}/{Username}/{id}")]
    //    public IActionResult DefinitionDeleteShiftGroupBackUp(string CompanyId, string Username, int id)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        OkObjectResult result = null;
    //        try
    //        {
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@id", id), outParam };
    //            result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Def_DeleteShiftGroupBackUp", param, out strOutParam));
    //            Util.CreateLog(appSettings, operationTime, "DefinitionDeleteShiftGroupBackUp", Username, CompanyId, "definitions/shiftgroup/backup/" + CompanyId + '/' + Username + '/' + id.ToString(), result);
    //            return result;

    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "DefinitionDeleteShiftGroupBackUp", Username, CompanyId, "definitions/shiftgroup/backup/" + CompanyId + '/' + Username + '/' + id.ToString(), ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }
    //    }


    //    [EnableCors("CorsPolicy")]
    //    [HttpDelete("shiftgroup/tolerance/{CompanyId}/{Username}/{id}")]
    //    public IActionResult DefinitionDeleteShiftGroupTolerance(string CompanyId, string Username, int id)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        OkObjectResult result = null;
    //        try
    //        {
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@id", id), outParam };
    //            result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Def_DeleteShiftGroupTolerance", param, out strOutParam));
    //            Util.CreateLog(appSettings, operationTime, "DefinitionDeleteShiftGroupTolerance", Username, CompanyId, "definitions/shiftgroup/tolerance/" + CompanyId + '/' + Username + '/' + id.ToString(), result);
    //            return result;

    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "DefinitionDeleteShiftGroupTolerance", Username, CompanyId, "definitions/shiftgroup/tolerance/" + CompanyId + '/' + Username + '/' + id.ToString(), ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }
    //    }



    //    [EnableCors("CorsPolicy")]
    //    [HttpPost("shiftgroup")]
    //    public IActionResult DefinitionPostShiftGroup([FromBody]PostDefinitionShiftGroupRequest model)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        OkObjectResult result = null;
    //        try
    //        {
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = {
    //                new SqlParameter("@CompanyId", model.CompanyId),
    //                new SqlParameter("@Username", model.Username),
    //                new SqlParameter("@ID", model.ID),
    //                new SqlParameter("@Code", model.Code),
    //                new SqlParameter("@Name", model.Name),
    //                new SqlParameter("@HolidayDay", model.HolidayDay),
    //                outParam };
    //            result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Def_PostShiftGroup", param, out strOutParam));
    //            //}
    //            Util.CreateLog(appSettings, operationTime, "DefinitionPostShiftGroup", model.Username, model.CompanyId, model, result);
    //            return result;

    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "DefinitionPostShiftGroup", model.Username, model.CompanyId, model, ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }
    //    }




    //    [EnableCors("CorsPolicy")]
    //    [HttpGet("shiftgroup/dist/{CompanyId}/{Username}/{id}")]
    //    public IActionResult DefinitionGetShiftGroupDist(string CompanyId, string Username, int id)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        OkObjectResult result = null;
    //        try
    //        {
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@ID", id), outParam };
    //            result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Def_GetShiftGroupDistribution", param, out strOutParam));
    //            Util.CreateLog(appSettings, operationTime, "DefinitionGetShiftGroupDist", Username, CompanyId, "definitions/shiftgroup/dist/" + CompanyId + '/' + Username + '/' + id.ToString(), result);
    //            return result;

    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "DefinitionGetShiftGroupDist", Username, CompanyId, "definitions/shiftgroup/tolerance/" + CompanyId + '/' + Username + '/' + id.ToString(), ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }
    //    }



    //    [EnableCors("CorsPolicy")]
    //    [HttpPost("shiftgroup/dist")]
    //    public IActionResult DefinitionPostShiftGroupDist([FromBody]PostDefinitionShiftGroupDistRequest model)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        OkObjectResult result = null;
    //        try
    //        {

    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = {
    //                new SqlParameter("@CompanyId", model.CompanyId),
    //                new SqlParameter("@Username", model.Username),
    //                new SqlParameter("@ID", model.ID),
    //                new SqlParameter("@ShiftGroupID", model.ShiftGroupID),
    //                new SqlParameter("@ShiftID", model.ShiftID),
    //                new SqlParameter("@NumberOfDays", model.NumberOfDays),outParam};
    //            result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Def_PostShiftGroupDist", param, out strOutParam));
    //            //}
    //            Util.CreateLog(appSettings, operationTime, "DefinitionPostShiftGroupDist", model.Username, model.CompanyId, model, result);
    //            return result;

    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "DefinitionPostShiftGroupDist", model.Username, model.CompanyId, model, ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }
    //    }


    //    [EnableCors("CorsPolicy")]
    //    [HttpDelete("shiftgroup/{CompanyId}/{Username}/{id}")]
    //    public IActionResult DefinitionDeleteShiftGroup(string CompanyId, string Username, int id)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        OkObjectResult result = null;
    //        try
    //        {
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@id", id), outParam };
    //            result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Def_DeleteShiftGroup", param, out strOutParam));
    //            Util.CreateLog(appSettings, operationTime, "DefinitionDeleteShiftGroup", Username, CompanyId, "definitions/shiftgroup/" + CompanyId + '/' + Username + '/' + id.ToString(), result);
    //            return result;

    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "DefinitionDeleteShiftGroup", Username, CompanyId, "definitions/shiftgroup/" + CompanyId + '/' + Username + '/' + id.ToString(), ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }
    //    }


    //    [EnableCors("CorsPolicy")]
    //    [HttpDelete("shiftgroup/dist/{CompanyId}/{Username}/{id}")]
    //    public IActionResult DefinitionDeleteShiftGroupDist(string CompanyId, string Username, int id)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        OkObjectResult result = null;
    //        try
    //        {
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@id", id), outParam };
    //            result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Def_DeleteShiftGroupDistribution", param, out strOutParam));
    //            Util.CreateLog(appSettings, operationTime, "DefinitionDeleteShiftGroupDist", Username, CompanyId, "definitions/shiftgroup/dist/" + CompanyId + '/' + Username + '/' + id.ToString(), result);
    //            return result;

    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "DefinitionDeleteShiftGroupDist", Username, CompanyId, "definitions/shiftgroup/dist/" + CompanyId + '/' + Username + '/' + id.ToString(), ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }
    //    }

    //    #endregion



    //    [EnableCors("CorsPolicy")]
    //    [HttpGet("detail/{CompanyId}/{Username}/{type}/{code}")]
    //    public IActionResult DefinitionGetTypeDetail(string CompanyId, string Username, string type, string code)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        OkObjectResult result = null;
    //        try
    //        {
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@type", type), new SqlParameter("@code", code), outParam };
    //            result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Def_GetTypeDetail", param, out strOutParam));
    //            Util.CreateLog(appSettings, operationTime, "DefinitionGetTypeDetail", Username, CompanyId, "definitions/detail/" + CompanyId + '/' + Username + '/' + type + '/' + code, result);
    //            return result;

    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "DefinitionGetTypeDetail", Username, CompanyId, "definitions/detail/" + CompanyId + '/' + Username + '/' + type + '/' + code, ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }
    //    }

    //    [EnableCors("CorsPolicy")]
    //    [HttpPost("")]
    //    public IActionResult DefinitionPostType([FromBody]PostDefinitionRequest model)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        OkObjectResult result = null;
    //        try
    //        {
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            //if (model.type == "personnel")
    //            //{
    //            SqlParameter[] param = { new SqlParameter("@CompanyId", model.CompanyId), new SqlParameter("@Username", model.Username), new SqlParameter("@type", model.type), new SqlParameter("@code", model.code), new SqlParameter("@name", model.name), new SqlParameter("@subcode", model.subcode), new SqlParameter("@subname", model.subname), outParam };
    //            result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Def_PostType", param, out strOutParam));
    //            //}
    //            Util.CreateLog(appSettings, operationTime, "DefinitionPostType", model.Username, model.CompanyId, model, result);

    //            return result;

    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "DefinitionPostType", model.Username, model.CompanyId, model, ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }
    //    }


    //    [EnableCors("CorsPolicy")]
    //    [HttpPost("detail")]
    //    public IActionResult DefinitionPostTypeDetail([FromBody]PostDefinitionDetailRequest model)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        OkObjectResult result = null;
    //        try
    //        {
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = { new SqlParameter("@CompanyId", model.CompanyId), new SqlParameter("@Username", model.Username), new SqlParameter("@id", model.id), new SqlParameter("@type", model.type), new SqlParameter("@code", model.code), new SqlParameter("@firstValue", (model.type == "RoundingDay" ? model.firstDayValue : model.firstHourValue)), new SqlParameter("@finalValue", (model.type == "RoundingDay" ? model.finalDayValue : model.finalHourValue)), new SqlParameter("@plainValue", (model.type == "RoundingDay" ? model.plainDayValue : model.plainHourValue)), outParam };
    //            result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Def_PostTypeDetail", param, out strOutParam));
    //            Util.CreateLog(appSettings, operationTime, "DefinitionPostTypeDetail", model.Username, model.CompanyId, model, result);
    //            return result;

    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "DefinitionPostTypeDetail", model.Username, model.CompanyId, model, ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }
    //    }

    //    [EnableCors("CorsPolicy")]
    //    [HttpDelete("{CompanyId}/{Username}/{type}/{code}")]
    //    public IActionResult DefinitionDeleteType(string CompanyId, string Username, string type, string code)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        OkObjectResult result = null;
    //        try
    //        {
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@type", type), new SqlParameter("@code", code), outParam };
    //            result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Def_DeleteType", param, out strOutParam));
    //            Util.CreateLog(appSettings, operationTime, "DefinitionDeleteType", Username, CompanyId, "definitions/" + CompanyId + '/' + Username + '/' + type + '/' + code, result);
    //            return result;

    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "DefinitionDeleteType", Username, CompanyId, "definitions/" + CompanyId + '/' + Username + '/' + type + '/' + code, ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }
    //    }


    //    [EnableCors("CorsPolicy")]
    //    [HttpDelete("detail/{CompanyId}/{Username}/{type}/{id}")]
    //    public IActionResult DefinitionDeleteTypeDetail(string CompanyId, string Username, string type, int id)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        OkObjectResult result = null;
    //        try
    //        {
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@type", type), new SqlParameter("@id", id), outParam };
    //            result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Def_DeleteType", param, out strOutParam));
    //            Util.CreateLog(appSettings, operationTime, "DefinitionDeleteTypeDetail", Username, CompanyId, "definitions/detail/" + CompanyId + '/' + Username + '/' + id.ToString(), result);
    //            return result;

    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "DefinitionGetWorkingTypes", Username, CompanyId, "definitions/detail/" + CompanyId + '/' + Username + '/' + id.ToString(), ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }
    //    }
    //}


    //[Route("authorization")]
    //[ApiController]
    //public class AuthorizationController : Controller
    //{
    //    private readonly IOptions<MySettingsModel> appSettings;

    //    public AuthorizationController(IOptions<MySettingsModel> app)
    //    {
    //        appSettings = app;
    //    }

    //    [EnableCors("CorsPolicy")]
    //    [HttpGet("companies/{CompanyId}/{Username}")]
    //    public IActionResult GetCompanies(string CompanyId, string Username)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        OkObjectResult result = null;
    //        try
    //        {
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = { outParam };
    //            result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Auth_GetCompanies", param, out strOutParam));
    //            Util.CreateLog(appSettings, operationTime, "GetCompanies", Username, CompanyId, "authorization/companies/" + CompanyId + '/' + Username, result.Value);
    //            return result;

    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "GetCompanies", Username, CompanyId, "authorization/companies/" + CompanyId + "/" + Username, ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }
    //    }


    //    [EnableCors("CorsPolicy")]
    //    [HttpGet("treeview/{CompanyId}/{Username}/{Lng}")]
    //    public IActionResult GetTreeView(string CompanyId, string Username, string Lng)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        try
    //        {
    //            SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@Lng", Lng) };
    //            OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData<Dictionary<object, object>>(appSettings.Value.BasDB.ConnectionString, "BAS_Auth_GetTreeView", r => r.GetMenuTreeInfo(), param));
    //            Util.CreateLog(appSettings, operationTime, "GetTreeView", Username, CompanyId, "authorization/treeview/" + CompanyId + '/' + Username + '/' + Lng, result.Value);
    //            return result;
    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "GetTreeView", Username, CompanyId, "authorization/companies/" + CompanyId + "/" + Username + '/' + Lng, ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }
    //    }

    //    [EnableCors("CorsPolicy")]
    //    [HttpPost("treeview")]
    //    public IActionResult PostTreeView([FromBody]List<TodoItemFlatNode> model)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        if (model.Count == 0) return Ok(null);

    //        try
    //        {
    //            OkObjectResult result = null;
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = { new SqlParameter("@CompanyId", model[0].CompanyId), new SqlParameter("@Username", model[0].Username), new SqlParameter("@groupCode", model[0].groupCode), outParam };
    //            SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Auth_DeleteTreeView", param, out strOutParam);
    //            foreach (var sItem in model)
    //            {
    //                SqlParameter[] param2 = { new SqlParameter("@CompanyId", sItem.CompanyId), new SqlParameter("@Username", sItem.Username), new SqlParameter("@item", sItem.item), new SqlParameter("@groupCode", sItem.groupCode), new SqlParameter("@level", sItem.level), new SqlParameter("@expandable", sItem.expandable), outParam };
    //                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Auth_PostTreeView", param2, out strOutParam));
    //                Util.CreateLog(appSettings, operationTime, "PostTreeView", sItem.Username, sItem.CompanyId, model, result.Value);
    //            }

    //            return result;
    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "PostTreeView", model.ToArray()[0].Username, model.ToArray()[0].CompanyId, model, ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }
    //    }

    //    [EnableCors("CorsPolicy")]
    //    [HttpGet("{CompanyId}/{Username}/{route}")]
    //    public IActionResult GetUser(string CompanyId, string Username, string route)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        try
    //        {
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@route", route.Replace("@", "/")), outParam };
    //            OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Auth_GetUser", param, out strOutParam));
    //            Util.CreateLog(appSettings, operationTime, "PostTreeView", Username, CompanyId, "authorization/" + CompanyId + '/' + Username + '/' + route, result.Value);
    //            return result;
    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "PostTreeView", Username, CompanyId, "authorization/" + CompanyId + '/' + Username + '/' + route, ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }


    //    }



    //    [EnableCors("CorsPolicy")]
    //    [HttpPost("")]
    //    public IActionResult GetUserTabs([FromBody]List<GetUserTabsRequest> model)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        try
    //        {
    //            Dictionary<string, object> obj = new Dictionary<string, object>();
    //            List<Auth> list = new List<Auth>();
    //            foreach (var item in model)
    //            {
    //                Auth response = new Auth();
    //                SqlParameter[] param = { new SqlParameter("@CompanyId", item.CompanyId), new SqlParameter("@Username", item.Username), new SqlParameter("@tabname", item.tabname) };
    //                response = SqlHelper.ExecuteProcedureReturnData<Auth>(appSettings.Value.BasDB.ConnectionString, "BAS_Auth_GetUserTabs", r => r.GetUserTabs(), param);
    //                list.Add(response);
    //            }

    //            Util.CreateLog(appSettings, operationTime, "GetUserTabs", model.ToArray()[0].Username, model.ToArray()[0].CompanyId, model, list);
    //            return Ok(list);
    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "GetUserTabs", model.ToArray()[0].Username, model.ToArray()[0].CompanyId, model, ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }
    //    }

    //    [EnableCors("CorsPolicy")]
    //    [HttpGet("groups/{CompanyId}/{Username}")]
    //    public IActionResult GetGroups(string CompanyId, string Username)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        try
    //        {
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), outParam };
    //            OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Auth_GetGroups", param, out strOutParam));
    //            Util.CreateLog(appSettings, operationTime, "GetGroups", Username, CompanyId, "authorization/groups/" + CompanyId + '/' + Username, result);
    //            return result;

    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "GetGroups", Username, CompanyId, "authorization/groups/" + CompanyId + '/' + Username, ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }
    //    }

    //    [EnableCors("CorsPolicy")]
    //    [HttpGet("users/{CompanyId}/{Username}")]
    //    public IActionResult GetUsers(string CompanyId, string Username)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        try
    //        {
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), outParam };
    //            OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Auth_GetUsers", param, out strOutParam));
    //            Util.CreateLog(appSettings, operationTime, "GetUsers", Username, CompanyId, "authorization/users/" + CompanyId + '/' + Username, result);
    //            return result;

    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "GetGroups", Username, CompanyId, "authorization/users/" + CompanyId + '/' + Username, ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }
    //    }

    //    [EnableCors("CorsPolicy")]
    //    [HttpGet("menu/group/{CompanyId}/{Username}/{groupCode}")]
    //    public IActionResult GetTreeGroup(string CompanyId, string Username, string groupCode)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        try
    //        {
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@groupCode", groupCode), outParam };
    //            OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Auth_GetTreeGroup", param, out strOutParam));
    //            Util.CreateLog(appSettings, operationTime, "GetTreeGroup", Username, CompanyId, "authorization/menu/group/" + CompanyId + '/' + Username + '/' + groupCode, result);
    //            return result;
    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "GetTreeGroup", Username, CompanyId, "authorization/menu/group/" + CompanyId + '/' + Username + '/' + groupCode, ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }
    //    }

    //    [EnableCors("CorsPolicy")]
    //    [HttpGet("menu/user/{CompanyId}/{Username}")]
    //    public IActionResult GetMenuUser(string CompanyId, string Username)
    //    {

    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        try
    //        {
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), outParam };
    //            OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Auth_GetMenuUser", param, out strOutParam));
    //            Util.CreateLog(appSettings, operationTime, "GetMenuUser", Username, CompanyId, "authorization/menu/user/" + CompanyId + '/' + Username, result);
    //            return result;
    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "GetMenuUser", Username, CompanyId, "authorization/menu/user/" + CompanyId + '/' + Username, ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }
    //    }

    //    [EnableCors("CorsPolicy")]
    //    [HttpGet("menu/groups/{CompanyId}/{Username}")]
    //    public IActionResult GetMenuGroups(string CompanyId, string Username)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        try
    //        {
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), outParam };
    //            OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Auth_GetMenuGroup", param, out strOutParam));
    //            Util.CreateLog(appSettings, operationTime, "GetMenuGroups", Username, CompanyId, "authorization/menu/groups/" + CompanyId + '/' + Username, result);
    //            return result;
    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "GetMenuGroups", Username, CompanyId, "authorization/menu/groups/" + CompanyId + '/' + Username, ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }

    //    }

    //    [EnableCors("CorsPolicy")]
    //    [HttpPost("menu/group")]
    //    public IActionResult PostMenuGroup([FromBody]PostMenuGroupRequest model)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        try
    //        {
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = { new SqlParameter("@CompanyId", model.CompanyId), new SqlParameter("@Username", model.Username), new SqlParameter("@GroupCode", model.groupCode), new SqlParameter("@GroupName", model.groupName), outParam };
    //            OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Auth_PostMenuGroup", param, out strOutParam));
    //            Util.CreateLog(appSettings, operationTime, "PostMenuGroup", model.Username, model.CompanyId, model, result);
    //            return result;
    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "PostMenuGroup", model.Username, model.CompanyId, model, ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }
    //    }


    //    [EnableCors("CorsPolicy")]
    //    [HttpDelete("menu/group/{CompanyId}/{Username}/{Code}")]
    //    public IActionResult AuthDeleteMenuGroup(string CompanyId, string Username, string Code)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        try
    //        {
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@Code", Code), outParam };
    //            OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Auth_DeleteMenuGroup", param, out strOutParam));
    //            Util.CreateLog(appSettings, operationTime, "AuthDeleteMenuGroup", Username, CompanyId, "authorization/menu/group/" + CompanyId + '/' + Username, result);
    //            return result;
    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "AuthDeleteMenuGroup", Username, CompanyId, "authorization/menu/group/" + CompanyId + '/' + Username, ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }
    //    }


    //    [EnableCors("CorsPolicy")]
    //    [HttpPost("menu/user")]
    //    public IActionResult PostMenuUser([FromBody]PostMenuUserRequest model)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        try
    //        {
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = { new SqlParameter("@CompanyId", model.CompanyId), new SqlParameter("@Username", model.Username), new SqlParameter("@GroupCode", model.groupCode), new SqlParameter("@UserCode", model.userCode), outParam };
    //            OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Auth_PostMenuUser", param, out strOutParam));
    //            Util.CreateLog(appSettings, operationTime, "PostMenuUser", model.Username, model.CompanyId, model, result);
    //            return result;
    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "PostMenuUser", model.Username, model.CompanyId, model, ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }
    //    }


    //    [EnableCors("CorsPolicy")]
    //    [HttpDelete("menu/user/{CompanyId}/{Username}/{Code}")]
    //    public IActionResult AuthDeleteMenuUser(string CompanyId, string Username, string Code)
    //    {
    //        DateTime operationTime = DateTime.Now;
    //        string strOutParam = string.Empty;
    //        try
    //        {
    //            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
    //            SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@Code", Code), outParam };
    //            OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Auth_DeleteMenuUser", param, out strOutParam));
    //            Util.CreateLog(appSettings, operationTime, "AuthDeleteMenuUser", Username, CompanyId, "authorization/menu/user/" + CompanyId + '/' + Username + '/' + Code, result);
    //            return result;
    //        }
    //        catch (Exception ex)
    //        {
    //            Util.CreateLog(appSettings, operationTime, "AuthDeleteMenuUser", Username, CompanyId, "authorization/menu/user/" + CompanyId + '/' + Username + '/' + Code, ex.Message + "-" + ex.InnerException);
    //            throw ex;
    //        }
    //    }

    //}









}

