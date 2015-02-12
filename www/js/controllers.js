angular.module('starter.controllers', [])

.controller('DashboardCtrl', function($scope, Package) {
  $scope.packages = Package.query();
})

.controller('PackagesCtrl', function($scope, Package) {
  $scope.packages = Package.query();
})

.controller('PackageCtrl', function($scope, $stateParams, Package) {
  $scope.package = Package.get({id: $stateParams.packageId});
})
