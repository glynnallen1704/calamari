angular.
module('teamDetail').
component('teamDetail', {
  templateUrl: 'components/team-detail/team-detail.template.html',
  controller: ['$routeParams', 'Team',
    function TeamDetailController($routeParams, Team) {

      var self = this;

      self.team = Team.show({teamId: $routeParams.teamId}, function(team) {

      });
    }
  ]
});
