/**
 * Created by glynnallen on 2016/07/07.
 */
describe('customerList', function() {

  // Load the module that contains the `customerList` component before each test
  beforeEach(module('evergreenApp'));

  // Test the controller
  describe('CustomerListController', function() {

    it('should create a `customer` model with 3 customers', inject(function($componentController) {
      var ctrl = $componentController('customerList');

      expect(ctrl.customers.length).toBe(3);
    }));
  });

});
