;(function () {
    'use strict';

    angular.module('service.userSvc', []).service('userSvc', userSvc);


        /* @ngInject */
    function userSvc($localStorage, url, http) {
        var model = {
            resetData: resetData,
            getToken: getToken,
            setToken: setToken,
            removeUser: removeUser
        };
        return model;

        function removeUser(user_id) {
            return http.post(url.user.remove, user_id)
        }

        function setToken(token){
            if(angular.isDefined(token)){
                $localStorage.token = token;
            }
        }

        function getToken(){
            return $localStorage.token || '';
        }

        function resetData(){
            $localStorage.token = null;
            delete $localStorage.token;
        }

    }
})();