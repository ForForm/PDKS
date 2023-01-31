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
using BASApp.LoginModel;
using BASApp.Models;


namespace BASApp.Controllers
{

    [Route("system")]
    [ApiController]
    public class SystemController : Controller
    {
        private readonly IOptions<MySettingsModel> appSettings;

        public SystemController(IOptions<MySettingsModel> app)
        {
            appSettings = app;
        }

        [EnableCors("CorsPolicy")]
        [HttpGet("{CompanyId}/{Username}")]
        public IActionResult GetSystemHost(string CompanyId, string Username)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                OkObjectResult result = null;
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetSystemHost", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetSystemHost", Username, CompanyId, "system/" + CompanyId + "/" + Username, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetSystemHost", Username, CompanyId, "system/" + CompanyId + "/" + Username, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpGet("table/{CompanyId}/{Username}/{Id}")]
        public IActionResult GetSystemHostTable(string CompanyId, string Username, int Id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                OkObjectResult result = null;
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@SystemDbID", Id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetSystemTable", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetSystemHostTable", Username, CompanyId, "system/table/" + CompanyId + "/" + Username, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetSystemHostTable", Username, CompanyId, "system/table/" + CompanyId + "/" + Username, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpGet("device/{CompanyId}/{Username}/{Id}")]
        public IActionResult GetDevices(string CompanyId, string Username, int? Id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                OkObjectResult result = null;
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@ID", Id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetDevice", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetDevices", Username, CompanyId, "system/table/" + CompanyId + "/" + Username, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetDevices", Username, CompanyId, "system/table/" + CompanyId + "/" + Username, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }



        [EnableCors("CorsPolicy")]
        [HttpDelete("device/{CompanyId}/{Username}/{id}/{SystemDbID}")]
        public IActionResult DeleteDevice(string CompanyId, string Username, int id, int SystemDbID)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId),
                    new SqlParameter("@Username", Username),new SqlParameter("@ID", id), new SqlParameter("@SystemDbID", SystemDbID),  outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_DeleteDevice", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "DeleteDevice", Username, CompanyId, "system/device/" + CompanyId + '/' + Username + '/' + id.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DeleteDevice", Username, CompanyId, "system/device/" + CompanyId + '/' + Username + '/' + id.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpPost("device")]
        public IActionResult PostDevice([FromBody]PostDeviceRequest model)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {

                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", model.CompanyId), new SqlParameter("@Username", model.Username),
                    new SqlParameter("@ID", model.ID),
                    new SqlParameter("@@SystemDbID", model.SystemDbID),
                    new SqlParameter("@Code", model.Code),
                    new SqlParameter("@Name", model.Name==null?string.Empty:model.Name),
                    new SqlParameter("@Type", model.Type==null?0:model.Type),
                    outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostDevice", param, out strOutParam));


                Util.CreateLog(appSettings, operationTime, "PostDevice", model.Username, model.CompanyId, model, result);

                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PostSystemHost", model.Username, model.CompanyId, model, ex.Message + " - " + ex.InnerException);
                throw ex;
            }

        }



        [EnableCors("CorsPolicy")]
        [HttpGet("table/columns/{CompanyId}/{Username}/{Id}/{Schema}/{Table}")]
        public IActionResult GetTransferColumnName(string CompanyId, string Username, int Id, string Schema, string Table)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                OkObjectResult result = null;
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username),
                    new SqlParameter("@ID", Id),new SqlParameter("@Schema", Schema),new SqlParameter("@Table", Table), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData<List<DBColumns>>(appSettings.Value.BasDB.ConnectionString, "BAS_GetSystemDb", r => r.GetColumns(), param));
                Util.CreateLog(appSettings, operationTime, "GetTransferColumnName", Username, CompanyId, "system/table/columns" + CompanyId + "/" + Username + "/" + Schema + "/" + Table, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetTransferColumnName", Username, CompanyId, "system/table/columns" + CompanyId + "/" + Username + "/" + Schema + "/" + Table, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpPost("table")]
        public IActionResult PostSystemTable([FromBody]PostSystemHostTableRequest model)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {

                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", model.CompanyId), new SqlParameter("@Username", model.Username),
                    new SqlParameter("@ID", model.ID),
                    new SqlParameter("@SystemDbID", model.SystemDbID),
                    new SqlParameter("@SourceField", model.SourceField),
                    new SqlParameter("@DestinationField", model.DestinationField),
                    new SqlParameter("@Start", model.Start),
                    new SqlParameter("@Length", model.Length),
                    outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostSystemTable", param, out strOutParam));


                Util.CreateLog(appSettings, operationTime, "PostSystemTable", model.Username, model.CompanyId, model, result);

                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PostSystemHost", model.Username, model.CompanyId, model, ex.Message + " - " + ex.InnerException);
                throw ex;
            }

        }


        [EnableCors("CorsPolicy")]
        [HttpPost("table/data")]
        public IActionResult GetSourceData([FromBody]List<PostSystemHostTableRequest> model)
        {
         
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {

                //var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", model[0].CompanyId), new SqlParameter("@Username", model[0].Username),
                    new SqlParameter("@ID", model[0].SystemDbID)};
                List<PostSystemDatabaseRequest> dbInfo = SqlHelper.ExecuteProcedureReturnData<List<PostSystemDatabaseRequest>>(appSettings.Value.BasDB.ConnectionString, "BAS_GetSystemDbDevices", r => r.GetSystemDatabase(), param);

                string connString = string.Format("Server={0};Database={1};Persist Security Info=True;User ID={2};Password={3};Connection Timeout=5000", dbInfo[0].Hostname, dbInfo[0].Database, dbInfo[0].Username, dbInfo[0].Password);
                List<Attendance> resultList = new List<Attendance>();
                List<AttendanceMapper> list = new List<AttendanceMapper>();

                string strDevicesSql = string.Empty;
                foreach (var item in model)
                {
                    if (item.DestinationField== "DeviceCode")
                    {
                        strDevicesSql = " and "+item.SourceField;
                    }
                }

                string strDevices = string.Empty;
                for (int i = 0; i < dbInfo.ToArray().Length; i++)
                {
                    if (dbInfo.ToArray().Length-1 == i)
                        strDevices += "'" + dbInfo.ToArray()[i].Code + "'";
                    else
                        strDevices += "'" + dbInfo.ToArray()[i].Code + "',";
                }

                strDevicesSql = strDevicesSql +" in ( "+ strDevices+" )";

                using (var sqlConnection = new SqlConnection(connString))
                {
                    using (var sqlCommand = sqlConnection.CreateCommand())
                    {
                        sqlCommand.CommandType = System.Data.CommandType.Text;
                        sqlCommand.CommandText = String.Format("select * from {0} (nolock) where 1=1 and {1}>{2} {3} {4}  order by {5} desc", dbInfo[0].DbTable, dbInfo[0].TransferIDColumn, dbInfo[0].TransferID, strDevicesSql, ((dbInfo[0].DbQuery==null || dbInfo[0].DbQuery ==string.Empty) ?string.Empty: " and " + dbInfo[0].DbQuery), dbInfo[0].TransferIDColumn );
                        sqlCommand.CommandTimeout = 0;
                        //sqlCommand.Parameters.Add(new SqlParameter("@Table", dbInfo.DbTable));
                        //sqlCommand.Parameters.Add(new SqlParameter("@Query", dbInfo.DbQuery));
                        //sqlCommand.Parameters.Add(new SqlParameter("@ID", model[0].SystemTransferDbID));
                        sqlConnection.Open();
                        SqlDataReader myReader = sqlCommand.ExecuteReader();

                        if (dbInfo[0].Inout == false)
                        {
                            model.Add(new PostSystemHostTableRequest { SourceField = "Type", ID=model[0].ID, SystemDbID = model[0].SystemDbID });
                        }

                        while (myReader.Read())
                        {
                            AttendanceMapper item = new AttendanceMapper();
                            foreach (var mItem in model)
                            {
                                try
                                {
                                    if (mItem.DestinationField == "CompanyCode") item.CompanyCode= Convert.ToString(myReader[mItem.SourceField]);
                                    if (mItem.DestinationField == "WorkingTypeID") item.WorkingTypeID = Convert.ToInt32(myReader[mItem.SourceField]);
                                    if (mItem.DestinationField == "WorkingTypeCode") item.WorkingTypeCode= Convert.ToString(myReader[mItem.SourceField]);
                                    if (mItem.DestinationField == "EmployeeID") item.EmployeeID= Convert.ToInt32(myReader[mItem.SourceField]);
                                    if (mItem.DestinationField == "EmployeeCode") item.EmployeeCode= Convert.ToString(myReader[mItem.SourceField]);
                                    if (mItem.DestinationField == "Barcode") item.Barcode = Convert.ToString(myReader[mItem.SourceField]);
                                    if (mItem.DestinationField == "Type") item.Type = Convert.ToString(myReader[mItem.SourceField]);
                                    if (mItem.DestinationField == "DeviceID") item.DeviceID= Convert.ToInt32(myReader[mItem.SourceField]);
                                    if (mItem.DestinationField== "DeviceCode") item.DeviceCode = Convert.ToString(myReader[mItem.SourceField]);
                                    if (mItem.DestinationField == "NewDateTime") item.NewDateTime = Convert.ToDateTime(myReader[mItem.SourceField]);
                                    item.TransferID = Convert.ToInt32(myReader[dbInfo[0].TransferIDColumn]);
                                                                    
                                }
                                catch (Exception ex)
                                {
                                    item.Exception = mItem.SourceField + " Alan Hatası-" + ex.Message;
                                }
                            }
                            list.Add(item);
                        }
                    }
                }

                List<AttendanceMapper> list2 = new List<AttendanceMapper>();
                //bool lastIDContinue = true;
                foreach (var item in list)
                {
                    //lastID = item.TransferID;
                    SqlParameter[] param2 = {new SqlParameter("@CompanyID", model[0].CompanyId), new SqlParameter("@CompanyCode", item.CompanyCode),
                        new SqlParameter("@WorkingTypeID", item.WorkingTypeID),
                        new SqlParameter("@WorkingTypeCode", item.WorkingTypeCode),
                        new SqlParameter("@EmployeeID", item.EmployeeID),
                        new SqlParameter("@EmployeeCode", item.EmployeeCode),
                        new SqlParameter("@Barcode", item.Barcode),
                        new SqlParameter("@Type", item.Type),
                        new SqlParameter("@DeviceID", item.DeviceID),
                        new SqlParameter("@DeviceCode", item.DeviceCode),
                        new SqlParameter("@NewDateTime", item.NewDateTime),
                        new SqlParameter("@SystemDbID", model[0].SystemDbID),
                        new SqlParameter("@TransferID", item.TransferID)

                    };
                    AttendanceMapper response= SqlHelper.ExecuteProcedureReturnData<AttendanceMapper>(appSettings.Value.BasDB.ConnectionString, "BAS_PostSystemTableMapper", r => r.GetSourceData(), param2);
                    if (response.EmployeeID != null)
                    {
                        response.TransferID = item.TransferID;
                        list2.Add(response);

                    }
                    //else
                    //    lastIDContinue = false;

                }







                //using (var sqlConnection = new SqlConnection(connString))
                //{
                //    foreach (var item in list)
                //    {
                //        int InoutChar = 0;

                //        if (dbInfo.Inout == true)
                //            InoutChar = (item.Type == dbInfo.InChar ? 0 : 1);

                //        using (var sqlCommand = sqlConnection.CreateCommand())
                //        {
                //            sqlCommand.CommandType = System.Data.CommandType.StoredProcedure;
                //            sqlCommand.CommandText = "[dbo].[BAS_ExecHostTableMapper]";
                //            sqlCommand.CommandTimeout = 0;
                //            SqlParameter[] param2 = {
                //                new SqlParameter("@CompanyCode", item.CompanyCode),
                //                new SqlParameter("@SystemTransferDbID", model[0].SystemTransferDbID),
                //                new SqlParameter("@Device",item.Device),
                //                new SqlParameter("@NewDateTime", item.NewDateTime),new SqlParameter("@Barcode", item.Barcode),
                //                new SqlParameter("@Type",InoutChar ),new SqlParameter("@Inout",dbInfo.Inout ),
                //                new SqlParameter("@WorkingTypeCode", item.WorkingTypeCode),
                //                new SqlParameter("@EmployeeCode", item.EmployeeCode) };
                //            sqlCommand.Parameters.AddRange(param2);
                //            sqlConnection.Open();
                //            SqlDataReader myReader = sqlCommand.ExecuteReader();
                //            while (myReader.Read())
                //            {
                //                Attendance mitem = new Attendance();
                //                if (model.Find(x => x.SourceField == "Device") != null)
                //                    try { mitem.Device = Convert.ToString(myReader["Device"]); } catch (Exception ex) { mitem.Exception += "Device Alan Hatası-" + ex.Message; };
                //                if (model.Find(x => x.SourceField == "NewDateTime") != null)
                //                    try { mitem.NewDateTime = Convert.ToDateTime(myReader["NewDateTime"]); } catch (Exception ex) { mitem.Exception += "NewDateTime Alan Hatası-" + ex.Message; };
                //                if (model.Find(x => x.SourceField == "Barcode") != null)
                //                    try { mitem.Barcode = Convert.ToString(myReader["Barcode"]); } catch (Exception ex) { mitem.Exception += "Barcode Alan Hatası-" + ex.Message; };
                //                if (model.Find(x => x.SourceField == "Type") != null)
                //                    try { mitem.Type = Convert.ToInt16(myReader["Type"]); } catch (Exception ex) { mitem.Exception += "Type Alan Hatası-" + ex.Message; };
                //                if (model.Find(x => x.SourceField == "WorkingTypeCode") != null)
                //                    try { mitem.ReasonID = Convert.ToInt16(myReader["WorkingTypeCode"]); } catch (Exception ex) { mitem.Exception += "WorkingTypeCode Alan Hatası-" + ex.Message; };
                //                if (model.Find(x => x.SourceField == "EmployeeCode") != null)
                //                    try { mitem.EmployeeID = Convert.ToInt32(myReader["EmployeeCode"]); } catch (Exception ex) { mitem.Exception += "EmployeeCode Alan Hatası-" + ex.Message; };
                //                mitem.SystemDatabaseID= Convert.ToInt32(myReader["EmployeeID"]);
                //                resultList.Add(mitem);
                //            }


                //            sqlConnection.Close();
                //        }
                //    }

                //}


                Util.CreateLog(appSettings, operationTime, "GetSourceData", model[0].Username, model[0].CompanyId, model, result);

                return Ok(list2);
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetSourceData", model[0].Username, model[0].CompanyId, model, ex.Message + " - " + ex.InnerException);
                throw ex;
            }

        }


        [EnableCors("CorsPolicy")]
        [HttpPost("table/controldata")]
        public IActionResult ControlSourceData([FromBody]List<Attendance> model)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = {
                        new SqlParameter("@CompanyId", model[0].CompanyId),
                        new SqlParameter("@Username", model[0].Username),
                        outParam };

                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_DeleteAttendanceTemp", param, out strOutParam));

                foreach (var item in model)
                {
                    //if (item.Exception == null)
                    //{
                        SqlParameter[] param2 = {
                        new SqlParameter("@CompanyId", model[0].CompanyId),
                        new SqlParameter("@Username", model[0].Username),
                        new SqlParameter("@LinkID", item.LinkID),
                        new SqlParameter("@EmployeeID", item.EmployeeID),
                        new SqlParameter("@Barcode", item.Barcode),
                        new SqlParameter("@Type", item.Type),
                        new SqlParameter("@ReasonID", item.ReasonID),
                        new SqlParameter("@Device", item.Device),
                        new SqlParameter("@NewDateTime", item.NewDateTime),
                        new SqlParameter("@Exception", item.Exception),
                        outParam };
                        result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostAttendanceTemp", param2, out strOutParam));
                    //}
                }



                Util.CreateLog(appSettings, operationTime, "ControlSourceData", model[0].Username, model[0].CompanyId, model, result);

                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "ControlSourceData", model[0].Username, model[0].CompanyId, model, ex.Message + " - " + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpPost("table/postdata")]
        public IActionResult PostSourceData([FromBody]List<PostSourceDataRequest> model)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                bool transferContinue = true;
                int transferID = 0;
                foreach (var item in model)
                {
                    if (item.Exception != string.Empty) { transferContinue = false; continue; };
                    var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                    SqlParameter[] param = {
                        new SqlParameter("@CompanyId", model[0].CompanyId),
                        new SqlParameter("@Username", model[0].Username),
                        new SqlParameter("@EmployeeID", item.EmployeeID),
                        new SqlParameter("@Barcode", item.Barcode),
                        new SqlParameter("@Type", item.Type),
                        new SqlParameter("@WorkingTypeID", item.WorkingTypeID==0?null:item.WorkingTypeID),
                        new SqlParameter("@Device", item.DeviceID),
                        new SqlParameter("@SystemDbID", model[0].SystemDbID),
                        new SqlParameter("@TransferID", item.TransferID),
                        new SqlParameter("@NewDateTime", item.NewDateTime),
                        outParam };
                    //transferContinue? item.TransferID: 0
                    //transferID = transferContinue ? item.TransferID :transferID;
                    transferID = item.TransferID;
                    result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostAttendanceTempTransfer", param, out strOutParam));

                }

                var outParam2 = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param2 = {
                        new SqlParameter("@CompanyId", model[0].CompanyId),
                        new SqlParameter("@Username", model[0].Username),
                        new SqlParameter("@SystemDbID", model[0].SystemDbID),
                        new SqlParameter("@TransferID", transferID),
                        outParam2 };

                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostAttendanceTransfer", param2, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "PostSourceData", model[0].Username, model[0].CompanyId, model, result);
                result.Value = strOutParam;
                return Ok(result);
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PostSourceData", model[0].Username, model[0].CompanyId, model, ex.Message + " - " + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpDelete("table/{CompanyId}/{Username}/{id}")]
        public IActionResult DeleteSystemTable(string CompanyId, string Username, int id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId),
                    new SqlParameter("@Username", Username),new SqlParameter("@ID", id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_DeleteSystemTable", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "DeleteSystemTable", Username, CompanyId, "system/table/" + CompanyId + '/' + Username + '/' + id.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DeleteSystemTable", Username, CompanyId, "system/table/" + CompanyId + '/' + Username + '/' + id.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpDelete("db/{CompanyId}/{Username}/{id}")]
        public IActionResult DeleteSystemDb(string CompanyId, string Username, int id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId),
                    new SqlParameter("@Username", Username),new SqlParameter("@ID", id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_DeleteSystemDb", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "DeleteSystemDb", Username, CompanyId, "system/db/" + CompanyId + '/' + Username + '/' + id.ToString(), result);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "DeleteSystemDb", Username, CompanyId, "system/db/" + CompanyId + '/' + Username + '/' + id.ToString(), ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }



        [EnableCors("CorsPolicy")]
        [HttpGet("database/{CompanyId}/{Username}")]
        public IActionResult GetSystemDatabase(string CompanyId, string Username)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                OkObjectResult result = null;
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetSystemDb", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetSystemDatabase", Username, CompanyId, "system/database/" + CompanyId + "/" + Username, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetSystemDatabase", Username, CompanyId, "system/database/" + CompanyId + "/" + Username, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }



        [EnableCors("CorsPolicy")]
        [HttpGet("database/test/{CompanyId}/{Username}/{Id}")]
        public IActionResult GetSystemDatabaseTest(string CompanyId, string Username, int Id)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                OkObjectResult result = null;
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@ID", Id), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData<DBInfo>(appSettings.Value.BasDB.ConnectionString, "BAS_GetSystemDb", r => r.GetDBInfo(), param));

                Util.CreateLog(appSettings, operationTime, "GetSystemDatabase", Username, CompanyId, "system/database/" + CompanyId + "/" + Username, result);
                return Ok(result.Value);
            }
            catch (Exception ex)
            {
                DBInfo item = new DBInfo();
                item.ReturnDscr = ex.Message.ToString();
                return Ok(item);
                //Util.CreateLog(appSettings, operationTime, "GetSystemDatabase", Username, CompanyId, "system/database/" + CompanyId + "/" + Username, ex.Message + "-" + ex.InnerException);
                //throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpGet("file/{CompanyId}/{Username}")]
        public IActionResult GetSystemFile(string CompanyId, string Username)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                OkObjectResult result = null;
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetSystemFile", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetSystemFile", Username, CompanyId, "system/file/" + CompanyId + "/" + Username, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetSystemFile", Username, CompanyId, "system/file/" + CompanyId + "/" + Username, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpPost("")]
        public IActionResult PostSystemHost([FromBody]PostSystemHostRequest model)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {

                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", model.CompanyId), new SqlParameter("@Username", model.Username),
                    new SqlParameter("@ID", model.ID),
                    new SqlParameter("@Name", model.Name),
                    new SqlParameter("@Database", model.Database),
                    new SqlParameter("@Protocol", model.Protocol),
                    new SqlParameter("@Hostname", model.Hostname),
                    new SqlParameter("@Username", model.Username),
                    new SqlParameter("@DUsername", model.DUsername),
                    new SqlParameter("@Password", model.Password),
                    new SqlParameter("@TransferId", model.TransferID),
                    new SqlParameter("@Repeat", model.Repeat),
                    new SqlParameter("@Inout", model.Inout),
                    outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostSystemHost", param, out strOutParam));


                Util.CreateLog(appSettings, operationTime, "PostSystemHost", model.Username, model.CompanyId, model, result);

                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PostSystemHost", model.Username, model.CompanyId, model, ex.Message + " - " + ex.InnerException);
                throw ex;
            }

        }


        [EnableCors("CorsPolicy")]
        [HttpPost("database")]
        public IActionResult PostSystemDatabase([FromBody]PostSystemDatabaseRequest model)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {

                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", model.CompanyId), new SqlParameter("@Username", model.Username),
                     new SqlParameter("@SystemHostID", 1),
                    new SqlParameter("@ID", model.ID),
                    new SqlParameter("@Name", model.Name),
                    new SqlParameter("@Database", model.Database),
                    new SqlParameter("@Protocol", model.Protocol),
                    new SqlParameter("@Hostname", model.Hostname),
                    new SqlParameter("@Username", model.Username),
                    new SqlParameter("@DUsername", model.DUsername),
                    new SqlParameter("@Password", model.Password),
                    new SqlParameter("@DbTable", model.DbTable),
                    new SqlParameter("@TransferIdColumn", model.TransferIDColumn),
                    new SqlParameter("@TransferId", model.TransferID),
                    new SqlParameter("@TransferType", model.TransferType),
                    new SqlParameter("@Inout", model.Inout),
                    new SqlParameter("@RepeatTime", model.RepeatTime),
                    new SqlParameter("@RepeatDirection", model.RepeatDirection),
                    new SqlParameter("@Limit", model.Limit),
                    new SqlParameter("@FirstLast", model.FirstLast),
                    new SqlParameter("@InChar", model.InChar),
                    new SqlParameter("@OutChar", model.OutChar),
                    new SqlParameter("@DbQuery", model.DbQuery),
                    outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostSystemDb", param, out strOutParam));


                Util.CreateLog(appSettings, operationTime, "PostSystemDatabase", model.Username, model.CompanyId, model, result);

                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PostSystemDatabase", model.Username, model.CompanyId, model, ex.Message + " - " + ex.InnerException);
                throw ex;
            }

        }

        [EnableCors("CorsPolicy")]
        [HttpPost("file")]
        public IActionResult PostSystemFile([FromBody]PostSysteFileRequest model)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            OkObjectResult result = null;
            try
            {

                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", model.CompanyId), new SqlParameter("@Username", model.Username),
                    new SqlParameter("@ID", model.ID),
                    new SqlParameter("@Name", model.Name),
                    new SqlParameter("@File", model.File),
                    new SqlParameter("@Inout", model.Inout),
                    new SqlParameter("@InChar", model.InChar),
                    new SqlParameter("@OutChar", model.OutChar),
                    outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_PostSystemFile", param, out strOutParam));


                Util.CreateLog(appSettings, operationTime, "PostSystemFile", model.Username, model.CompanyId, model, result);

                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "PostSystemFile", model.Username, model.CompanyId, model, ex.Message + " - " + ex.InnerException);
                throw ex;
            }

        }



        [EnableCors("CorsPolicy")]
        [HttpGet("group/{CompanyId}/{Username}")]
        public IActionResult GetParameterGroup(string CompanyId, string Username)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                OkObjectResult result = null;
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", CompanyId), new SqlParameter("@Username", Username), outParam };
                result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_GetParameterGroup", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "GetParameterGroup", Username, CompanyId, "params/" + CompanyId + "/" + Username, result);
                return result;
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "GetParameterGroup", Username, CompanyId, "params/" + CompanyId + "/" + Username, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }





    }

}