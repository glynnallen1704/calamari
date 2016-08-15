angular.
module('resourceDetail').
component('resourceDetail', {
  templateUrl: 'components/resource-detail/resource-detail.template.html',
  controller: ['$routeParams', 'Resource',
    function ResourceDetailController($routeParams, Resource) {
      this.resource = Resource.fetchResource({resourceId: $routeParams.resourceId});
    }
  ]
});
