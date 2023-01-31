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


    [Route("report")]
    [ApiController]
    public class ReportingController : Controller
    {
        private readonly IOptions<MySettingsModel> appSettings;

        public ReportingController(IOptions<MySettingsModel> app)
        {
            appSettings = app;
        }

 

        [EnableCors("CorsPolicy")]
        [HttpGet("{CompanyId}/{Username}")]
        public IActionResult GetReport(string CompanyId, string Username)
        {

            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                OkObjectResult result = null;
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetReport", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetReport", Username, CompanyId, "report/" + CompanyId + "/" + Username, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetReport", Username, CompanyId, "report/" + CompanyId + "/" + Username, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpGet("def/{CompanyId}/{Username}/{ReportName}/{DefId}")]
        public IActionResult GetReportDef(string CompanyId, string Username, string ReportName, string DefId)
        {

            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                OkObjectResult result = null;
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username),
                    new SqlParameter("@ReportName", ReportName=="null"?null:ReportName),new SqlParameter("@DefId", DefId=="null"?null:DefId), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetReportDef", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetReportDef", Username, CompanyId, "report/def/" + CompanyId + "/" + Username + "/" + ReportName + "/" + DefId, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetReportDef", Username, CompanyId, "report/def/" + CompanyId + "/" + Username + "/" + ReportName + "/" + DefId, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpPost("def")]
        public IActionResult PostReportDef([FromBody]PostReportDefRequest model)
        {

            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;

            //string sqlText = string.Empty;
            //if (model.ParamsValue!=null)
            //{
            //    int say = 0;
            //    foreach (var item in model.ParamsValue)
            //    {
            //        say++;
            //        if (model.ParamsValue.Count==say)
            //        sqlText += item.ParamName + "=" + "'"+ item.ParamValue + "'";
            //        else
            //        sqlText += item.ParamName+"="+ "'" + item.ParamValue + "'" + " and ";
            //    }

            //}

            try
            {
                OkObjectResult result = null;
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = {
                    new SqlParameter("@CompanyId", model.CompanyId),
                    new SqlParameter("@Username", model.Username),
                    new SqlParameter("@ID", model.DefId),
                    new SqlParameter("@ReportName", model.ReportName),
                    new SqlParameter("@Name", model.DefName),
                    new SqlParameter("@Sql", JsonConvert.SerializeObject(model.ParamsValue)),
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
                    new SqlParameter("@Collar1", model.Collar1==string.Empty?null:model.Collar1),
                    new SqlParameter("@Collar2", model.Collar2==string.Empty?null:model.Collar2),
                    new SqlParameter("@StartDate", model.StartDate),
                    new SqlParameter("@EndDate", model.EndDate),
                    outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostReportDefinition", param, out strOutParam));
                result.Value = strOutParam;
                Util.CreateLog(appSettings, operationTime, "PostReportDefinition", model.Username, model.CompanyId, model, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PostReportDefinition", model.Username, model.CompanyId, model, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpDelete("def/{CompanyId}/{Username}/{Id}")]
        public IActionResult DeleteReportDef(string CompanyId, string Username, int Id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@ID", Id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_DeleteReportDef", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "DeleteReportDef", Username, CompanyId, "report/def/" + CompanyId + '/' + Username + '/' + Id.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DeleteReportDef", Username, CompanyId, "report/def/" + CompanyId + '/' + Username + '/' + Id.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }



        [EnableCors("CorsPolicy")]
        [HttpGet("params/{CompanyId}/{Username}/{name}")]
        public IActionResult GetReportingParams(string CompanyId, string Username,string name)
        {

            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                OkObjectResult result = null;
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@Name", name), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetReportParams", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetReportParams", Username, CompanyId, "reporting/params" + CompanyId + "/" + Username + "/" + name, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetReportingParams", Username, CompanyId, "reporting/params" + CompanyId + "/" + Username + "/" + name, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        public void UpdateReportParam(string CompanyId, int? DefId)
        {
            List<SqlParameter> paramList = new List<SqlParameter>();
            paramList.Add(new SqlParameter("@CompanyId", CompanyId));
            paramList.Add(new SqlParameter("@DefId", DefId));            
            SqlHelper.ExecuteNonQuery(appSettings.Value.BasDB, "BAS_UpdateReportDef", paramList.ToArray());
        }
            
        [EnableCors("CorsPolicy")]
        [HttpPost("")]
        public IActionResult ExecReporting([FromBody]ExecReportingRequest model)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {

                if (model.Params!=null)
                foreach (var item in model.Params)
                {
                    if (item.ParamName == "@CompanyId")
                        item.ParamValue = model.CompanyId;
                    if (item.ParamName == "@Username")
                        item.ParamValue = model.Username;
                    if (item.ParamName == "@ReportDefinitionID")
                        item.ParamValue = model.DefId;

                }

                List<SqlParameter> paramList = new List<SqlParameter>();
                foreach (var item in model.Params)
                paramList.Add(new SqlParameter(item.ParamName, (item.ParamValue == string.Empty ? null : item.ParamValue)));
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, model.SpName, paramList.ToArray(), out strOutParam));
                UpdateReportParam(model.CompanyId, model.DefId);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "ExecReporting", model.Username, model.CompanyId, model, ex.Message + " - " + ex.InnerException);
                throw ex;
            }

        }



    }

}