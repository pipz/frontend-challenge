(function () {
  'use strict';

  angular
    .module('app.contacts')
    .directive('contactCard', contactCard);

  function contactCard(
    $mdDialog,
    contactsService
  ) {
    'ngInject';

    return {
      restrict: 'A',
      scope: {
        contact: '='
      },
      templateUrl: 'modules/contacts/views/contact-card.directive.html',
      link: link
    }

    function link (scope) {
      scope.showEdit = showEdit;
      scope.remove = remove;

      function remove () {
        contactsService.removeContact(scope.contact.id).then(function (response) {
          scope.$parent.init();
        });
      }

      function showEdit (event) {
        $mdDialog.show({
          templateUrl: 'modules/theme/views/edit-contact-dialog.controller.html',
          targetEvent: event,
          locals: {
            contact: scope.contact
          },
          controller: 'editContactController'
        });
      }
    }
  }
})();
