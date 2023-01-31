using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net.Mail;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using BasApp.Translator;
using Newtonsoft.Json;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using System.IO;
using Dapper;
using BASApp.LoginModel;
using BASApp.Models;

namespace BasApp.Repository
{
    public class PoolUserDbClient
    {

        private readonly IOptions<MySettingsModel> appSettings;
        public IConfiguration Configuration { get; }

        public PoolUserDbClient()
        {
            //IOptions<MySettingsModel> app
            //appSettings = app;
        }


        public List<GetMenuInfo> GetMenuInfo(string connString)
        {
            //var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 200);
            //return SqlHelper.<List<GetMenuInfo>>(connString, "BAS_MENU_SELECT", r => r.GetMenuInfo(), outParam);
            return null;
        }


    }
}
