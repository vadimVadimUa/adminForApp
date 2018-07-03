;(function () {
    angular
        .module('app')
        .controller('Sidebar', Sidebar);

    /* @ngInject */
    function Sidebar($state, site, $scope, $rootScope, $window, clientData, user, $mdDialog) {
        var vm = this;
        vm.logout = logout;
        vm.sync = sync;
        vm.goToHome = goToHome;
        vm.change = change;
        vm.showPrivacy = showPrivacy;
        vm.showTerms = showTerms;
        vm.showDisclaimer = showDisclaimer;
        vm.role = user.role();
        vm.showSelectUser = true;
        vm.activeNavName = $state.current.name;
        vm.currentLogo;
        vm.clients = {
            selected: clientData.getCurrentClient(),
            all: clientData.getAllClients()
        };

        vm.showMoodQuest = false;
        vm.showSurvey = true;

        setMoodQuestState();
        setSurveyState();

        function setSurveyState(){
            if(user.role().isQA() || user.role().isSA()){
                if(clientData.getCurrentClient().id && clientData.getCurrentClientData().settings){
                    vm.showSurvey = clientData.getCurrentClientData().settings.show_survey;
                }
            }
        }

        function setMoodQuestState(){
            if(clientData.getCurrentClient().id && clientData.getCurrentClientData().settings){
                vm.showMoodQuest = (clientData.getCurrentClientData().settings.show_mood === 0);
            }
        }

        function showPrivacy() {
            if (user.getUserSettings() && user.getUserSettings().privacy) {
                window.open(user.getUserSettings().privacy, '_blank');
            }
        }

        function showTerms() {
            if (user.getUserSettings() && user.getUserSettings().terms) {
                window.open(user.getUserSettings().terms, '_blank');
            }
        }

        function showDisclaimer() {
            if (user.getUserSettings() && user.getUserSettings().disclaimer) {
                $mdDialog.show({
                    templateUrl: 'components/modals/disclaimer.html',
                    parent: angular.element(document.body),
                    clickOutsideToClose: true,
                    controller: function () {
                        var vm = this;
                        vm.disclaimer_text = user.getUserSettings().disclaimer || 'Empty';
                        vm.close = function () {
                            $mdDialog.hide();
                        };
                    },
                    controllerAs: 'vm',
                    resolve: {}
                }).then(function (res) {
                });
            }
        }

        setLogo();

        function setLogo() {
            if (clientData.getCurrentClientData() && clientData.getCurrentClientData().settings) {
                vm.currentLogo = clientData.getCurrentClientData().settings.logo;
            } else {
                if (user.getUserSettings() && user.getUserSettings().logo) {
                    vm.currentLogo = user.getUserSettings().logo;
                }
            }
        }

        $scope.$on('logo-change', function (event, data) {
            setLogo();
        });

        $scope.$on('client-settings-updated',function (event, data) {
            setMoodQuestState();
            setSurveyState();
        });

        $rootScope.$on('$stateChangeSuccess',
            function (event, toState, toParams, fromState, fromParams) {
                vm.activeNavName = toState.name;
            }
        );

        function change(data) {
            clientData.changeClient(data);
        }

        $scope.$on('client-change', function (event, data) {
            vm.clients = {
                selected: clientData.getCurrentClient(),
                all: clientData.getAllClients()
            };
            setLogo();
            setMoodQuestState();
            setSurveyState();
        });

        function goToHome() {
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

        function sync() {
            $window.location.reload();
        }

        function logout() {
            site.logout();
        }

        //todo need refactoring
        vm.goToSurvey = goToSurvey;
        function goToSurvey() {
            $state.go('app.mobile-app-survey');
        }

        vm.config = {
            autoHideScrollbar: false,
            theme: 'light',
            advanced:{
                updateOnContentResize: true
            },
            scrollButtons:{ enable: false },
            scrollInertia: 0
        };

    }
})();