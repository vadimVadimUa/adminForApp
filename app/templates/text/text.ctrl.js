;(function () {
    angular
        .module('app')
        .controller('TextCtrl', TextCtrl);


    /* @ngInject */
    function TextCtrl(textSvc, toastr, messagesSvc) {
        var vm = this;
        vm.update = update;
        vm.goAbout = goAbout;
        vm.goShare = goShare;
        vm.goStartPage = goStartPage;
        vm.goPrivacy = goPrivacy;
        vm.goTermsOfUse = goTermsOfUse;
        vm.share = textSvc.getShare();

        goAbout();

        function goAbout() {
            textSvc.getAbout().then(function (res) {
                if(res){
                    vm.about = res;
                }
            });
        }

        function goShare() {
            textSvc.getShare().then(function (res) {
                if(res){
                    vm.share = res;
                }
            });
        }
        function goStartPage() {
            textSvc.getStartPage().then(function (res) {
                if(res){
                    vm.start_page = res;
                }
            });
        }
        function goPrivacy() {
            textSvc.getPrivacy().then(function (res) {
                if(res){
                    vm.privacy = res;
                }
            });
        }
        function goTermsOfUse() {
            textSvc.getTerms().then(function (res) {
                if(res){
                    vm.terms = res;
                }
            });
        }

        function update(data) {
            if (data && data.description === ""){
                toastr.error(messagesSvc.error.emptyField);
                return
            }
            var text_update = {
                name: data.name,
                description: data.description
            };
            textSvc.updateText(text_update).then(function (data) {
                if(data.success){
                    toastr.success(data.message);
                } else {
                    toastr.error(data.message);
                }
            });
        }
    }
})();