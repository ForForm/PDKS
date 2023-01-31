using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mapper.Core
{
    public interface IMapper
    {
        TDestination Map<TSource, TDestination>(TSource source);
    }
}
