using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BASApp.ReportingModel
{
    public class ParamObject
    {
        public string ParamName { get; set; }
        public object ParamValue { get; set; }
    }

    public class ExecReportingRequest
    {
        public string Username { get; set; }
        public string CompanyId { get; set; }
        public string SpName { get; set; }
        public int? DefId { get; set; }
        public List<ParamObject> Params { get; set; }

    }

    public class Series
    {
        public string name { get; set; }
        public object value { get; set; }
    }

    public class DashReportGroup
    {
        public string name { get; set; }
        public List<Series> series { get; set; }
    }


    

    public class DashReportGroupOriginal
    {
        public string group { get; set; }
        public string name { get; set; }
        public decimal? value{ get; set; }
    }

    public class paramsValue
    {
        public string ParamName { get; set; }

        public object ParamValue { get; set; }
    }

    public class PostReportDefRequest
    {
        public string Username { get; set; }
        public string CompanyId { get; set; }
        public string ReportName { get; set; }
        public int? DefId { get; set; }
        public string DefName { get; set; }
        public string Sql { get; set; }
        public string Emp1 { get; set; }
        public string Emp2 { get; set; }
        public string EmpType1 { get; set; }
        public string EmpType2 { get; set; }
        public string Depart1 { get; set; }
        public string Depart2 { get; set; }
        public string Cost1 { get; set; }
        public string Cost2 { get; set; }
        public string Cadre1 { get; set; }
        public string Cadre2 { get; set; }
        public string Prof1 { get; set; }
        public string Prof2 { get; set; }
        public string Task1 { get; set; }
        public string Task2 { get; set; }
        public string Group1 { get; set; }
        public string Group2 { get; set; }
        public string Unit1 { get; set; }
        public string Unit2 { get; set; }
        public string Branch1 { get; set; }
        public string Branch2 { get; set; }
        public string Service1 { get; set; }
        public string Service2 { get; set; }
        public string Collar1 { get; set; }
        public string Collar2 { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public List<paramsValue> ParamsValue { get; set; }

    }

}
