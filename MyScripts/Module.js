    var app = angular.module("ApplicationModule", ["ngRoute"]);

    //The Factory used to define the value to
    //Communicate and pass data across controllers

    app.factory("ShareData", function () {
        return { value: 0 }
    });

    //Defining Routing
    app.config(['$routeProvider','$locationProvider', function ($routeProvider,$locationProvider) {
        $routeProvider.when('/showcontacts',
                            {
                                templateUrl: 'ContactInfo/ShowContacts',
                                controller: 'ShowContactsController'
                            });
        $routeProvider.when('/addcontact',
                            {
                                templateUrl: 'ContactInfo/AddNewContact',
                                controller: 'AddContactController'
                            });
        $routeProvider.when("/editcontact",
                            {
                                templateUrl: 'ContactInfo/EditContact',
                                controller: 'EditContactController'
                            });
        $routeProvider.when('/deletecontact',
                            {
                                templateUrl: 'ContactInfo/DeleteContact',
                                controller: 'DeleteContactController'
                            });
        $routeProvider.otherwise(
                            {
                                redirectTo: '/'
                            });
       // $locationProvider.html5Mode(true);
        $locationProvider.html5Mode(true).hashPrefix('!')
    }]);