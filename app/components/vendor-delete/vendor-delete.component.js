'use strict';
/**
 * Created by glynnallen on 2016/07/07.
 */
angular.
module('vendorDelete').
component('vendorDelete', {
  template: "<a href='#/vendor/{{vendor.id}}' class='btn btn-danger'>Delete</a>",
  controller: function VendorDeleteController(Vendor) {
    this.vendor = Vendor.remove();
  }
});
