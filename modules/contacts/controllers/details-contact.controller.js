(function (params) {
    'use strict';

    angular
        .module("app.contacts")
        .controller("detailsContactController", detailsContactController);

    function detailsContactController (
        $q,
        $state,
        $mdToast,
        contactService
    ) {
        'ngInject';

        var vm = this;
        var promisses = [];
        var comparativeContact;
        var userId = parseInt($state.params.userId);

        vm.toggleSideNav = toggleSideNav;
        vm.fieldIsChanged = fieldIsChanged;
        vm.update = update;
        vm.removeContact = removeContact;
        vm.fields = [];

        init();

        function init () {
            promisses.push(contactService.getContact(userId));
            promisses.push(contactService.getContactFields());

            $q.all(promisses).then(function (response) {
                vm.selected = response[0];
                setEditableContactFields(response[1]);
                comparativeContact = angular.copy(vm.selected);
            });
        };

        function setEditableContactFields (fields) {
            fields.forEach(function (item) {
              if (item.group === 'Details' || item.group === 'Social') {
                var name = item.name.substring(8);
                var field = { name: name, title: item.label, group: item.group };
                vm.fields.push(field);
              }
            });
        }

        function fieldIsChanged (field) {
            if (vm.selected) {
                return comparativeContact[field.name] != vm.selected[field.name];
            }

            return false;
        }

        function update (field) {
            vm.disableUpdate = true;
            var infoToUpdate = {};
            infoToUpdate[field.name] = vm.selected[field.name];
    
            contactService.updateContact(vm.selected.id, infoToUpdate).then(function (response) {
                comparativeContact[field.name] = vm.selected[field.name];
                openToast("Campo " + field.title + " atualizado com sucesso!");
            }).finally(function () {
                vm.disableUpdate = false;
            });
        }

        function showUpdateErrorMessage () {
            openToast('Ocorreu um erro na atualização do usuário. Por favor, tente novamente.');
        }

        function toggleSideNav () {
            $mdSidenav('left').toggle();
        }

        function openToast (message) {
            $mdToast.show($mdToast
                .simple()
                .textContent(message)
                .position('top right')
                .hideDelay(3000)
            );
        }

        function removeContact () {
            contactService.removeContact(userId).then(function (response) {
                $state.go('app.contacts', {}, { reload: true });
                openToast("Contato removido com sucesso.");
            }, function () {
                openToast("Ocorreu um erro ao tentar remover o contato. Por favor, tente novamente.");
            });
        }
    }
    
})();