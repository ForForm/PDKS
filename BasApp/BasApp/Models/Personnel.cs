using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BASApp.PersonnelModel
{
    public class PersonnelPostChiefRequest
    {
        public string CompanyId { get; set; }
        public string Username { get; set; }
        public int? ID { get; set; }
        public int? EmployeeID { get; set; }
        public int? ChiefEmployeeID { get; set; }
        public int? Degree { get; set; }

    }




    public class PersonnelPostRequest
    {
        public string CompanyId { get; set; }
        public string Username { get; set; }
        public int? ID { get; set; }
        public String Code { get; set; }
        public String Name { get; set; }
        public String Surname { get; set; }
        public Boolean? Chief { get; set; }
        public String PassID { get; set; }
        public DateTime? PassDate { get; set; }
        public DateTime? StartingDate { get; set; }
        public DateTime? SeniorityDate { get; set; }
        public DateTime? LeavingDate { get; set; }
        public int? ExitReasonID { get; set; }
        public DateTime? CommunityDate { get; set; }
        public String CollarColor { get; set; }
        public DateTime? CollarColorDate { get; set; }
        public int? EmployeeTypeID { get; set; }
        public DateTime? EmployeeTypeDate { get; set; }
        public int? ShiftGroupID { get; set; }
        public DateTime? ShiftGroupDate { get; set; }
        public int? DepartmentID { get; set; }
        public DateTime? DepartmentDate { get; set; }
        public int? CostCenterID { get; set; }
        public DateTime? CostCenterDate { get; set; }
        public int? CadreID { get; set; }
        public DateTime? CadreDate { get; set; }
        public int? ProfessionID { get; set; }
        public DateTime? ProfessionDate { get; set; }
        public int? TaskID { get; set; }
        public DateTime? TaskDate { get; set; }
        public int? GroupID { get; set; }
        public DateTime? GroupDate { get; set; }
        public int? UnitID { get; set; }
        public DateTime? UnitDate { get; set; }
        public int? BranchID { get; set; }
        public DateTime? BranchDate { get; set; }
        public int? ServiceStationID { get; set; }
        public DateTime? ServiceStationDate { get; set; }
        public String Photo { get; set; }
        public Boolean? PayrollCalculation { get; set; }
        public DateTime? PayrollCalculationDate { get; set; }
        public Boolean? Overtime { get; set; }
        public DateTime? OvertimeDate { get; set; }
        public String FeeType { get; set; }
        public DateTime? FeeTypeDate { get; set; }
        public DateTime? YearlyLeaveDate { get; set; }
        public String Code1 { get; set; }
        public String Code2 { get; set; }
        public String Code3 { get; set; }
        public String Code4 { get; set; }
        public String DomainUsername { get; set; }
        public String ConfirmationPassword { get; set; }
        public Boolean? Active { get; set; }
        public int? UserID { get; set; }
        public Boolean? Shift { get; set; }
        public DateTime? ShiftDate { get; set; }
    }

    public class PersonnelPostContactRequest
    {
        public string CompanyId { get; set; }
        public string Username { get; set; }
        public int? ID { get; set; }
        public int? EmployeeID { get; set; }
        public String Address { get; set; }
        public String Province { get; set; }
        public String Country { get; set; }
        public String Phone1 { get; set; }
        public String Phone2 { get; set; }
        public String MobilePhone { get; set; }
        public String Email { get; set; }
        public String PostCode { get; set; }

    }

    public class PersonnelPostIDRequest
    {
        public string CompanyId { get; set; }
        public string Username { get; set; }
        public int? ID { get; set; }
        public int? EmployeeID { get; set; }
        public String CitizenshipNo { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public int? Gender { get; set; }
        public String SerialNumber { get; set; }
        public String Nationality { get; set; }
        public DateTime? ValidUntil { get; set; }
        public String Mother { get; set; }
        public String Father { get; set; }

    }


    public class PersonnelTransferRequest
    {
        public int? Rownum { get; set; }
        public String CompanyId { get; set; }
        public String Username { get; set; }
        public String CompanyCode { get; set; }
        public String Code { get; set; }
        public String Name { get; set; }
        public String Surname { get; set; }
        public bool? Chief { get; set; }
        public String PassCode { get; set; }
        public DateTime? PassDate { get; set; }
        public DateTime? StartingDate { get; set; }
        public DateTime? SeniorityDate { get; set; }
        public DateTime? LeavingDate { get; set; }
        public String ExitReasonCode { get; set; }
        public DateTime? CommunityDate { get; set; }
        public String CollarColor { get; set; }
        public DateTime? CollarColorDate { get; set; }
        public String EmployeeTypeCode { get; set; }
        public DateTime? EmployeeTypeDate { get; set; }
        public String ShiftGroupCode { get; set; }
        public String ShiftGroupDate { get; set; }
        public String DepartmentCode { get; set; }
        public String DepartmentDate { get; set; }
        public String CostCenterCode { get; set; }
        public DateTime? CostCenterDate { get; set; }
        public String CadreCode { get; set; }
        public DateTime? CadreDate { get; set; }
        public String ProfessionCode { get; set; }
        public DateTime? ProfessionDate { get; set; }
        public String TaskCode { get; set; }
        public DateTime? TaskDate { get; set; }
        public String GroupCode { get; set; }
        public DateTime? GroupDate { get; set; }
        public String UnitCode { get; set; }
        public DateTime? UnitDate { get; set; }
        public String BranchCode { get; set; }
        public DateTime? BranchDate { get; set; }
        public String ServiceStationCode { get; set; }
        public DateTime? ServiceStationDate { get; set; }
        public bool? PayrollCalculation { get; set; }
        public bool? Overtime { get; set; }
        public String OvertimeDate { get; set; }
        public String FeeType { get; set; }
        public DateTime? FeeTypeDate { get; set; }
        public DateTime? LeaveDate { get; set; }
        public bool? Shift { get; set; }
        public DateTime? ShiftDate { get; set; }
        public String Chief1 { get; set; }
        public String Chief2 { get; set; }
        public String Chief3 { get; set; }
        public String Chief4 { get; set; }
        public String Chief5 { get; set; }

    }

    public class TransferExcelTemplate
    {
        public int? ID { get; set; }
        public String CompanyID { get; set; }
        public String DestinationField { get; set; }
        public int? RowID { get; set; }
        public String Type { get; set; }
        public String SourceField { get; set; }
        public String DefaultValue { get; set; }
        public bool? Active { get; set; }
        public bool? Status { get; set; }

    }

    public class PersonnelTransferTemplateRequest
    {
        public String CompanyId { get; set; }
        public String Username { get; set; }
        public String TemplateName { get; set; }       
        public List<TransferExcelTemplate> TransferExcelTemplate { get; set; }
       
    }

    public class PersonnelTransferControlRequest
    {
        public int? Rownum { get; set; }
        public String CompanyId { get; set; }
        public String Username { get; set; }
    }

    //public class FilterObject
    //{
    //    public DateTime? StartDate { get; set; }

    //    public DateTime? EndDate { get; set; }

    //    public String Emp1 { get; set; }

    //    public String Emp2 { get; set; }

    //    public String EmpId1 { get; set; }

    //    public String EmpId2 { get; set; }

    //    public String EmpType1 { get; set; }

    //    public String EmpType2 { get; set; }

    //    public String Depart1 { get; set; }

    //    public String Depart2 { get; set; }

    //    public String Cost1 { get; set; }

    //    public String Cost2 { get; set; }

    //    public String Cadre1 { get; set; }

    //    public String Cadre2 { get; set; }

    //    public String Prof1 { get; set; }

    //    public String Prof2 { get; set; }

    //    public String Task1 { get; set; }

    //    public String Task2 { get; set; }

    //    public String Group1 { get; set; }

    //    public String Group2 { get; set; }

    //    public String Unit1 { get; set; }

    //    public String Unit2 { get; set; }

    //    public String Branch1 { get; set; }

    //    public String Branch2 { get; set; }

    //    public String Service1 { get; set; }

    //    public String Service2 { get; set; }

    //    public String CollarColor1 { get; set; }

    //    public String CollarColor2 { get; set; }


    //}


    public class GetAttendanceRequest
    {
        public int? ID { get; set; }

        public String CompanyId { get; set; }

        public String Username { get; set; }

        public String Type { get; set; }

        public String Code { get; set; }

        public bool? Chief { get; set; }

        public DateTime? StartDate { get; set; }

        public DateTime? EndDate { get; set; }


        public String Emp1 { get; set; }

        public String Emp2 { get; set; }

        public String EmpType1 { get; set; }

        public String EmpType2 { get; set; }

        public String Depart1 { get; set; }

        public String Depart2 { get; set; }

        public String Cost1 { get; set; }

        public String Cost2 { get; set; }

        public String Cadre1 { get; set; }

        public String Cadre2 { get; set; }

        public String Prof1 { get; set; }

        public String Prof2 { get; set; }

        public String Task1 { get; set; }

        public String Task2 { get; set; }

        public String Group1 { get; set; }

        public String Group2 { get; set; }

        public String Unit1 { get; set; }

        public String Unit2 { get; set; }

        public String Branch1 { get; set; }

        public String Branch2 { get; set; }

        public String Service1 { get; set; }

        public String Service2 { get; set; }

    }


    public class GetLeaveRequest
    {
        public int? ID { get; set; }

        public String CompanyId { get; set; }

        public String Username { get; set; }

        public String Type { get; set; }

        public String Code { get; set; }

        public bool? Chief { get; set; }

        public DateTime? StartDate { get; set; }

        public DateTime? EndDate { get; set; }

        public String Emp1 { get; set; }

        public String Emp2 { get; set; }

        public String EmpType1 { get; set; }

        public String EmpType2 { get; set; }

        public String Depart1 { get; set; }

        public String Depart2 { get; set; }

        public String Cost1 { get; set; }

        public String Cost2 { get; set; }

        public String Cadre1 { get; set; }

        public String Cadre2 { get; set; }

        public String Prof1 { get; set; }

        public String Prof2 { get; set; }

        public String Task1 { get; set; }

        public String Task2 { get; set; }

        public String Group1 { get; set; }

        public String Group2 { get; set; }

        public String Unit1 { get; set; }

        public String Unit2 { get; set; }

        public String Branch1 { get; set; }

        public String Branch2 { get; set; }

        public String Service1 { get; set; }

        public String Service2 { get; set; }

    }


    public class GetScoringRequest
    {

        public String CompanyId { get; set; }

        public String Username { get; set; }

        public int? view { get; set; }

        public String type { get; set; }

        public DateTime? StartDate { get; set; }

        public DateTime? EndDate { get; set; }

        public List<String> EmployeeList { get; set; }
    }



    public class CalculateScoringRequest
    {
        public String Id { get; set; }

        public String CompanyId { get; set; }

        public String Username { get; set; }

        //public int? Count { get; set; }

        public int? EmployeeId { get; set; }

        public String Type { get; set; }

        public DateTime? StartDate { get; set; }

        public DateTime? EndDate { get; set; }

        public Boolean? SendResult { get; set; }

    }



    public class ScoringDeffRequest
    {
        public String CompanyId { get; set; }

        public String Username { get; set; }

        public int? ID { get; set; }

        public String Code { get; set; }

        public String Name { get; set; }

        public Int16? Type { get; set; }

        public Int16? DailyScoring { get; set; }

        public Int16? MonthlyScoring { get; set; }

        public bool? EmptyRows { get; set; }

        public bool? Default { get; set; }

        public String WorkingTypeID { get; set; }

    }

    public class PostScoringRequest
    {
        public String CompanyId { get; set; }

        public String Username { get; set; }

        public int? EmployeeID { get; set; }

        public int? ShiftID { get; set; }

        public int? ShiftGroupID { get; set; }

        public String WorkingTime { get; set; }

        public DateTime? Date { get; set; }

        public bool? Approve { get; set; }

        public DateTime? Value { get; set; }
    }



    public class CalculateYearlyLeaveRequest
    {
        public String CompanyId { get; set; }

        public String Username { get; set; }

        public int? Id { get; set; }

        public DateTime? StartDate { get; set; }

    }


    public class PostLeaveExtendParamsRequest
    {
        public String CompanyId { get; set; }

        public String Username { get; set; }

        public int? ID { get; set; }

        public int? FlexPersonnelGroupID { get; set; }

        public int? WorkingTypeID { get; set; }

        public bool? Saturday { get; set; }

        public bool? Weekend { get; set; }

        public bool? General { get; set; }
    }



    public class PostLeaveDistParamsRequest
    {
        public String CompanyId { get; set; }

        public String Username { get; set; }

        public int? ID { get; set; }

        public int? FlexPersonnelGroupID { get; set; }

        public int? SourceWorkingTypeID { get; set; }

        public int? SourceLimit { get; set; }

        public int? DestWorkingTypeID { get; set; }

        public int? DestLimit { get; set; }

    }


    public class PostYearlyParamsCodeRequest
    {
        public String CompanyId { get; set; }

        public String Username { get; set; }

        public int? ID { get; set; }

        public int? FlexPersonnelGroupID { get; set; }

        public int? WorkingTypeID { get; set; }

        public DateTime? Time { get; set; }

    }

    public class PostYearlyParamsSeniorityRequest
    {
        public String CompanyId { get; set; }

        public String Username { get; set; }

        public int? ID { get; set; }

        public int? FlexPersonnelGroupID { get; set; }

        public int? Type { get; set; }

        public Int16? FirstYear { get; set; }

        public Int16? LastYear { get; set; }

        public Int16? VestingDay { get; set; } 

    }


    public class PostYearlyParamsUsedRequest
    {
        public String CompanyId { get; set; }

        public String Username { get; set; }

        public int? ID { get; set; }

        public int? EmployeeID { get; set; }

        public int? Type { get; set; }

        public decimal Day { get; set; }

        public int Month { get; set; }

        public int Year { get; set; }

    }
    public class PostYearlyParamsRequest
    {
        public String CompanyId { get; set; }

        public String Username { get; set; }

        public int? ID { get; set; }

        public int? FlexPersonnelGroupID { get; set; }

        public int? StartDateType { get; set; }

        public DateTime? Date { get; set; }

        public bool? IsPeriod { get; set; }

        public bool? CalcNewYear { get; set; }

        public bool? CalcStartingDate { get; set; }

        public bool? CancelPeriod { get; set; }

        public int? CancelPeriodMonth { get; set; }

        public int? CancelPeriodDay { get; set; }

    }



    public class PostLeaveLimitParamsRequest
    {
        public String CompanyId { get; set; }

        public String Username { get; set; }

        public int? ID { get; set; }

        public int? FlexPersonnelGroupID { get; set; }

        public int? SourceWorkingTypeID { get; set; }

        public Int16? LeaveUsageType { get; set; }

        public decimal? MonthLimit { get; set; }

        public decimal? YearLimit { get; set; }

        public DateTime? DayLimit { get; set; }

        public bool? YearLimitControl { get; set; }

        public bool? Pieced { get; set; }

        public int? DestWorkingTypeID { get; set; }
    }




    public class PostTodoRequest
    {
        public String CompanyId { get; set; }

        public String Username { get; set; }

        public int? ID { get; set; }

        public String Todo { get; set; }

        public DateTime? TodoDate { get; set; }

        public bool? Remind { get; set; }

    }


    public class PostUserMessageRequest
    {
        public String CompanyId { get; set; }

        public String Username { get; set; }

        public int? ToUserID { get; set; }

        public String Message { get; set; }



    }


    public class ReadUserMessageRequest
    {
        public String CompanyId { get; set; }

        public String Username { get; set; }

        public int? Id { get; set; }

    }

    public class CalculatePermitsRequest
    {
        public String CompanyId { get; set; }

        public String Username { get; set; }

        public String EmployeeCode { get; set; }

        public int EmployeeID { get; set; }

        public String Name { get; set; }

        public String Surname { get; set; }

        public String ReasonCode { get; set; }

        public String ReasonName { get; set; }

        public int? ID { get; set; }

        public Int16? Type { get; set; }

        public int? ReasonID { get; set; }

        public DateTime? StartDate { get; set; }

        public DateTime? StartTime { get; set; }

        public int? Day { get; set; }

        public DateTime? EndDate { get; set; }

        public DateTime? EndTime { get; set; }

        public DateTime? TotalTime { get; set; }

        public DateTime? WorkDate { get; set; }

        public String Description { get; set; }

        public String CalcDescription { get; set; }

        public String ErrorDesc { get; set; }

        public String Statu { get; set; }

    }


    public class PostDashboardRequest
    {
        public String CompanyId { get; set; }

        public String Username { get; set; }

        public int? ID { get; set; }

        public String Section { get; set; }

        public String Type { get; set; }

        public String View { get; set; }

        public bool? ShowX { get; set; }

        public bool? ShowY { get; set; }

        public String Xlabel { get; set; }

        public String Ylabel { get; set; }

        public bool? ShowDetail { get; set; }

        public String DetailLabel { get; set; }

        public String SpName { get; set; }

        public String BackgroundColor { get; set; }

        public int? Top { get; set; }

        public int? Left { get; set; }
    }


    public class PostParameterRequest
    {
        public String CompanyId { get; set; }

        public String Username { get; set; }

        public int? ID { get; set; }

        public String Value { get; set; }

    }




    public class PostAbsenceRequest
    {
        public String CompanyId { get; set; }

        public String Username { get; set; }

        public int? ID { get; set; }

        public int? FlexPersonnelGroupID { get; set; }

        public int? WorkingTypeID { get; set; }

        public int? Day { get; set; }

        public DateTime? Time { get; set; }

        public Int16? Process { get; set; }

        public int? WeekendWorkingTypeID { get; set; }


    }


    public class PostAbsenceRequestDetail
    {
        public String CompanyId { get; set; }

        public String Username { get; set; }

        public int? ID { get; set; }

        public int? SyndicateAbsenceID { get; set; }

        public int? WorkingTypeID { get; set; }

        public Int16? ProcessType { get; set; }

    }




    public class PostOvertimeRequest
    {
        public String CompanyId { get; set; }

        public String Username { get; set; }

        public int? ID { get; set; }

        public int? FlexPersonnelGroupID { get; set; }

        public int? WorkingTypeID { get; set; }

        public DateTime? UpperLimit { get; set; }

    }

    public class PostOvertimeDeductionRequest
    {
        public String CompanyId { get; set; }

        public String Username { get; set; }

        public int? ID { get; set; }

        public int? SyndicateOvertimeID { get; set; }

        public int? WorkingTypeID { get; set; }

    }


    public class PostDeviceRequest
    {
        public String CompanyId { get; set; }

        public String Username { get; set; }

        public int? ID { get; set; }

        public int? SystemDbID { get; set; }

        public String Code { get; set; }

        public String Name { get; set; }

        public Int16? Type { get; set; }

    }


    public class PostSystemHostTableRequest
    {
        public String CompanyId { get; set; }

        public String Username { get; set; }

        public int? ID { get; set; }

        public int? SystemDbID { get; set; }

        public String SourceField { get; set; }

        public int? Start { get; set; }

        public int? Length { get; set; }

        public String DestinationField { get; set; }
    }


    public class PostSystemHostRequest
    {
        public String CompanyId { get; set; }

        public String Username { get; set; }

        public int? ID { get; set; }

        public int? TransferID { get; set; }

        public String Name { get; set; }

        public String Database { get; set; }

        public String Protocol { get; set; }

        public String Hostname { get; set; }

        public String DUsername { get; set; }

        public String Password { get; set; }

        public bool? Repeat { get; set; }

        public bool? Inout { get; set; }

    }

    public class PostSystemDatabaseRequest
    {
        public String CompanyId { get; set; }

        public String Username { get; set; }

        public String ID { get; set; }

        public String TransferIDColumn { get; set; }

        public int? TransferID { get; set; }

        public String Name { get; set; }

        public String Database { get; set; }

        public String Protocol { get; set; }

        public String Hostname { get; set; }

        public String DUsername { get; set; }

        public String Password { get; set; }

        public String DbTable { get; set; }

        public Int16? TransferType { get; set; }

        public bool? Inout { get; set; }

        public TimeSpan? RepeatTime { get; set; }

        public bool? RepeatDirection { get; set; }

        public TimeSpan?  Limit{ get; set; }

        public bool? FirstLast { get; set; }

        public String InChar { get; set; }

        public String OutChar { get; set; }

        public String DbQuery { get; set; }

        public String Code { get; set; }

    }


    public class PostSysteFileRequest
    {
        public String CompanyId { get; set; }

        public String Username { get; set; }

        public int? ID { get; set; }

        public String Name { get; set; }

        public String File { get; set; }

        public bool? Inout { get; set; }

        public String InChar { get; set; }

        public String OutChar { get; set; }


    }

    public class PostSourceDataRequest
    {
        public String CompanyId { get; set; }

        public String Username { get; set; }

        public int SystemDbID { get; set; }

        public int? EmployeeID { get; set; }

        public String Barcode { get; set; }

        public String Type { get; set; }

        public int? WorkingTypeID { get; set; }

        public int? DeviceID { get; set; }

        public int? Link { get; set; }

        public DateTime? NewDateTime { get; set; }

        public String Exception { get; set; }

        public int TransferID { get; set; }

        //public String DbTable { get; set; }

        //public int ID { get; set; }
    }

    public class Attendance
    {
        public String CompanyId { get; set; }

        public String Username { get; set; }

        public int SystemDatabaseID { get; set; }

        public int? LinkID { get; set; }

        public int? EmployeeID { get; set; }

        public String Barcode { get; set; }

        public Int16 Type { get; set; }

        public Int16 ReasonID { get; set; }

        public String Device { get; set; }

        public DateTime? NewDateTime { get; set; }

        public String Exception { get; set; }
    }

    public class AttendanceMapper
    {
        public String CompanyCode { get; set; }

        public int? WorkingTypeID { get; set; }

        public String WorkingTypeCode { get; set; }

        public int? EmployeeID { get; set; }

        public String EmployeeCode { get; set; }

        public String Barcode { get; set; }

        public String Type { get; set; }

        public int? DeviceID { get; set; }

        public String DeviceCode { get; set; }

        public DateTime? NewDateTime { get; set; }

        public String LinkID { get; set; }

        public int? TransferID { get; set; }

        public String Exception { get; set; }
    }
    public class EntranceExitRequest
    {


        public String CompanyId { get; set; }

        public String Username { get; set; }

        public int? RecordOrInout { get; set; }

        public bool? In { get; set; }

        public bool? Out { get; set; }

        public int? IID { get; set; }

        public int? OID { get; set; }

        public int? EmployeeID { get; set; }

        public String Code { get; set; }

        public DateTime? StartDate { get; set; }

        public TimeSpan? StartTime { get; set; }

        public String InFlag { get; set; }

        public String InReason { get; set; }

        public DateTime? EndDate { get; set; }

        public TimeSpan? EndTime { get; set; }

        public String OutFlag { get; set; }

        public String OutReason { get; set; }

    }


    public class PersonnelPostFilterColumnsRequest
    {
        public string CompanyId { get; set; }

        public string Username { get; set; }

        public string table { get; set; }

        public string ColumnName { get; set; }

        public bool? Active { get; set; }

        public string Label { get; set; }

        public int? Sort { get; set; }
    }

    public class PersonnelGetQueryInfo
    {

        public string type { get; set; }

        public string id { get; set; }

        //public string icon { get; set; }

        public string label { get; set; }

        public bool? value { get; set; }

    }


}
