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
    'core.jira',
    'core.resource',
    'core.vendor',
    'jiraList',
    'resourceList',
    'resourceType',
    'vendorList',
    'vendorDelete',
    'vendorDetail',
    'dashboardLayout'
  ]);
