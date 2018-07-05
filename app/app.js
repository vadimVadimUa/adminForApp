;(function () {
    angular.module('app',
        ['app.core',
            'app.directives',
            'app.factory',
            'app.services',
            'app.filters'
        ]).run(runBlock);

    /* @ngInject */
    function runBlock($timeout, authSvc) {
        $timeout(function(){
            authSvc.processAutoLogin();
        });
    }
})
();