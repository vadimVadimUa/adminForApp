;(function () {
    angular
        .module('app')
        .controller('ClinicsCtrl', ClinicsCtrl);

    /* @ngInject */
    function ClinicsCtrl(clinicsSvc) {
        var vm = this;
        init();

        function init(){
            getClinics();
            getAmount();
        }

        function getClinics() {
            clinicsSvc.getAllClinic().then(function (res) {
                vm.clinics = res;
            });
        }

        function getAmount() {
            clinicsSvc.getAmountClinic().then(function (res) {
                vm.amount_clinic = res;
                console.log(res)
            });
        }
    }
})();