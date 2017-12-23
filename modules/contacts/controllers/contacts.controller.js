(function () {
  'use strict';

  angular
    .module('app.contacts')
    .controller('contactsController', contactsController);

  function contactsController (
    $rootScope,
    $scope,
    $mdBottomSheet,
    $mdSidenav,
    $mdDialog,
    contactsService
  ) {
    'ngInject';

    $rootScope.$on('update_list', init);
    $scope.menu = [{
      link : '',
      title: 'Contatos',
      icon: 'group'
    }];
    $scope.message = "Oops! Sem contatos!";
    $scope.showAdd = showAdd;
    $scope.init = init;

    init();

    function init() {
      contactsService.getAllContacts().then(function (response) {
        $scope.contacts = response.objects;
      }, function (error) {
        alert('Oops! Ocorreu um erro ao requisitar a informação.');
      });
    }

    function showAdd (ev) {
      $mdDialog.show({
        templateUrl: 'modules/theme/views/create-contact-dialog.controller.html',
        targetEvent: ev,
        controller: 'createContactController'
      });
    }

  }

})();
