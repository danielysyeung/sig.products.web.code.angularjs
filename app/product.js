angular.module('Product', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {  
  $routeProvider.when('/', {
    templateUrl: './app/product.html',
    controller: 'ProductCtrl'
  });
}])

.controller('ProductCtrl', ['$scope', '$http',  function($scope, $http) {

  $scope.productsApiUrlNodejs = 'http://localhost:8081/products'; // URL to Products API (Nodejs)
  $scope.productsApiAboutUrlNodejs = 'http://localhost:8081/products/service/about';  // URL to About Products API (Nodejs)

  $scope.productsApiUrlJava = 'http://localhost:8080/products'; // URL to Products API (Java)
  $scope.productsApiAboutUrlJava= 'http://localhost:8080/products/service/about';  // URL to About Products API (Java)

  $scope.serviceProvider = 'N';
  $scope.productList = null;
  $scope.product = null;
  $scope.selectedProduct = null;
  $scope.errorMessage = null;
  $scope.aboutUi = null;
  $scope.aboutService = null;

  $scope.init = function() {
    $scope.errorMessage = null;
    $scope.product = null;
    $scope.selectedProduct = null;
    $scope.aboutProductsApi();
    $scope.getAllProducts();
  }

  // Internal functions
  
  $scope.getAllProducts = function() {
    // REST call
    $http.get($scope.getProductsApiUrl())
      .then(function(response) {
        $scope.productList = response.data;
      }, function(response) {        
        $scope.handleError(response);
      });
  }
  
  $scope.getOneProduct = function(sku) {
    // REST call
    $http.get($scope.getProductsApiUrl() + '/' + sku)
      .then(function(response) {
        $scope.productList = response.data;
      }, function(response) {
        $scope.handleError(response);
      });
  }

  $scope.createOneProduct = function(product) {
    // REST call
    var config = { headers: { 'Content-Type': 'application/json' } };
    $http.post($scope.getProductsApiUrl(), product, config)
      .then(function(response) {   
        $scope.getAllProducts();     
      }, function(response) {
        $scope.handleError(response);
      });
  }

  $scope.updateOneProduct = function(sku, product) {
    // REST call
    var config = { headers: { 'Content-Type': 'application/json' } };
    $http.put($scope.getProductsApiUrl() + '/' + sku, product, config)
      .then(function(response) {        
        $scope.getAllProducts();
      }, function(response) {
        $scope.handleError(response);
      });
  }

  $scope.deleteOneProduct = function(sku) {
    // REST call
    $http.delete($scope.getProductsApiUrl() + '/' + sku)
      .then(function(response) {
        $scope.getAllProducts();
      }, function(response) {
        $scope.handleError(response);
      });
  }

  $scope.aboutProductsApi = function() {
    $scope.aboutUi = '{"Name":"ProductsUI","Version":"0.1","Framework":"AngularJS"}';
    // REST call
    $http.get($scope.getProductsApiAboutUrl())
      .then(function(response) {
        $scope.aboutService = JSON.stringify(response.data);
      }, function(response) {
        $scope.handleError(response);
      });
  }

  // Functions for view

  $scope.select = function(p) {
    $scope.errorMessage = null;
    $scope.selectedProduct = p;
  }

  $scope.refresh = function() {
    $scope.errorMessage = null;
    $scope.selectedProduct = null;
    $scope.getAllProducts();
  }

  $scope.add = function(sku, name, description) {
    $scope.errorMessage = null;
    $scope.selectedProduct = null;
    $scope.createOneProduct({ 'sku': sku, 'name': name, 'description': description, 'lastUpdatedTimestamp': null });
  }

  $scope.update = function(p) {
    $scope.errorMessage = null;
    $scope.updateOneProduct(p.sku, p);
  }

  $scope.delete = function(p) { 
    $scope.errorMessage = null;
    $scope.selectedProduct = null;
    $scope.deleteOneProduct(p.sku);
  }

  $scope.handleError = function(response) {
    $scope.errorMessage = response.status ? (response.status + ': ' + response.statusText) : 'Server Error';
    console.error($scope.errorMessage);
  }

  $scope.setServiceProvider = function() {
    $scope.init();
  }

  $scope.getProductsApiUrl = function() {
    if ($scope.serviceProvider == 'J') {
      return $scope.productsApiUrlJava;
    } 

    // Default serviceProvider is Node.js.
    return $scope.productsApiUrlNodejs;
  }

  $scope.getProductsApiAboutUrl = function() {
    if ($scope.serviceProvider == 'J') {
      return $scope.productsApiAboutUrlJava;
    } 

    // Default serviceProvider is Node.js.
    return $scope.productsApiAboutUrlNodejs;
  }

  $scope.init();
  
}]);


