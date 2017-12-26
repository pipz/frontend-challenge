(function () {
  'use strict';

  angular
    .module('app.core')
    .controller('menuController', menuController);

  function menuController () {
    'ngInject';

    var vm = this;
    vm.user = {
      name: "Yuri Reis",
      email: "yuri.reis@msn.com"
    };
    vm.menu = [{
      link : 'app.contacts.list',
      title: 'Contatos',
      icon: 'group'
    }];
  }
})();
