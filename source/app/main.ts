/// <reference path="../../typings/browser.d.ts" />

var app = angular.module('d4nSmarthome', ['ngMaterial', 'ngRoute'])
    .config(function($mdThemingProvider) {
      $mdThemingProvider.theme('default')
        .primaryPalette('brown')
        .accentPalette('orange')});

app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
   
}]);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/home', {
    templateUrl: 'app/templates/home.html',
    controller: 'HomeController'
   })
   .when('/home2', {
    templateUrl: 'app/templates/home2.html',
    controller: 'HomeController'
   })
   .when('/garden', {
    templateUrl: 'app/templates/garden.html',
    controller: 'HomeController'
   })
   .otherwise('/home');
   
  // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(false);
});

app.controller('HomeController', function($scope, $routeParams,$mdSidenav) {
  $mdSidenav('left').close();
 })