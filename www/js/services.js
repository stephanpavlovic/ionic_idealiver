angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Packages', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var packages = [{
    id: 0,
    name: 'Ein Paket',
    from: 'Cowoco',
    from_address: 'An der Bottmühle 5, 50678 Köln',
    to: 'Solution Space',
    to_address: 'Am Dom 1'
  },
  {
    id: 1,
    name: 'Eine Statur',
    from: 'Veedel Vital',
    from_address: 'Ubierring 3, 50678 Köln',
    to: 'Clodwigeck',
    to_address: 'Veedelstraße 1, 50939 Köln'
  },
  ];


  return {
    all: function() {
      return packages;
    },
    get: function(packageId) {
      // Simple index lookup
      console.log(packageId);
      return packages[packageId];
    }
  }
});
