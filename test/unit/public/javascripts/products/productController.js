'use strict';

describe('Given we are using the products controller',function(){
	
	beforeEach(function(){
		module('products');
	});

	describe('When accessing products from scope',function(){

		var scope = null;
		var ProductController = null;

		//Use Angular-Mocks to inject in controller and root scope
		beforeEach(inject(function ($controller, $rootScope) {
			
			//Create a new scope for this test
			scope = $rootScope.$new();

			//initialize the controller with the new scope
			ProductController = $controller('ProductController', {
				$scope: scope
			});
		}));
	
		it("Should be able to get products",function(){
			expect(scope.products).not.toBeNull();
		});
	});
});