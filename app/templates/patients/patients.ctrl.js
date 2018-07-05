;(function () {
    angular
        .module('app')
        .controller('PatientsCtrl', PatientsCtrl);

    /* @ngInject */
    function PatientsCtrl(patientSvc, modalSvc, userSvc, toastr) {
        var vm = this;
        var user_ids = [];
        vm.deleteUser = deleteUser;

        init();

        function init() {
            getPatients();
            getAmount();
        }

        function getPatients() {
            patientSvc.getAllPatient().then(function (res) {
                vm.patients = res;
            });
        }

        function getAmount() {
            patientSvc.getAmountPatient().then(function (res) {
                vm.amount_patient = res;
            });
        }

        function deleteUser(user){
            user_ids.push(user.id);
            var user_id = {
                ids: user_ids
            };
            modalSvc.confirmDelete().result.then(function(){
                userSvc.removeUser(user_id).then(function (data) {
                    if(data.success){
                        toastr.success(data.message);
                        init()
                    } else {
                        toastr.error(data.message);
                    }
                })
            },function(){
                return
            });
        };
    }
})();