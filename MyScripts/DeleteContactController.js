app.controller("DeleteContactController", function ($scope, $location, ShareData, SinglePageCRUDService) {

    getContact();
    function getContact() {

        var promiseGetContact = SinglePageCRUDService.getContact(ShareData.value);

        promiseGetContact.then(function (pl) {
            $scope.Contact = pl.data;
        },
              function (errorPl) {
                  $scope.error = 'failure loading Contact', errorPl;
              });
    }

    //The delete method used to make HTTP DELETE call to the WEB API to update the record
    $scope.delete = function () {
        var promiseDeleteContact = SinglePageCRUDService.delete(ShareData.value);

        promiseDeleteContact.then(function (pl) {
            $location.path("/showContact");
        },
              function (errorPl) {
                  $scope.error = 'failure loading Contact', errorPl;
              });
    };

});