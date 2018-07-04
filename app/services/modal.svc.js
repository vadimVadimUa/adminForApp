;(function () {
    'use strict';

    angular.module('service.modalSvc', []).service('modalSvc', modalSvc);

    /* @ngInject */
    function modalSvc($uibModal) {
        var service = {
            confirmDelete: confirmDelete,
        };
        return service;

        function confirmDelete(){
            return  $uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: '../components/confirm/confirm.html',
                controller: 'ConfirmCtrl',
                controllerAs: 'vm',
                windowTopClass: 'confirm-modal',
                size: 'sm',
                resolve: {
                    config: {
                        header_text: 'Confirm',
                        content_text: 'Delete this item?',
                        ok: 'Yes',
                        cancel: 'No'
                    },
                }
            });
        }

    }
})();
