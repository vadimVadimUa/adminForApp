;(function () {
    'use strict';

    angular.module('service.clinicsSvc', []).factory('clinicsSvc', clinicsSvc);

    /* @ngInject */
    function clinicsSvc(http, url) {
        var model = {
            getAllClinic: getAllClinic,
            getAmountClinic: getAmountClinic
        };
        return model;

        function getAllClinic() {
            return http.get(url.clinics)
        }

        function getAmountClinic() {
            return http.get(url.amount.clinics)
        }
    }
})();