/**
 * Created by glynnallen on 2016/07/05.
 */
angular.module('core.resource').
factory('Resource', ['$resource',
  function($resource) {
    var urlBase = "https://squid-1704.herokuapp.com/";
    return $resource(urlBase+'resource/:resourceId', {}, {
      query: {
        method: 'GET',
        isArray: true,
        params: {resourceId:this.id}
      },
      create: {
        method: 'POST',
        isArray: false
      },
      save: {
          method: 'PUT',
          isArray: false
      },
      remove: {
          method: 'DELETE',
          isArray: false
      }
    }
    )
  }
]);
