angular.
module('resourceDetail').
component('resourceDetail', {
  templateUrl: 'components/resource-detail/resource-detail.template.html',
  controller: ['$routeParams', 'Resource',
    function ResourceDetailController($routeParams, Resource) {

      var self = this;

      self.resource = Resource.show({resourceId: $routeParams.resourceId}, function(resource) {

      });
    }
  ]
});
