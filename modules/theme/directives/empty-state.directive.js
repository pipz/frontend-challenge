(function () {
  'use strict';

  angular
    .module('app.theme')
    .directive('emptyState', emptyState);

  function emptyState() {
    'ngInject';

    return {
      restrict: 'E',
      scope: {
        message: '='
      },
      templateUrl: 'modules/theme/views/empty-state.directive.html'
    };

  }

})();
