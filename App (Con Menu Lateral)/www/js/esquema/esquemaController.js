angular.module('starter.esquemaController', [])

// Controller para manejar los datos de los esquemas
.controller('EsquemaCtrl', function($scope, $ionicHistory, $state) {

	// Funcion para volver atras desde los pajaros.
  $scope.atrasEsquema = function()
	{
	    window.history.back();
	}


}) // Fin del controller



; // Fin de starter.avesController