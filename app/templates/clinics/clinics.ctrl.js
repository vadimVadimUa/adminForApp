;(function () {
    angular
        .module('app')
        .controller('ClinicsCtrl', ClinicsCtrl);

    ClinicsCtrl.$inject=['userSvc'];
    /* @ngInject */
    function ClinicsCtrl(userSvc) {
        var vm = this;

        var ss = userSvc.test();
    }
})();