using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BASApp.LoginModel
{

    public class GetLoginRequest
    {
        public string Username { get; set; }

        public string Password { get; set; }

        public string CompanyId { get; set; }
    }

    public class Badge
    {
        public string value { get; set; }

        public string background { get; set; }

        public string color { get; set; }

    }

    public class TotalGetMenuInfo : GetMenuInfo
    {
        public int? ID { get; set; }

        public int? parentID { get; set; }

        public bool child { get; set; }

        public string ReturnCode { get; set; }

        public string ReturnDscr { get; set; }

    }


    public class SmtpInfo 
    {
        public string ReturnCode { get; set; }
        public string ReturnDscr { get; set; }
        public string Smtp { get; set; }
        public bool SSL{ get; set; }
        public string MailFrom { get; set; }
        public string MailTo { get; set; }
        public string MailFromDisplay { get; set; }
        public int SmtpPort { get; set; }
        public string SmtpUser { get; set; }
        public string SmtpPassword { get; set; }

    }

    public class DBColumns
    {

        public string Columns { get; set; }
    }

    public class DBInfo
    {
        public int? ID { get; set; }

        public string Host { get; set; }

        public string Protocol { get; set; }

        public string User { get; set; }

        public string Password { get; set; }

        public string DB { get; set; }

        public string Table { get; set; }

        public string Column { get; set; }

        public string Query { get; set; }

        public string ReturnCode { get; set; }

        public string ReturnDscr { get; set; }

    }




    public class GetMenuInfo
    {

        public string type { get; set; }

        public string label { get; set; }

        public string route { get; set; }

        public object icon { get; set; }

        public bool? favorite { get; set; }

        public Badge badge { get; set; }

        public List<TotalGetMenuInfo> children { get; set; }
    }


    public class UpdateUserFavoriteRequest
    {
        public String CompanyId { get; set; }

        public String Username { get; set; }

        public int Id { get; set; }

        public bool favorite { get; set; }

    }


    public class PasswordOptions
    {
        public int RequiredLength { get; set; }

        public int RequiredUniqueChars { get; set; }

        public bool RequireDigit { get; set; }

        public bool RequireLowercase { get; set; }

        public bool RequireNonAlphanumeric { get; set; }

        public bool RequireUppercase { get; set; }

    }

}
