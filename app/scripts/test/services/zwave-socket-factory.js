'use strict';

angular.module('jarvisTest')

  .factory('zwaveSocketFactory', function(socketFactory){
    
    console.log('zwave factory');
    var myIoSocket = io.connect('ws://192.168.1.100:8083');

    mySocket = socketFactory({
      ioSocket: myIoSocket
    });

    return mySocket;

  })

;