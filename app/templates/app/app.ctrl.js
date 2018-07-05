;(function () {
    angular
        .module('app')
        .controller('AppCtrl', AppCtrl);

    /* @ngInject */
    function AppCtrl($state) {
        var vm = this;
        vm.logout = logout;
        vm.toggleMenu = toggleMenu;
        vm.menuOpen = true;

        function toggleMenu(){
            vm.menuOpen = !vm.menuOpen;
        }
        function logout() {
            $state.go('login');
        }
    }
})();