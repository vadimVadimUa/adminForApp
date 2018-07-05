;(function () {
    angular
        .module('app')
        .controller('PatientsCtrl', PatientsCtrl);

    PatientsCtrl.$inject=['authSvc'];

    /* @ngInject */
    function PatientsCtrl() {
        var vm = this;
    }
})();