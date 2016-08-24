'use strict';
/**
 * Created by glynnallen on 2016/07/07.
 */
angular.
module('genderChart').
component('genderChart', {
  templateUrl: 'components/gender-chart/gender-chart.template.html',
  controller: function GenderChartController(Resources) {
    var male = 0;
    var female = 0;

    this.resources = Resources.query();

    this.resources.$promise.then(
      function(employees) {

        for (var i = 0; i < employees.length; i++) {
          if (employees[i].gender == 'male'){
            male+=1;
          }
          if (employees[i].gender == 'female'){
            female+=1;
          }
        }
        Morris.Donut({
          element: 'gender-chart-donut',
          data: [{
            label: "Male",
            value: male
          },
          {
            label: "Female",
            value: female
          }],
          resize: true,
          formatter: function (value, data) {
              console.log(value);
              console.log(data);
              var total = employees.length;
              return Math.round(value/total *100) + '%';
          }
        });
      },
      function(errorPayload) {
        $log.error('failure loading resource', errorPayload);
      }
    );


  }

});
