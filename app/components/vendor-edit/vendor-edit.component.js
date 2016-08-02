angular.
module('vendorEdit').
component('vendorEdit', {
  templateUrl: 'components/vendor-edit/vendor-edit.template.html',
  controller: ['$routeParams', 'Vendor',
    function VendorEditController($routeParams, Vendor) {
      this.vendor = Vendor.update({vendorId: $routeParams.vendorId});
    }
  ]
});
