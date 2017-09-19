// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.plantasController'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  //Pantalla principal (la pantalla que se muestra al iniciar la app)
  .state('app.principal', {
    url: '/principal',
    views: {
      'menuContent': {
        templateUrl: 'templates/principal.html',
        controller: 'PlaylistsCtrl'
      }
    }
  })

  // *************** HOJAS **************
  // Pantalla sencilla y compuesta
  .state('app.sencillaCompuesta', {
    url: '/sencillaCompuesta',
    views: {
      'menuContent': {
        templateUrl: 'templates/hojas/sencillaCompuesta.html',
        controller: 'PlantasCtrl'
      }
    }
  })
  // Pantalla opuesta y alterna
  .state('app.opuestaAlterna', {
    url: '/opuestaAlterna',
    views: {
      'menuContent': {
        templateUrl: 'templates/hojas/opuestaAlterna.html',
        controller: 'PlantasCtrl'
      }
    }
  })
  // Pantalla rugosa y lisa
  .state('app.rugosaLisa', {
    url: '/rugosaLisa',
    views: {
      'menuContent': {
        templateUrl: 'templates/hojas/rugosaLisa.html',
        controller: 'PlantasCtrl'
      }
    }
  })
  // Pantalla tipo de bordes
  .state('app.tipoBorde', {
    url: '/tipoBorde',
    views: {
      'menuContent': {
        templateUrl: 'templates/hojas/tipoBorde.html',
        controller: 'PlantasCtrl'
      }
    }
  })
  // Pantalla hojas pequeñas y grandes
  .state('app.hojaPequeGrande', {
    url: '/hojaPequeGrande',
    views: {
      'menuContent': {
        templateUrl: 'templates/plantas/hojaPequeGrande.html',
        controller: 'PlantasCtrl'
      }
    }
  })
  // ****************** FIN HOJAS *****************************

  //********* PLANTAS *********
  // Pantalla planta follao
  .state('app.follao', {
    url: '/follao',
    views: {
      'menuContent': {
        templateUrl: 'templates/plantas/follao.html',
        controller: 'PlantasCtrl'
      }
    }
  })
  // Pantalla planta palo blanco
  .state('app.paloBlanco', {
    url: '/paloBlanco',
    views: {
      'menuContent': {
        templateUrl: 'templates/plantas/paloBlanco.html',
        controller: 'PlantasCtrl'
      }
    }
  })
  // Pantalla planta sauco
  .state('app.sauco', {
    url: '/sauco',
    views: {
      'menuContent': {
        templateUrl: 'templates/plantas/sauco.html',
        controller: 'PlantasCtrl'
      }
    }
  })
  // Pantalla planta naranjero
  .state('app.naranjero', {
    url: '/naranjero',
    views: {
      'menuContent': {
        templateUrl: 'templates/plantas/naranjero.html',
        controller: 'PlantasCtrl'
      }
    }
  })
  // Pantalla planta faya
  .state('app.faya', {
    url: '/faya',
    views: {
      'menuContent': {
        templateUrl: 'templates/plantas/faya.html',
        controller: 'PlantasCtrl'
      }
    }
  })
  //***************** FIN PLANTAS *******************

  // Pantalla para probar array de plantas
  .state('app.pruebaPlantasBD', {
      url: '/pruebaPlantasBD',
      views: {
        'menuContent': {
          templateUrl: 'templates/plantas/pruebaPlantasBD.html',
          controller: 'PlantasCtrl'
        }
      }
    })
  // Pantalla principal de pajaros
  .state('app.principalPajaros', {
    url: '/principalPajaros',
    views: {
      'menuContent': {
        templateUrl: 'templates/pajaros/principalPajaros.html',
        controller: 'PlaylistsCtrl'
      }
    }
  })
  // Pantalla principal de mapa
  .state('app.principalMapa', {
    url: '/principalMapa',
    views: {
      'menuContent': {
        templateUrl: 'templates/mapa/principalMapa.html',
        controller: 'PlaylistsCtrl'
      }
    }
  })
  // Pantalla principal de esquema
  .state('app.principalEsquema', {
    url: '/principalEsquema',
    views: {
      'menuContent': {
        templateUrl: 'templates/esquema/principalEsquema.html',
        controller: 'PlaylistsCtrl'
      }
    }
  })
  // Pantalla principal de video
  .state('app.principalVideo', {
    url: '/principalVideo',
    views: {
      'menuContent': {
        templateUrl: 'templates/video/principalVideo.html',
        controller: 'PlaylistsCtrl'
      }
    }
  })
  // Borrar
  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    // Borrar
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  //$urlRouterProvider.otherwise('/app/playlists');
  //$urlRouterProvider.otherwise('/app/principal');
  $urlRouterProvider.otherwise('/app/tipoBorde');
});
