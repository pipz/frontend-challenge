(function () {
    'use strict';

    angular
        .module("app.core")
        .config(config);

    function config (
        $mdIconProvider,
        $mdThemingProvider
    ) {
        'ngInject';

        $mdIconProvider
            .icon('menu', './assets/svg/menu.svg', 24)
            .icon('user', './assets/svg/user.svg', 24);

        $mdThemingProvider
            .theme('default')
            .primaryPalette('blue')
            .accentPalette('red');
    }
})();