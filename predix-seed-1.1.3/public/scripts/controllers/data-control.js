define(['angular', 'sample-module'], function (angular, sampleModule) {
    'use strict';
    return sampleModule.controller('DataControlCtrl', ['$scope', function ($scope) {

        $scope.context = {
            name: 'This is context',
            // using api from weather underground: http://www.wunderground.com/
            alarmsurl: 'http://predix-alarmservice-nagarajugodishala.run.aws-usw02-pr.ice.predix.io/alarmservice',
            hospitalurl: 'http://predix-alarmservice-nagarajugodishala.run.aws-usw02-pr.ice.predix.io/hospital'
        };

    }]);
});
