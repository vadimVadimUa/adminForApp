;(function () {
    angular
        .module('app')
        .controller('DentistsCtrl', DentistsCtrl);

    /* @ngInject */
    function DentistsCtrl(modalSvc, dentistSvc, userSvc, toastr, $state) {
        var vm = this;
        var user_ids = [];
        vm.deleteUser = deleteUser;
        vm.goDentist = goDentist;

        init();
        function init() {
            getDentists();
            getAmount();
        }

        function goDentist() {
            $state.go()
        }

        function getDentists() {
            dentistSvc.getAllDentist().then(function (res) {
                vm.dentists = res;
            });
        }

        function getAmount() {
            dentistSvc.getAmountDentist().then(function (res) {
                vm.amount_dentist = res;
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
                        init();
                    } else {
                        toastr.error(data.message);
                    }
                })
            },function(){
            });
        }
    }
})();