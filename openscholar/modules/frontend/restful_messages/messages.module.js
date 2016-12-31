(function () {
  var m = angular.module('Messages', ['ngStorage']);

  m.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('messageFetcher')
  }]);

  m.factory('messageFetcher', ['$sessionStorage', function ($ss) {
    var messageFetcher = {
      response: function (response) {
        if (response.data && response.data.messages) {
          $ss.messages = response.data.messages;
        }
        return response;
      }
    }

    return messageFetcher;
  }]);

  m.controller('messageController', ['$scope', '$sessionStorage', function ($s, $ss) {
    $s.messages = $ss.messages;
    this.close = function () {
      delete $s.messages;
    }
  }]);
})()