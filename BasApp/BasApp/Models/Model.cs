using BasApp.Translator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace BASApp.Models
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

}
