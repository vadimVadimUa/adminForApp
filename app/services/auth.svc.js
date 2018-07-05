;(function () {
    'use strict';

    angular.module('service.authSvc', []).service('authSvc', authSvc);

        /* @ngInject */
    function authSvc() {
        var model = {
            test: test
        };
        return model;

        function test(){
            return 'test auth service'
        }

    }
})();