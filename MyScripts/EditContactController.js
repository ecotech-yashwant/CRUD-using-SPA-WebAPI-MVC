/// <reference path="F:\Mahesh_New\Articles\MVC\Infra\A8_SPA_New_MVC_Using_Angular\MVC_Using_Angular\Scripts/angular.min.js" />

/// <reference path="F:\Mahesh_New\Articles\MVC\Infra\A8_SPA_New_MVC_Using_Angular\MVC_Using_Angular\MyScripts/Module.js" />
/// <reference path="Services.js" />



app.controller("EditContactController", function ($scope, $location,ShareData,SinglePageCRUDService) {
     
    getContact();
    function getContact() {
        
        var promiseGetContact = SinglePageCRUDService.getContact(ShareData.value);

        
        promiseGetContact.then(function (pl)
        {
            $scope.Contact = pl.data;
        },
              function (errorPl) {
                  $scope.error = 'failure loading Contact', errorPl;
              });
    }


    //The Save method used to make HTTP PUT call to the WEB API to update the record

    $scope.save = function () {
        var Contact = {
            FirstName: $scope.Contact.FirstName,
            LastName: $scope.Contact.LastName,
            Email: $scope.Contact.Email,
            Phone: $scope.Contact.Phone,
            Status: $scope.Contact.Status
        };

        var promisePutContact = SinglePageCRUDService.put($scope.Contact.FirstName,Contact);
        promisePutContact.then(function (pl)
        {
            $location.path("/showContact");
        },
              function (errorPl) {
                  $scope.error = 'failure loading Contact', errorPl;
              });
    };

});