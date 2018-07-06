;(function () {
    angular
        .module('app')
        .controller('SpecCtrl', SpecCtrl);

    /* @ngInject */
    function SpecCtrl(specSvc, modalSvc, toastr) {
        var vm = this;
        vm.newSpecialty = newSpecialty;
        vm.update = update;
        getSpec();

        function getSpec() {
            specSvc.getAllSpec().then(function (res) {
                vm.specialities = res;
            });
        }

        function update(spec) {
            specSvc.updateClinic(spec).then(function (data) {
                if(data.success){
                    getSpec();
                    toastr.success(data.message);
                } else {
                    toastr.error(data.message);
                }
            })
        }

        function newSpecialty() {
            modalSvc.specCreateModal().result.then(function(res){
                specSvc.createSpec(res).then(function (data) {
                    if(data.success){
                        getSpec();
                        toastr.success(data.message);
                    } else {
                        toastr.error(data.message);
                    }
                })
            },function(){
                return
            });
        }
    }
})();