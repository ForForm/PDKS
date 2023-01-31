using System;
using System.Data;
using System.Data.SqlClient;
using Dapper;
using Oracle.ManagedDataAccess.Client;
using Dapper.Oracle;
using BASApp.Models;

namespace BasApp
{



    public static class SqlHelper
    {

        public static object ExecuteNonQuery(_BasDB connString, string procName,
             SqlParameter[] parameters)
        {
            switch (connString.ProviderName.ToLower())
            {
                case "system.data.sqlclient":
                    using (var con = new SqlConnection(connString.ConnectionString))
                    {
                        var parameters2 = new DynamicParameters();
                        if (parameters != null)
                            for (int i = 0; i < parameters.Length; i++)
                                parameters2.Add(parameters[i].ParameterName, parameters[i].Value);
                        return con.Execute(new Dapper.CommandDefinition(procName, parameters2, null, null, CommandType.StoredProcedure));
                    }
                    break;
                case "system.data.oracleclient":
                    using (var con = new OracleConnection(connString.ConnectionString))
                    {
                        var parameters2 = new OracleDynamicParameters();
                        if (parameters != null)
                            for (int i = 0; i < parameters.Length; i++)
                                parameters2.Add(parameters[i].ParameterName.Replace("@", "P"), parameters[i].Value);
                        return con.Execute(new Dapper.CommandDefinition(procName, parameters2, null, null, CommandType.StoredProcedure));
                    }
                    break;
            }

            return null;
        }


        public static object ExecuteProcedureReturnString(_BasDB connString, string procName,
               SqlParameter[] parameters)
        {
            switch (connString.ProviderName.ToLower())
            {
                case "system.data.sqlclient":
                    using (var con = new SqlConnection(connString.ConnectionString))
                    {
                        var parameters2 = new DynamicParameters();
                        if (parameters != null)
                            for (int i = 0; i < parameters.Length; i++)
                                parameters2.Add(parameters[i].ParameterName, parameters[i].Value);
                        return con.ExecuteScalar<object>(new Dapper.CommandDefinition(procName, parameters2, null, null, CommandType.StoredProcedure));
                    }
                    break;
                case "system.data.oracleclient":
                    using (var con = new OracleConnection(connString.ConnectionString))
                    {
                        var parameters2 = new OracleDynamicParameters();
                        parameters2.Add("c1", string.Empty, OracleMappingType.RefCursor, ParameterDirection.Output, null, true, 0, 0, string.Empty, DataRowVersion.Current);
                        if (parameters != null)
                            for (int i = 0; i < parameters.Length; i++)
                                parameters2.Add(parameters[i].ParameterName.Replace("@", "P"), parameters[i].Value);
                        return con.ExecuteScalar<object>(new Dapper.CommandDefinition(procName, parameters2, null, null, CommandType.StoredProcedure));
                    }
                    break;
            }

            return null;
        }

        public static object ExecuteProcedureReturnData(_BasDB connString, string procName,
               SqlParameter[] parameters,out string resultCode)
        {
            resultCode = "200";
            try
            {
                switch (connString.ProviderName.ToLower())
                {
                    case "system.data.sqlclient":
                        using (var con = new SqlConnection(connString.ConnectionString))
                        {
                            var parameters2 = new DynamicParameters();
                            if (parameters != null)
                                for (int i = 0; i < parameters.Length; i++)
                                    if (parameters[i].ParameterName== "@ReturnCode")
                                        parameters2.Add(parameters[i].ParameterName,null, DbType.String, ParameterDirection.Output,200);
                                        else
                                        parameters2.Add(parameters[i].ParameterName, parameters[i].Value);
                            object result = con.Query<object>(new Dapper.CommandDefinition(procName, parameters2, null, 0, CommandType.StoredProcedure));
                            resultCode = parameters2.Get<string>("@ReturnCode");
                            return result;
                        }
                        break;
                    case "system.data.oracleclient":
                        using (var con = new OracleConnection(connString.ConnectionString))
                        {
                            var parameters2 = new OracleDynamicParameters();
                            parameters2.Add("c1", string.Empty, OracleMappingType.RefCursor, ParameterDirection.Output, null, true, 0, 0, string.Empty, DataRowVersion.Current);
                            if (parameters != null)
                                for (int i = 0; i < parameters.Length; i++)
                                    parameters2.Add(parameters[i].ParameterName.Replace("@", "P"), parameters[i].Value);
                            object result = con.Query<object>(new Dapper.CommandDefinition(procName, parameters2, null, 0, CommandType.StoredProcedure));
                            resultCode = parameters2.Get<string>("@ReturnCode");
                            return resultCode;
                        }
                        break;
                }

                return null;
            }
            catch (Exception ex)
            {

                throw ex;
            }
           
        }


        public static TData ExecuteProcedureReturnData<TData>(string connString, string procName,
                Func<SqlDataReader, TData> translator,
                params SqlParameter[] parameters)
        {
            using (var sqlConnection = new SqlConnection(connString))
            {
                using (var sqlCommand = sqlConnection.CreateCommand())
                {
                    sqlCommand.CommandType = System.Data.CommandType.StoredProcedure;
                    sqlCommand.CommandText = procName;
                    sqlCommand.CommandTimeout = 0;
                    if (parameters != null)
                    {
                        sqlCommand.Parameters.AddRange(parameters);
                    }
                    sqlConnection.Open();
                    using (var reader = sqlCommand.ExecuteReader())
                    {
                        TData elements;
                        try
                        {
                            elements = translator(reader);
                        }
                        finally
                        {
                            while (reader.NextResult())
                            { }
                        }
                        return elements;
                    }
                }
            }
        }

        public static string GetNullableString(SqlDataReader reader, string colName)
        {
            return reader.IsDBNull(reader.GetOrdinal(colName)) ? null : Convert.ToString(reader[colName]);
        }

        public static object GetNullableObject(SqlDataReader reader, string colName)
        {
            return reader.IsDBNull(reader.GetOrdinal(colName)) ? null : (object)reader[colName];
        }

        public static int GetNullableInt32(SqlDataReader reader, string colName)
        {
            return reader.IsDBNull(reader.GetOrdinal(colName)) ? 0 : Convert.ToInt32(reader[colName]);
        }


        public static DateTime? GetNullableDateTime(SqlDataReader reader, string colName)
        {
            return reader.IsDBNull(reader.GetOrdinal(colName)) ? null : (DateTime?)(reader[colName]);
        }


        public static TimeSpan? GetNullableTimeSpan(SqlDataReader reader, string colName)
        {
            return reader.IsDBNull(reader.GetOrdinal(colName)) ? null : (TimeSpan?)(reader[colName]);
        }

        public static Int16? GetNullableInt16(SqlDataReader reader, string colName)
        {
            return reader.IsDBNull(reader.GetOrdinal(colName)) ? null : (Int16?)reader[colName];
        }

        public static Decimal? GetNullableDecimal(SqlDataReader reader, string colName)
        {
            return reader.IsDBNull(reader.GetOrdinal(colName)) ? null : (Decimal?)reader[colName];
        }

        public static bool GetBoolean(SqlDataReader reader, string colName)
        {
            return reader.IsDBNull(reader.GetOrdinal(colName)) ? default(bool) : Convert.ToBoolean(reader[colName]);
        }

        public static bool IsColumnExists(this System.Data.IDataRecord dr, string colName)
        {
            try
            {
                return (dr.GetOrdinal(colName) >= 0);
            }
            catch (Exception)
            {
                return false;
            }
        }

    }
}
