angular.module('starter.avesController', [])

// Controller para manejar los datos de las aves
.controller('AvesCtrl', function($scope, $ionicHistory, $state) {


// Creamos las variables con los sonidos de las aves
var audioCuervo = new Audio('audio/sonidos-aves/cuervo.mp3');
var audioGavilan = new Audio('audio/sonidos-aves/gavilan.mp3');
var audioHerrerillo = new Audio('audio/sonidos-aves/herrerillo.mp3');
var audioMirlo = new Audio('audio/sonidos-aves/mirlo.mp3');
var audioMosquitero = new Audio('audio/sonidos-aves/mosquitero.mp3');
var audioPalomaRabiche = new Audio('audio/sonidos-aves/paloma-rabiche.mp3');
var audioPalomaTurque = new Audio('audio/sonidos-aves/paloma-turque.mp3');
var audioPetirrojo = new Audio('audio/sonidos-aves/petirrojo.mp3');
var audioPinzon = new Audio('audio/sonidos-aves/pinzon.mp3');
var audioReyezuelo = new Audio('audio/sonidos-aves/reyezuelo.mp3');

// Creamos una variable para hacer la condicion de si suena o no suena.
var seOye = "no";


  // Funciones con los sonidos de las aves
  $scope.playCuervo = function() {
    audioCuervo.play();
    seOye = "cuervo";
  };

  $scope.playGavilan = function() {
    audioGavilan.play();
    seOye = "gavilan";
  };

  $scope.playHerrerillo = function() {
    audioHerrerillo.play();
    seOye = "herrerillo";
  };

  $scope.playMirlo = function() {
    audioMirlo.play();
    seOye = "mirlo";
  };

  $scope.playMosquitero = function() {
    audioMosquitero.play();
    seOye = "mosquitero";
  };

  $scope.playPalomaRabiche = function() {
    audioPalomaRabiche.play();
    seOye = "paloma-rabiche";
  };

  $scope.playPalomaTurque = function() {
    audioPalomaTurque.play();
    seOye = "paloma-turque";
  };

  $scope.playPetirrojo = function() {
    audioPetirrojo.play();
    seOye = "petirrojo";
  };

  $scope.playPinzon = function() {
    audioPinzon.play();
    seOye = "pinzon";
  };

  $scope.playReyezuelo = function() {
    audioReyezuelo.play();
    seOye = "reyezuelo";
  };


  // Funcion que para un sonido si esta sonando y tambien va a la pantalla anterior (es el boton atras con mas funcionalidad)
  $scope.stopSonido = function(){
    // Si suena el cuervo, lo paramos y modificamos la variable seOye
    if (seOye == "cuervo"){
          audioCuervo.pause();
          seOye = "no";

          // Volvemos atras.
          window.history.back();
    }

    // Si suena el gavilan, lo paramos y modificamos la variable seOye
    else if (seOye == "gavilan"){
          audioGavilan.pause();
          seOye = "no";

          // Volvemos atras.
          window.history.back();
    }

    // Si suena el herrerillo, lo paramos y modificamos la variable seOye
    else if (seOye == "herrerillo"){
          audioHerrerillo.pause();
          seOye = "no";

          // Volvemos atras.
          window.history.back();
    }

    // Si suena el mirlo, lo paramos y modificamos la variable seOye
    else if (seOye == "mirlo"){
          audioMirlo.pause();
          seOye = "no";

          // Volvemos atras.
          window.history.back();
    }

    // Si suena el mosquitero, lo paramos y modificamos la variable seOye
    else if (seOye == "mosquitero"){
          audioMosquitero.pause();
          seOye = "no";

          // Volvemos atras.
          window.history.back();
    }

    // Si suena el paloma-rabiche, lo paramos y modificamos la variable seOye
    else if (seOye == "paloma-rabiche"){
          audioPalomaRabiche.pause();
          seOye = "no";

          // Volvemos atras.
          window.history.back();
    }

    // Si suena el paloma-turque, lo paramos y modificamos la variable seOye
    else if (seOye == "paloma-turque"){
          audioPalomaTurque.pause();
          seOye = "no";

          // Volvemos atras.
          window.history.back();
    }

    // Si suena el petirrojo, lo paramos y modificamos la variable seOye
    else if (seOye == "petirrojo"){
          audioPetirrojo.pause();
          seOye = "no";

          // Volvemos atras.
          window.history.back();
    }

    // Si suena el pinzon, lo paramos y modificamos la variable seOye
    else if (seOye == "pinzon"){
          audioPinzon.pause();
          seOye = "no";

          // Volvemos atras.
          window.history.back();
    }

    // Si suena el reyezuelo, lo paramos y modificamos la variable seOye
    else if (seOye == "reyezuelo"){
          audioReyezuelo.pause();
          seOye = "no";

          // Volvemos atras.
          window.history.back();
    }

    // Sino suena nada pues vamos atras.
    else{
        // Volvemos atras.
        window.history.back();
    }

  }


  // Funcion que para un sonido si esta sonando y tambien va a la pantalla anterior (es el boton atras con mas funcionalidad)
  $scope.stopSonidoPulsandoMenu = function(){
    // Si suena el cuervo, lo paramos y modificamos la variable seOye
    if (seOye == "cuervo"){
          audioCuervo.pause();
          seOye = "no";
    }

    // Si suena el gavilan, lo paramos y modificamos la variable seOye
    else if (seOye == "gavilan"){
          audioGavilan.pause();
          seOye = "no";
    }

    // Si suena el herrerillo, lo paramos y modificamos la variable seOye
    else if (seOye == "herrerillo"){
          audioHerrerillo.pause();
          seOye = "no";
    }

    // Si suena el mirlo, lo paramos y modificamos la variable seOye
    else if (seOye == "mirlo"){
          audioMirlo.pause();
          seOye = "no";
    }

    // Si suena el mosquitero, lo paramos y modificamos la variable seOye
    else if (seOye == "mosquitero"){
          audioMosquitero.pause();
          seOye = "no";
    }

    // Si suena el paloma-rabiche, lo paramos y modificamos la variable seOye
    else if (seOye == "paloma-rabiche"){
          audioPalomaRabiche.pause();
          seOye = "no";
    }

    // Si suena el paloma-turque, lo paramos y modificamos la variable seOye
    else if (seOye == "paloma-turque"){
          audioPalomaTurque.pause();
          seOye = "no";
    }

    // Si suena el petirrojo, lo paramos y modificamos la variable seOye
    else if (seOye == "petirrojo"){
          audioPetirrojo.pause();
          seOye = "no";
    }

    // Si suena el pinzon, lo paramos y modificamos la variable seOye
    else if (seOye == "pinzon"){
          audioPinzon.pause();
          seOye = "no";
    }

    // Si suena el reyezuelo, lo paramos y modificamos la variable seOye
    else if (seOye == "reyezuelo"){
          audioReyezuelo.pause();
          seOye = "no";
    }

  }


}) // Fin del controller



; // Fin de starter.avesController