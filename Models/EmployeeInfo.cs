//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MVC_Using_Angular.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class ContactInfo
    {
        public int ContactId {get;set;}
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public bool Status { get; set; }
    }

    public enum ContactStatus {
        Inactive =0;
        Active= 1; 
    }
}
