using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BASApp.DefinitionModel
{
    public class Calendar
    {
        public string Code { get; set; }

        public string ShiftID { get; set; }

        public string ShiftCode { get; set; }

        public int? NumberOfDays { get; set; }

        public string Color { get; set; }

        

    }

    public class PostDefinitionShiftRequest
    {
        public string CompanyId { get; set; }

        public string Username { get; set; }


        public int ID { get; set; }

        public string Code { get; set; }

        public string Name { get; set; }

        public int Type { get; set; }

        public DateTime? Time { get; set; }

        public DateTime? StartEarly { get; set; }

        public DateTime? Start { get; set; }

        public DateTime? LateStart { get; set; }

        public DateTime? EarlyFinish { get; set; }

        public DateTime? Finish { get; set; }

        public DateTime? LateFinish { get; set; }

        public int WeekHoliday { get; set; }

        public int TypeOfWeekHoliday { get; set; }

        public int DayTurning { get; set; }

        public DateTime? DayTurningTime { get; set; }
    }

    public class PostDefinitionWorkingTypesRequest
    {

        public string CompanyId { get; set; }

        public string Username { get; set; }

        public int ID { get; set; }

        public String Code { get; set; }

        public String Name { get; set; }

        public int? Type { get; set; }

        public int? RoundingHourID { get; set; }

        public int? RoundingDayID { get; set; }

        public DateTime LowerLimit { get; set; }

        public DateTime UpperLimit { get; set; }

        public int? Multiplier { get; set; }

        public bool? Compulsory { get; set; }

        public bool? Confirmation { get; set; }

        public bool? Saturday { get; set; }

        public bool? SaturdayDay { get; set; }

        public bool? SaturdayHour { get; set; }

        public bool? Weekend { get; set; }

        public bool? WeekendDay { get; set; }

        public bool? WeekendHour { get; set; }

        public bool? GeneralHoliday { get; set; }

        public bool? GeneralHolidayDay { get; set; }

        public bool? GeneralHolidayHour { get; set; }

        public bool? WorkCalculator { get; set; }

        public bool? LeaveContinued { get; set; }

        public String ReportCode { get; set; }

        public string IntegrationCode { get; set; }

        public int EqualizationDegrees { get; set; }


    }

    public class PostDefinitionWorkingTypesDistRequest
    {
        public String CompanyId { get; set; }

        public String Username { get; set; }

        public int? ID { get; set; }

        public int? WorkingTypeID { get; set; }

        public String Code { get; set; }

        public String Type { get; set; }

        public DateTime? LowerLimit { get; set; }

        public DateTime? UpperLimit { get; set; }

        public String Multiplier { get; set; }

    }

    public class PostDefinitionShiftDistRequest
    {
        public string CompanyId { get; set; }

        public string Username { get; set; }

        public int ID { get; set; }

        public int ShiftID { get; set; }

        public string WorkingTypeID { get; set; }

        public string WorkingTypeCode { get; set; }

        public DateTime FirstHour { get; set; }

        public DateTime LastHour { get; set; }

        public DateTime Time { get; set; }

        public int Status { get; set; }

    }

    public class PostDefinitionFreeShiftDistRequest
    {
        public string CompanyId { get; set; }

        public string Username { get; set; }

        public int ID { get; set; }

        public int ShiftID { get; set; }

        public string WorkingTypeID { get; set; }

        public int State { get; set; }

    }

    public class PostDefinitionFreeShiftMealRequest
    {
        public string CompanyId { get; set; }

        public string Username { get; set; }

        public int ID { get; set; }

        public int ShiftID { get; set; }

        public int WorkingTypeSrcID { get; set; }

        public DateTime TotalTime { get; set; }

        public int WorkingTypeDestID { get; set; }

        public DateTime TransferTime { get; set; }

       
    }



    public class PostDefinitionFreeShiftNightRequest
    {
        public string CompanyId { get; set; }

        public string Username { get; set; }

        public int ID { get; set; }

        public int ShiftID { get; set; }

        public int WorkingTypeID { get; set; }

        public DateTime FirstHour { get; set; }        

        public DateTime LastHour { get; set; }


    }

    public class PostDefinitionShiftToleranceRequest
    {
        public string CompanyId { get; set; }

        public string Username { get; set; }

        public int ID { get; set; }

        public int ShiftID { get; set; }

        public DateTime EarlyStartTime { get; set; }

        public DateTime StartTime { get; set; }

        public DateTime LateStartTime { get; set; }

        public DateTime EarlyFinishTime{ get; set; }

        public DateTime FinishTime { get; set; }

        public DateTime LateFinishTime{ get; set; }
    }


    public class PostDefinitionShiftHolidayRequest
    {
        public string CompanyId { get; set; }

        public string Username { get; set; }

        public int ID { get; set; }

        public int? ShiftID { get; set; }

        public DateTime? StartDate { get; set; }

        public String HolidayType { get; set; }

        public int? HolidayShiftID { get; set; }
    }


    public class PostDefinitionShiftGroupBackUpRequest
    {
        public string CompanyId { get; set; }

        public string Username { get; set; }


        public int ID { get; set; }

        public int ShiftGroupID { get; set; }

        public int ShiftID { get; set; }

        public int NumberOfDays { get; set; }

    }

    public class PostDefinitionShiftGroupRequest
    {
        public string CompanyId { get; set; }

        public string Username { get; set; }

        public int ID { get; set; }

        public string Code { get; set; }

        public string Name { get; set; }

        public string ShiftCalc { get; set; }

        public DateTime? StartDate { get; set; }


    }

    public class PostDefinitionShiftGroupDistRequest
    {
        public string CompanyId { get; set; }

        public string Username { get; set; }


        public int ID { get; set; }


        //public int Code{ get; set; }

        //public string Name { get; set; }

        public int ShiftGroupID { get; set; }

        public int ShiftID { get; set; }

        public int NumberOfDays { get; set; }

    }

    public class Shifts
    {
        public int? ShiftID { get; set; }

        public int? Day { get; set; }

    }

    public class PostDefinitionShiftGroupDistCalendarRequest
    {
        public string CompanyId { get; set; }

        public string Username { get; set; }

        public string Property { get; set; }

        public int ID { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime BeginDate { get; set; }

        public DateTime EndDate { get; set; }

        public List<Shifts> Shifts { get; set; }


    }


    public class ShiftCalendar
    {
        public string CompanyId { get; set; }

        public string Username { get; set; }

        public DateTime? Tarih { get; set; }

        public string Group0 { get; set; }
        public string Group1 { get; set; }
        public string Group2 { get; set; }
        public string Group3 { get; set; }
        public string Group4 { get; set; }
        public string Group5 { get; set; }

        public string Group6 { get; set; }
        public string Group7 { get; set; }
        public string Group8 { get; set; }
        public string Group9 { get; set; }
        public string Group10 { get; set; }

        public string Group11 { get; set; }
        public string Group12 { get; set; }
        public string Group13 { get; set; }
        public string Group14 { get; set; }
        public string Group15 { get; set; }

        public string Group16 { get; set; }
        public string Group17 { get; set; }
        public string Group18 { get; set; }
        public string Group19 { get; set; }
        public string Group20 { get; set; }

        public string Group21 { get; set; }
        public string Group22 { get; set; }
        public string Group23 { get; set; }
        public string Group24 { get; set; }
        public string Group25 { get; set; }


        public string Group26 { get; set; }
        public string Group27 { get; set; }
        public string Group28 { get; set; }
        public string Group29 { get; set; }
        public string Group30 { get; set; }

        public string Code0 { get; set; }
        public string Code1 { get; set; }
        public string Code2 { get; set; }
        public string Code3 { get; set; }
        public string Code4 { get; set; }
        public string Code5 { get; set; }

        public string Code6 { get; set; }
        public string Code7 { get; set; }
        public string Code8 { get; set; }
        public string Code9 { get; set; }
        public string Code10 { get; set; }

        public string Code11 { get; set; }
        public string Code12 { get; set; }
        public string Code13 { get; set; }
        public string Code14 { get; set; }
        public string Code15 { get; set; }

        public string Code16 { get; set; }
        public string Code17 { get; set; }
        public string Code18 { get; set; }
        public string Code19 { get; set; }
        public string Code20 { get; set; }

        public string Code21 { get; set; }
        public string Code22 { get; set; }
        public string Code23 { get; set; }
        public string Code24 { get; set; }
        public string Code25 { get; set; }


        public string Code26 { get; set; }
        public string Code27 { get; set; }
        public string Code28 { get; set; }
        public string Code29 { get; set; }
        public string Code30 { get; set; }

        public string Color0 { get; set; }
        public string Color1 { get; set; }
        public string Color2 { get; set; }
        public string Color3 { get; set; }
        public string Color4 { get; set; }
        public string Color5 { get; set; }

        public string Color6 { get; set; }
        public string Color7 { get; set; }
        public string Color8 { get; set; }
        public string Color9 { get; set; }
        public string Color10 { get; set; }

        public string Color11 { get; set; }
        public string Color12 { get; set; }
        public string Color13 { get; set; }
        public string Color14 { get; set; }
        public string Color15 { get; set; }

        public string Color16 { get; set; }
        public string Color17 { get; set; }
        public string Color18 { get; set; }
        public string Color19 { get; set; }
        public string Color20 { get; set; }

        public string Color21 { get; set; }
        public string Color22 { get; set; }
        public string Color23 { get; set; }
        public string Color24 { get; set; }
        public string Color25 { get; set; }


        public string Color26 { get; set; }
        public string Color27 { get; set; }
        public string Color28 { get; set; }
        public string Color29 { get; set; }
        public string Color30 { get; set; }


    }



    public class PostFlexGroupRequest
    {
        public string CompanyId { get; set; }

        public string Username { get; set; }

        public int ID { get; set; }

        public string Code { get; set; }

        public string Name { get; set; }

        public bool? IsAndOr { get; set; }

    }


    public class PostFlexGroupDetailRequest
    {
        public string CompanyId { get; set; }

        public string Username { get; set; }

        public int FlexPersonnelGroupID { get; set; }

        public int ID { get; set; }

        public string Type { get; set; }

        public string Value { get; set; }

    }


    public class PostPublicHolidayRequest
    {
        public string CompanyId { get; set; }

        public string Username { get; set; }

        public int ID { get; set; }

        public string Type { get; set; }

        public DateTime? Date { get; set; }

        public float? Day { get; set; }

        public String Description{ get; set; }

    }

    public class PostReasonsRequest
    {
        public string CompanyId { get; set; }

        public string Username { get; set; }

        public int ID { get; set; }

        public string Type { get; set; }

        public string Code { get; set; }

        public string Name { get; set; }

    }

    public class PostDefinitionRequest
    {
        public string CompanyId { get; set; }

        public string Username { get; set; }

        public int id { get; set; }

        public string type { get; set; }

        public string code { get; set; }

        public string name { get; set; }

        public string subcode { get; set; }

        public string subname { get; set; }

    }

    public class PostDefinitionDetailRequest
    {
        public string CompanyId { get; set; }

        public string Username { get; set; }


        public string id { get; set; }

        public string type { get; set; }

        public string code { get; set; }

        public string firstDayValue { get; set; }

        public string finalDayValue { get; set; }

        public string plainDayValue { get; set; }

        public string firstHourValue { get; set; }

        public string finalHourValue { get; set; }

        public string plainHourValue { get; set; }


    }
}
