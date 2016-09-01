angular.
module('teamEdit').
component('teamEdit', {
  templateUrl: 'components/team-edit/team-edit.template.html',
  controller: ['$routeParams', 'Team',
    function TeamEditController($routeParams,Team,$location) {
      this.team = Team.show({teamId: $routeParams.teamId},function(team) {
      });
      this.saveChanges = function saveChanges() {
        Team.saveChanges({teamId: $routeParams.teamId}, this.team,$location)
      };
    }
  ]
});
