;(function () {
    angular
        .module('app')
        .controller('DentistsCtrl', DentistsCtrl);

    /* @ngInject */
    function DentistsCtrl(modalSvc) {
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