/**
 * Created by glynnallen on 2016/07/05.
 */
angular.module('core.team').
factory('Team', ['$resource',
  function($resource) {
    var urlBase = "https://squid-1704.herokuapp.com/";
    return $resource(urlBase+'featureteam/:teamId', {}, {
      query: {
        method: 'GET',
        isArray: true
      },
      fetchTeam: {
        method: 'GET',
        params: {teamId: ':teamId'},
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
