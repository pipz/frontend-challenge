(function () {
  'use strict';

  angular
    .module('app.contacts')
    .directive('contactCard', contactCard);

  function contactCard(
    contactsService
  ) {
    'ngInject';

    return {
      restrict: 'A',
      scope: {
        contact: '='
      },
      templateUrl: 'modules/contacts/views/contact-card.directive.html'
    }
  }
})();
