;(function () {
    angular.module('app',
        ['app.core',
            'app.directives',
            'app.request',
            'app.services',
            'app.filters'
        ]).run(runBlock);

    /* @ngInject */
    function runBlock($sessionStorage, $localStorage, $rootScope, $state, user, utils, firebaseSvc, $location) {

        Array.prototype.sum = function () {
            return this.reduce(function (a, b) {
                return a + b;
            });
        };

        if ($state.current.name === 'verified' ||
            $location.path() === '/verified' ||
            $location.path() === '/reset-password' ||
            $location.path() === '/forgot-password' ||
            $location.path() === '/create_account') {
            delete $localStorage.auth_key;
            delete $sessionStorage.auth_key;
            user.delUser();
        }

        if ($localStorage.auth_key && $localStorage.auth_key.length) {
            $sessionStorage.auth_key = $localStorage.auth_key;
            user.getUserInfo()
                .then(function (response) {
                    user.setUser(response);
                    getUserSettings();
                });
        }

        function getUserSettings() {
            user.getSettings()
                .then(function (res) {
                    user.setUserSettings(res);
                    firebaseSvc.init();
                    changeState();
                });
        }

        function changeState() {

            switch (user.getUser().role) {
                case user.roleIds().USER:
                    if (user.role().isTM()) {
                        $state.go('app.tm-dashboard');
                    } else if (user.role().isObs()) {
                        $state.go('app.observer-dashboard');
                    } else {
                        $state.go('app.mobile-app');
                    }
                    break;
                case user.roleIds().CLIENT_ADMIN:
                    $state.go('app.dashboard.qi-dashboard');
                    break;
                case user.roleIds().TEAM_MANAGER:
                    if (user.role().isObs()) {
                        $state.go('app.observer-dashboard');
                    } else {
                        $state.go('app.tm-dashboard');
                    }
                    break;
                case user.roleIds().OBSERVER:
                    $state.go('app.observer-dashboard');
                    break;
                case user.roleIds().SUPER_ADMIN:
                    $state.go('app.dashboard.admin-dashboard');
                    break;
                default:
                    $state.go('login');
            }
        }

        $rootScope.$on('$stateChangeStart', function (event, toState) {
                if (user.getUser() && ( user.role().isTM() || user.role().isUser() )) {
                    if (toState.name !== 'app.mobile-app-edit' &&
                        toState.name !== 'app.mobile-app-teams' &&
                        toState.name !== 'app.teams') {
                        if (!utils.checkUserParam('profile')) {
                            $state.go('app.mobile-app-edit');
                            event.preventDefault();
                            return false;
                        } else if (!utils.checkUserParam('teams')) {
                            if (user.role().isTM()) {
                                $state.go('app.teams');
                                event.preventDefault();
                                return false;
                            } else if (user.role().isUser()) {
                                $state.go('app.mobile-app-teams');
                                event.preventDefault();
                                return false;
                            }
                        }
                        return false;
                    }
                }

                if (toState.name !== 'login' &&
                    toState.name !== 'forgot-password' &&
                    toState.name !== 'reset-password' &&
                    toState.name !== 'verified' &&
                    toState.name !== 'admin-create-account' &&
                    toState.name !== 'signup' &&
                    !$localStorage.auth_key) {
                    $state.go('login');
                    event.preventDefault();
                }
            }
        );

    }
})
();