'use strict';


angular.module('jarvisApp', [
  'ui.router',
  'jarvisTest'
])
// .config(function($stateProvider){
//     console.log('app config');
//   $stateProvider
//     .state('root', {
//       // url: '/root',
//       abstract: true,
//       views: {
//         'jarvisTest': {
//           templateUrl: 'views/test/index.html',
//           controller: 'ZwaveController'
//         }
//       }
//     })
// })
;


angular.bootstrap(document.body, ['jarvisApp']);