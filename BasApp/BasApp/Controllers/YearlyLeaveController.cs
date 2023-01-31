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
     


    [Route("yearlyleave")]
    [ApiController]
    public class YearlyLeaveController : Controller
    {
        private readonly IOptions<MySettingsModel> appSettings;

        public YearlyLeaveController(IOptions<MySettingsModel> app)
        {
            appSettings = app;
        }

 

        [EnableCors("CorsPolicy")]
        [HttpGet("{CompanyId}/{Username}/{Id}")]
        public IActionResult GetYearlyLeave(string CompanyId, string Username, int? Id)
        {

            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                OkObjectResult result = null;
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@ID", Id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetYearlyLeave", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetYearlyLeave", Username, CompanyId, "yearlyleave/" + CompanyId + "/" + Username, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetYearlyLeave", Username, CompanyId, "yearlyleave/" + CompanyId + "/" + Username, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpGet("detail/{CompanyId}/{Username}/{Id}")]
        public IActionResult GetYearlyLeaveDetail(string CompanyId, string Username, int? Id)
        {

            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                OkObjectResult result = null;
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@ID", Id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetYearlyLeaveDetail", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetYearlyLeaveDetail", Username, CompanyId, "yearlyleave/detail/" + CompanyId + "/" + Username, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetYearlyLeaveDetail", Username, CompanyId, "yearlyleave/detail/" + CompanyId + "/" + Username, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpGet("transactions/{CompanyId}/{Username}/{Id}/{Year}")]
        public IActionResult GetYearlyLeaveTransactions(string CompanyId, string Username, int? Id, int? Year)
        {

            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                OkObjectResult result = null;
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@ID", Id),
                    new SqlParameter("@Year", Year), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetYearlyLeaveTran", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetYearlyLeaveTransactions", Username, CompanyId, "yearlyleave/transactions/" + CompanyId + "/" + Username, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetYearlyLeaveTransactions", Username, CompanyId, "yearlyleave/transactions/" + CompanyId + "/" + Username, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [HttpPost("calculate")]
        public IActionResult CalculateYearlyLeave([FromBody]List<CalculateYearlyLeaveRequest> model)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                foreach (var item in model)
                {
                    var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                    SqlParameter[] param = { new SqlParameter("@CompanyId", model[0].CompanyId), new SqlParameter("@Username", model[0].Username),
                        new SqlParameter("@EmployeeID", item.Id),new SqlParameter("@CalculateDate", item.StartDate),  outParam };
                    result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_CalculateYearlyLeave", param, out strOutParam));
                    Util.CreateLog(appSettings, operationTime, "CalculateYearlyLeave", item.Username, item.CompanyId, model, result);

                    //Thread.Sleep(1000);
                    //return Ok(bCalc);
                }

                return Ok(model.Count);
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "CalculateYearlyLeave", model.ToArray()[0].Username, model.ToArray()[0].CompanyId, model, ex.Message + " - " + ex.InnerException);
                throw ex;
            }
        }


    }

}