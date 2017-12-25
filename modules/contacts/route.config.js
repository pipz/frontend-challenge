(function () {
  'use strict';

  angular
    .module('app.contacts')
    .config(config);

  function config($stateProvider) {
    'ngInject';

    $stateProvider
      .state('app.contacts', {
        url: '/contacts',
        abstract: true
      })
      .state('app.contacts.list', {
        url: '/list',
        views: {
          'content@app': {
            templateUrl: 'modules/contacts/views/list-contact.controller.html',
            controller: 'listContactController',
            controllerAs: 'vm'
          }
        }
      })
      .state('app.contacts.details', {
        url: '/:userId',
        views: {
          'content@app': {
            templateUrl: 'modules/contacts/views/detail-contact.controller.html',
            controller: 'detailContactController',
            controllerAs: 'vm'
          }
        }
      })
      .state('app.contacts.create', {
        url: '/create',
        views: {
          'content@app': {
            templateUrl: 'modules/contacts/views/create-contact.controller.html',
            controller: 'createContactController',
            controllerAs: 'vm'
          }
        }
      });
  }
})();
