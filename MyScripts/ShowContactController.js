/// <reference path="../Scripts/angular.min.js" />

/// <reference path="../MyScripts/Module.js" />
/// <reference path="./Services.js" />


//The controller has dependency upon the Service and ShareData.


app.controller('ShowContactsController', function ($scope, $location, SinglePageCRUDService, ShareData) {
 
    loadRecords();

//Function to Load all Contacts Records.   
    function loadRecords()
    {
        var promiseGetContacts = SinglePageCRUDService.getContacts();

        promiseGetContacts.then(function (pl) { $scope.Contacts = pl.data },
              function (errorPl) {
                  $scope.error = 'failure loading Contact', errorPl;
              });
    }


    //Method to route to the addcontact
    $scope.addContact = function () {
        $location.path("/addcontact");
    }

    //Method to route to the editContact
    //The ContactId passed to this method is further set to the ShareData
    //This value can then be used to communicate across the Controllers
    $scope.editContact = function (ContactId) {
        ShareData.value = ContactId;
        $location.path("/editcontact");
    }

    //Method to route to the deleteContact
    //The ContactId passed to this method is further set to the ShareData
    //This value can then be used to communicate across the Controllers
    $scope.deleteContact = function (ContactId) {
        ShareData.value = ContactId;
        $location.path("/deletecontact");
    }
});