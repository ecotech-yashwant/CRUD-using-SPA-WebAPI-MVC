using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVC_Using_Angular.Controllers
{
    public class ContactInfoController : Controller
    {
        // GET: ContactInfo
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult AddNewContact()
        {
            return PartialView("AddContact");
        }
        public ActionResult ShowContacts()
        {
            return PartialView("ShowContacts");
        }

        public ActionResult EditContact()
        {
            return PartialView("EditContact");
        }

        public ActionResult DeleteContact()
        {
            return PartialView("DeleteContact");
        }
    }
}