'use strict';

describe("Given we are using the products module",function(){
	it("Should be able to init",function(){
		var products = angular.module('products');
		expect(products).not.toBeNull();
	});
});