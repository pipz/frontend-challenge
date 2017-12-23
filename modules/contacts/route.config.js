(function () {
  'use strict';

  angular
    .module('app.contacts')
    .config(config);

  function config($stateProvider) {
    'ngInject';

    $stateProvider
      .state('contacts', {
        url: '',
        views: {
          '@': {
            templateUrl: 'modules/contacts/views/contacts.controller.html',
            controller: 'contactsController'
          }
        }
      });
  }

})();
