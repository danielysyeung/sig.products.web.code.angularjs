'use strict';

angular.module('App.product', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {  
  $routeProvider.when('/', {
    templateUrl: './app/product.html',
    controller: 'ProductCtrl'
  });
}])

.controller('ProductCtrl', [function() {
}]);