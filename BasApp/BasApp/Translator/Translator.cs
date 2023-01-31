using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BASApp.AuthorizationModel;
using BASApp.DefinitionModel;
using BASApp.LoginModel;
using BASApp.PersonnelModel;
using BASApp.ReportingModel;
using Dapper;


namespace BasApp.Translator
{



    public static class Translator
    {



        public static List<PersonnelGetQueryInfo> GetPersonnelGetQueryInfo(this SqlDataReader reader)
        {


            List<PersonnelGetQueryInfo> list = new List<PersonnelGetQueryInfo>();
            while (reader.Read())
            {
                PersonnelGetQueryInfo item = new PersonnelGetQueryInfo();
                item.type = SqlHelper.GetNullableString(reader, "type");
                item.id = SqlHelper.GetNullableString(reader, "id");
                //item.icon = SqlHelper.GetNullableString(reader, "icon");
                item.label = SqlHelper.GetNullableString(reader, "label");
                item.value = SqlHelper.GetBoolean(reader, "value");

                list.Add(item);
            }


            return list;
        }


        public static List<Series> GetDashReportSingle(this SqlDataReader reader)
        {
            List<Series> totalList = new List<Series>();
            while (reader.Read())
            {
                Series item = new Series();
                item.name = SqlHelper.GetNullableString(reader, "name");
                item.value = SqlHelper.GetNullableObject(reader, "value");
                totalList.Add(item);
            }

            return totalList;
        }

        public static List<DashReportGroup> GetDashReportGroup(this SqlDataReader reader)
        {
            List<DashReportGroupOriginal> totalListOrginal = new List<DashReportGroupOriginal>();
            List<DashReportGroup> totalList = new List<DashReportGroup>();
            while (reader.Read())
            {
                DashReportGroupOriginal item = new DashReportGroupOriginal();
                item.group = SqlHelper.GetNullableString(reader, "group");
                item.name = SqlHelper.GetNullableString(reader, "name");
                item.value = SqlHelper.GetNullableDecimal(reader, "value");
                totalListOrginal.Add(item);
            }

            var totalGroup = totalListOrginal.ToLookup(p => p.group);
            foreach (var item in totalGroup)
            {
                List<Series> listSeries = new List<Series>();
                var filter=  totalListOrginal.FindAll(x => x.group == item.Key);
                DashReportGroup totalItem = new DashReportGroup();
                foreach (var fitem in filter)
                {
                    totalItem.name = fitem.group;
                    Series itemSeries = new Series();
                    itemSeries.name = fitem.name;
                    itemSeries.value = fitem.value;
                    listSeries.Add(itemSeries);
                }
                totalItem.series = listSeries;
                totalList.Add(totalItem);

            }
           


            return totalList;


        }

        public static List<TotalGetMenuInfo> GetMenuInfo(this SqlDataReader reader)
        {
            List<TotalGetMenuInfo> totalList = new List<TotalGetMenuInfo>();
            while (reader.Read())
            {
                TotalGetMenuInfo item = new TotalGetMenuInfo();
                item.ID = SqlHelper.GetNullableInt32(reader, "ID");
                item.parentID = SqlHelper.GetNullableInt32(reader, "ParentID");
                item.child = SqlHelper.GetBoolean(reader, "Child");
                item.type = SqlHelper.GetNullableString(reader, "Type");
                item.label = SqlHelper.GetNullableString(reader, "Label");
                item.route = SqlHelper.GetNullableString(reader, "Route");
                item.icon = SqlHelper.GetNullableObject(reader, "Icon");
                item.favorite = SqlHelper.GetBoolean(reader, "Favorite");
                item.ReturnCode = SqlHelper.GetNullableString(reader, "ReturnCode");
                item.ReturnDscr = SqlHelper.GetNullableString(reader, "ReturnDscr");
                totalList.Add(item);
            }

            List<TotalGetMenuInfo> list = new List<TotalGetMenuInfo>();
            List<TotalGetMenuInfo> parent = totalList.FindAll(x => x.child == false);
            list.AddRange(parent);

            if (list.Count > 0)
            {
                foreach (var item in list)
                {
                    List<TotalGetMenuInfo> childList = totalList.FindAll(x => x.parentID == item.ID);
                    foreach (var citem in childList)
                    {
                        List<TotalGetMenuInfo> childList2 = totalList.FindAll(x => x.parentID == citem.ID);
                        citem.children = childList2;
                    }

                    item.children = childList;
                }
            }




            return list;
        }



        public static List<SmtpInfo> GetSmtpInfo(this SqlDataReader reader)
        {
            List<SmtpInfo> list = new List<SmtpInfo>();
            while (reader.Read())
            {
                SmtpInfo item = new SmtpInfo();
                item.ReturnCode = SqlHelper.GetNullableString(reader, "ReturnCode");
                item.ReturnDscr= SqlHelper.GetNullableString(reader, "ReturnDscr");
                item.Smtp= SqlHelper.GetNullableString(reader, "Smtp");
                item.SSL = Convert.ToBoolean( SqlHelper.GetNullableString(reader, "SmtpSSL"));
                item.MailFrom = SqlHelper.GetNullableString(reader, "MailFrom");
                item.MailTo = SqlHelper.GetNullableString(reader, "MailTo");
                item.MailFromDisplay= SqlHelper.GetNullableString(reader, "MailFromDisplay");
                item.SmtpPort = SqlHelper.GetNullableInt32(reader, "SmtpPort");
                item.SmtpUser = SqlHelper.GetNullableString(reader, "SmtpUser");
                item.SmtpPassword = SqlHelper.GetNullableString(reader, "SmtpPassword");
                list.Add(item);
            }

            return list;
        }


        public static List<DBColumns> GetColumns(this SqlDataReader reader)
        {
            DBInfo item = new DBInfo();
            while (reader.Read())
            {
                item.ID = SqlHelper.GetNullableInt32(reader, "ID");
                item.Host = SqlHelper.GetNullableString(reader, "Hostname");
                item.Protocol = SqlHelper.GetNullableString(reader, "Protocol");
                item.User = SqlHelper.GetNullableString(reader, "Username");
                item.Password = SqlHelper.GetNullableString(reader, "Password");
                item.DB = SqlHelper.GetNullableString(reader, "Database");
                item.Table = SqlHelper.GetNullableString(reader, "DbTable");
                item.Column = SqlHelper.GetNullableString(reader, "TransferIdColumn");
                item.ReturnCode = SqlHelper.GetNullableString(reader, "ReturnCode");
                item.ReturnDscr = SqlHelper.GetNullableString(reader, "ReturnDscr");
            }


            string strConn = "Server=" + item.Host + ";Database=" + item.DB + ";Persist Security Info=True;User ID=" + item.User + ";Password=" + item.Password + "; Connection Timeout = 5000";


            string splitFirst = string.Empty;
            if (item.Table.Split('.').Length > 0)
                splitFirst = item.Table.Split('.')[0]+ ".";

            List<DBColumns> list = new List<DBColumns>();
            using (SqlConnection connection = new SqlConnection(strConn))
            {
                SqlCommand command = new SqlCommand("SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = '"+item.Table.Replace(splitFirst,string.Empty) +"' AND TABLE_SCHEMA='dbo'", connection);
                try
                { command.Connection.Open(); }
                catch (Exception ex)
                { throw ex; }
                SqlDataReader reader2 = command.ExecuteReader();
                while (reader2.Read())
                {
                    DBColumns Citem = new DBColumns();
                    Citem.Columns= SqlHelper.GetNullableString(reader2, "COLUMN_NAME");
                    list.Add(Citem);
                }

                item.ReturnCode = "200";
                item.ReturnDscr = "Success";
            }

            return list;
        }


        public static DBInfo GetDBInfo(this SqlDataReader reader)
        {
            DBInfo item = new DBInfo();
            while (reader.Read())
            {
                item.ID = SqlHelper.GetNullableInt32(reader, "ID");
                item.Host = SqlHelper.GetNullableString(reader, "Hostname");
                item.Protocol = SqlHelper.GetNullableString(reader, "Protocol");
                item.User = SqlHelper.GetNullableString(reader, "Username");
                item.Password = SqlHelper.GetNullableString(reader, "Password");
                item.DB = SqlHelper.GetNullableString(reader, "Database");
                item.Table = SqlHelper.GetNullableString(reader, "DbTable");
                item.Column = SqlHelper.GetNullableString(reader, "TransferIdColumn");
                item.Query = SqlHelper.GetNullableString(reader, "DbQuery");
                item.ReturnCode = SqlHelper.GetNullableString(reader, "ReturnCode");
                item.ReturnDscr = SqlHelper.GetNullableString(reader, "ReturnDscr");
            }


            string strConn = "Server=" + item.Host + ";Database=" + item.DB + ";Persist Security Info=True;User ID=" + item.User + ";Password=" + item.Password + "; Connection Timeout = 5000";

            using (SqlConnection connection = new SqlConnection(strConn))
            {
                SqlCommand command = new SqlCommand(String.Format("select top 1 {0} from {1} where 1=1 and {2}",item.Column,item.Table,item.Query), connection);
                try
                {command.Connection.Open();}
                catch (Exception ex)
                {throw ex;}                
                command.ExecuteNonQuery();
                item.ReturnCode = "200";
                item.ReturnDscr = "Success";
            }

            return item;
        }


        //public static List<GetMenuInfo> GetMenuInfo(this SqlDataReader reader)
        //{
        //    List<GetMenuInfo> childList = new List<GetMenuInfo>();
        //    GetMenuInfo child;
        //    GetMenuInfo item = new GetMenuInfo();
        //    List<GetMenuInfo> list = new List<GetMenuInfo>();
        //    List<GetMenuInfo> achildList = new List<GetMenuInfo>();
        //    int say = 0; int childID = 0;
        //    while (reader.Read())
        //    {
        //        if (childID != SqlHelper.GetNullableInt32(reader, "ChildID")) achildList = new List<GetMenuInfo>();
        //        say++;
        //        childID = SqlHelper.GetNullableInt32(reader, "ChildID");
        //        if ((!list.Exists(x => x.title == SqlHelper.GetNullableString(reader, "Title")) ) && say != 1)
        //        {
        //            if (!childList.Exists(x => x.title == SqlHelper.GetNullableString(reader, "Title")))
        //            { item = new GetMenuInfo(); childList = new List<GetMenuInfo>(); list.Add(item); }
        //            else
        //            {
        //                GetMenuInfo xitem = new GetMenuInfo();
        //                GetMenuInfo xchild = childList.Find(x => x.title == SqlHelper.GetNullableString(reader, "Title"));
        //                xchild.path = null;//SqlHelper.GetNullableString(reader, "Path");
        //                xchild.title = SqlHelper.GetNullableString(reader, "Title");
        //                xchild.icon = SqlHelper.GetNullableString(reader, "Icon");
        //                xchild.type = SqlHelper.GetNullableString(reader, "Type");
        //                xchild.badgeType = SqlHelper.GetNullableString(reader, "BadgeType");
        //                xchild.badgeValue = SqlHelper.GetNullableString(reader, "BadgeValue");
        //                xchild.active = SqlHelper.GetBoolean(reader, "Active");

        //                GetMenuInfo achild = new GetMenuInfo();
        //                achild.path = SqlHelper.GetNullableString(reader, "Path");
        //                achild.title = SqlHelper.GetNullableString(reader, "ChildTitle");
        //                achild.type = SqlHelper.GetNullableString(reader, "ChildType");
        //                achildList.Add(achild);
        //                xchild.children = achildList;
        //                continue;
        //            }

        //        }

        //        if (!childList.Exists(x => x.title == SqlHelper.GetNullableString(reader, "Title")))
        //        {
        //            item.title = SqlHelper.GetNullableString(reader, "Title");
        //            item.icon = SqlHelper.GetNullableString(reader, "Icon");
        //            item.type = SqlHelper.GetNullableString(reader, "Type");
        //            item.badgeType = SqlHelper.GetNullableString(reader, "BadgeType");
        //            item.badgeValue = SqlHelper.GetNullableString(reader, "BadgeValue");
        //            item.active = SqlHelper.GetBoolean(reader, "Active");
        //            child = new GetMenuInfo();
        //            child.path = SqlHelper.GetNullableString(reader, "Path");
        //            child.title = SqlHelper.GetNullableString(reader, "ChildTitle");
        //            child.type = SqlHelper.GetNullableString(reader, "ChildType");
        //            childList.Add(child);
        //            item.children = childList;
        //            if (say == 1) list.Add(item);                    
        //        }
        //    }

        //    return list;
        //}


        //public static Dictionary<string, Dictionary<string, Dictionary<string, List<string>>>> GetMenuTreeInfo(this SqlDataReader reader)
        //public static Dictionary<string, Dictionary<string, List<string>>>  GetMenuTreeInfo(this SqlDataReader reader)
        //public static Dictionary<string, Dictionary<string, Dictionary<string, List<string>>>> GetMenuTreeInfo(this SqlDataReader reader)

        public static List<ShiftCalendar> GetShiftCalendar(this SqlDataReader reader)
        {
            List<ShiftCalendar> list = new List<ShiftCalendar>();
            while (reader.Read())
            {
                ShiftCalendar item = new ShiftCalendar();
                item.Tarih = SqlHelper.GetNullableDateTime(reader, "CalendarDate");
                item.Code0 = SqlHelper.GetNullableString(reader, "Code0");
                item.Code1 = SqlHelper.GetNullableString(reader, "Code1");
                item.Code2 = SqlHelper.GetNullableString(reader, "Code2");
                item.Code3 = SqlHelper.GetNullableString(reader, "Code3");
                item.Code4 = SqlHelper.GetNullableString(reader, "Code4");
                item.Code5 = SqlHelper.GetNullableString(reader, "Code5");
                item.Code6 = SqlHelper.GetNullableString(reader, "Code6");
                item.Code7 = SqlHelper.GetNullableString(reader, "Code7");
                item.Code8 = SqlHelper.GetNullableString(reader, "Code8");
                item.Code9 = SqlHelper.GetNullableString(reader, "Code9");
                item.Code10 = SqlHelper.GetNullableString(reader, "Code10");
                item.Code11 = SqlHelper.GetNullableString(reader, "Code11");
                item.Code12 = SqlHelper.GetNullableString(reader, "Code12");
                item.Code13 = SqlHelper.GetNullableString(reader, "Code13");
                item.Code14 = SqlHelper.GetNullableString(reader, "Code14");
                item.Code15 = SqlHelper.GetNullableString(reader, "Code15");
                item.Code16 = SqlHelper.GetNullableString(reader, "Code16");
                item.Code17 = SqlHelper.GetNullableString(reader, "Code17");
                item.Code18 = SqlHelper.GetNullableString(reader, "Code18");
                item.Code19 = SqlHelper.GetNullableString(reader, "Code19");
                item.Code20 = SqlHelper.GetNullableString(reader, "Code20");
                item.Code21 = SqlHelper.GetNullableString(reader, "Code21");
                item.Code22 = SqlHelper.GetNullableString(reader, "Code22");
                item.Code23 = SqlHelper.GetNullableString(reader, "Code23");
                item.Code24 = SqlHelper.GetNullableString(reader, "Code24");
                item.Code25 = SqlHelper.GetNullableString(reader, "Code25");
                item.Code26 = SqlHelper.GetNullableString(reader, "Code26");
                item.Code27 = SqlHelper.GetNullableString(reader, "Code27");
                item.Code28 = SqlHelper.GetNullableString(reader, "Code28");
                item.Code29 = SqlHelper.GetNullableString(reader, "Code29");
                item.Code30 = SqlHelper.GetNullableString(reader, "Code30");
                item.Group0 = SqlHelper.GetNullableString(reader, "Group0");
                item.Group1 = SqlHelper.GetNullableString(reader, "Group1");
                item.Group2 = SqlHelper.GetNullableString(reader, "Group2");
                item.Group3 = SqlHelper.GetNullableString(reader, "Group3");
                item.Group4 = SqlHelper.GetNullableString(reader, "Group4");
                item.Group5 = SqlHelper.GetNullableString(reader, "Group5");
                item.Group6 = SqlHelper.GetNullableString(reader, "Group6");
                item.Group7 = SqlHelper.GetNullableString(reader, "Group7");
                item.Group8 = SqlHelper.GetNullableString(reader, "Group8");
                item.Group9 = SqlHelper.GetNullableString(reader, "Group9");
                item.Group10 = SqlHelper.GetNullableString(reader, "Group10");
                item.Group11 = SqlHelper.GetNullableString(reader, "Group11");
                item.Group12 = SqlHelper.GetNullableString(reader, "Group12");
                item.Group13 = SqlHelper.GetNullableString(reader, "Group13");
                item.Group14 = SqlHelper.GetNullableString(reader, "Group14");
                item.Group15 = SqlHelper.GetNullableString(reader, "Group15");
                item.Group16 = SqlHelper.GetNullableString(reader, "Group16");
                item.Group17 = SqlHelper.GetNullableString(reader, "Group17");
                item.Group18 = SqlHelper.GetNullableString(reader, "Group18");
                item.Group19 = SqlHelper.GetNullableString(reader, "Group19");
                item.Group20 = SqlHelper.GetNullableString(reader, "Group20");
                item.Group21 = SqlHelper.GetNullableString(reader, "Group21");
                item.Group22 = SqlHelper.GetNullableString(reader, "Group22");
                item.Group23 = SqlHelper.GetNullableString(reader, "Group23");
                item.Group24 = SqlHelper.GetNullableString(reader, "Group24");
                item.Group25 = SqlHelper.GetNullableString(reader, "Group25");
                item.Group26 = SqlHelper.GetNullableString(reader, "Group26");
                item.Group27 = SqlHelper.GetNullableString(reader, "Group27");
                item.Group28 = SqlHelper.GetNullableString(reader, "Group28");
                item.Group29 = SqlHelper.GetNullableString(reader, "Group29");
                item.Group30 = SqlHelper.GetNullableString(reader, "Group30");
                item.Color0 = SqlHelper.GetNullableString(reader, "Color0");
                item.Color1 = SqlHelper.GetNullableString(reader, "Color1");
                item.Color2 = SqlHelper.GetNullableString(reader, "Color2");
                item.Color3 = SqlHelper.GetNullableString(reader, "Color3");
                item.Color4 = SqlHelper.GetNullableString(reader, "Color4");
                item.Color5 = SqlHelper.GetNullableString(reader, "Color5");
                item.Color6 = SqlHelper.GetNullableString(reader, "Color6");
                item.Color7 = SqlHelper.GetNullableString(reader, "Color7");
                item.Color8 = SqlHelper.GetNullableString(reader, "Color8");
                item.Color9 = SqlHelper.GetNullableString(reader, "Color9");
                item.Color10 = SqlHelper.GetNullableString(reader, "Color10");
                item.Color11 = SqlHelper.GetNullableString(reader, "Color11");
                item.Color12 = SqlHelper.GetNullableString(reader, "Color12");
                item.Color13 = SqlHelper.GetNullableString(reader, "Color13");
                item.Color14 = SqlHelper.GetNullableString(reader, "Color14");
                item.Color15 = SqlHelper.GetNullableString(reader, "Color15");
                item.Color16 = SqlHelper.GetNullableString(reader, "Color16");
                item.Color17 = SqlHelper.GetNullableString(reader, "Color17");
                item.Color18 = SqlHelper.GetNullableString(reader, "Color18");
                item.Color19 = SqlHelper.GetNullableString(reader, "Color19");
                item.Color20 = SqlHelper.GetNullableString(reader, "Color20");
                item.Color21 = SqlHelper.GetNullableString(reader, "Color21");
                item.Color22 = SqlHelper.GetNullableString(reader, "Color22");
                item.Color23 = SqlHelper.GetNullableString(reader, "Color23");
                item.Color24 = SqlHelper.GetNullableString(reader, "Color24");
                item.Color25 = SqlHelper.GetNullableString(reader, "Color25");
                item.Color26 = SqlHelper.GetNullableString(reader, "Color26");
                item.Color27 = SqlHelper.GetNullableString(reader, "Color27");
                item.Color28 = SqlHelper.GetNullableString(reader, "Color28");
                item.Color29 = SqlHelper.GetNullableString(reader, "Color29");
                item.Color30 = SqlHelper.GetNullableString(reader, "Color30");
                list.Add(item);
            }
            return list;
        }

        public static List<Calendar> GetCalendar(this SqlDataReader reader)
        {
            List<Calendar> list = new List<Calendar>();
            while (reader.Read())
            {
                Calendar item = new Calendar();
                item.Code = SqlHelper.GetNullableString(reader, "Code");
                item.ShiftID = SqlHelper.GetNullableString(reader, "ShiftCode");
                //item.ShiftCode= SqlHelper.GetNullableString(reader, "ShiftCode");
                item.NumberOfDays = SqlHelper.GetNullableInt32(reader, "NumberOfDays");
                item.Color = SqlHelper.GetNullableString(reader, "Color");
                
                list.Add(item);
            }
            return list;
        }

        public static Auth GetUserTabs(this SqlDataReader reader)
        {
            Auth item = new Auth();
            while (reader.Read())
            {
                item.tabname = SqlHelper.GetNullableString(reader, "tabname");
                item.read = SqlHelper.GetBoolean(reader, "read");
                item.write = SqlHelper.GetBoolean(reader, "write");
                item.delete = SqlHelper.GetBoolean(reader, "delete");
                item.update = SqlHelper.GetBoolean(reader, "update");
            }
            return item;
        }


        public static AttendanceMapper GetSourceData(this SqlDataReader reader)
        {
            AttendanceMapper item = new AttendanceMapper();
            while (reader.Read())
            {
                item.Barcode = SqlHelper.GetNullableString(reader, "Barcode");
                item.CompanyCode = SqlHelper.GetNullableString(reader, "CompanyCode");
                item.DeviceID = SqlHelper.GetNullableInt32(reader, "DeviceID");
                item.DeviceCode= SqlHelper.GetNullableString(reader, "DeviceCode");
                item.EmployeeID = SqlHelper.GetNullableInt32(reader, "EmployeeID");
                item.EmployeeCode = SqlHelper.GetNullableString(reader, "EmployeeCode");
                item.NewDateTime= SqlHelper.GetNullableDateTime(reader, "NewDateTime");
                item.Type = SqlHelper.GetNullableString(reader, "Type");
                item.WorkingTypeID = SqlHelper.GetNullableInt32(reader, "WorkingTypeID");
                item.WorkingTypeCode= SqlHelper.GetNullableString(reader, "WorkingTypeCode");
                item.Exception = SqlHelper.GetNullableString(reader, "Exception");

            }
            return item;
        }


        public static List<PostSystemDatabaseRequest> GetSystemDatabase(this SqlDataReader reader)
        {

            List<PostSystemDatabaseRequest> items = new List<PostSystemDatabaseRequest>();
            while (reader.Read())
            {
                PostSystemDatabaseRequest item = new PostSystemDatabaseRequest();
                item.Database = SqlHelper.GetNullableString(reader, "Database");
                item.Inout = SqlHelper.GetBoolean(reader, "Inout");
                item.InChar = SqlHelper.GetNullableString(reader, "InChar");
                item.OutChar = SqlHelper.GetNullableString(reader, "OutChar");
                item.Protocol = SqlHelper.GetNullableString(reader, "Protocol");
                item.Hostname = SqlHelper.GetNullableString(reader, "Hostname");
                item.Username = SqlHelper.GetNullableString(reader, "Username");
                item.Password = SqlHelper.GetNullableString(reader, "Password");
                item.DbTable = SqlHelper.GetNullableString(reader, "DbTable");
                item.DbQuery = SqlHelper.GetNullableString(reader, "DbQuery");
                item.TransferIDColumn= SqlHelper.GetNullableString(reader, "TransferIdColumn");
                item.TransferID = SqlHelper.GetNullableInt32(reader, "TransferId");
                item.Code= SqlHelper.GetNullableString(reader, "Code");
                items.Add(item);
            }

            
            return items;
        }

        public static Dictionary<object, object> GetMenuTreeInfo(this SqlDataReader reader)

        {
            //Dictionary<string, Dictionary<string, Dictionary<string, List<string>>>> menuList = new Dictionary<string, Dictionary<string, Dictionary<string, List<string>>>>();
            Dictionary<object, object> menuList = new Dictionary<object, object>();
            Dictionary<string, Dictionary<string, List<string>>> menuItem = new Dictionary<string, Dictionary<string, List<string>>>();
            Dictionary<string, List<string>> dic = new Dictionary<string, List<string>>();
            //List<string> menuSubItem2;
            string subtitle = string.Empty;
            string title = string.Empty;
            string title2 = string.Empty;
            //string childTitle = string.Empty;
            int say = 0;
            while (reader.Read())
            {
                say++;
                if (!menuItem.AsList().Exists(x => x.Key == SqlHelper.GetNullableString(reader, "ChildTitle")) && title != SqlHelper.GetNullableString(reader, "ChildTitle") && title != string.Empty)
                {

                    if (title2 != null)
                    {
                        menuItem.Add(title, dic);
                        dic = new Dictionary<string, List<string>>();
                    }
                }
                if (!menuList.AsList().Exists(x => x.Key == SqlHelper.GetNullableString(reader, "Title")) && subtitle != SqlHelper.GetNullableString(reader, "Title") && subtitle != string.Empty)
                {
                    try
                    {

                        menuList.Add(subtitle, menuItem);
                        dic = new Dictionary<string, List<string>>();

                    }
                    catch
                    {
                        menuItem = new Dictionary<string, Dictionary<string, List<string>>>();

                        if (SqlHelper.GetNullableString(reader, "Title") != "Giriş - Çıkış" && SqlHelper.GetNullableString(reader, "Title") != "Raporlama" && SqlHelper.GetNullableString(reader, "Title") != "İzinler" && SqlHelper.GetNullableString(reader, "Title") != "Puantaj" && SqlHelper.GetNullableString(reader, "Title")!=null)
                        {
                            subtitle = SqlHelper.GetNullableString(reader, "Title");
                            menuList.Add(subtitle, menuItem);
                        }
                    }

                }

                subtitle = SqlHelper.GetNullableString(reader, "Title");
                title = SqlHelper.GetNullableString(reader, "ChildTitle");
                title2 = SqlHelper.GetNullableString(reader, "ChildTitle2");
                List<string> menuSubItem2;

                if (title2 != null)
                {
                    menuSubItem2 = new List<string> { SqlHelper.GetNullableString(reader, "ChildTitle2") + " Okuma", SqlHelper.GetNullableString(reader, "ChildTitle2") + " Yazma", SqlHelper.GetNullableString(reader, "ChildTitle2") + " Güncelleme", SqlHelper.GetNullableString(reader, "ChildTitle2") + " Silme" };
                    dic.Add(SqlHelper.GetNullableString(reader, "ChildTitle2"), menuSubItem2);
                }
                else
                {
                    if (subtitle == "Personel" || subtitle == "Giriş - Çıkış" || subtitle == "İzinler" || subtitle == "Puantaj")
                    {
                        if (subtitle == "Personel" && title== "Personel Bilgileri")
                        {
                            string tabNames = string.Empty;
                            for (int i = 0; i < 6; i++)
                            {
                                //if (i == 0) tabNames = subtitle + " Bilgileri";
                                if (i == 0) tabNames = subtitle + " Temel Bilgiler";
                                if (i == 1) tabNames = subtitle + " Amir Bilgileri";
                                if (i == 2) tabNames = subtitle + " Amir Bağlı Personeller";
                                if (i == 3) tabNames = subtitle + " Kimlik Bilgisi";
                                if (i == 4) tabNames = subtitle + " İletişim Bilgisi";
                                if (i == 5) tabNames = subtitle + " Arşiv";
                                List<string> menuSubItem1 = new List<string> { tabNames + " Okuma", tabNames + " Yazma", tabNames + " Güncelleme", tabNames + " Silme" };
                                dic.Add(tabNames, menuSubItem1);
                            }

                            menuItem.Add(title, dic);
                            menuList.Add(subtitle, menuItem);
                            dic = new Dictionary<string, List<string>>();

                        }
                        else if (subtitle == "İzinler")
                        {
                            if (title == "Yıllık İzin İşlemleri")
                            {


                                //List<string> menuSubItem1 = new List<string> { title + " Okuma", title + " Yazma", title + " Güncelleme", title + " Silme" };
                                //dic.Add(title, menuSubItem1);
                                //menuItem.Add(title, dic);                                
                                //menuList.Add(subtitle, menuItem);
                                //dic = new Dictionary<string, List<string>>();

                                string tabNames = string.Empty;
                                for (int i = 0; i < 2; i++)
                                {
                                    if (i == 0) tabNames = subtitle + " Yıllık İzin Hesaplama";
                                    if (i == 1) tabNames = subtitle + " Yıllık İzin Tablosu";
                                    List<string> menuSubItem1 = new List<string> { tabNames + " Okuma", tabNames + " Yazma", tabNames + " Güncelleme", tabNames + " Silme" };
                                    dic.Add(tabNames, menuSubItem1);

                                }

                                menuItem.Add(title, dic);
                                menuList.Add(subtitle, menuItem);
                                dic = new Dictionary<string, List<string>>();



                            }
                            else
                            {
                                string tabNames = string.Empty;
                                for (int i = 0; i < 2; i++)
                                {
                                    if (i == 0) tabNames = subtitle + " Günlük İzin Girişleri";
                                    if (i == 1) tabNames = subtitle + " Saatlik İzin Girişleri";
                                    //if (i == 2) tabNames = subtitle + " İzin Kayıtları";
                                    List<string> menuSubItem1 = new List<string> { tabNames + " Okuma", tabNames + " Yazma", tabNames + " Güncelleme", tabNames + " Silme" };
                                    dic.Add(tabNames, menuSubItem1);

                                }

                                menuItem.Add(title, dic);
                                dic = new Dictionary<string, List<string>>();
                            }



                        }
                        else if (subtitle == "Puantaj")
                        {


                            if (title == "Aylık Puantaj")
                            {
                                string tabNames = string.Empty;
                                for (int i = 0; i < 2; i++)
                                {
                                    if (i == 0) tabNames = subtitle + " Aylık Hesaplama";
                                    if (i == 1) tabNames = subtitle + " Aylık Tablo";
                                    List<string> menuSubItem1 = new List<string> { tabNames + " Okuma", tabNames + " Yazma", tabNames + " Güncelleme", tabNames + " Silme" };
                                    dic.Add(tabNames, menuSubItem1);

                                }

                                menuItem.Add(title, dic);
                                //menuList.Add(subtitle, dic);
                                dic = new Dictionary<string, List<string>>();
                            }
                            else if (title == "Haftalık Puantaj")
                            {
                                string tabNames = string.Empty;
                                for (int i = 0; i < 2; i++)
                                {
                                    if (i == 0) tabNames = subtitle + " Haftalık Hesaplama";
                                    if (i == 1) tabNames = subtitle + " Haftalık Tablo";
                                    List<string> menuSubItem1 = new List<string> { tabNames + " Okuma", tabNames + " Yazma", tabNames + " Güncelleme", tabNames + " Silme" };
                                    dic.Add(tabNames, menuSubItem1);

                                }

                                menuItem.Add(title, dic);
                                //menuList.Add(subtitle, dic);
                                dic = new Dictionary<string, List<string>>();
                            }

                            else
                            {
                                string tabNames = string.Empty;
                                for (int i = 0; i < 2; i++)
                                {
                                    if (i == 0) tabNames = subtitle + " Günlük Hesaplama";
                                    if (i == 1) tabNames = subtitle + " Günlük Tablo";
                                    List<string> menuSubItem1 = new List<string> { tabNames + " Okuma", tabNames + " Yazma", tabNames + " Güncelleme", tabNames + " Silme" };
                                    dic.Add(tabNames, menuSubItem1);

                                }

                                menuItem.Add(title, dic);
                                menuList.Add(subtitle, menuItem);
                                dic = new Dictionary<string, List<string>>();
                            }

                            //List<string> menuSubItem1 = new List<string> { title + " Okuma", title + " Yazma", title + " Güncelleme", title + " Silme" };
                            //dic.Add(title, menuSubItem1);
                            //menuList.Add(subtitle, menuSubItem1);
                            //dic = new Dictionary<string, List<string>>();

                        }
                        else if (subtitle == "Giriş - Çıkış")
                        {

                            string tabNames = string.Empty;
                            List<string> menuSubItem1 = new List<string> { title + " Okuma", title + " Yazma", title + " Güncelleme", title + " Silme" };
                            dic.Add(title, menuSubItem1);
                            //menuItem.Add(title, dic);
                            //if(!menuList.ContainsKey(subtitle))

                            if (title == "Veri Alma İşleme")
                            {
                                menuList.Add(subtitle, dic);
                                dic = new Dictionary<string, List<string>>();
                            }
                            //List<string> menuSubItem1 = new List<string> { title + " Okuma", title + " Yazma", title + " Güncelleme", title + " Silme" };
                            //dic.Add(title, menuSubItem1);
                            //menuList.Add(subtitle, menuSubItem1);
                            //dic = new Dictionary<string, List<string>>();

                        }
                        else
                        {
                            List<string> menuSubItem1 = new List<string> { title + " Okuma", title + " Yazma", title + " Güncelleme", title + " Silme" };
                            //dic.Add(title, menuSubItem1);
                            if (subtitle=="Personel")
                            menuList.Add(title, menuSubItem1);
                            else
                            menuList.Add(subtitle, menuSubItem1);

                            dic = new Dictionary<string, List<string>>();

                        }

                    }
                    else
                    {
                        List<string> menuSubItem1 = new List<string> { title + " Okuma", title + " Yazma", title + " Güncelleme", title + " Silme" };
                        if (title != null)
                        {
                            dic.Add(title, menuSubItem1);
                            if (!menuList.ContainsKey(subtitle))
                                menuList.Add(subtitle, dic);
                            dic = new Dictionary<string, List<string>>();
                        }
                    }
                }

                if (say == 1) { if (!menuList.ContainsKey(subtitle)) menuList.Add(subtitle, menuItem); }
            }

            if (title!=null)
            menuItem.Add(title, dic);
            return menuList;
        }


        //public static Dictionary<string, Dictionary<string, List<string>>> GetMenuTreeInfo(this SqlDataReader reader)
        //{


        //    Dictionary<string, Dictionary<string, List<string>>> menuList = new Dictionary<string, Dictionary<string, List<string>>>();
        //    Dictionary<string, List<string>> menuItem= new Dictionary<string, List<string>>();
        //    string title = string.Empty;
        //    string childTitle = string.Empty;
        //    while (reader.Read())
        //    {
        //        List<string> menuSubItem = new List<string> { SqlHelper.GetNullableString(reader, "ChildTitle")+ " Okuma", SqlHelper.GetNullableString(reader, "ChildTitle")+" Yazma", SqlHelper.GetNullableString(reader, "ChildTitle") +" Güncelleme", SqlHelper.GetNullableString(reader, "ChildTitle")+ " Silme" };                

        //        if (!menuList.AsList().Exists(x => x.Key == SqlHelper.GetNullableString(reader, "Title")) && title != SqlHelper.GetNullableString(reader, "Title") && title!=string.Empty )
        //        {    
        //            menuList.Add(SqlHelper.GetNullableString(reader, "Title"), menuItem);
        //            menuItem = new Dictionary<string, List<string>>();
        //            //menuItem.Clear();
        //        }

        //        menuItem.Add(SqlHelper.GetNullableString(reader, "ChildTitle"), menuSubItem);
        //        title = SqlHelper.GetNullableString(reader, "Title");
        //        childTitle = SqlHelper.GetNullableString(reader, "ChildTitle");

        //        if (menuList.Count==0) menuList.Add(title, menuItem);


        //    }

        //    return menuList;


        //    //list.TodoItemFlatNode = deneme1;
        //    //return list;
        //    //List<GetMenuInfoChild> childList = new List<GetMenuInfoChild>();
        //    //GetMenuInfoChild child;
        //    //GetMenuInfo item = new GetMenuInfo();
        //    //List<GetMenuInfo> list = new List<GetMenuInfo>();
        //    //int say = 0;
        //    //while (reader.Read())
        //    //{
        //    //    say++;
        //    //    if (!list.Exists(x => x.title == SqlHelper.GetNullableString(reader, "Title")) && say != 1)
        //    //    { item = new GetMenuInfo(); childList = new List<GetMenuInfoChild>(); list.Add(item); }
        //    //    item.title = SqlHelper.GetNullableString(reader, "Title");
        //    //    item.icon = SqlHelper.GetNullableString(reader, "Icon");
        //    //    item.type = SqlHelper.GetNullableString(reader, "Type");
        //    //    item.badgeType = SqlHelper.GetNullableString(reader, "BadgeType");
        //    //    item.badgeValue = SqlHelper.GetNullableString(reader, "BadgeValue");
        //    //    item.active = SqlHelper.GetBoolean(reader, "Active");
        //    //    child = new GetMenuInfoChild();
        //    //    child.path = SqlHelper.GetNullableString(reader, "Path");
        //    //    child.title = SqlHelper.GetNullableString(reader, "ChildTitle");
        //    //    child.type = SqlHelper.GetNullableString(reader, "ChildType");
        //    //    childList.Add(child);
        //    //    item.children = childList;
        //    //    if (say == 1) list.Add(item);
        //    //}
        //    //return list;
        //}

    }
}
