'use strict';

describe('Given we are displaying products', function() {

    browser.get('products.html');

    describe('When displaying a products detail', function() {
        it('should have 3 products', function() {
          var elems = element.all(by.repeater('product in products'));
          expect(elems.count()).toBe(3);
        });

        it('should load the home page', function() {
            var ptor = protractor.getInstance();
            var ele = by.id('tp');
            expect(ptor.isElementPresent(ele)).toBe(true);
        });

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