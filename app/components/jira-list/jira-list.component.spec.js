/**
 * Created by glynnallen on 2016/07/07.
 */
describe('resourceType', function() {

  // Load the module that contains the `customerList` component before each test
  beforeEach(module('calamariApp'));

  // Test the controller
  describe('JiraListController', function() {

    it('should return a `issue` model with total of 0', inject(function($componentController) {
      var ctrl = $componentController('jiraList');

      expect(ctrl.jira.total).toBe(0);
    }));
  });

});
