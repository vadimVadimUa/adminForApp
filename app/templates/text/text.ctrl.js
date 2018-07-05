;(function () {
    angular
        .module('app')
        .controller('TextCtrl', TextCtrl);


    /* @ngInject */
    function TextCtrl(textSvc) {
        var vm = this;
        vm.update = update;
        vm.share = textSvc.getShare();

        function update(data) {
            textSvc.updateText(data);
        }
    }
})();