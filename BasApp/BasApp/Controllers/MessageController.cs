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


   

    [Route("message")]
    [ApiController]
    public class MessageController : Controller
    {
        private readonly IOptions<MySettingsModel> appSettings;

        public MessageController(IOptions<MySettingsModel> app)
        {
            appSettings = app;
        }


 
        [EnableCors("CorsPolicy")]
        [HttpGet("{CompanyId}/{Username}/{Type}/{UserId}")]
        public IActionResult GetUserMessage(string CompanyId, string Username, int? Type, int? UserId)
        {

            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                OkObjectResult result = null;
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyID", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@Type", Type),
                    new SqlParameter("@ToUserID", UserId),outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetUserMessage", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetUserMessage", Username, CompanyId, "message/" + CompanyId + "/" + Username, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetUserMessage", Username, CompanyId, "message/" + CompanyId + "/" + Username, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpPost("read")]
        public IActionResult PostUserMessageRead([FromBody] ReadUserMessageRequest item)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
               
                    var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                    SqlParameter[] param = { new SqlParameter("@CompanyId", item.CompanyId), new SqlParameter("@Username", item.Username),
                        new SqlParameter("@ID", item.Id), outParam };
                    result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostUserMessageRead", param, out strOutParam));
                    Util.CreateLog(appSettings, operationTime, "PostUserMessageRead", item.Username, item.CompanyId, item, result);
                 

                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PostUserMessageRead", item.Username, item.CompanyId, item, ex.Message + " - " + ex.InnerException);
                throw ex;
            }

        }


        [EnableCors("CorsPolicy")]
        [HttpPost("")]
        public IActionResult PostUserMessage([FromBody] PostUserMessageRequest item)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {

                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", item.CompanyId), new SqlParameter("@Username", item.Username),new SqlParameter("@Message", item.Message),
                        new SqlParameter("@ToUserID", item.ToUserID), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostUserMessage", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "PostUserMessage", item.Username, item.CompanyId, item, result);


                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PostUserMessage", item.Username, item.CompanyId, item, ex.Message + " - " + ex.InnerException);
                throw ex;
            }

        }


    }

}