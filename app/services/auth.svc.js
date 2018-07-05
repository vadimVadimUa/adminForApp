;(function () {
    'use strict';

    angular.module('service.authSvc', []).service('authSvc', authSvc);

        /* @ngInject */
    function authSvc(url, http) {
        var model = {
            login: login
        };
        return model;

        function login(user) {
            return http.post(url.admin.login, user)
        }

    }
})();