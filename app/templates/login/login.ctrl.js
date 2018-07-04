;(function () {
    angular
        .module('app')
        .controller('LoginCtrl', LoginCtrl);

    /* @ngInject */
    function LoginCtrl(userSvc, $state) {
        var vm = this;
        vm.user = {
            name: 'admin',
            lastname: 'admin',
            email: 'admin@admin.admin',
        };
        vm.login = login;

        function login() {
            // userSvc.login(vm.user);
            $state.go('app.dentists');
        }

    }
})();