'use strict';
/**
 * Created by glynnallen on 2016/07/07.
 */
angular.
module('resourceList').
component('resourceList', {
  templateUrl: 'components/resource-list/resource-list.template.html',
  controller: function ResourceListController(Resources) {

    this.resources = Resources.query();


  }
});
