(function () {
  'use strict';

  angular
    .module('app.contacts')
    .controller('createContactController', createContactController);

    function createContactController (
      $state,
      contactsService,
    ) {
      'ngInject';

      var vm = this;

      vm.fields = [];
      vm.contact = {};
      vm.create = create;
      vm.close = close;

      init();

      function init() {
        contactsService.getContactFields().then(setContactFields);
      }

      function setContactFields (fields) {
        fields.forEach(function (item) {
          if (item.group === 'Details' || item.group === 'Social') {
            var name = item.name.substring(8);
            var field = { name: name, title: item.label };
            vm.fields.push(field);
          }
        });
      }

      function create () {
        contactsService.createContact(vm.contact).then(function (response) {
          $state.go('app.contacts.list');
        });
      }
  }
})();
