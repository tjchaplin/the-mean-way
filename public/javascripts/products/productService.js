'use strict';

angular.module('products')
	.service('productService',function productService() {
		var serivce = {
			products : [
				{title:"Product 1", description:"Some Product1 Descrtiption"},
				{title:"Product 2", description:"Some Product2 Descrtiption"},
				{title:"Product 3", description:"Some Product3 Descrtiption"}
			]
		};
		return serivce;
	});
