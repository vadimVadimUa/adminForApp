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
                        login: baseUrl + 'admin/login'
                    },
                    static : {
                        share: baseUrl + 'static/sharing',
                        start_page: baseUrl + 'static/start',
                        privacy: baseUrl + 'static/privacy',
                        about: baseUrl + 'static/about',
                        terms: baseUrl + 'static/terms',
                        text: baseUrl + 'static/text/1'
                    }
                };
            }
        ]);
})();
