'use strict';
/**
 * Created by glynnallen on 2016/07/07.
 */
angular.
module('teamList').
component('teamList', {
  templateUrl: 'components/team-list/team-list.template.html',
  controller: function TeamListController(Teams) {
    this.teams = Teams.query();
  }
});
