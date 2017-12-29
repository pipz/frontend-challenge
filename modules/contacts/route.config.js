(function (params) {
    'use strict';

    angular
        .module("app.contacts")
        .config(config);

    function config ($stateProvider) {
        'ngInject';
        
        $stateProvider
            .state("app.contacts", {
                url: "/contacts",
                views: {
                    '@': {
                        templateUrl: "modules/contacts/views/contacts.controller.html",
                        controller: "contactsController",
                        controllerAs: "vm"
                    }
                }
            })
            .state("app.contacts.create", {
                url: "/create",
                views: {
                    'content@app.contacts': {
                        templateUrl: "modules/contacts/views/create-contact.html",
                        controller: "contactsController",
                        controllerAs: "vm"
                    }
                }
            })
            .state("app.contacts.details", {
                url: "/details/:userId",
                views: {
                    'content@app.contacts': {
                        templateUrl: "modules/contacts/views/details-contact.html",
                        controller: "detailsContactController",
                        controllerAs: "vm"
                    }
                }
            });
    }
})();