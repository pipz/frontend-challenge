(function () {
    'use strict';

    angular
        .module("app.core")
        .config(config);

    function config (
        $stateProvider, 
        $urlRouterProvider
    ) {
        'ngInject';

        $urlRouterProvider.when('', 'contacts');
        $stateProvider.state('app', { url: '', abstract: true });
    }
})();