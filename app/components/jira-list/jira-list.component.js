'use strict';
/**
 * Created by glynnallen on 2016/07/07.
 */
angular.
module('jiraList').
component('jiraList', {
  templateUrl: 'components/jira-list/jira-list.template.html',
  controller: function JiraListController(Jira) {
    this.jiras = Jira.query();
  }
});
