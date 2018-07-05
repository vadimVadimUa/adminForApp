;(function () {
    angular
        .module('app')
        .controller('PatientDetailCtrl', PatientDetailCtrl);

    /* @ngInject */
    function PatientDetailCtrl(modalSvc) {
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