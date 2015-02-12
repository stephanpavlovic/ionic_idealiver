angular.module('starter.controllers', [])

.controller('DashboardCtrl', function($scope, Packages) {
  $scope.packages = Packages.all();
})

.controller('PackagesCtrl', function($scope, Packages) {
  $scope.packages = Packages.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Packages) {
  $scope.friend = Packages.get($stateParams.friendsId);
})
