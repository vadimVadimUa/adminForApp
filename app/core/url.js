;(function () {
    angular
        .module('factory.url', [])
        .factory('url', [
            function () {
                var baseUrl = 'http://denta.grassbusinesslabs.tk/api/';

                return {
                    push: {
                        test: baseUrl + 'test'
                    },
                    admin: {
                        login: baseUrl + 'admin/login`'
                    }
                };
            }
        ]);
})();
