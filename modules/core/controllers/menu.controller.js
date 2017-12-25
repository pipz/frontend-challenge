(function () {
  'use strict';

  angular
    .module('app.core')
    .controller('menuController', menuController);

  function menuController ($scope) {
    'ngInject';

    $scope.user = {
      name: "Yuri Reis",
      email: "yuri.reis@msn.com"
    };

    $scope.menu = [{
      link : 'app.contacts.list',
      title: 'Contatos',
      icon: 'group'
    }];
  }
})();
