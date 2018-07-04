;(function () {
    'use strict';
    angular
        .module('app')
        .config(mainConfig);

    /* @ngInject */
    function mainConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'templates/login/login.html',
                controller: 'LoginCtrl',
                controllerAs: 'vm'
            })
            .state('app', {
                url: '/',
                templateUrl: 'templates/app/app.html',
                controller: 'AppCtrl',
                controllerAs: 'vm'
            })
            .state('app.dentists', {
                url: 'dentists',
                templateUrl: 'templates/dentists/dentists.html',
                controller: 'DentistsCtrl',
                controllerAs: 'vm'
            })
            .state('app.patients', {
                url: 'patients',
                templateUrl: 'templates/patients/patients.html',
                controller: 'PatientsCtrl',
                controllerAs: 'vm'
            })
            .state('app.clinics', {
                url: 'clinics',
                templateUrl: 'templates/clinics/clinics.html',
                controller: 'ClinicsCtrl',
                controllerAs: 'vm'
            })
            .state('app.text', {
                url: 'text',
                templateUrl: 'templates/text/text.html',
                controller: 'TextCtrl',
                controllerAs: 'vm'
            })

    }
})();

