'use strict';

var products = [
	{title:"Product 1", description:"Some Product1 Descrtiption"},
	{title:"Product 2", description:"Some Product2 Descrtiption"},
	{title:"Product 3", description:"Some Product3 Descrtiption"}
];

angular.module('products')
		.controller('ProductController', ['$scope','productService',function ($scope,productService) {
			$scope.products = productService.products;
		}]);