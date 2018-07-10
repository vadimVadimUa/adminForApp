;(function () {
    angular
        .module('app')
        .controller('ClinicsCtrl', ClinicsCtrl);

    /* @ngInject */
    function ClinicsCtrl(clinics, clinic_countries) {
        var vm = this;
        vm.clinics = clinics;
        vm.clinic_countries = clinic_countries;
        vm.count_clinic = null;
        init();

        function init() {
            if(vm.clinics && vm.clinic.length){
               vm.count_clinic = vm.clinics.length;
            }
        }
    }
})();