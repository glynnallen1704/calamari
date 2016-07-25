'use strict';
/**
 * Created by glynnallen on 2016/07/07.
 */
angular.
module('customerList').
component('customerList', {
  templateUrl: 'components/customer-add/customer-add.template.html',
  controller: function CustomerListController(Customer) {
    this.customer = Customer.create('{"firstName":' + Customer.firstName +',"lastName":"Pan","gender":"male"}');
  }
});
