(function () {
    'use strict';

    function demoController($scope) {

        console.log('Running demo controller...');
        $scope.hello = 'Hello World';

    }

     angular.module('demo', []).controller('demoController', demoController);
})();
