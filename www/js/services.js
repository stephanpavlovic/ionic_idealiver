angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Package', function($resource){
  return $resource('http://192.168.178.20:3000/packages/:id');
});
