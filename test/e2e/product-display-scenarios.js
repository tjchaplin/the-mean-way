'use strict';

describe('Given we are displaying products', function() {

    browser.get('products.html');

    describe('When displaying a products detail', function() {
        it('Should have products', function() {
          var products = element.all(by.repeater('product in products'));
          expect(products.count()).toBeGreaterThan(0);
        });
    });
});