'use strict';
/**
 * @ngdoc overview
 * @name calamariApp
 * @description
 * # calamariApp
 *
 * Main module of the application.
 */
angular
  .module('calamariApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'core',
    'core.resource',
    'core.vendor',
    'resourceList',
    'resourceType'
  ])
  .config(['$locationProvider' ,'$routeProvider',
  function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.
    when('/resources', {
      template: '<resource-list></resource-list>'
    }).
    when('/resources/:resourceId', {
      template: '<resource-list></resource-list>'
    }).
    otherwise('/resources');
  }
  ]);
