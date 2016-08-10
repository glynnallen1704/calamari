'use strict';
/**
 * Created by glynnallen on 2016/07/07.
 */
angular.
module('featureteamChart').
component('featureteamChart', {
  templateUrl: 'components/featureteam-chart/featureteam-chart.template.html',
  controller: function FeatureteamChartController(Team) {

    this.team = Team.query();

    this.team.$promise.then(
      function(teams) {
        var myArray = [];
        for (var i = 0; i < teams.length; i++) {
          console.log(i);

          var totalCapacity = 0;

          for (var l = 0; l < teams[i].members.length; l++) {
            if (teams[i].members[l].employeeType == 'vacancy') {
              totalCapacity += 1;
            }
          }

          console.log(totalCapacity+' for '+ teams[i].productOwner);

          var myDataElement = {
            y: teams[i].name,
            a: teams[i].members.length,
            b: totalCapacity
          };

          myArray.push(myDataElement);
        }
        console.log(myArray);
        Morris.Bar({
          element: 'featureteam-chart-bar',
          data: myArray,
          xkey: 'y',
          ykeys: ['a', 'b'],
          labels: ['Resources', 'Vacancy'],
          stacked:true,
          resize:true,
          gridTextSize: 10
        });
      },
      function(errorPayload) {
        $log.error('failure loading resource', errorPayload);
      }
    );


  }

});
