'use strict';

/**
 * @ngdoc function
 * @name learnApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the learnApp
 */
angular.module('learnApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
