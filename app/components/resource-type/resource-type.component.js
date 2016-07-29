'use strict';
/**
 * Created by glynnallen on 2016/07/07.
 */
angular.
module('resourceType').
component('resourceType', {
  templateUrl: 'components/resource-type/resource-type.template.html',
  controller: function ResourceTypeController(Resource) {
    var perm = 0;
    var contractors = 0;
    var turnkey = 0;
    this.resources = Resource.query();

    this.resources.$promise.then(
      function(employees) {

        for (var i = 0; i < employees.length; i++) {
          if (employees[i].employeeType == 'turnkey'){
            turnkey+=1;
          }
          if (employees[i].employeeType == 'perm'){
            perm+=1;
          }
          if (employees[i].employeeType == 'contractor'){
            contractors+=1;
          }
        }
        Morris.Donut({
          element: 'resource-type-donut',
          data: [{
            label: "Perm",
            value: perm
          }, {
            label: "Contractor",
            value: contractors
          }, {
            label: "Turnkey",
            value: turnkey
          }],
          resize: true
        });
      },
      function(errorPayload) {
        $log.error('failure loading resource', errorPayload);
      }
    );


  }

});
