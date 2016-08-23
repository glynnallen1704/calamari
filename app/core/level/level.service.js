/**
 * Created by glynnallen on 2016/07/05.
 */
angular.module('core.level').
factory('Level', ['$resource',
  function($resource) {
    var urlBase = "https://squid-1704.herokuapp.com/";
    return $resource(urlBase+'level/:levelId', {}, {
      query: {
        method: 'GET',
        isArray: true
      },
      fetchLevel: {
        method: 'GET',
        params: {levelId: ':levelId'},
        isArray: false
      },
      create: {
        method: 'POST',
        isArray: false
      },
      update: {
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
