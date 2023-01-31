using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using BasApp;
using BasApp.Translator;
using BASApp.AuthorizationModel;
using BASApp.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;


namespace BASApp.Controllers
{

   


    [Route("authorization")]
    [ApiController]
    public class AuthorizationController : Controller
    {
        private readonly IOptions<MySettingsModel> appSettings;

        public AuthorizationController(IOptions<MySettingsModel> app)
        {
            appSettings = app;
        }

        [EnableCors("CorsPolicy")]
        [HttpGet("companies/{CompanyId}/{Username}")]
        public IActionResult GetCompanies(string CompanyId, string Username)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetCompanies", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetCompanies", Username, CompanyId, "authorization/companies/" + CompanyId + '/' + Username, result.Value);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetCompanies", Username, CompanyId, "authorization/companies/" + CompanyId + "/" + Username, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }



        [EnableCors("CorsPolicy")]
        [HttpGet("companies/auth/{CompanyId}/{Username}/{GroupCode}")]
        public IActionResult GetCompaniesAuth(string CompanyId, string Username, string GroupCode)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@GroupCode", (GroupCode == "null" ? null : GroupCode)), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetCompaniesAuth", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetCompaniesAuth", Username, CompanyId, "authorization/companies/auth/" + CompanyId + '/' + Username, result.Value);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetCompaniesAuth", Username, CompanyId, "authorization/companies/auth/" + CompanyId + "/" + Username, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpPost("session")]
        public IActionResult PostUserSession([FromBody]PostUserSessionRequest model)
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
                    new SqlParameter("@Active", model.Active),
                    outParam
             };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostUserSession", param, out strOutParam));
                //}
                Util.CreateLog(appSettings, operationTime, "PostUserSession", model.Username, model.CompanyId, model, result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PostUserSession", model.Username, model.CompanyId, model, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpPost("companies")]
        public IActionResult PostCompany([FromBody]PostCompanyRequest model)
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
                    new SqlParameter("@Address", model.Address),
                    new SqlParameter("@Telephone1", model.Telephone1),
                    new SqlParameter("@Telephone2", model.Telephone2),
                    new SqlParameter("@Fax", model.Fax),
                    new SqlParameter("@Mail", model.Mail),
                    outParam
             };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostCompany", param, out strOutParam));
                //}
                Util.CreateLog(appSettings, operationTime, "PostCompany", model.Username, model.CompanyId, model, result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PostCompany", model.Username, model.CompanyId, model, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpDelete("companies/{CompanyId}/{Username}/{ID}")]
        public IActionResult DeleteCompany(string CompanyId, string Username, int ID)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId),
                    new SqlParameter("@Username", Username),new SqlParameter("@ID", ID), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_DeleteCompany", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "DeleteCompany", Username, CompanyId, "authorization/companies/" + CompanyId + '/' + Username + '/' + ID.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DeleteCompany", Username, CompanyId, "authorization/companies/" + CompanyId + '/' + Username + '/' + ID.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpGet("treeview/{CompanyId}/{Username}/{Lng}")]
        public IActionResult GetTreeView(string CompanyId, string Username, string Lng)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@Lng", Lng) };
                OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData<Dictionary<object, object>>(appSettings.Value.BasDB.ConnectionString, "BAS_GetTreeView", r => r.GetMenuTreeInfo(), param));
                Util.CreateLog(appSettings, operationTime, "GetTreeView", Username, CompanyId, "authorization/treeview/" + CompanyId + '/' + Username + '/' + Lng, result.Value);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetTreeView", Username, CompanyId, "authorization/companies/" + CompanyId + "/" + Username + '/' + Lng, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpPost("treeview")]
        public IActionResult PostTreeView([FromBody]TodoItemFlatNodes model)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            if (model.todoItemFlatNode.Count == 0) return Ok(null);

            try
            {
                OkObjectResult result = null;


                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyID", model.todoItemFlatNode[0].CompanyId), new SqlParameter("@Username", model.todoItemFlatNode[0].Username), new SqlParameter("@GroupCode", model.todoItemFlatNode[0].groupCode), outParam };
                SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_DeleteTreeView", param, out strOutParam);
                foreach (var item in model.companyAuth)
                {
                    foreach (var sItem in model.todoItemFlatNode)
                    {
                        SqlParameter[] param2 = { new SqlParameter("@CompanyID", item.ID), new SqlParameter("@Username", sItem.Username), new SqlParameter("@Item", sItem.item), new SqlParameter("@GroupCode", sItem.groupCode), new SqlParameter("@GroupName", sItem.groupName), new SqlParameter("@Level", sItem.level), new SqlParameter("@Expandable", sItem.expandable), outParam };
                        result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostTreeView", param2, out strOutParam));
                        Util.CreateLog(appSettings, operationTime, "PostTreeView", sItem.Username, sItem.CompanyId, model, result.Value);
                    }

                }
                return result==null?Ok(null):result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PostTreeView", model.todoItemFlatNode.ToArray()[0].Username, model.todoItemFlatNode.ToArray()[0].CompanyId, model, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpGet("{CompanyId}/{Username}/{route}")]
        public IActionResult GetUser(string CompanyId, string Username, string route)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@route", route.Replace("@", "/")), outParam };
                OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetUser", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "PostTreeView", Username, CompanyId, "authorization/" + CompanyId + '/' + Username + '/' + route, result.Value);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PostTreeView", Username, CompanyId, "authorization/" + CompanyId + '/' + Username + '/' + route, ex.Message + "-" + ex.InnerException);
                throw ex;
            }


        }

        [EnableCors("CorsPolicy")]
        [HttpPost("")]
        public IActionResult GetUserTabs([FromBody]List<GetUserTabsRequest> model)
        {
            DateTime operationTime = DateTime.Now;
            try
            {
                Dictionary<string, object> obj = new Dictionary<string, object>();
                List<Auth> list = new List<Auth>();
                foreach (var item in model)
                {
                    Auth response = new Auth();
                    SqlParameter[] param = { new SqlParameter("@CompanyID", item.CompanyId), new SqlParameter("@Username", item.Username), new SqlParameter("@Tabname", item.tabname) };
                    response = SqlHelper.ExecuteProcedureReturnData<Auth>(appSettings.Value.BasDB.ConnectionString, "BAS_GetUserTabs", r => r.GetUserTabs(), param);
                    list.Add(response);
                }

                Util.CreateLog(appSettings, operationTime, "GetUserTabs", model.ToArray()[0].Username, model.ToArray()[0].CompanyId, model, list);
                return Ok(list);
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetUserTabs", model.ToArray()[0].Username, model.ToArray()[0].CompanyId, model, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpGet("groups/{CompanyId}/{Username}")]
        public IActionResult GetGroups(string CompanyId, string Username)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), outParam };
                OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetGroups", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetGroups", Username, CompanyId, "authorization/groups/" + CompanyId + '/' + Username, result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetGroups", Username, CompanyId, "authorization/groups/" + CompanyId + '/' + Username, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpGet("users/{CompanyId}/{Username}")]
        public IActionResult GetUsers(string CompanyId, string Username)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), outParam };
                OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetUsers", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetUsers", Username, CompanyId, "authorization/users/" + CompanyId + '/' + Username, result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetUsers", Username, CompanyId, "authorization/users/" + CompanyId + '/' + Username, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpGet("userlog/{CompanyId}/{Username}/{UserId}")]
        public IActionResult GetUserLog(string CompanyId, string Username, string UserId)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@UserId", UserId), outParam };
                OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetUserLog", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetUserLog", Username, CompanyId, "authorization/userlog/" + CompanyId + '/' + Username, result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetUserLog", Username, CompanyId, "authorization/userlog/" + CompanyId + '/' + Username, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpPost("userlog")]
        public IActionResult PostUserLog([FromBody]PostUserlogRequest model)
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
                    new SqlParameter("@UserId", model.UserID),
                    new SqlParameter("@PasswordNew", model.PasswordNew.ComputeHash()),
                    new SqlParameter("@RePasswordNew", model.RePasswordNew.ComputeHash()),
                    outParam
             };

                var data =SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostUserLog", param, out strOutParam);

                if (strOutParam == "200")
                    result = Ok(data);
                else
                    result = Ok(strOutParam);
                Util.CreateLog(appSettings, operationTime, "PostUserLog", model.Username, model.CompanyId, model, result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PostCompany", model.Username, model.CompanyId, model, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }



        [EnableCors("CorsPolicy")]
        [HttpPost("users")]
        public IActionResult PostUser([FromBody]PostUsersRequest model)
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
                    new SqlParameter("@EmployeeID", model.EmployeeId),
                    new SqlParameter("@Code", model.Code),
                    new SqlParameter("@Name", model.Name),
                    new SqlParameter("@Password", model.Password.ComputeHash()),
                    new SqlParameter("@IsAdmin", (model.IsAdmin==null?false:model.IsAdmin)),
                    new SqlParameter("@IsForced", (model.IsForced==null?false:model.IsForced)),
                    outParam
             };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostUsers", param, out strOutParam));
                //}
                Util.CreateLog(appSettings, operationTime, "PostCompany", model.Username, model.CompanyId, model, result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PostCompany", model.Username, model.CompanyId, model, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpGet("users/{CompanyId}/{Username}/{Id}")]
        public IActionResult DeleteUser(string CompanyId, string Username,int Id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@ID", Id), outParam };
                OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_DeleteUsers", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "DeleteUser", Username, CompanyId, "authorization/users/" + CompanyId + '/' + Username + '/' + Id.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DeleteUser", Username, CompanyId, "authorization/users/" + CompanyId + '/' + Username + '/' + Id.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpGet("menu/group/{CompanyId}/{Username}/{groupCode}")]
        public IActionResult GetTreeGroup(string CompanyId, string Username, string groupCode)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@groupCode", groupCode), outParam };
                OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetTreeGroup", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetTreeGroup", Username, CompanyId, "authorization/menu/group/" + CompanyId + '/' + Username + '/' + groupCode, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetTreeGroup", Username, CompanyId, "authorization/menu/group/" + CompanyId + '/' + Username + '/' + groupCode, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpGet("menu/user/{CompanyId}/{Username}")]
        public IActionResult GetMenuUser(string CompanyId, string Username)
        {

            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), outParam };
                OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetMenuUser", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetMenuUser", Username, CompanyId, "authorization/menu/user/" + CompanyId + '/' + Username, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetMenuUser", Username, CompanyId, "authorization/menu/user/" + CompanyId + '/' + Username, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpGet("menu/groups/{CompanyId}/{Username}")]
        public IActionResult GetMenuGroups(string CompanyId, string Username)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), outParam };
                OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetMenuGroup", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetMenuGroups", Username, CompanyId, "authorization/menu/groups/" + CompanyId + '/' + Username, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetMenuGroups", Username, CompanyId, "authorization/menu/groups/" + CompanyId + '/' + Username, ex.Message + "-" + ex.InnerException);
                throw ex;
            }

        }

        [EnableCors("CorsPolicy")]
        [HttpPost("menu/group")]
        public IActionResult PostMenuGroup([FromBody]PostMenuGroupRequest model)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", model.CompanyId), new SqlParameter("@Username", model.Username), new SqlParameter("@GroupCode", model.groupCode), new SqlParameter("@GroupName", model.groupName), outParam };
                OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostMenuGroup", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "PostMenuGroup", model.Username, model.CompanyId, model, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PostMenuGroup", model.Username, model.CompanyId, model, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpDelete("menu/group/{CompanyId}/{Username}/{Code}")]
        public IActionResult AuthDeleteMenuGroup(string CompanyId, string Username, string Code)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@Code", Code), outParam };
                OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_DeleteMenuGroup", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "AuthDeleteMenuGroup", Username, CompanyId, "authorization/menu/group/" + CompanyId + '/' + Username, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "AuthDeleteMenuGroup", Username, CompanyId, "authorization/menu/group/" + CompanyId + '/' + Username, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpPost("menu/user")]
        public IActionResult PostMenuUser([FromBody]PostMenuUserRequest model)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", model.CompanyId), new SqlParameter("@Username", model.Username), new SqlParameter("@GroupCode", model.groupCode), new SqlParameter("@UserCode", model.userCode), outParam };
                OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostMenuUser", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "PostMenuUser", model.Username, model.CompanyId, model, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PostMenuUser", model.Username, model.CompanyId, model, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpDelete("menu/user/{CompanyId}/{Username}/{Code}")]
        public IActionResult AuthDeleteMenuUser(string CompanyId, string Username, string Code)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@Code", Code), outParam };
                OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_DeleteMenuUser", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "AuthDeleteMenuUser", Username, CompanyId, "authorization/menu/user/" + CompanyId + '/' + Username + '/' + Code, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "AuthDeleteMenuUser", Username, CompanyId, "authorization/menu/user/" + CompanyId + '/' + Username + '/' + Code, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

    }

}