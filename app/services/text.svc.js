;(function () {
    'use strict';

    angular.module('service.textSvc', []).service('textSvc', textSvc);

        /* @ngInject */
    function textSvc(url, http) {
        var model = {
            getShare: getShare,
            getPrivacy: getPrivacy,
            getAbout: getAbout,
            getTerms: getTerms,
            getStartPage: getStartPage,
            updateText: updateText
        };
        return model;

        function updateText(data) {
            return http.put(url.static.text, data)
        }

        function getAbout(){
            return http.get(url.static.about);
        }

        function getShare(){
            return http.get(url.static.share)
        }

        function getStartPage(){
            return http.get(url.static.start_page);
        }

        function getPrivacy(){
            return http.get(url.static.privacy);
        }

        function getTerms(){
            return http.get(url.static.terms);
        }
    }
})();