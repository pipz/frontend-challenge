(function () {
  'use strict';

  angular
    .module('app.contacts')
    .controller('createContactController', createContactController);

    function createContactController (
      $rootScope,
      $scope,
      $mdDialog,
      contactsService,
    ) {
      'ngInject';

      $scope.create = create;
      $scope.close = close;

      function close () {
        $mdDialog.cancel();
      }

      function create () {
        contactsService.createContact($scope.contact).then(function (response) {
          $rootScope.$broadcast('update_list');
        }).finally($mdDialog.cancel);
      }
  }
})();
