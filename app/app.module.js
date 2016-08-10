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
    'core.team',
    'resourceList',
    'resourceType',
    'featureteamChart',
    'vendorList',
    'vendorDelete',
    'vendorDetail',
    'vendorEdit',
    'teamList',
    'dashboardLayout'
  ]);
