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
using BASApp.ReportingModel;

namespace BASApp.Controllers
{


    //public static class Translator
    //{

    //    public static CalculatePermitsRequest GetPermitsInfo(this SqlDataReader reader)
    //    {
    //        CalculatePermitsRequest item = new CalculatePermitsRequest();
    //        while (reader.Read())
    //        {
    //            item.EmployeeID = SqlHelper.GetNullableInt32(reader, "EmployeeID");
    //            item.ReasonID = SqlHelper.GetNullableInt32(reader, "ReasonID");
    //            item.StartDate = SqlHelper.GetNullableDateTime(reader, "StartDate");
    //            item.StartTime = SqlHelper.GetNullableDateTime(reader, "StartTime");
    //            item.Day = SqlHelper.GetNullableInt32(reader, "Day");
    //            item.EndDate = SqlHelper.GetNullableDateTime(reader, "EndDate");
    //            item.EndTime = SqlHelper.GetNullableDateTime(reader, "EndTime");
    //            item.CalcDescription = SqlHelper.GetNullableString(reader, "CalcDescription");
    //            item.WorkDate = SqlHelper.GetNullableDateTime(reader, "WorkDate");
    //        }

    //        return item;
    //    }
    //}


    [Route("dashboard")]
    [ApiController]
    public class DashboardController : Controller
    {
        private readonly IOptions<MySettingsModel> appSettings;

        public DashboardController(IOptions<MySettingsModel> app)
        {
            appSettings = app;
        }

        [EnableCors("CorsPolicy")]
        [HttpDelete("{CompanyId}/{Username}/{Id}")]
        public IActionResult DeleteDashboard(string CompanyId, string Username, int Id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@ID", Id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_DeleteDashboard", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "DeleteDashboard", Username, CompanyId, "dashboard/" + CompanyId + '/' + Username + '/' + Id.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DeleteDashboard", Username, CompanyId, "dashboard/" + CompanyId + '/' + Username + '/' + Id.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpPost("definition")]
        public IActionResult PostDashboard([FromBody]PostDashboardRequest model)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", model.CompanyId),
                new SqlParameter("@Username", model.Username),
                new SqlParameter("@ID", model.ID),
                new SqlParameter("@Section", model.Section),
                new SqlParameter("@Type", model.Type),
                new SqlParameter("@View", model.View),
                new SqlParameter("@ShowX", model.ShowX),
                new SqlParameter("@ShowY", model.ShowY),
                new SqlParameter("@Xlabel", model.Xlabel),
                new SqlParameter("@Ylabel", model.Ylabel),
                new SqlParameter("@ShowDetail", model.ShowDetail),
                new SqlParameter("@DetailLabel", model.DetailLabel),
                new SqlParameter("@SpName", model.SpName),
                new SqlParameter("@BackgroundColor", model.BackgroundColor),
                new SqlParameter("@Top", model.Top),
                new SqlParameter("@Left", model.Left),
                outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostDashBoard", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "PostDashboard", model.Username, model.CompanyId, model, result);

                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PostDashboard", model.Username, model.CompanyId, model, ex.Message + " - " + ex.InnerException);
                throw ex;
            }

        }

        [EnableCors("CorsPolicy")]
        [HttpGet("definition/{CompanyId}/{Username}")]
        public IActionResult GetReportDefinition(string CompanyId, string Username)
        {

            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                OkObjectResult result = null;
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyID", CompanyId), new SqlParameter("@Username", Username), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetDashBoard", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetReportDefinition", Username, CompanyId, "dashboard/definition/" + CompanyId + "/" + Username, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetReportDefinition", Username, CompanyId, "dashboard/definition/" + CompanyId + "/" + Username, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpGet("report/{CompanyId}/{Username}/{SpName}")]
        public IActionResult GetReport(string CompanyId, string Username, string SpName)
        {

            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                //OkObjectResult result = null;
                //var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyID", CompanyId), new SqlParameter("@Username", Username) };
                //result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, SpName, param, out strOutParam));
                OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData<List<Series>>(appSettings.Value.BasDB.ConnectionString, SpName, r => r.GetDashReportSingle(), param));

                Util.CreateLog(appSettings, operationTime, "GetReportSingle", Username, CompanyId, "dashboard/report/" + CompanyId + "/" + Username + "/" + SpName, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetReportSingle", Username, CompanyId, "dashboard/report/" + CompanyId + "/" + Username + "/" + SpName, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpGet("reportgrid/{CompanyId}/{Username}/{SpName}")]
        public IActionResult GetReportGrid(string CompanyId, string Username, string SpName)
        {

            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                OkObjectResult result = null;
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, SpName, param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetReportGrid", Username, CompanyId, "dashboard/reportgrid/" + CompanyId + "/" + Username, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetReportGrid", Username, CompanyId, "dashboard/reportgrid/" + CompanyId + "/" + Username, ex.Message + "-" + ex.InnerException);
                throw ex;
            }

        }

        [EnableCors("CorsPolicy")]
        [HttpGet("reportgroup/{CompanyId}/{Username}/{SpName}")]
        public IActionResult GetReportGroup(string CompanyId, string Username, string SpName)
        {

            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username) };
                OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData<List<DashReportGroup>>(appSettings.Value.BasDB.ConnectionString, SpName, r => r.GetDashReportGroup(), param));

                Util.CreateLog(appSettings, operationTime, "GetReportGroup", Username, CompanyId, "dashboard/" + CompanyId + "/" + Username + "/" + SpName, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetReportGroup", Username, CompanyId, "dashboard/" + CompanyId + "/" + Username + "/" + SpName, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


    }

}