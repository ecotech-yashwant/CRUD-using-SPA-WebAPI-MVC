using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using MVC_Using_Angular.Models;

namespace MVC_Using_Angular.Controllers
{
    public class ContactInfoAPIController : ApiController
    {
        private CompanyEntities db = new CompanyEntities();

        // GET: api/ContactInfoAPI
        public IQueryable<ContactInfo> GetContactInfoes()
        {
            return db.ContactInfoes;
        }

        // GET: api/ContactInfoAPI/5
        [ResponseType(typeof(ContactInfo))]
        public IHttpActionResult GetContactInfo(int id)
        {
            ContactInfo ContactInfo = db.ContactInfoes.Find(id);
            if (ContactInfo == null)
            {
                return NotFound();
            }

            return Ok(ContactInfo);
        }

        // PUT: api/ContactInfoAPI/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutContactInfo(int id, ContactInfo ContactInfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != ContactInfo.EmpNo)
            {
                return BadRequest();
            }

            db.Entry(ContactInfo).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ContactInfoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/ContactInfoAPI
        [ResponseType(typeof(ContactInfo))]
        public IHttpActionResult PostContactInfo(ContactInfo ContactInfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ContactInfoes.Add(ContactInfo);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = ContactInfo.EmpNo }, ContactInfo);
        }

        // DELETE: api/ContactInfoAPI/5
        [ResponseType(typeof(ContactInfo))]
        public IHttpActionResult DeleteContactInfo(int id)
        {
            ContactInfo ContactInfo = db.ContactInfoes.Find(id);
            if (ContactInfo == null)
            {
                return NotFound();
            }

            db.ContactInfoes.Remove(ContactInfo);
            db.SaveChanges();

            return Ok(ContactInfo);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ContactInfoExists(int id)
        {
            return db.ContactInfoes.Count(e => e.EmpNo == id) > 0;
        }
    }
}