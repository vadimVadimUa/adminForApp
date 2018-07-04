;(function () {
    angular
        .module('app')
        .controller('AppCtrl', AppCtrl);

    /* @ngInject */
    function AppCtrl() {
        var vm = this;
        vm.toggleMenu = toggleMenu;
        vm.menuOpen = true;

        function toggleMenu(){
            vm.menuOpen = !vm.menuOpen;
        }
    }
})();