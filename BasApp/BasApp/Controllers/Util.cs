using BasApp;
using BASApp.Models;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Security;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace BASApp.Controllers
{
    public static class Util
    {

        public static void CreateLog(IOptions<MySettingsModel> appSettings, DateTime operationTime, string method, string username, string companyID, object request
            , dynamic response)
        {

            string jrequest = JsonConvert.SerializeObject(request);
            string jresponse = JsonConvert.SerializeObject(response);
            //string text = "Escape characters ： < > & \" \'";
            SqlParameter[] param ={
                new SqlParameter("@CompanyID",companyID=="null"?null:companyID),
                new SqlParameter("@Username",username=="null"?null:username),
                new SqlParameter("@MethodName",method),
                new SqlParameter("@Request",SecurityElement.Escape(jrequest)),
                new SqlParameter("@Response",SecurityElement.Escape(jresponse)),
                new SqlParameter("@TranDate",DateTime.Now),
                new SqlParameter("@OperationTime", DateTime.Now - operationTime)
            };

            SqlHelper.ExecuteNonQuery(appSettings.Value.BasDB, "[dbo].[BAS_PostTranLog]", param);
        }


        public static string ComputeHash(this string password)
        {
            var returnValue = "";
            if (password == null) return returnValue;
            using (var hashAlg = new SHA1Managed())
            {
                var pwordData = Encoding.Default.GetBytes(password);
                var hash = hashAlg.ComputeHash(pwordData);
                returnValue = BitConverter.ToString(hash).Replace("-", "");
            }
            return returnValue;
        }
    }
}
