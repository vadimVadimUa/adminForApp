;(function () {
    'use strict';

    angular.module('service.textSvc', []).service('textSvc', textSvc);

        /* @ngInject */
    function textSvc() {
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
            return http.post(url.static.text, data)
        }

        function getShare(){
            return 'lakjdfhlakjsdfhlkajcdshflknacsjcfkdshnlcfkjsdhnlcfkjadshnkcfjasdhnlfcjhn'
            // return http.get(url.static.share).then(function (res) {
            //     if(res){
            //         return share(res.description)
            //     }
            // });
        }

        function getPrivacy(){
            // return http.get(url.static.privacy);
        }

        function getAbout(){
            // return http.get(url.static.about);
        }

        function getTerms(){
            // return http.get(url.static.terms);
        }

        function getStartPage(){
            // return http.get(url.static.start_page);
        }
    }
})();