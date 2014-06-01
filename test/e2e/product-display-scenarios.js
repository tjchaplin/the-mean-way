'use strict';

describe('Given we are displaying products', function() {

    browser.get('products.html');

    describe('When displaying a products detail', function() {

        it('should be able to get product title', function() {
            var productTitle = element(by.repeater('product in products').row(0).column('{{product.name}}'));
            expect(productTitle).not.toBeNull();
        });

        it('should be able to get product description', function() {
            var productDescription = element(by.repeater('product in products').row(0).column('{{product.description}}'));
            expect(productDescription).not.toBeNull();
        });
    });
});