/**
 * Created by glynnallen on 2016/07/28.
 */
angular.
module('calamariApp').
config(['$locationProvider', '$routeProvider',
  function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.
    when('/resources', {
      template: '<resource-list></resource-list>'
    }).
    when('/resources/:resourceId', {
      template: '<resource-detail></resource-detail>'
    }).
    when('/dashboard', {
      template: '<dashboard-layout></dashboard-layout>'
    }).
    otherwise({
      redirectTo: '/dashboard'
    });
  }
]);
