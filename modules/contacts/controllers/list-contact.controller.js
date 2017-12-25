(function () {
  'use strict';

  angular
    .module('app.contacts')
    .controller('listContactController', listContactController);

  function listContactController (
    $mdBottomSheet,
    $mdSidenav,
    contactsService
  ) {
    'ngInject';

    var vm = this;
    vm.menu = [{
      link : '',
      title: 'Contatos',
      icon: 'group'
    }];
    vm.message = "Oops! Sem contatos!";
    vm.init = init;

    init();

    function init() {
      contactsService.getAllContacts().then(function (response) {
        vm.contacts = response.objects;
      }, function (error) {
        alert('Oops! Ocorreu um erro ao requisitar a informação.');
      });
    }
  }

})();
