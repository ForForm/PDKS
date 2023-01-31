using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BASApp.AuthorizationModel
{

    public class Auth
    {
        public string tabname { get; set; }

        public bool read { get; set; }

        public bool write { get; set; }

        public bool update { get; set; }

        public bool delete { get; set; }

    }

    public class TodoItemFlatNodes
    {
        public List<CompanyAuth> companyAuth { get; set; }

        public List<TodoItemFlatNode> todoItemFlatNode { get; set; }
    }

    public class CompanyAuth
    {

        public int ID { get; set; }

        public string Code { get; set; }
    }


    public class TodoItemFlatNode
    {

        public string CompanyId { get; set; }

        public string Username { get; set; }

        public string groupCode { get; set; }

        public string groupName{ get; set; }

        //public string userCode { get; set; }

        public string user { get; set; }

        public string item { get; set; }

        public int level { get; set; }

        public bool? expandable { get; set; }
    }

    public class GetUserTabsRequest
    {
        public string CompanyId { get; set; }

        public string Username { get; set; }

        public string tabname { get; set; }
    }

    public class PostCompanyRequest
    {
        public string CompanyId { get; set; }

        public string Username { get; set; }

        public int ID { get; set; }

        public string Code { get; set; }

        public string Name { get; set; }

        public string Address { get; set; }

        public string Telephone1 { get; set; }

        public string Telephone2 { get; set; }

        public string Fax { get; set; }

        public string Mail { get; set; }
    }



    public class PostUserSessionRequest
    {
        public string CompanyId { get; set; }

        public string Username { get; set; }

        public bool Active { get; set; }

   }


    public class PostUsersRequest
    {
        public string CompanyId { get; set; }

        public string Username { get; set; }

        public int ID { get; set; }

        public int? EmployeeId { get; set; }

        public string Code { get; set; }

        public string Name { get; set; }

        public string Password { get; set; }

        public bool? IsAdmin { get; set; }

        public bool? IsForced { get; set; }

    }



    public class PostUserlogRequest
    {
        public string CompanyId { get; set; }

        public string Username { get; set; }

        public int? UserID { get; set; }

        public string PasswordNew { get; set; }

        public string RePasswordNew { get; set; }        

    }

    public class PostMenuGroupRequest
    {
        public string CompanyId { get; set; }

        public string Username { get; set; }

        public string groupCode { get; set; }

        public string groupName { get; set; }
    }

    public class PostMenuUserRequest
    {
        public string CompanyId { get; set; }

        public string Username { get; set; }


        public string groupCode { get; set; }

        public string userCode { get; set; }
    }
}
