;(function () {
    angular.module('directive.sidebar', [])
        .directive('sidebar', sidebar);

    /* @ngInject */
    function sidebar() {
        return {
            restrict: 'E',
            templateUrl: "directives/sidebar/sidebar.html",
            scope: {},
            controller: 'Sidebar',
            controllerAs: 'vm',
        };
    }
})();