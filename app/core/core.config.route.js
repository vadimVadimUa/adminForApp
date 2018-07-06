;(function () {
    'use strict';
    angular
        .module('app')
        .config(mainConfig);

    /* @ngInject */
    function mainConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/login');
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
            .state('app.dentist_detail', {
                url: 'dentist-detail/{id}',
                templateUrl: 'templates/dentist-detail/dentist-detail.html',
                controller: 'DentistDetailCtrl',
                params: { id : null },
                controllerAs: 'vm',
                resolve: {
                    /* @ngInject */
                    dentist_info : function ($stateParams, userSvc) {
                        if($stateParams.id){

                        }
                    }
                }
            })
            .state('app.patients', {
                url: 'patients',
                templateUrl: 'templates/patients/patients.html',
                controller: 'PatientsCtrl',
                controllerAs: 'vm'
            })
            .state('app.patient_detail', {
                url: 'patient-detail',
                templateUrl: 'templates/patient-detail/patient-detail.html',
                controller: 'PatientDetailCtrl',
                params: { id : null },
                controllerAs: 'vm'
            })
            .state('app.clinics', {
                url: 'clinics',
                templateUrl: 'templates/clinics/clinics.html',
                controller: 'ClinicsCtrl',
                controllerAs: 'vm'
            })
            .state('app.clinic_detail', {
                url: 'clinic-detail',
                templateUrl: 'templates/clinic-detail/clinic-detail.html',
                controller: 'ClinicDetailCtrl',
                params: { id : null },
                controllerAs: 'vm'
            })
            .state('app.purchase', {
                url: 'purchase',
                templateUrl: 'templates/purchase/purchase.html',
                controller: 'PurchaseCtrl',
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

