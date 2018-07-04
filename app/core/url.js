;(function () {
    angular
        .module('factory.url', [])
        .factory('url', [,
            function () {
                var baseUrl = 'https://www.improvewell.uk/dashboard/api/api/v1/';

                return {
                    push: {
                        test: baseUrl + 'test'
                    }
                };
            }
        ]);
})();
