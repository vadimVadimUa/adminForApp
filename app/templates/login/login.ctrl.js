;(function () {
    angular
        .module('app')
        .controller('LoginCtrl', LoginCtrl);

    /* @ngInject */
    function LoginCtrl(authSvc, $state, toastr, $localStorage) {
        var vm = this;
        vm.user = {
            email: 'admin1234@admin.admin',
            password: 'Admin1234!'
        };
        vm.login = login;

        function login() {
            authSvc.login(vm.user).then(function (data) {
                if(data.success) {
                    $state.go('app.dentists');
                    $localStorage.token = data.token;
                } else {
                    if(data.message) {
                        toastr.error(data.message);
                    }
                }
            }, function (err) {
                var err_text = '';
                angular.forEach(err, function (val, key) {
                    if (angular.isArray(val)){
                        err_text += val.reduce(function (acc, current) {
                            return acc + '\n' + current;
                        }, '');
                    }
                });
                if(err_text.length){
                    toastr.error(err_text);
                }
            });
        }

    }
})();