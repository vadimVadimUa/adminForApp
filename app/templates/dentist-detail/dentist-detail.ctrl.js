;(function () {
    angular
        .module('app')
        .controller('DentistDetailCtrl', DentistDetailCtrl);

    /* @ngInject */
    function DentistDetailCtrl(modalSvc) {
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