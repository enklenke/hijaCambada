angular.module('starter.plantasController', [])

// Controller para manejar los datos de las plantas
.controller('PlantasCtrl', function($scope, $ionicHistory) {

  // Funcion para volver al home.
  $scope.atras = function()
    {
        $ionicHistory.goBack();                           //This doesn't work
        //window.history.back();                          //This works
        //alert('code to go back called. Did it work?');  //For testing
    }

  $scope.alerta = function(){
    alert("aaaaaaa");
  }
   // Creamos un array con los datos de cada planta, usando $scope para poder llamarlo desde el html.
  $scope.plantas = [
  	{ id: 1, nombre: 'Brezo'},
  	{ id: 2, nombre: 'Tejo'},
  	{ id: 3, nombre: 'Barbuzano'},
  	{ id: 4, nombre: 'Til'},
  	{ id: 5, nombre: 'Laurel'},
  	{ id: 6, nombre: 'Viñátigo'},
  	{ id: 7, nombre: 'Delfino'},
  	{ id: 8, nombre: 'Acebiño'},
  	{ id: 9, nombre: 'Hija'},
  	{ id: 10, nombre: 'Madroño'},
  	{ id: 11, nombre: 'Mocán'},
  	{ id: 12, nombre: 'Faya'},
  	{ id: 13, nombre: 'Sanguino'},
  	{ id: 14, nombre: 'Naranjero'}
  ];


}) // Fin del controller

.controller('AppCtrl', function($scope, $ionicHistory) 
{
    $scope.goBackHandler = function()
    {
        $ionicHistory.goBack();                           //This doesn't work
        //window.history.back();                          //This works
        //alert('code to go back called. Did it work?');  //For testing
    }
});



; // Fin de starter.plantasController