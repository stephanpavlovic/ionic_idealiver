angular.module('starter.controllers', [])

.controller('DashboardCtrl', function($scope, Package) {
  $scope.packages = Package.query();
})

.controller('PackagesCtrl', function($scope, Package) {
  $scope.packages = Package.query();
})

.controller('PackageCtrl', function($scope, $stateParams, Package) {
  $scope.package = Package.get({id: $stateParams.packageId});

  $scope.$on("$stateChangeSuccess", function() {
    $scope.map = {
      defaults: {
        tileLayer: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        maxZoom: 15,
        zoomControlPosition: 'topleft'
      },
      markers : {},
      events: {
        map: {
          enable: ['context'],
          logic: 'emit'
        }
      },
      center: {
        lat: 51.505,
        lng: -0.09,
        zoom: 10
      }
    };
    $scope.map.center = {lat: $scope.package['start_lat'], lng: $scope.package['start_long'], zoom: 12}
    console.log($scope.map.center);
  });

})
