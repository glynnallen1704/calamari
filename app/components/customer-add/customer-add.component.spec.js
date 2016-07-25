/**
 * Created by glynnallen on 2016/07/07.
 */
describe('customerAdd', function() {

  // Load the module that contains the `customerList` component before each test
  beforeEach(module('calamariApp'));

  // Test the controller
  describe('CustomerAddController', function() {

    it('should create a `customer` model with 3 customers', inject(function($componentController) {
      var ctrl = $componentController('customerAdd');

      expect(ctrl.customers.length).toBe(3);
    }));
  });

});
