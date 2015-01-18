'use strict';

angular.module('jarvisTest')

.config(function($stateProvider){
  console.log('config test');
  $stateProvider

  .state('test.zwave', {
     url: '',
     views: {
       'list': {
         templateUrl: 'views/test/index.html',
         controller: 'ZwaveController'
       }
     }
  })
})

;