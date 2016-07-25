'use strict';
/**
 * Created by glynnallen on 2016/07/07.
 */
angular.
module('resourceAdd').
component('resourceAdd', {
  templateUrl: 'components/resource-add/resource-add.template.html',
  controller: function ResourceAddController(Resource) {
    this.resource = Resource.create('{"firstName":' + Resource.firstName +',"lastName":"Pan","gender":"male"}');
  }
});
