;(function () {
    'use strict';

    angular.module('service.userSvc', []).service('userSvc', userSvc);


        /* @ngInject */
    function userSvc($localStorage) {
        var model = {
            resetData: resetData,
            getToken: getToken,
            setToken: setToken
        };
        return model;


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