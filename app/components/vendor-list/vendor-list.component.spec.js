/**
 * Created by glynnallen on 2016/07/07.
 */
describe('vendorList', function() {

  // Load the module that contains the `customerList` component before each test
  beforeEach(module('evergreenApp'));

  // Test the controller
  describe('VendorListController', function() {

    it('should create a `customer` model with 3 customers', inject(function($componentController) {
      var ctrl = $componentController('vendorList');

      expect(ctrl.customers.length).toBe(3);
    }));
  });

});
