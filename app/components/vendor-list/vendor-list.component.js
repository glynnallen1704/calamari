'use strict';
/**
 * Created by glynnallen on 2016/07/07.
 */
angular.
module('vendorList').
component('vendorList', {
  templateUrl: 'components/vendor-list/vendor-list.template.html',
  controller: function VendorListController(Vendor) {
    this.vendors = Vendor.query();

    var ctrl = this;
    ctrl.createVendor = createVendor;

    function createVendor(){
      ctrl.list.push({
        name : 'Crazy Newling'
      })
    }

  }
});
