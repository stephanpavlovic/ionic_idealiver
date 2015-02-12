angular.module('starter.controllers', [])

.controller('DashboardCtrl', function($scope, Packages) {
  $scope.packages = Packages.all();
})

.controller('PackagesCtrl', function($scope, Packages) {
  $scope.packages = Packages.all();
})

.controller('PackageCtrl', function($scope, $stateParams, Packages) {
  $scope.singlePackage = Packages.get($stateParams.packageId);
})
