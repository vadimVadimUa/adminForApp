;(function () {
    angular
        .module('app')
        .controller('DentistsCtrl', DentistsCtrl);

    DentistsCtrl.$inject=['userSvc'];
    /* @ngInject */
    function DentistsCtrl(userSvc) {
        var vm = this;

        var ss = userSvc.test();
    }
})();