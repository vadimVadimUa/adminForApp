;(function () {
    angular
        .module('app')
        .controller('PatientsCtrl', PatientsCtrl);

    PatientsCtrl.$inject=['authSvc'];

    /* @ngInject */
    function PatientsCtrl(authSvc) {
        var vm = this;
    }
})();