(function () {
    'use strict';

    angular
        .module('app.core')
        .config(config);

    function config (
        $mdIconProvider,
        $mdThemingProvider
    ) {
        'ngInject';

        $mdIconProvider
            .defaultIconSet('/app/src/assets/svg/avatars.svg', 128)
            .icon('menu', '/app/src/assets/svg/menu.svg', 24);

        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('red');
    }
})();