(function () {
  'use strict';

  angular
    .module('app.contacts')
    .controller('detailContactController', detailContactController);

    function detailContactController (
      $scope,
      $state,
      contactsService
    ) {
      'ngInject';

      var comparativeContact;

      $scope.fields = [];
      $scope.update = update;
      $scope.remove = remove;
      $scope.fieldIsChanged = fieldIsChanged;
      $scope.disableEdit = false;

      init();

      function init () {
        var userId = parseInt($state.params.userId);

        contactsService.getContactFields().then(setEditableContactFields);

        contactsService.getContact(userId).then(function (response) {
          $scope.contact = response;
          comparativeContact = angular.copy($scope.contact);
        });
      }

      function setEditableContactFields (fields) {
        fields.forEach(function (item) {
          if (item.group === 'Details' || item.group === 'Social') {
            var name = item.name.substring(8);
            var field = { name: name, title: item.label };
            $scope.fields.push(field);
          }
        });
      }

      function fieldIsChanged (field) {
        return comparativeContact[field.name] != $scope.contact[field.name];
      }

      function update (field) {
        $scope.disableUpdate = true;
        var infoToUpdate = {};
        infoToUpdate[field.name] = $scope.contact[field.name];

        contactsService.updateContact($scope.contact.id, infoToUpdate).then(function (response) {
          comparativeContact[field.name] = $scope.contact[field.name];
        }).finally(function () {
          $scope.disableUpdate = false;
        });
      }

      function remove () {
        contactsService.removeContact($scope.contact.id).then(function (response) {
          $state.go('app.contacts.list');
        });
      }
  }
})();
