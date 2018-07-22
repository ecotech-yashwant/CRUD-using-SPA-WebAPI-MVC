/// <reference path="../Scripts/angular.min.js" />

/// <reference path="../MyScripts/Module.js" />
/// <reference path="./Services.js" />

app.controller('AddContactController', function ($scope, SinglePageCRUDService) {
    $scope.FirstName = 0;
    //The Save scope method use to define the Contact object and 
    //post the Contact information to the server by making call to the Service
    $scope.save = function () {
        var Contact = {
            FirstName: $scope.FirstName,
            LastName: $scope.LastName,
            Email: $scope.Email,
            Phone: $scope.Phone,
            Status: $scope.Status
        };
     
        var promisePost = SinglePageCRUDService.post(Contact);


        promisePost.then(function (pl) {
            $scope.FirstName = pl.data.FirstName;
            alert("FirstName " + pl.data.FirstName);
        },
              function (errorPl) {
                  $scope.error = 'failure loading Contact', errorPl;
              });

    };

});