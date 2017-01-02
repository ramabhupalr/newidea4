(function() {
'use strict';

    angular
        .module('app', [])
        .controller('homeController', homeController);

    homeController.inject = ['$log'];
    function homeController($log) {
        var vm = this;
        vm.title = "Hello Angular!!";

        activate();

        ////////////////

        function activate() { }
    }
})();