;(function () {
    'use strict';

    angular.module('service.authSvc', []).service('authSvc', authSvc);


    function authSvc($rootScope) {
        var model = {
            processAutoLogin: processAutoLogin,
            isLogined: isLogined,
            logout: logout
        };

        function test() {
            return 'test auth service'
        }

        $rootScope.$on('logout', function (event, data) {
            logout();
        });

        return model;


        function processAutoLogin(callback) {
            if (isLogined()) {
                $state.go('app.dentists');
            }
            return callback && callback();
        }


        function isLogined() {
            let user = userSvc.getUser();
            if (angular.isDefined(user) && user.id && userSvc.getToken()) {
                return true;
            }
            return false;
        }

        function logout() {
            clearAuthData();
            userSvc.resetData();
            $state.go('login');
        }

        function clearAuthData() {
        }


    }
})();