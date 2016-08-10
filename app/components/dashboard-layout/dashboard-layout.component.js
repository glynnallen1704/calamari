'use strict';
/**
 * Created by glynnallen on 2016/07/07.
 */
angular.
module('dashboardLayout').
component('dashboardLayout', {
  templateUrl: 'components/dashboard-layout/dashboard-layout.template.html',
  controller:
    function DashboardController(Resource) {
      this.resources = Resource.query();
    }
});
