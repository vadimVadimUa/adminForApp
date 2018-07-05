;(function () {
    'use strict';

    angular.module('service.userSvc', []).service('userSvc', userSvc);


        /* @ngInject */
    function userSvc() {
        var model = {
            login: login
        };
        return model;

        function login(user) {
            // return http.post(url.admin.login)
        }
    }
})();