/**
 * Created by glynnallen on 2016/07/07.
 */
describe('resourceAdd', function() {

  // Load the module that contains the `customerList` component before each test
  beforeEach(module('calamariApp'));

  // Test the controller
  describe('ResourceAddController', function() {

    it('should create a `resource` model with 3 resources', inject(function($componentController) {
      var ctrl = $componentController('resourceAdd');

      expect(ctrl.resources.length).toBe(3);
    }));
  });

});
