/// <reference path="../Scripts/angular.min.js" />

/// <reference path="../MyScripts/Module.js" />


app.service("SinglePageCRUDService", function ($http) {

    //Function to Read All Contacts
    this.getContacts = function () {
        return $http.get("/api/ContactInfoAPI");
    };

    //Fundction to Read Contact based upon id
    this.getContact = function (id) {
        return $http.get("/api/ContactInfoAPI/" + id);
    };

    //Function to create new Contact
    this.post = function (Contact) {
        var request = $http({
            method: "post",
            url: "/api/ContactInfoAPI",
            data: Contact
        });
        return request;
    };
    //Function  to Edit Contact based upon id 
    this.put = function (id,Contact) {
        var request = $http({
            method: "put",
            url: "/api/ContactInfoAPI/" + id,
            data: Contact
        });
        return request;
    };

    //Function to Delete Contact based upon id
    this.delete = function (id) {
        var request = $http({
            method: "delete",
            url: "/api/ContactInfoAPI/" + id
        });
        return request;
    };
});








