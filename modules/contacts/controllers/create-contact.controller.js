(function () {
  'use strict';

  angular
    .module('app.contacts')
    .controller('createContactController', createContactController);

    function createContactController (
      $scope,
      $state,
      $mdDialog,
      contactsService,
    ) {
      'ngInject';

      $scope.fields = [];
      $scope.contact = {};
      $scope.create = create;
      $scope.close = close;

      init();

      function init() {
        contactsService.getContactFields().then(setContactFields);
      }

      function setContactFields (fields) {
        fields.forEach(function (item) {
          if (item.group === 'Details' || item.group === 'Social') {
            var name = item.name.substring(8);
            var field = { name: name, title: item.label };
            $scope.fields.push(field);
          }
        });
      }

      function create () {
        contactsService.createContact($scope.contact).then(function (response) {
          $state.go('app.contacts.list');
        });
      }
  }
})();
