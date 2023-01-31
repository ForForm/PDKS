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


   

    [Route("todo")]
    [ApiController]
    public class TodoController : Controller
    {
        private readonly IOptions<MySettingsModel> appSettings;

        public TodoController(IOptions<MySettingsModel> app)
        {
            appSettings = app;
        }


 
        [EnableCors("CorsPolicy")]
        [HttpGet("{CompanyId}/{Username}/{Id}")]
        public IActionResult GetTodo(string CompanyId, string Username, int Id)
        {

            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                OkObjectResult result = null;
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyID", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@Id", Id),  outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetUserTodo", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetTodo", Username, CompanyId, "message/" + CompanyId + "/" + Username, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetTodo", Username, CompanyId, "message/" + CompanyId + "/" + Username, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpPost("")]
        public IActionResult PostTodo([FromBody] PostTodoRequest item)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {

                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", item.CompanyId), new SqlParameter("@Username", item.Username),new SqlParameter("@Todo", item.Todo),
                    new SqlParameter("@TodoDate", item.TodoDate),new SqlParameter("@Remind", item.Remind),
                        new SqlParameter("@ID", item.ID), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostUserTodo", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "PostTodo", item.Username, item.CompanyId, item, result);


                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PostTodo", item.Username, item.CompanyId, item, ex.Message + " - " + ex.InnerException);
                throw ex;
            }

        }


        [EnableCors("CorsPolicy")]
        [HttpDelete("{CompanyId}/{Username}/{Id}")]
        public IActionResult DeleteTodo(string CompanyId, string Username, int Id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@ID", Id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_DeleteUserTodo", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "DeleteTodo", Username, CompanyId,  CompanyId + '/' + Username + '/' + Id.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DeleteTodo", Username, CompanyId,  CompanyId + '/' + Username + '/' + Id.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }



    }

}