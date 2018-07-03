;(function () {
    'use strict';
    angular
        .module('factory.request', [])
        .factory('http', http);

    /* @ngInject */
    function http($http, $q, $sessionStorage, toastr, $localStorage, $state, messagesNotice) {
        var request = function (method, url, data, extras) {
            var config = {
                dataType: 'json',
                method: method,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json; charset=UTF-8'
                }
            };

            if (method === 'GET') {
                config.params = data;
                if (data && data.responseType) {
                    config.responseType = data.responseType;
                }
            } else {
                config.data = data;
                if (extras && extras.parameters) {
                    config.params = extras.parameters;
                }
            }

            if ($sessionStorage.auth_key) {
                config.url = url + '?auth_key=' + $sessionStorage.auth_key;
            } else {
                config.url = url;
            }

            return $http(config).then(
                function (response) {
                    var defer = $q.defer();
                    if (response.data.error) {
                        if(!extras || typeof extras.show_error === 'undefined' || extras.show_error === true){
                            toastr.error(response.data.error);
                        }
                        defer.reject(response.data);
                    } else {
                        defer.resolve(response.data);
                    }
                    // console.log('result from server', response);
                    return defer.promise;
                },
                function (response) {
                    console.info('error', config.headers);
                    console.info('error', url, response);
                    var defer = $q.defer();
                    if (response.data && typeof response.data.status !== 'undefined') {
                        if (response.data.status === 401) {
                            delete $sessionStorage.auth_key;
                            delete $localStorage.auth_key;
                            $state.go('login');
                            toastr.error(messagesNotice.error.access);
                            defer.reject(response.data);
                            return;
                        }
                    }
                    if (response.status === 200) {
                        toastr.error(messagesNotice.error.serverError + response.data);
                        defer.reject(response.data);
                    } else if (response.status === -1) {
                        toastr.error(messagesNotice.error.notInternetConnection);
                        defer.reject(response.data);
                    } else if (response.status === 500) {
                        toastr.error(messagesNotice.error.serverError + response.status + ' ' + response.data.message);
                        defer.reject(response.data);
                    } else if (response.status === 403) {
                        toastr.error(messagesNotice.error.serverAccessDenied);
                        defer.reject(response.data);
                    } else if (response.status === 400) {
                        toastr.error(response.data.message);
                        defer.reject(response.data);
                    } else {
                        toastr.error(messagesNotice.error.serverError + response.status + ' ' + response.statusText);
                        defer.reject(response.data);
                    }
                    defer.reject(response.data);
                    return defer.promise;
                }
            );
        };

        var requestFile = function (url, data) {
            var config = {
                transformRequest: angular.identity,
                headers: {
                    'Content-Type': undefined
                }
            };

            if ($sessionStorage.auth_key) {
                url = url + '?auth_key=' + $sessionStorage.auth_key;
            }

            return $http.post(url, data, config)
                .then(
                    function (response) {
                        var defer = $q.defer();
                        console.info('response', url, response);
                        if (response.data.error) {
                            toastr.error(response.data.error);
                            defer.reject(response.data.error);
                        }
                        defer.resolve(response.data);
                        return defer.promise;
                    },
                    function (response) {
                        var defer = $q.defer();
                        console.info('error', url, response);

                        if (response.status === 200) {
                            toastr.error(messagesNotice.error.serverError + response.data);
                            defer.reject(response.data);
                        }
                        else if (response.status === -1) {
                            toastr.error(messagesNotice.error.serverUnavailable);
                            defer.reject(response.data);
                        }
                        else if (response.status === 500) {
                            toastr.error(messagesNotice.error.serverError + response.status + ' ' + response.data.message);
                            defer.reject(response.data);
                        }
                        else if (response.status === 403) {
                            toastr.error(messagesNotice.error.serverAccessDenied);
                            defer.reject(response.data);
                        }
                        else {
                            toastr.error(messagesNotice.error.serverError + response.status + ' ' + response.statusText);
                            defer.reject(response.data);
                        }
                        defer.reject(response.data);
                        return defer.promise;
                    }
                );
        };


        return {
            get: function (url, data) {
                return request('GET', url, data);
            },
            post: function (url, data, extras) {
                return request('POST', url, data, extras);
            },
            delete: function (url, data) {
                return request('DELETE', url, data);
            },
            put: function (url, data) {
                return request('PUT', url, data);
            },
            file: function (url, data) {
                return requestFile(url, data);
            }
        };
    }

})();
