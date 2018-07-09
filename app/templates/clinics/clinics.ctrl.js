;(function () {
    angular
        .module('app')
        .controller('ClinicsCtrl', ClinicsCtrl);

    /* @ngInject */
    function ClinicsCtrl(clinicsSvc) {
        var vm = this;
        vm.getAmount = getAmount;

        getClinics();

        function getClinics() {
            clinicsSvc.getAllClinic().then(function (res) {
                vm.clinics = res;
                vm.count_clinic = vm.clinics.length;
            });
        }

        function getAmount() {
            clinicsSvc.getAmountClinic().then(function (res) {
                vm.clinic_countries = res;
            });
        }
    }
})();