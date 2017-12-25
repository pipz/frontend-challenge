(function () {
  'use strict';

  angular
    .module('app.theme')
    .config(config);

  function config($mdThemingProvider) {
    'ngInject';

    var customBlueMap = $mdThemingProvider.extendPalette('light-blue', {
      'contrastDefaultColor': 'light',
      'contrastDarkColors': ['50'],
      '50': 'ffffff'
    });

    $mdThemingProvider.definePalette('customBlue', customBlueMap);

    $mdThemingProvider.theme('default').primaryPalette('customBlue', {
        'default': '500',
        'hue-1': '50'
    }).accentPalette('pink');

    $mdThemingProvider.theme('input', 'default').primaryPalette('grey');
  }
})();
