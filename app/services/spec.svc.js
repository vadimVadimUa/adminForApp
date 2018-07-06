;(function () {
    'use strict';

    angular.module('service.specSvc', []).factory('specSvc', specSvc);

    /* @ngInject */
    function specSvc(http, url) {
        var model = {
            getAllSpec: getAllSpec,
            createSpec: createSpec,
            updateClinic: updateClinic
        };
        return model;

        function createSpec(data) {
            return http.post(url.specialty, data);
        }

        function getAllSpec() {
            return http.get(url.specialities)
        }

        function updateClinic(spec) {
            var send = {
              name: spec.name
            };
            return http.put(url.specialty + '/' + spec.id, send)
        }
    }
})();