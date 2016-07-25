'use strict';
/**
 * Created by glynnallen on 2016/07/07.
 */
angular.
module('resourceType').
component('resourceType', {
  templateUrl: 'components/resource-type/resource-type.template.html',
  controller: function ResourceTypeController(Resource) {
    this.resources = Resource.query();
    var perm = 0;
    var contractors = 0;
    var turnkey = 0;
    for (var item in this.resources) {
      console.log(item);
      console.log('DID I EVER GET HERE!!!');
      if (item.employeeType == 'perm'){
        perm=perm+1;
      }
      if (item.employeeType == 'contractor'){
        contractors=contractors+1;
      }
      if (item.employeeType == 'turnkey'){
        turnkey=turnkey+1;
      }
    }
    Morris.Donut({
        element: 'resource-type-donut',
        data: [{
          label: "Perm",
          value: 16
        }, {
          label: "Contractor",
          value: 16
        }, {
          label: "Turnkey",
          value: 142
        }],
        resize: true
      });
    }
});
