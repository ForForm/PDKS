using BasApp.Translator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace BasApp.EModels
{

    public class _BasDB
    {
        public string ProviderName { get; set; }

        public string ConnectionString { get; set; }
    }


    public class MySettingsModel
    {
        public _BasDB BasDB { get; set; }

        public string Local { get; set; }

        public string ForeEnd { get; set; }
    }


    //public class PersonnelPostIDRequest
    //{
    //    public string CompanyId { get; set; }
    //    public string Username { get; set; }
    //    public int? ID { get; set; }
    //    public int? EmployeeID { get; set; }
    //    public String IdNo { get; set; }
    //    public DateTime? DateOfBirth { get; set; }
    //    public int? Gender { get; set; }
    //    public String SerialNumber { get; set; }
    //    public String Nationality { get; set; }
    //    public DateTime? ValidUntil { get; set; }
    //    public String Mother { get; set; }
    //    public String Father { get; set; }

    //}

    //public class ResultDataSet 
    //{
    //    public String ReturnCode { get; set; }
    //    public String ReturnDscr { get; set; }


    //}


    //public class PersonnelPostChiefRequest
    //{
    //    public string CompanyId { get; set; }
    //    public string Username { get; set; }
    //    public int? ID { get; set; }
    //    public int? EmployeeID { get; set; }
    //    public int? ChiefEmployeeID { get; set; }
    //    public int? Degree { get; set; }

    //}


    //public class PersonnelPostContactRequest
    //{
    //    public string CompanyId { get; set; }
    //    public string Username { get; set; }
    //    public int? ID { get; set; }
    //    public int? EmployeeID { get; set; }
    //    public String Address { get; set; }
    //    public String Province { get; set; }
    //    public String Country { get; set; }
    //    public String Phone1 { get; set; }
    //    public String Phone2 { get; set; }
    //    public String MobilePhone { get; set; }
    //    public String Email { get; set; }
    //    public String PostCode { get; set; }

    //}


    //public class PersonnelPostRequest
    //{
    //        public string CompanyId { get; set; }
    //        public string Username { get; set; }
    //        public int? ID { get; set; }
    //        public String Code { get; set; }
    //        public String Name { get; set; }
    //        public String Surname { get; set; }
    //        public Boolean? Chief { get; set; }
    //        public String PassID { get; set; }
    //        public DateTime? PassDate { get; set; }
    //        public DateTime? StartingDate { get; set; }
    //        public DateTime? LeavingDate{ get; set; }
    //        public int? ExitReasonID { get; set; }
    //        public DateTime? CommunityDate { get; set; }
    //        public String CollarColor { get; set; }
    //        public DateTime? CollarColorDate { get; set; }
    //        public int? EmployeeTypeID { get; set; }
    //        public DateTime? EmployeeTypeDate { get; set; }
    //        public int? LoopID { get; set; }
    //        public DateTime? LoopDate { get; set; }
    //        public int? DepartmentID { get; set; }
    //        public DateTime? DepartmentDate { get; set; }
    //        public int? CostCenterID { get; set; }
    //        public DateTime? CostCenterDate { get; set; }
    //        public int? CadreID { get; set; }
    //        public DateTime? CadreDate { get; set; }
    //        public int? ProfessionID { get; set; }
    //        public DateTime? ProfessionDate { get; set; }
    //        public int? TaskID { get; set; }
    //        public DateTime? TaskDate { get; set; }
    //        public int? GroupID { get; set; }
    //        public DateTime? GroupDate { get; set; }
    //        public int? UnitID { get; set; }
    //        public DateTime? UnitDate { get; set; }
    //        public int? BranchID{ get; set; }
    //        public DateTime? BranchDate { get; set; }
    //        public int? ServiceStationID { get; set; }
    //        public DateTime? ServiceStationDate { get; set; }
    //        public String Photo { get; set; }
    //        public Boolean? PayrollCalculation { get; set; }
    //        public DateTime? PayrollCalculationDate { get; set; }
    //        public Boolean? Overtime { get; set; }
    //        public DateTime? OvertimeDate { get; set; }
    //        public String FeeType { get; set; }
    //        public DateTime? FeeTypeDate { get; set; }
    //        public DateTime? LeaveDate { get; set; }
    //        public String Code1{ get; set; }
    //        public String Code2{ get; set; }
    //        public String Code3 { get; set; }
    //        public String Code4 { get; set; }
    //        public String DomainUsername{ get; set; }
    //        public String ConfirmationPassword{ get; set; }
    //        public Boolean? Active { get; set; }
    //        public int? UserID { get; set; }
    //        public Boolean? Shift { get; set; }
    //        public DateTime? ShiftDate { get; set; }
    //}

    //public class GetLoginRequest
    //{
    //    public string Username { get; set; }

    //    public string Password { get; set; }

    //    public string CompanyId { get; set; }
    //}

    //public class PostDefinitionRequest
    //{
    //    public string CompanyId { get; set; }

    //    public string Username { get; set; }

    //    public string type { get; set; }

    //    public string code { get; set; }

    //    public string name { get; set; }

    //    public string subcode { get; set; }

    //    public string subname { get; set; }

    //}


    //public class PostDefinitionShiftRequest
    //{
    //    public string CompanyId { get; set; }

    //    public string Username { get; set; }


    //    public int ID { get; set; }

    //    public string Code { get; set; }

    //    public string Name { get; set; }

    //    public int Type { get; set; }

    //    public DateTime? Time { get; set; }

    //    public DateTime? StartEarly { get; set; }

    //    public DateTime? Start { get; set; }

    //    public DateTime? LateStart { get; set; }

    //    public DateTime? EarlyFinish { get; set; }

    //    public DateTime? Finish { get; set; }

    //    public DateTime? LateFinish { get; set; }

    //    public int WeekHoliday { get; set; }

    //    public int TypeOfWeekHoliday { get; set; }

    //    public int DayTurning { get; set; }

    //    public DateTime? DayTurningTime{ get; set; }
    //}


    //public class PostDefinitionShiftGroupRequest
    //{
    //    public string CompanyId { get; set; }

    //    public string Username { get; set; }

    //    public int ID { get; set; }

    //    public string Code { get; set; }

    //    public string Name { get; set; }

    //    public int HolidayDay { get; set; }
 

    //}

    //public class PostDefinitionShiftGroupToleranceRequest
    //{
    //    public string CompanyId { get; set; }

    //    public string Username { get; set; }

    //    public int ID { get; set; }

    //    public int ShiftGroupID { get; set; }

    //    public DateTime EarlyStartTolerance{ get; set; }

    //    public DateTime LateStartTolerance { get; set; }

    //    public DateTime EarlyFinishTolerance { get; set; }

    //    public DateTime LateFinishTolerance { get; set; }
    //}


    //public class PostDefinitionShiftGroupBackUpRequest
    //{
    //    public string CompanyId { get; set; }

    //    public string Username { get; set; }


    //    public int ID { get; set; }

    //    public int ShiftGroupID { get; set; }

    //    public int ShiftID { get; set; }

    //    public int NumberOfDays { get; set; }

    //}

    //public class PostDefinitionWorkingTypesRequest
    //{

    //    public string CompanyId { get; set; }

    //    public string Username{ get; set; }

    //    public int id { get; set; }

    //    public string code { get; set; }

    //    public string name { get; set; }

    //    public string type { get; set; }

    //    public int roundingHourID { get; set; }

    //    public int roundingDayID { get; set; }

    //    public DateTime lowerLimit { get; set; }

    //    public DateTime upperLimit { get; set; }

    //    public int multiplier { get; set; }

    //    public bool compulsory { get; set; }

    //    public bool confirmation { get; set; }

    //    public bool saturday { get; set; }

    //    public bool saturdayDay { get; set; }

    //    public bool saturdayHour { get; set; }

    //    public bool weekend { get; set; }

    //    public bool weekendDay { get; set; }

    //    public bool weekendHour { get; set; }

    //    public bool generalHoliday { get; set; }

    //    public bool generalHolidayDay { get; set; }

    //    public bool generalHolidayHour { get; set; }

    //    public bool workCalculator { get; set; }

    //    public bool leaveContinued { get; set; }

    //    public string reportCode { get; set; }

    //    public string integrationCode { get; set; }

    //    public int equalizationDegrees { get; set; }


    //}


    //public class PostDefinitionWorkingTypesDistRequest
    //{
    //    public string CompanyId { get; set; }

    //    public string Username { get; set; }


    //    public int id { get; set; }

    //    public int workingTypeID { get; set; }

    //    public string code { get; set; }

    //    public string status { get; set; }

    //    public DateTime lowerLimit { get; set; }

    //    public DateTime upperLimit { get; set; }

    //    public string multiplier { get; set; }

    //}


        //public class PostDefinitionShiftDistRequest
        //{
        //    public string CompanyId { get; set; }

        //    public string Username { get; set; }

        //    public int ID { get; set; }

        //    public int ShiftID { get; set; }

        //    public string WorkingTypeID { get; set; }

        //    public DateTime FirstHour { get; set; }

        //    public DateTime LastHour { get; set; }

        //    public DateTime Time { get; set; }

        //    public int Status { get; set; }

        //}

    //public class PostDefinitionShiftGroupDistRequest
    //{
    //    public string CompanyId { get; set; }

    //    public string Username { get; set; }


    //    public int ID { get; set; }


    //    //public int Code{ get; set; }

    //    //public string Name { get; set; }

    //    public int ShiftGroupID { get; set; }

    //    public int ShiftID { get; set; }

    //    public int NumberOfDays { get; set; }

    //}


    //public class PersonnelPostFilterColumnsRequest
    //{
    //    public string CompanyId { get; set; }

    //    public string Username { get; set; }

    //    public string ColumnName { get; set; }

    //    public bool? Active { get; set; }

    //    public string Label { get; set; }


    //}

    //public class PostDefinitionDetailRequest
    //{
    //    public string CompanyId { get; set; }

    //    public string Username { get; set; }


    //    public string id { get; set; }

    //    public string type { get; set; }

    //    public string code { get; set; }

    //    public string firstDayValue { get; set; }

    //    public string finalDayValue { get; set; }

    //    public string plainDayValue { get; set; }

    //    public string firstHourValue { get; set; }

    //    public string finalHourValue { get; set; }

    //    public string plainHourValue { get; set; }


    //}

    //public class PostMenuGroupRequest
    //{
    //    public string CompanyId { get; set; }

    //    public string Username { get; set; }

    //    public string groupCode { get; set; }

    //    public string groupName { get; set; }
    //}



    //public class GetUserTabsRequest
    //{
    //    public string CompanyId { get; set; }

    //    public string Username { get; set; }

    //    public string tabname { get; set; }
    //}
    

    //public class Auth
    //{
    //    public string tabname{ get; set; }

    //    public bool read { get; set; }

    //    public bool write{ get; set; }

    //    public bool update { get; set; }

    //    public bool delete { get; set; }

    //}

    //public class TodoItemFlatNode
    //{
    //    public string CompanyId { get; set; }

    //    public string Username { get; set; }


    //    public string groupCode { get; set; }

    //    public string user { get; set; }

    //    public string item { get; set; }

    //    public int level { get; set; }

    //    public bool? expandable { get; set; }
    //}


   

    //public class Badge
    //{
    //    public string value { get; set; }

    //    public string background { get; set; }

    //    public string color { get; set; }

    //}

    //public class TotalGetMenuInfo:GetMenuInfo
    //{
    //    public int? ID { get; set; }

    //    public int? parentID { get; set; }

    //    public bool child { get; set; }

    //    public string ReturnCode { get; set; }

    //    public string ReturnDscr  { get; set; }

    //}


    

    //public class PersonnelGetQueryInfo
    //{

    //    public string type { get; set; }

    //    public string id{ get; set; }

    //    //public string icon { get; set; }

    //    public string label { get; set; }

    //    public bool? value { get; set; }

    //}

    

    //public class GetMenuInfo
    //{

    //    public string type { get; set; }
        
    //    public string label { get; set; }

    //    public string route { get; set; }

    //    public string icon { get; set; }

    //    public Badge badge { get; set; }

    //    public List<TotalGetMenuInfo> children { get; set; }
    //}


    //public class GetMenuInfo
    //{

    //    public string path { get; set; }

    //    public string title { get; set; }

    //    public string icon { get; set; }

    //    public string type { get; set; }

    //    public string badgeType { get; set; }

    //    public string badgeValue { get; set; }

    //    public bool? active { get; set; }

    //    public bool? bookmark { get; set; }

    //    public List<GetMenuInfo> children { get; set; }
    //}

    //public class GetMenuInfoChild
    //{


    //    public string path { get; set; }

    //    public string title { get; set; }

    //    public string type { get; set; }

    //    GetMenuInfo
    //    //public GetMenuInfo children { get; set; }

    //}

    public class MenuInfo
    {

        public string title { get; set; }

        public string icon { get; set; }

        public string type { get; set; }

        public string badgeType { get; set; }

        public string badgeValue { get; set; }

        public string childTitle { get; set; }

        public string path { get; set; }

        public string childType { get; set; }

        public bool? active { get; set; }
    }


   

    public class childTitle
    {
        public List<string> subTitle { get; set; }
    }




    public class GetMenuTreeInfo
    {

        public  Dictionary<string, Dictionary<string, List<string>>> TodoItemFlatNode { get; set; }
        
    }


    public class MenuDefinitions
    {
        public int MenuId{ get; set; }

        public int ParentMenu { get; set; }

        public int MenuOrder { get; set; }

        public string Lng { get; set; }

        public string MenuName { get; set; }

        public string CreateUser { get; set; }

        public DateTime TranDate { get; set; }

    }

    

    public class PoolCalculationModel
    {

        public string sirket { get; set; }

        public string username { get; set; }

        public DateTime? startdate { get; set; }

        public int? days{ get; set; }


    }

    [DataContract]
    public class EModel
    {
        [DataMember(Name = "ID")]
        public int ID { get; set; }

        [DataMember(Name = "Name")]
        public string Name { get; set; }

        [DataMember(Name = "UserName")]
        public string UserName { get; set; }

        [DataMember(Name = "Password")]
        public string Password { get; set; }

        [DataMember(Name = "DepartmanID")]
        public string DepartmanID { get; set; }
    }

    public class ReturnMesssage
    {
        public string responseCode { get; set; }

        public string responseDscr { get; set; }

    }


    public class MailSubmitApprove
    {

        public string data { get; set; }
    }

    public class PostApproveInfo
    {
        public int type { get; set; }

        public string srkodu { get; set; }

        public string prsicil { get; set; }

        public string name { get; set; }

        public DateTime? bastarih { get; set; }

        public int? inoutput { get; set; }

        public DateTime? iostartdate { get; set; }

        public string iostarttime { get; set; }

        public string bassaat { get; set; }

        public DateTime? bittarih { get; set; }

        public string bitsaat { get; set; }

        public string sure { get; set; }

        public bool? gelis { get; set; }

        public bool? gidis { get; set; }

        public string gelisservis { get; set; }

        public string gidisservis { get; set; }

        public bool? yemekyer { get; set; }

        public int? gun { get; set; }

        public string neden { get; set; }

        public string posta { get; set; }

        public bool? onay1 { get; set; }

        public string onay1kl { get; set; }

        public DateTime? isbasitarih { get; set; }

        public string sebep { get; set; }

        public string sebep2 { get; set; }

        public string aciklama { get; set; }

        public bool? post { get; set; }

        public int? ret { get; set; }

        public bool? amir { get; set; }

        public string amirKodu { get; set; }

    }


    public class GetShiftInfoRequest
    {
        public string srkodu { get; set; }

        public string username { get; set; }

        public DateTime shiftDate1 { get; set; }

        public DateTime shiftDate2 { get; set; }


    }



    public class GetShiftInfoReponse
    {
        public string srkodu { get; set; }

        public string username { get; set; }

        public DateTime tarih { get; set; }

        public int diff { get; set; }

        public int maxclim { get; set; }

        public string color { get; set; }

        public string dscr { get; set; }

        public string vrkodu { get; set; }

        public int onay1 { get; set; }

        public string onay1kl { get; set; }

        public int onay2 { get; set; }

        public string onay2kl { get; set; }


        public int onay3 { get; set; }

        public string onay3kl { get; set; }


        public int onay4 { get; set; }

        public string onay4kl { get; set; }


        public int onay5 { get; set; }

        public string onay5kl { get; set; }

        public int post { get; set; }

        public int ret { get; set; }

        public string retAcik { get; set; }


    }



    public class PostShiftInfo
    {
        public string srkodu { get; set; }

        public string username { get; set; }

        public string name { get; set; }

        public string approver { get; set; }

        public string depart { get; set; }

        public DateTime bastarih { get; set; }

        public DateTime bittarih { get; set; }

        public string type1 { get; set; }
        public string type2 { get; set; }
        public string type3 { get; set; }
        public string type4 { get; set; }
        public string type5 { get; set; }
        public string type6 { get; set; }
        public string type7 { get; set; }
        public string type8 { get; set; }
        public string type9 { get; set; }
        public string type10 { get; set; }
        public string type11 { get; set; }
        public string type12 { get; set; }
        public string type13 { get; set; }
        public string type14 { get; set; }
        public string type15 { get; set; }
        public string type16 { get; set; }
        public string type17 { get; set; }
        public string type18 { get; set; }
        public string type19 { get; set; }
        public string type20 { get; set; }
        public string type21 { get; set; }
        public string type22 { get; set; }
        public string type23 { get; set; }
        public string type24 { get; set; }
        public string type25 { get; set; }
        public string type26 { get; set; }
        public string type27 { get; set; }
        public string type28 { get; set; }
        public string type29 { get; set; }
        public string type30 { get; set; }

        public string vrd1 { get; set; }
        public string vrd2 { get; set; }
        public string vrd3 { get; set; }
        public string vrd4 { get; set; }
        public string vrd5 { get; set; }
        public string vrd6 { get; set; }
        public string vrd7 { get; set; }
        public string vrd8 { get; set; }
        public string vrd9 { get; set; }
        public string vrd10 { get; set; }
        public string vrd11 { get; set; }
        public string vrd12 { get; set; }
        public string vrd13 { get; set; }
        public string vrd14 { get; set; }
        public string vrd15 { get; set; }
        public string vrd16 { get; set; }
        public string vrd17 { get; set; }
        public string vrd18 { get; set; }
        public string vrd19 { get; set; }
        public string vrd20 { get; set; }
        public string vrd21 { get; set; }
        public string vrd22 { get; set; }
        public string vrd23 { get; set; }
        public string vrd24 { get; set; }
        public string vrd25 { get; set; }
        public string vrd26 { get; set; }
        public string vrd27 { get; set; }
        public string vrd28 { get; set; }
        public string vrd29 { get; set; }
        public string vrd30 { get; set; }

    }

    public class SubmitApproveInfo
    {
        public int id { get; set; }

        public int type { get; set; }

        public bool? approve { get; set; }

        public bool? reject { get; set; }

        public string prsicil { get; set; }

        public string amir { get; set; }

        public string name { get; set; }

        public DateTime bastarih { get; set; }

        public DateTime bittarih { get; set; }

        public string neden { get; set; }

        public string sebep { get; set; }

        public string sebep2 { get; set; }

        public string aciklama { get; set; }

        public string retacik { get; set; }

    }


    public class MachineInfo
    {
        public List<string> macAddresses { get; set; }
    }


    public class GetFormsInfo
    {
        public string user { get; set; }

        public int type { get; set; }

        public int reason { get; set; }

        public DateTime begindate { get; set; }

        public DateTime begintime { get; set; }

        public DateTime enddate { get; set; }

        public DateTime endtime { get; set; }

        public DateTime startdate { get; set; }

        public decimal days { get; set; }

        public string desc { get; set; }

        public string approver { get; set; }

    }

    public class GetControlLisansResponse
    {
        public bool valid { get; set; }

        public string logo { get; set; }

    }

    public class PostMachineInfo
    {

        public string ID { get; set; }

        public string companyCode { get; set; }

        public string companyName { get; set; }

        public List<string> macAddress { get; set; }

        public string userCount { get; set; }

        public string barkodesNum { get; set; }

        public string validNum { get; set; }

        public string SecureNum { get; set; }

        public string status { get; set; }

        public DateTime tranDate { get; set; }

        public string barkodesSecureNum { get; set; }




    }


    public class MachineLicenseInfo
    {

        public string ID { get; set; }

        public string companyCode { get; set; }

        public string companyName { get; set; }

        public string macAddress { get; set; }

        public string userCount { get; set; }

        public string barkodesNum { get; set; }

        public string validNum { get; set; }

        public string SecureNum { get; set; }

        public string status { get; set; }

        public DateTime tranDate { get; set; }

        public string barkodesSecureNum { get; set; }

        public Byte[] logo { get; set; }

    }

    public class GetIOReportInfo
    {
        public string sicil { get; set; }

        public string adi { get; set; }

        public string departman { get; set; }

        public string gorev { get; set; }

        public string masrafMerkez { get; set; }

        public DateTime girisTarih { get; set; }

        public DateTime girisSaat { get; set; }

        public DateTime cikisTarih { get; set; }

        public DateTime cikisSaat { get; set; }
    }

    public class GetPuantajReportInfoDtl
    {
        public string ay { get; set; }

        public string sube { get; set; }

        public string adi { get; set; }

        public string raporKodu { get; set; }

    }
    public class GetPuantajReportInfo
    {
        public string gorevi { get; set; }

        public string sicil { get; set; }

        public string name { get; set; }

        public string gun1 { get; set; }

        public string gun2 { get; set; }

        public string gun3 { get; set; }

        public string gun4 { get; set; }

        public string gun5 { get; set; }

        public string gun6 { get; set; }

        public string gun7 { get; set; }

        public string gun8 { get; set; }

        public string gun9 { get; set; }

        public string gun10 { get; set; }

        public string gun11 { get; set; }

        public string gun12 { get; set; }

        public string gun13 { get; set; }

        public string gun14 { get; set; }

        public string gun15 { get; set; }

        public string gun16 { get; set; }

        public string gun17 { get; set; }

        public string gun18 { get; set; }

        public string gun19 { get; set; }

        public string gun20 { get; set; }

        public string gun21 { get; set; }

        public string gun22 { get; set; }

        public string gun23 { get; set; }

        public string gun24 { get; set; }

        public string gun25 { get; set; }

        public string gun26 { get; set; }

        public string gun27 { get; set; }

        public string gun28 { get; set; }

        public string gun29 { get; set; }

        public string gun30 { get; set; }

        public string gun31 { get; set; }

        public string fiilCalisma { get; set; }

        public string standartSaat { get; set; }

        public string eksikCalisma { get; set; }

        public string imza { get; set; }

    }

    public class GetIzinReportInfo
    {
        public string IzinTuru { get; set; }

        public string neden { get; set; }

        public string acik { get; set; }


        public string id { get; set; }

        public string prSicil { get; set; }

        public string adi { get; set; }

        public string soyadi { get; set; }

        public DateTime basTarih { get; set; }

        public DateTime? basSaat { get; set; }

        public DateTime bitTarih { get; set; }

        public DateTime? bitSaat { get; set; }

        public string sure { get; set; }

        public bool? yemekYer { get; set; }

        public bool? servis { get; set; }

        public string onay1 { get; set; }

        public string onay1kl { get; set; }

        public string onay2 { get; set; }

        public string onay2kl { get; set; }

        public string onay3 { get; set; }

        public string onay3kl { get; set; }

        public string onay4 { get; set; }

        public string onay4kl { get; set; }

        public string onay5 { get; set; }

        public string onay5kl { get; set; }

        public string durum { get; set; }





    }

    public class GetLngModel
    {

        public int Id { get; set; }

        public string Dil { get; set; }

        public string Kodu { get; set; }

        public string Text { get; set; }

    }

    public class GetLabelModel
    {

        public string Label { get; set; }

        public string LabelName { get; set; }

    }

    public class PostParameterInfo
    {

        public int ID { get; set; }

        public string firmName { get; set; }

        public bool prsBazli { get; set; }

        public bool ret { get; set; }

        public bool sendMail { get; set; }

        public bool gecmisPostUser { get; set; }

        public bool mailOnay { get; set; }

        public bool fmFormOnay { get; set; }

        public bool siFormOnay { get; set; }

        public bool giFormOnay { get; set; }

        public bool fmUseForm { get; set; }

        public bool siUseForm { get; set; }

        public bool giUseForm { get; set; }

        public int onayTuru { get; set; }

        public string smtp { get; set; }

        public string port { get; set; }

        public string smtpUser { get; set; }

        public string smtpPass { get; set; }

        public bool ssl { get; set; }

        public string mail { get; set; }

        public string mailFrom { get; set; }

        public string mailSubject { get; set; }

        public string reportUrl { get; set; }

        public string language { get; set; }

        public DateTime transferDate { get; set; }

        public int fmTip { get; set; }

        public bool fmServis { get; set; }

        public bool fmYemek { get; set; }

        public bool fmAcik { get; set; }

        public bool fmNeden { get; set; }

        public bool fmGecmisIslem { get; set; }

        public int fmGecmisIslemSure { get; set; }

        public string fmTemplate { get; set; }

        public string fmUserMailBody { get; set; }

        public bool giTip { get; set; }

        public bool giYemek { get; set; }

        public bool giAcik { get; set; }

        public bool giNeden { get; set; }

        public bool giGecmisIslem { get; set; }

        public int giGecmisIslemSure { get; set; }

        public bool giYillikIzin { get; set; }

        public bool siTip { get; set; }

        public bool siYemek { get; set; }

        public bool siAcik { get; set; }

        public bool siNeden { get; set; }

        public bool siGecmisIslem { get; set; }

        public int siGecmisIslemSure { get; set; }

        public bool siSaat { get; set; }

        public bool hktUseForm { get; set; }

        public bool hktFormOnay { get; set; }

        public bool hktNeden { get; set; }

        public bool hktAcik { get; set; }

        public bool hktGecmisIslem { get; set; }

        public int hktGecmisIslemSure { get; set; }

        public bool pstAcik { get; set; }

        public bool pstGecmisIslem { get; set; }

        public int pstGecmisIslemSure { get; set; }


        public string link1Name { get; set; }

        public string link1Url { get; set; }

        public string link2Name { get; set; }

        public string link2Url { get; set; }

        public string link3Name { get; set; }

        public string link3Url { get; set; }

        public string link4Name { get; set; }

        public string link4Url { get; set; }

        public string link5Name { get; set; }

        public string link5Url { get; set; }



    }

    public class GetDateCalculationInfo
    {

        public int type { get; set; }

        public string sirket { get; set; }

        public string sicilNo { get; set; }

        public int neden { get; set; }

        public DateTime? basTarih { get; set; }

        public DateTime? bitTarih { get; set; }

        public decimal? gun { get; set; }

        public string basSaat { get; set; }

        public string bitSaat { get; set; }

        public string sure { get; set; }

        public DateTime? isBasiTarih { get; set; }

        public DateTime? iobasTarih { get; set; }

        public string iobasSure { get; set; }

        public string inoutput { get; set; }

        public string posta { get; set; }

        public string sebep { get; set; }

        public string aciklama { get; set; }

        public int idNo { get; set; }

        public string user { get; set; }
    }


    public class GetDateCalculationResponse
    {
        public string sebep { get; set; }

        public string sonuc { get; set; }

        public string srKodu { get; set; }

        public string sicilNo { get; set; }

        public string neden { get; set; }

        public DateTime basTarih { get; set; }

        public decimal gun { get; set; }

        public DateTime bitTarih { get; set; }

        public DateTime isBasiTarih { get; set; }

        public decimal ays_lmt { get; set; }

        public decimal yil_lmt { get; set; }

        public decimal ttl_lmt { get; set; }

    }


    public class PoolDelegationSelectModel
    {
        public int id { get; set; }
        public string user { get; set; }
        public string username { get; set; }
        public DateTime bastarih { get; set; }
        public DateTime bittarih { get; set; }
        public string vekil { get; set; }
        public string vekiladi { get; set; }
        public string userPassword { get; set; }

    }

    public class PoolUserSelectModel
    {
        public int ID { get; set; }

        public string username { get; set; }

        public string name { get; set; }

        public string depart { get; set; }

        public string yillikFazlaMesai { get; set; }

        public bool useServiceArrival { get; set; }

        public string serviceArrival { get; set; }

        public bool useServiceGoing { get; set; }

        public string serviceGoing { get; set; }

        public string approve { get; set; }

        public string approver { get; set; }

        public decimal YillikKalan { get; set; }

        public string Iodesc { get; set; }


    }


    public class PoolAuthSelectModel
    {
        public bool Gunluk { get; set; }
        public bool Mesai { get; set; }
        public bool Saat { get; set; }
        public bool Vardiya { get; set; }
        public bool Hareket { get; set; }
        public bool Posta { get; set; }
        public bool Amir1 { get; set; }
    }

    //public class ParamsModel
    //{
    //    public string ForeEndUrl { get; set; }        

    //}

    public class PoolFormsSelectModel
    {
        public string template { get; set; }
    }

    public class PoolApproveSelectModel
    {
        public string Inoutput { get; set; }
        public int id { get; set; }
        public string IzinTip { get; set; }
        public string UserName { get; set; }
        public string Name { get; set; }
        public string ExplationCode { get; set; }
        public DateTime Date { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Time { get; set; }
        public string Reason { get; set; }
        public string Reason2 { get; set; }
        public string Description { get; set; }
        public int Count { get; set; }
        public decimal YillikKalan { get; set; }
        public string YillikFazlaMesai { get; set; }
        public string RetAcik { get; set; }
        public bool Auth { get; set; }
        public string Posta { get; set; }

    }

    public class PoolGetFmservicesModel
    {
        public string Username { get; set; }
        public string Kodu { get; set; }
        public string Turu { get; set; }

    }


    public class PoolReasonSelectModel
    {
        //public string sirketKodu { get; set; }
        public string key { get; set; }
        public string value { get; set; }
    }

    public class PoolShiftsSelectModel
    {
        public string srkodu { get; set; }
        public string kodu { get; set; }
        public string adi { get; set; }
        public string turu { get; set; }
        public string grup { get; set; }
        public DateTime bassaat { get; set; }
        public DateTime bitsaat { get; set; }
        public int maxclim { get; set; }
    }


    public class PoolPostaSelectModel
    {

        public string sirket { get; set; }
        public string kodu { get; set; }
        public string adi { get; set; }
        public DateTime basTarih { get; set; }
        public string turu { get; set; }
    }



    public class ParameterInfo
    {
        public string parameterCode { get; set; }

        public string parameterValue { get; set; }


    }
    public class PoolReportModel
    {
        public string reportType { get; set; }

        public string srkodu { get; set; }

        public string user { get; set; }

        public string userType { get; set; }

        public string criter { get; set; }

        public string clkodu { get; set; }

        public float sure { get; set; }

        public string flow { get; set; }

        public DateTime startDate { get; set; }

        public DateTime endDate { get; set; }
    }

    public class PoolRePasswordModel
    {
        public string user { get; set; }

        public string newPassword { get; set; }
    }

    public class SendPasswordResponse : ReturnMesssage
    {
        public string user { get; set; }

        public string mail { get; set; }

        public string password { get; set; }
    }

    public class SendPasswordRequest
    {
        public string userName { get; set; }
    }

    public class TableData
    {
        public int id { get; set; }
    }

    public class SetIKApproveRequest: SetApproveRequest
    {

        public bool? approve{ get; set; }

        public bool? reject { get; set; }

    }



    public class SetApproveRequest
    {

        public int id { get; set; }

        public string sirket { get; set; }

        public string personnel{ get; set; }

        public string name{ get; set; }

        public string depart { get; set; }

        public DateTime? startdate { get; set; }

        public DateTime? enddate { get; set; }

        public DateTime? workdate { get; set; }

        public int days { get; set; }

        public bool? vacation { get; set; }

        public bool? amir{ get; set; }

        public string username { get; set; }
    }


    public class UsersSelectModel
    {

        [DataMember(Name = "ID")]
        public int id { get; set; }

        [DataMember(Name = "UserName")]
        public string userName { get; set; }

        [DataMember(Name = "Password")]
        public string password { get; set; }

    }

    public class ShiftInsertModel
    {

        [DataMember(Name = "ID")]
        public int departmanID { get; set; }

        [DataMember(Name = "ID")]
        public int personelID { get; set; }

        [DataMember(Name = "Password")]
        public DateTime beginDate { get; set; }

        [DataMember(Name = "UserName")]
        public DateTime beginTime { get; set; }

        [DataMember(Name = "Password")]
        public DateTime endDate { get; set; }

        [DataMember(Name = "UserName")]
        public DateTime endTime { get; set; }


    }

}
