angular.
module('resourceEdit').
component('resourceEdit', {
  templateUrl: 'components/resource-edit/resource-edit.template.html',
  controller: ['$routeParams', 'Resource',
    function ResourceEditController($routeParams,Resource,$location) {

      this.resource = Resource.show({resourceId: $routeParams.resourceId},function(resource) {
      });


      this.saveChanges = function saveChanges() {
        Resource.saveResource({resourceId: $routeParams.resourceId}, this.resource,$location);


      };



    }
  ]
});
