'use strict';

/**
 * @ngdoc function
 * @name vpantanoApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the vpantanoApp
 */
angular.module('vpantanoApp')
  .controller('ContactCtrl', function ($scope, sections) {

    $scope.section = sections.b;

  });
