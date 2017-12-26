(function () {
  'use strict';

  angular
    .module('app.theme')
    .controller('dialogController', dialogController);

  function dialogController($scope, $mdDialog) {
    'ngInject';

    $scope.hide = hide;
    $scope.answer = answer;
    $scope.cancel = cancel;

    function hide () {
      $mdDialog.hide();
    };

    function cancel () {
      $mdDialog.cancel();
    };


    function answer (answer) {
      $mdDialog.hide(answer);
    };

  };

})();
