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
        var chartArray = [];
        for (var i = 0; i < teams.length; i++) {
          var totalCapacity = 0;

          //Calculate the total vacancies per team
          for (var l = 0; l < teams[i].members.length; l++) {
            if (teams[i].members[l].employeeType == 'vacancy') {
              totalCapacity += 1;
            }
          }

          var chartObject = {
            name: teams[i].name,
            totalMembers: teams[i].members.length,
            vacancyCount: totalCapacity
          };

          chartArray.push(chartObject);
        }

        Morris.Bar({
          element: 'featureteam-chart-bar',
          data: chartArray,
          xkey: 'name',
          ykeys: ['totalMembers', 'vacancyCount'],
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
