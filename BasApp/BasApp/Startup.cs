using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Cors.Internal;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Cors;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System.Linq.Expressions;
using Mapper.Core;
using BASApp.Models;
using Microsoft.AspNetCore.Mvc.Formatters;
using Newtonsoft.Json;
using System.Net.Http.Headers;
using Newtonsoft.Json.Serialization;
using System.Buffers;
using Microsoft.AspNetCore.Mvc.Filters;

namespace BasApp
{
    //public class PascalCaseJsonProfileFormatter : JsonOutputFormatter
    //{
    //    public PascalCaseJsonProfileFormatter() : base(new JsonSerializerSettings { ContractResolver = new DefaultContractResolver() }, ArrayPool<char>.Shared)
    //    {
    //        SupportedMediaTypes.Clear();
    //        //SupportedMediaTypes.Add(MediaTypeHeaderValue.Parse("application/json;profile=\"https://en.wikipedia.org/wiki/PascalCase\""));
    //    }
    //} 

    public class ErrorModel
    {
        public string FieldName { get; set; }
        public string Message { get; set; }
    }

    public class ErrorResponse
    {
        public List<ErrorModel> Error { get; set; } = new List<ErrorModel>();
        public bool Successful { get; set; }
    }

    public class ValidationFilter : IAsyncActionFilter
    {
        public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {
            //before contrller

            if (!context.ModelState.IsValid)
            {
                var errorsInModelState = context.ModelState
                    .Where(x => x.Value.Errors.Count > 0)
                    .ToDictionary(kvp => kvp.Key, kvp => kvp.Value.Errors.Select(x => x.ErrorMessage).ToArray());

                var errorResponse = new ErrorResponse();

                foreach (var error in errorsInModelState)
                {
                    foreach (var subError in error.Value)
                    {
                        var errorModel = new ErrorModel
                        {
                            FieldName = error.Key,
                            Message = subError
                        };

                        errorResponse.Error.Add(errorModel);
                    }

                    context.Result = new BadRequestObjectResult(errorResponse);
                    return;
                }

                await next();

                //after controller  
            }
        }
    }

    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(o => o.AddPolicy("CorsPolicy", builder =>
            {
                builder.AllowAnyOrigin()
                       .AllowAnyMethod()
                       .AllowAnyHeader()
                       .SetIsOriginAllowed(origin => true); // allow any origin


            }));
            //.AllowCredentials();
            services.Configure<MySettingsModel>(Configuration.GetSection("AppParam"));
            //services.Configure<MySettingsModel>(Configuration.GetSection("Parameters"));
            services.AddMemoryCache();
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Latest);
            services.Configure<MvcOptions>(options =>
            {
                options.Filters.Add(new CorsAuthorizationFilterFactory("CorsPolicy"));
            });

            services.AddMvc()
       .AddJsonOptions(options => options.SerializerSettings.ContractResolver = new DefaultContractResolver());

            //services.AddControllers(option =>
            //{
            //    option.Filters.Add<ValidationFilter>();
            //});

        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseCors("CorsPolicy");
            //app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
