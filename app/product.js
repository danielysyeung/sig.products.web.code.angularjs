'use strict';

angular.module('App.product', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {  
  $routeProvider.when('/', {
    templateUrl: './app/product.html',
    controller: 'ProductCtrl'
  });
}])

.controller('ProductCtrl', ['$scope', function($scope) {
  $scope.productList = [
    { 'sku': 'S10001', 'name': 'N10001', 'description': 'D10001', 'lastUpdatedTimestamp': '2016-10-17T01:30:00.050Z' },
    { 'sku': 'S10002', 'name': 'N10002', 'description': 'D10002', 'lastUpdatedTimestamp': '2016-10-18T01:30:00.050Z' },
    { 'sku': 'S10003', 'name': 'N10003', 'description': 'D10003', 'lastUpdatedTimestamp': '2016-10-19T01:30:00.050Z' }
  ];
  $scope.product = { 'sku': 'S10001', 'name': 'N10001', 'description': 'D10001', 'lastUpdatedTimestamp': '2016-10-17T01:30:00.050Z' };
  $scope.errorMessage = 'Hello!';
  $scope.aboutUi = { 'Name': 'ProductsUI', 'Version': '0.1', 'Framework': 'AngularJS' };
  $scope.aboutService = { 'Name': 'ProductsService', 'Version': '0.1', 'Framework': 'Static' };

  // Internal functions
  
  $scope.getAllProducts = function() {
    console.log('.getAllProducts()');
    // REST call
  }
  
  $scope.getOneProduct = function(sku) {
    console.log('.getOneProduct()');
    // REST call
  }

  $scope.createOneProduct = function(product) {
    console.log('.createOneProduct()');
    // REST call
  }

  $scope.updateOneProduct = function(sku, product) {
    console.log('.updateOneProduct()');
    // REST call
  }

  $scope.deleteOneProduct = function(sku) {
    console.log('.deleteOneProduct()');
    // REST call
  }

  $scope.aboutProductsApi = function() {
    this.aboutUi = '{"Name":"ProductsUI","Version":"0.1","Framework":"AngularJS"}';
    console.log('.aboutProductsApi()');
    // REST call
  }

  // Functions for view

  $scope.select = function(p) {
    console.log('.select()');
    this.errorMessage = null;
    this.product = p;
  }

  $scope.refresh = function() {
    console.log('.refresh()');
    this.errorMessage = null;
    this.product = null;
    this.getAllProducts();
  }

  $scope.add = function(sku, name, description) {
    console.log('.add()');
    this.errorMessage = null;
    this.product = null;
    this.createOneProduct({ 'sku': sku, 'name': name, 'description': description, 'lastUpdatedTimestamp': null });
  }

  $scope.update = function(p) {
    console.log('.update()');
    this.errorMessage = null;
    this.updateOneProduct(p.sku, p);
  }

  $scope.delete = function(p) { 
    console.log('.delete()');
    this.errorMessage = null;
    this.product = null;
    this.deleteOneProduct(p.sku);
  }


}]);


