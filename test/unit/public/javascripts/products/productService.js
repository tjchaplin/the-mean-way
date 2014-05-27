'use strict';

describe('Given we are using the product service',function(){
	
	beforeEach(function(){
		module('products')
	});

	var scope;
	var productService;

	beforeEach(inject(function ($rootScope,_productService_) {
		productService = _productService_;
		scope = $rootScope;
	}));

	it('should be able to retrieve products',function(){
		var products = productService.products;
		expect(products).not.toBeNull();
	});
});