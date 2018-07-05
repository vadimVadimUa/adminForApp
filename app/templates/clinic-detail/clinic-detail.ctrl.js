;(function () {
    angular
        .module('app')
        .controller('ClinicDetailCtrl', ClinicDetailCtrl);

    /* @ngInject */
    function ClinicDetailCtrl(modalSvc) {
        var vm = this;
        vm.testConfirmDelete = function(){
            modalSvc.confirmDelete().result.then(function(res){
                console.log(res);
            },function(res){
                console.log(res);
            });
        };
    }
})();