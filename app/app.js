'use strict';

// Declare app level module which depends on views and components
angular.module('App', [
  'ngRoute',
  'App.product'
])

.config(['$locationProvider', function($locationProvider) {
  $locationProvider.html5Mode(true);
}]);
