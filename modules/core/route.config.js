(function () {
  'use strict';

  angular
    .module('app.core')
    .config(config);

  function config($stateProvider) {
    'ngInclude';

    $stateProvider
      .state('app', {
        url: '',
        abstract: true,
        views: {
          '@': {
            templateUrl: 'modules/core/views/app-container.html',
            controller: 'menuController'
          }
        }
      })
      .state('app.main', {
        url: '/main',
        views: {
          'content@app': {
            templateUrl: 'modules/core/views/app-main.html'
          }
        }
      });
  }

})();
