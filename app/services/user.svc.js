;(function () {
    'use strict';

    angular.module('service.userSvc', []).service('userSvc', userSvc);

    userSvc.$inject = [];

    function userSvc() {
        var model = {
            test: test
        };
        return model;

        function test() {
            return 'test user service'
        }
    }
})();