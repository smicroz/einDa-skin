// muestra u oculta menu
var daApp = angular.module('ng-da-app', [])

daApp.controller('gestorContenido', ['$scope', function($scope){

  $scope.sMenu = function ()            {
    $scope.controlMenu = true
    $scope.gestorScroll = { "overflow-y" : "hidden" }
  }
  $scope.sMenuCerrar = function ()            {
    $scope.controlMenu = false
    $scope.gestorScroll = { "overflow" : "scroll" }
  }

  $scope.controlPerfil = true


}]);
