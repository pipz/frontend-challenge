(function () {
  'use strict';

  angular
    .module('app.contacts')
    .controller('editContactController', editContactController);

    function editContactController (
      $scope,
      $mdDialog,
      contactsService,
      contact
    ) {
      'ngInject';

      var _contact = angular.copy(contact);
      $scope.contact = contact;
      $scope.update = update;
      $scope.close = close;

      function close () {
        $mdDialog.cancel();
      }

      function update () {
        contactsService.updateContact(contact.id, contact).then(function (response) {
          contact = response;
          _contact = contact;
        }).finally($mdDialog.cancel);
      }
  }
})();
