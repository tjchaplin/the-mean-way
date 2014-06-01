'use strict';

angular.module('products')
		.controller('ProductController', ['$scope','productService',function ($scope,productService) {
			$scope.products = productService.products;
		}]);