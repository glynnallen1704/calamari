/**
 * Created by glynnallen on 2016/07/07.
 */
describe('resourceType', function() {

  // Load the module that contains the `customerList` component before each test
  beforeEach(module('evergreenApp'));

  // Test the controller
  describe('ResourceTypeController', function() {

    it('should return a `resource` model with 3 firstname of length 5', inject(function($componentController) {
      var ctrl = $componentController('resourceType');

      expect(ctrl.resource.type).toBe('perm');
    }));
  });

});
