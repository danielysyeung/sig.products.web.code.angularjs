'use strict';

angular.module('App.product', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {  
  $routeProvider.when('/', {
    templateUrl: 'product.html',
    controller: 'ProductCtrl'
  });
}])

.controller('ProductCtrl', [function() {
}]);