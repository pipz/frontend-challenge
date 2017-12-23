(function () {
  'use strict';

  angular
    .module('app.contacts')
    .service('contactsService', contactsService);

  function contactsService(PipzApiService) {
    'ngInject';

    return {
      getContact: getContact,
      getAllContacts: getAllContacts,
      createContact: createContact,
      removeContact: removeContact,
      updateContact: updateContact
    };

    function getAllContacts() {
      return PipzApiService.all('contact').customGET();
    }

    function getContact(id) {
      return PipzApiService.one('contact', id);
    }

    function createContact(contact) {
      return PipzApiService.all('contact').post(contact);
    }

    function removeContact(id) {
      return PipzApiService.one('contact', id).remove();
    }

    function updateContact(id, contact) {
      return PipzApiService.one('contact', id).patch(contact);
    }
  }
})();
