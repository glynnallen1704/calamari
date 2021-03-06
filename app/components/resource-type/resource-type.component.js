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
    var vacancy = 0;
    var turnkey = 0;
    var capacity = 0;
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
          if (employees[i].employeeType == 'vacancy'){
            vacancy+=1;
          }
          if (employees[i].employeeType == 'capacity'){
            capacity+=1;
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
          },
            {
              label: "Vacancy",
              value: vacancy
            },
            {
              label: "Capacity",
              value: capacity
            }],
          resize: true,
          formatter: function (value, data) {
              console.log(value);
              console.log(data);
              var total = employees.length;
              return Math.round(value/178 *100) + '%';
          }
        });
      },
      function(errorPayload) {
        $log.error('failure loading resource', errorPayload);
      }
    );


  }

});
