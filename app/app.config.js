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
    when('/resource/:resourceId', {
      template: '<resource-edit></resource-edit>'
    }).
    when('/vendors/:vendorId', {
      template: '<vendor-detail></vendor-detail>'
    }).
    when('/teams', {
      template: '<team-list></team-list>'
    }).
    when('/vendors/edit/:vendorId', {
      template: '<vendor-edit></vendor-edit>'
    }).
    when('/dashboard', {
      template: '<dashboard-layout></dashboard-layout>'
    }).
    when('/vendors', {
      template: '<vendor-list></vendor-list>'
    }).
    when('/levels', {
      template: '<level-list></level-list>'
    }).
    otherwise({
      redirectTo: '/dashboard'
    });
  }
]);
