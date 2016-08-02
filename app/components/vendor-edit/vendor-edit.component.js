angular.
module('vendorDetail').
component('vendorDetail', {
  templateUrl: 'components/vendor-detail/vendor-detail.template.html',
  controller: ['$routeParams', 'Vendor',
    function VendorDetailController($routeParams, Vendor) {
      this.vendor = Vendor.fetchVendor({vendorId: $routeParams.vendorId});
    }
  ]
});
