(function () {
    'use strict';

    angular
        .module("app.contacts")
        .controller("contactsController", contactsController);

    function contactsController (
        $state,
        $mdSidenav,
        $mdToast,
        contactService
    ) {
        'ngInject';

        var vm = this;
        var comparativeContact;

        vm.users;
        vm.selected;
        vm.searchText = "";
        vm.tabIndex = 0;
        vm.selectUser = selectUser;
        vm.addUser = addUser;
        vm.fields = [];
        vm.toggleSideNav = toggleSideNav;

        init();

        function init () {
            contactService.getAllContacts()
                .then(configureFirstSelectedContact, showRequestErrorMessage);

            contactService.getContactFields().then(function (response) {
                setEditableContactFields(response);
            });
        
        function setEditableContactFields (fields) {
            fields.forEach(function (item) {
                if (item.group === 'Details' || item.group === 'Social') {
                var name = item.name.substring(8);
                var field = { name: name, title: item.label, group: item.group };
                vm.fields.push(field);
                }
            });
        }}

        function toggleSideNav () {
            $mdSidenav('left').toggle();
        }

        function configureFirstSelectedContact (response) {
            vm.users = response.objects;
            comparativeContact = angular.copy(vm.selected);
        }

        function showRequestErrorMessage () {
            openToast('Ocorreu um erro na requisição. Por favor, tente novamente.');
        }

        function selectUser (user) {
            vm.selected = user;

            var sidenav = $mdSidenav('left');
            
            $state.go("app.contacts.details", { userId: vm.selected.id });

            if (sidenav.isOpen()) sidenav.close();
        }

        function openToast (message) {
            $mdToast.show($mdToast
                .simple()
                .textContent(message)
                .position('top right')
                .hideDelay(3000)
            );
        }

        function addUser () {
            contactService.createContact(vm.newContact)
                .then(redirectToNewUserDetails, showRequestErrorMessage);
        }

        function redirectToNewUserDetails (response) {
            openToast("Usuário " + vm.newContact.name + " criado com sucesso!");
            vm.newContact = {};
        }
    }
})();