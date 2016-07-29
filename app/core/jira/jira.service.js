/**
 * Created by glynnallen on 2016/07/05.
 */
angular.module('core.jira').
factory('Jira', ['$resource',
  function($resource) {
    var urlBase = "http://jira.standardbank.co.za:8091/";
    return $resource(urlBase+'rest/api/2/search', {}, {
      query: {
        method: 'POST',
        isArray: true
      }
    }
    )
  }
]);
