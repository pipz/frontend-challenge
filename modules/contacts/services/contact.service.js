(function () {
    'use strict';
  
    angular
      .module('app.contacts')
      .service('contactService', contactService);
  
    function contactService(
      pipzApiService
    ) {
      'ngInject';

      return {
        getContact: getContact,
        getContactFields: getContactFields,
        getAllContacts: getAllContacts,
        createContact: createContact,
        removeContact: removeContact,
        updateContact: updateContact
      };

      function getContactFields() {
        return pipzApiService.all('contactfields').customGET();
      }

      function getAllContacts() {
        return pipzApiService.all('contact').customGET();
      }

      function getContact(id) {
        return pipzApiService.one('contact', id).customGET();
      }

      function createContact(contact) {
        return pipzApiService.all('contact').post(contact);
      }

      function removeContact(id) {
        return pipzApiService.one('contact', id).remove();
      }

      function updateContact(id, contactInfo) {
        return pipzApiService.one('contact', id).patch(contactInfo);
      }
    }
  })();
  