;(function () {
    'use strict';

    angular.module('service.authSvc', []).service('authSvc', authSvc);


    function authSvc($rootScope, url, http) {
        var model = {
            processAutoLogin: processAutoLogin,
            isLogined: isLogined,
            logout: logout,
            login: login
        };
        return model;

        function login(user) {
            return http.post(url.admin.login, user)

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