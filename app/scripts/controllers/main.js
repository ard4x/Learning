'use strict';

/**
 * @ngdoc function
 * @name learnApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the learnApp
 */
angular.module('learnApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
