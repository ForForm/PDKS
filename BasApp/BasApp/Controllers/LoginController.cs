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
using Newtonsoft.Json;
using System.Security;
using BasApp;
using BASApp.LoginModel;
using BASApp.Models;
using System.Net.Mail;
using System.Linq;
using BASApp.PersonnelModel;
using System.Collections;

namespace BASApp.Controllers
{

    [Route("login")]
    [ApiController]
    public class LoginController : Controller
    {
        private readonly IOptions<MySettingsModel> appSettings;

        public LoginController(IOptions<MySettingsModel> app)
        {
            appSettings = app;
        }





        [EnableCors("CorsPolicy")]
        [HttpPost("")]
        public IActionResult Login([FromBody]GetLoginRequest model)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {

                List<GetLoginRequest> aaa = new List<GetLoginRequest>();
                GetLoginRequest item = new GetLoginRequest(); item.Username = "1";
                aaa.Add(item);
                item = new GetLoginRequest(); item.Username = "2";
                aaa.Add(item);
                item = new GetLoginRequest(); item.Username = "3";
                aaa.Add(item);


                List<GetAttendanceRequest> bbb = new List<GetAttendanceRequest>();
                GetAttendanceRequest item2 = new GetAttendanceRequest(); item2.Username = "1";
                bbb.Add(item2);
                item2 = new GetAttendanceRequest(); item2.Username = "2";
                bbb.Add(item2);

                //var matches = aaa.Where(n => n.Username.Contains(bbb[0].Username)).ToList();

                //var query = from GetLoginRequest student in aaa
                //            where student.Username != 
                //            select student;
                //HashSet<string> writerIds = new HashSet<string>(bbb.Select(x => x.Username));
                var query = aaa.Where(y => !(bbb.Select(x => x.Username)).Contains(y.Username)).ToList();


                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyID", model.CompanyId), new SqlParameter("@Username", model.Username), new SqlParameter("@Password", model.Password.ComputeHash()), outParam };
                OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_Login", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "Login", model.Username, model.CompanyId, model, result.Value);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "Login", model.Username, model.CompanyId, model, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }


        [EnableCors("CorsPolicy")]
        [HttpGet("menu/{CompanyId}/{UserName}/{Lng}")]
        public IActionResult LoginGetMenu(string CompanyId, string Username, string Lng)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                SqlParameter[] param = { new SqlParameter("@CompanyID", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@Lng", Lng) };
                OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData<List<TotalGetMenuInfo>>(appSettings.Value.BasDB.ConnectionString, "BAS_LoginGetMenu", r => r.GetMenuInfo(), param));
                Util.CreateLog(appSettings, operationTime, "LoginGetMenu", Username, CompanyId, "login/" + CompanyId + "/" + Username + "/" + Lng, result);
                return Ok(result.Value);
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "LoginGetMenu", Username, CompanyId, "login/" + CompanyId + "/" + Username + "/" + Lng, ex.Message + "-" + ex.InnerException);
                throw ex;
            }

        }


        [EnableCors("CorsPolicy")]
        [HttpPost("favorite")]
        public IActionResult UpdateUserFavorite([FromBody]UpdateUserFavoriteRequest model)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyId", model.CompanyId), new SqlParameter("@UserCode", model.Username),
                    new SqlParameter("@ID", model.Id),  new SqlParameter("@Favorite", model.favorite ), outParam };
                OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_UpdateMenuFavorite", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "UpdateUserFavorite", model.Username, model.CompanyId, model, result.Value);
                return result;

            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "UpdateUserFavorite", model.Username, model.CompanyId, model, ex.Message + "-" + ex.InnerException);
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpGet("label/{CompanyId}/{UserName}/{Lng}")]
        public IActionResult LoginGetLabel(string CompanyId, string Username, string Lng)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {
                var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
                SqlParameter[] param = { new SqlParameter("@CompanyID", null), new SqlParameter("@Username", null), new SqlParameter("@Lng", Lng), outParam };
                OkObjectResult result = Ok(SqlHelper.ExecuteProcedureReturnData(appSettings.Value.BasDB, "BAS_LoginGetLabel", param, out strOutParam));
                Util.CreateLog(appSettings, operationTime, "LoginGetLabel", Username, CompanyId, "login/" + CompanyId + '/' + Username + '/' + Lng, result);
                return Ok(result.Value);
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "LoginGetLabel", Username, CompanyId, "login/" + CompanyId + '/' + Username + '/' + Lng, ex.Message + "-" + ex.InnerException);
                throw ex;
            }

        }


        //public List<PostParameterInfo> GetParameterInfo(string connString)
        //{
        //    var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 20)
        //    {
        //        Direction = ParameterDirection.Output
        //    };

        //    SqlParameter[] param ={
        //        outParam
        //    };

        //    return SqlHelper.ExecuteProcedureReturnData<List<PostParameterInfo>>(connString, "BCS_PARAMETER_SELECT", r => r.GetParameterInfo(), param);

        //}

        //SendPasswordResponse item,
        //private void SendRememberMail(string connString)
        //{
        //    //PostParameterInfo[] postParameterInfo = GetParameterInfo(connString).ToArray();
        //    MailMessage mail = new MailMessage();
        //    SmtpClient SmtpServer = new SmtpClient(postParameterInfo[0].smtp);
        //    mail.From = new MailAddress(postParameterInfo[0].mail, postParameterInfo[0].mailFrom);
        //    mail.To.Add(item.mail);
        //    mail.Subject = "Şifre Hatırlatma";
        //    mail.Body = "Sayın Yetkili,<br/>Kullanıcı bilgileriniz aşağıdadır.<br/> <br/> Kullanıcı Adınız:<b>" + item.user + "</b><br/>Kullanıcı şifreniz:<b>" + item.password + "</b><br/><br/>Bilgilerinize,";
        //    mail.IsBodyHtml = true;
        //    SmtpServer.Port = Convert.ToInt32(postParameterInfo[0].port);
        //    SmtpServer.Credentials = new System.Net.NetworkCredential(postParameterInfo[0].smtpUser, postParameterInfo[0].smtpPass);
        //    //SmtpServer.EnableSsl = postParameterInfo[0].ssl;
        //    SmtpServer.Send(mail);
        //}




        public static string GenerateRandomPassword(PasswordOptions opts = null)
        {
            if (opts == null) opts = new PasswordOptions()
            {
                RequiredLength = 8,
                RequiredUniqueChars = 4,
                RequireDigit = true,
                RequireLowercase = true,
                RequireNonAlphanumeric = true,
                RequireUppercase = true
            };

            string[] randomChars = new[] {
            "ABCDEFGHJKLMNOPQRSTUVWXYZ",    // uppercase 
            "abcdefghijkmnopqrstuvwxyz",    // lowercase
            "0123456789",                   // digits
            "!@$?_-"                        // non-alphanumeric
        };

            Random rand = new Random(Environment.TickCount);
            List<char> chars = new List<char>();

            if (opts.RequireUppercase)
                chars.Insert(rand.Next(0, chars.Count),
                    randomChars[0][rand.Next(0, randomChars[0].Length)]);

            if (opts.RequireLowercase)
                chars.Insert(rand.Next(0, chars.Count),
                    randomChars[1][rand.Next(0, randomChars[1].Length)]);

            if (opts.RequireDigit)
                chars.Insert(rand.Next(0, chars.Count),
                    randomChars[2][rand.Next(0, randomChars[2].Length)]);

            if (opts.RequireNonAlphanumeric)
                chars.Insert(rand.Next(0, chars.Count),
                    randomChars[3][rand.Next(0, randomChars[3].Length)]);

            for (int i = chars.Count; i < opts.RequiredLength
                || chars.Distinct().Count() < opts.RequiredUniqueChars; i++)
            {
                string rcs = randomChars[rand.Next(0, randomChars.Length)];
                chars.Insert(rand.Next(0, chars.Count),
                    rcs[rand.Next(0, rcs.Length)]);
            }

            return new string(chars.ToArray());
        }


        //SendPasswordResponse item,
        private bool SendRememberMail(SmtpInfo smtpInfo, string company, string user, string password)
        {
            DateTime operationTime = DateTime.Now;
            if (smtpInfo.ReturnCode == "200")
            {
                MailMessage mail = new MailMessage();
                SmtpClient SmtpServer = new SmtpClient(smtpInfo.Smtp);
                mail.From = new MailAddress(smtpInfo.MailFrom, smtpInfo.MailFromDisplay);
                mail.To.Add(smtpInfo.MailTo);
                mail.Subject = "Şifre Hatırlatma";
                mail.Body = "Sayın Yetkili,<br/>Kullanıcı bilgileriniz aşağıdadır.<br/> <br/> Kullanıcı Adınız:<b>" + user + "</b><br/>Kullanıcı şifreniz:<b>" + password + "</b><br/><br/>Bilgilerinize,";
                mail.IsBodyHtml = true;
                SmtpServer.Port = Convert.ToInt32(smtpInfo.SmtpPort);
                SmtpServer.Credentials = new System.Net.NetworkCredential(smtpInfo.SmtpUser, smtpInfo.SmtpPassword);
                SmtpServer.EnableSsl = smtpInfo.SSL;

                try
                {
                    SmtpServer.Send(mail);
                    SqlParameter[] param = { new SqlParameter("@CompanyID", company), new SqlParameter("@Username", user), new SqlParameter("@Password", password.ComputeHash()), new SqlParameter("@IsSend", true) };
                    SqlHelper.ExecuteProcedureReturnData<List<SmtpInfo>>(appSettings.Value.BasDB.ConnectionString, "BAS_GetUserAccountInfo", r => r.GetSmtpInfo(), param);
                    return true;
                }
                catch (Exception ex)
                {
                    Util.CreateLog(appSettings, operationTime, "SendPassword", user, company, "login/sendpassword" + company + '/' + user, ex.Message + "-" + ex.InnerException);
                    return false;
                }
            }

            return false;
        }

        [EnableCors("CorsPolicy")]
        [HttpGet("sendpassword/{CompanyId}/{UserName}")]
        public IActionResult SendPassword(string CompanyId, string Username)
        {
            DateTime operationTime = DateTime.Now;
            string strOutParam = string.Empty;
            try
            {

                string strNewPassword = GenerateRandomPassword();
                SqlParameter[] param = { new SqlParameter("@CompanyID", CompanyId), new SqlParameter("@Username", Username), new SqlParameter("@Password", strNewPassword.ComputeHash()) };
                List<SmtpInfo> smtpInfo = SqlHelper.ExecuteProcedureReturnData<List<SmtpInfo>>(appSettings.Value.BasDB.ConnectionString, "BAS_GetUserAccountInfo", r => r.GetSmtpInfo(), param);
                if (smtpInfo.ToArray().Length > 0 && smtpInfo.ToArray()[0].ReturnCode=="200")
                if (!SendRememberMail(smtpInfo[0], CompanyId, Username, strNewPassword))
                {
                    smtpInfo[0].ReturnCode = "406";
                    smtpInfo[0].ReturnDscr = "Mail Bilgisi Gönderilemedi.";
                }
                Util.CreateLog(appSettings, operationTime, "SendPassword", Username, CompanyId, "login/sendpassword" + CompanyId + "/" + Username + "/", Ok(smtpInfo));
                return Ok(Ok(smtpInfo).Value);
            }
            catch (Exception ex)
            {
                Util.CreateLog(appSettings, operationTime, "SendPassword", Username, CompanyId, "login/sendpassword" + CompanyId + '/' + Username, ex.Message + "-" + ex.InnerException);
                throw ex;
            }

        }
    }

}