angular.module('App', ['ngRoute', 'Product'])

.config(['$locationProvider', function($locationProvider) {
  $locationProvider.html5Mode(true);
}]);
