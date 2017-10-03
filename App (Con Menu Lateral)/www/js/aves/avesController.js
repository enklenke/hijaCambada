angular.module('starter.avesController', [])

// Controller para manejar los datos de las aves
.controller('AvesCtrl', function($scope, $ionicHistory, $state) {

  // Funcion para volver atras desde los pajaros.
  $scope.atrasAves = function()
    {
        //$ionicHistory.goBack();                           //This doesn't work
        window.history.back();                          //This works
        //alert('code to go back called. Did it work?');  //For testing
    }


// Creamos las variables con los sonidos de las aves
var audioCuervo = new Audio('audio/sonidos-aves/cuervo.mp3');
var audioGavilan = new Audio('audio/sonidos-aves/gavilan.mp3');
var audioHerrerillo = new Audio('audio/sonidos-aves/herrerillo.mp3');
var audioMirlo = new Audio('audio/sonidos-aves/mirlo.mp3');
var audioMosquitero = new Audio('audio/sonidos-aves/mosquitero.mp3');
var audioPalomaRabiche = new Audio('audio/sonidos-aves/paloma-rabiche.mp3');
var audioPalomaTurque = new Audio('audio/sonidos-aves/paloma-turque.mp3');
var audioPetirrojo = new Audio('audio/sonidos-aves/petirrojo.mp3');


  // Funciones con los sonidos de las aves
  $scope.playCuervo = function() {
    var audio = new Audio('audio/sonidos-aves/cuervo.mp3');
    audio.play();
  };

  $scope.playGavilan = function() {
    var audio = new Audio('audio/sonidos-aves/gavilan.mp3');
    audio.play();
  };

  $scope.playHerrerillo = function() {
    var audio = new Audio('audio/sonidos-aves/herrerillo.mp3');
    audio.play();
  };

  $scope.playMirlo = function() {
    var audio = new Audio('audio/sonidos-aves/mirlo.mp3');
    audio.play();
  };

  $scope.playMosquitero = function() {
    var audio = new Audio('audio/sonidos-aves/mosquitero.mp3');
    audio.play();
  };

  $scope.playPalomaRabiche = function() {
    var audio = new Audio('audio/sonidos-aves/paloma-rabiche.mp3');
    audio.play();
  };

  $scope.playPalomaTurque = function() {
    var audio = new Audio('audio/sonidos-aves/paloma-turque.mp3');
    audio.play();
  };

  $scope.playPetirrojo = function() {
    var audio = new Audio('audio/sonidos-aves/petirrojo.mp3');
    audio.play();
  };


}) // Fin del controller



; // Fin de starter.avesController