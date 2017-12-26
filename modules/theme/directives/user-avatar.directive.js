(function () {
  'use strict';

  angular
    .module('app.theme')
    .directive('userAvatar', userAvatar);

  function userAvatar() {
    'ngInject';

    return {
      replace: true,
      templateUrl: 'modules/theme/views/user-avatar.directive.html'
    };

  }

})();
