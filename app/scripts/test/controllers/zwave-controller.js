'use strict';

angular.module('jarvisTest')

  .controller('ZwaveController', function($scope, zwaveSocketFactory){
    // Do something...
    console.log('zwave controller');
    $scope.test = "test";
  });