(function () {
  'use strict';

  angular
    .module('app.contacts')
    .controller('detailContactController', detailContactController);

    function detailContactController (
      $state,
      contactsService
    ) {
      'ngInject';

      var comparativeContact;
      var vm = this;

      vm.fields = [];
      vm.update = update;
      vm.remove = remove;
      vm.fieldIsChanged = fieldIsChanged;
      vm.disableEdit = false;

      init();

      function init () {
        var userId = parseInt($state.params.userId);

        contactsService.getContactFields().then(setEditableContactFields);

        contactsService.getContact(userId).then(function (response) {
          vm.contact = response;
          comparativeContact = angular.copy(vm.contact);
        });
      }

      function setEditableContactFields (fields) {
        fields.forEach(function (item) {
          if (item.group === 'Details' || item.group === 'Social') {
            var name = item.name.substring(8);
            var field = { name: name, title: item.label };
            vm.fields.push(field);
          }
        });
      }

      function fieldIsChanged (field) {
        return comparativeContact[field.name] != vm.contact[field.name];
      }

      function update (field) {
        vm.disableUpdate = true;
        var infoToUpdate = {};
        infoToUpdate[field.name] = vm.contact[field.name];

        contactsService.updateContact(vm.contact.id, infoToUpdate).then(function (response) {
          comparativeContact[field.name] = vm.contact[field.name];
        }).finally(function () {
          vm.disableUpdate = false;
        });
      }

      function remove () {
        contactsService.removeContact(vm.contact.id).then(function (response) {
          $state.go('app.contacts.list');
        });
      }
  }
})();
