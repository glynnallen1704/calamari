'use strict';
/**
 * Created by glynnallen on 2016/07/07.
 */
angular.
module('levelList').
component('levelList', {
  templateUrl: 'components/level-list/level-list.template.html',
  controller: function LevelListController(Level) {
    this.levels = Level.query();
  }
});
