;(function () {
    'use strict';

    angular.module('service.userSvc', []).service('userSvc', userSvc);

    userSvc.$inject = [];

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