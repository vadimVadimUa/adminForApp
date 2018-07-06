;(function () {
    angular
        .module('app')
        .controller('PurchaseCtrl', PurchaseCtrl);

    /* @ngInject */
    function PurchaseCtrl(modalSvc, purchaseSvc,toastr) {
        var vm = this;
        vm.newPurchase = newPurchase;

        getPurchases();

        function newPurchase() {
            modalSvc.purchaseCreate().result.then(function(res){
                purchaseSvc.createPurchasePlan(res).then(function (data) {
                    if(data.success){
                        getPurchases();
                        toastr.success(data.message);
                    } else {
                        toastr.error(data.message);
                    }
                })
            },function(){
                return
            });
        }

        function getPurchases() {
            purchaseSvc.getPurchase().then(function (data) {
                vm.purchases = data;
            });
        }
    }
})();