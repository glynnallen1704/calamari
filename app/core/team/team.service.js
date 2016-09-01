/**
 * Created by glynnallen on 2016/07/05.
 */
angular.module('core.team').
factory('Teams', ['$resource',
  function($resource) {
    var urlBase = "https://squid-1704.herokuapp.com/";
    //Filter on only active resources
    return $resource(urlBase+'featureteam', {}, {
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
factory('Team', ['$resource',
  function($resource) {
    var urlBase = "https://squid-1704.herokuapp.com/";
    return $resource(urlBase+'featureteam/:teamId', {}, {
        show: { method: 'GET' },
        saveChanges: {
          method: 'PUT',
          params: { teamId: '@teamId'}
        },
        remove: {
          method: 'DELETE',
          params: { teamId: '@teamId'},
          isArray: false
        }
      }
    )
  }
])
;
