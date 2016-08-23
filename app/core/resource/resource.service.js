/**
 * Created by glynnallen on 2016/07/05.
 */
angular.module('core.resource').
factory('Resources', ['$resource',
  function($resource) {
    var urlBase = "https://squid-1704.herokuapp.com/";
    return $resource(urlBase+'resource', {}, {
      query: {
        method: 'GET',
        isArray: true
      },
      create: {
        method: 'POST',
        isArray: false
      }
    }
    )
  }
]).
factory('Resource', ['$resource',
  function($resource) {
    var urlBase = "https://squid-1704.herokuapp.com/";
    return $resource(urlBase+'resource/:resourceId', {}, {
        show: { method: 'GET' },
        saveResource: {
          method: 'PUT',
          params: { resourceId: '@resourceId'}
        },
        remove: {
          method: 'DELETE',
          params: { resourceId: '@resourceId'},
          isArray: false
        }
      }
    )
  }
])
;
