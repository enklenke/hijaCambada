// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.plantasController', 'ui.router'])

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
    controller: 'PlantasCtrl'
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
        templateUrl: 'templates/hojas/hojaPequeGrande.html',
        controller: 'PlantasCtrl'
      }
    }
  })
  // Pantalla forma vertical y horizontal
  .state('app.formaVerticalHorizontal', {
    url: '/formaVerticalHorizontal',
    views: {
      'menuContent': {
        templateUrl: 'templates/hojas/formaVerticalHorizontal.html',
        controller: 'PlantasCtrl'
      }
    }
  })
  // Pantalla con abultamientos y sin abultamientos
  .state('app.abultamientos', {
    url: '/abultamientos',
    views: {
      'menuContent': {
        templateUrl: 'templates/hojas/abultamientos.html',
        controller: 'PlantasCtrl'
      }
    }
  })
  // Pantalla hoja agallas y glandulas
  .state('app.agallasGlandulas', {
    url: '/agallasGlandulas',
    views: {
      'menuContent': {
        templateUrl: 'templates/hojas/agallasGlandulas.html',
        controller: 'PlantasCtrl'
      }
    }
  })
  // Pantalla hojas alargadas y redondeadas
  .state('app.alargadasRedondeadas', {
    url: '/alargadasRedondeadas',
    views: {
      'menuContent': {
        templateUrl: 'templates/hojas/alargadasRedondeadas.html',
        controller: 'PlantasCtrl'
      }
    }
  })
  // Pantalla hoja con nervios
  .state('app.nervios', {
    url: '/nervios',
    views: {
      'menuContent': {
        templateUrl: 'templates/hojas/nervios.html',
        controller: 'PlantasCtrl'
      }
    }
  })
  // Pantalla mayores y menores
  .state('app.mayoresMenores', {
    url: '/mayoresMenores',
    views: {
      'menuContent': {
        templateUrl: 'templates/hojas/mayoresMenores.html',
        controller: 'PlantasCtrl'
      }
    }
  })
  // Pantalla hoja glandulas
  .state('app.glandulas', {
    url: '/glandulas',
    views: {
      'menuContent': {
        templateUrl: 'templates/hojas/glandulas.html',
        controller: 'PlantasCtrl'
      }
    }
  })

  // Pantalla hojas mayores y menores
  .state('app.hojasMayoresMenores', {
    url: '/hojasMayoresMenores',
    views: {
      'menuContent': {
        templateUrl: 'templates/hojas/hojasMayoresMenores.html',
        controller: 'PlantasCtrl'
      }
    }
  })
  // Pantalla nervios centrales
  .state('app.nervioCentral', {
    url: '/nervioCentral',
    views: {
      'menuContent': {
        templateUrl: 'templates/hojas/nervioCentral.html',
        controller: 'PlantasCtrl'
      }
    }
  })
  // Pantalla rojizas y mismo color
  .state('app.rojizaMismoColor', {
    url: '/rojizaMismoColor',
    views: {
      'menuContent': {
        templateUrl: 'templates/hojas/rojizaMismoColor.html',
        controller: 'PlantasCtrl'
      }
    }
  })
  // Pantalla puntas afiladas redondeadas
  .state('app.puntaAfiladaRedondeada', {
    url: '/puntaAfiladaRedondeada',
    views: {
      'menuContent': {
        templateUrl: 'templates/hojas/puntaAfiladaRedondeada.html',
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
  // Pantalla planta brezo
  .state('app.brezo', {
    url: '/brezo',
    views: {
      'menuContent': {
        templateUrl: 'templates/plantas/brezo.html',
        controller: 'PlantasCtrl'
      }
    }
  })
  // Pantalla planta tejo
  .state('app.tejo', {
    url: '/tejo',
    views: {
      'menuContent': {
        templateUrl: 'templates/plantas/tejo.html',
        controller: 'PlantasCtrl'
      }
    }
  })
  // Pantalla planta barbuzano
  .state('app.barbuzano', {
    url: '/barbuzano',
    views: {
      'menuContent': {
        templateUrl: 'templates/plantas/barbuzano.html',
        controller: 'PlantasCtrl'
      }
    }
  })
  // Pantalla planta sanguino
  .state('app.sanguino', {
    url: '/sanguino',
    views: {
      'menuContent': {
        templateUrl: 'templates/plantas/sanguino.html',
        controller: 'PlantasCtrl'
      }
    }
  })
  // Pantalla planta mocan
  .state('app.mocan', {
    url: '/mocan',
    views: {
      'menuContent': {
        templateUrl: 'templates/plantas/mocan.html',
        controller: 'PlantasCtrl'
      }
    }
  })
  // Pantalla planta hija
  .state('app.hija', {
    url: '/hija',
    views: {
      'menuContent': {
        templateUrl: 'templates/plantas/hija.html',
        controller: 'PlantasCtrl'
      }
    }
  })
  // Pantalla planta madroño
  .state('app.madrono', {
    url: '/madrono',
    views: {
      'menuContent': {
        templateUrl: 'templates/plantas/madrono.html',
        controller: 'PlantasCtrl'
      }
    }
  })
  // Pantalla planta til
  .state('app.til', {
    url: '/til',
    views: {
      'menuContent': {
        templateUrl: 'templates/plantas/til.html',
        controller: 'PlantasCtrl'
      }
    }
  })
  // Pantalla planta laurel
  .state('app.laurel', {
    url: '/laurel',
    views: {
      'menuContent': {
        templateUrl: 'templates/plantas/laurel.html',
        controller: 'PlantasCtrl'
      }
    }
  })
  // Pantalla planta viñatigo
  .state('app.vinatigo', {
    url: '/vinatigo',
    views: {
      'menuContent': {
        templateUrl: 'templates/plantas/vinatigo.html',
        controller: 'PlantasCtrl'
      }
    }
  })
  // Pantalla planta delfino
  .state('app.delfino', {
    url: '/delfino',
    views: {
      'menuContent': {
        templateUrl: 'templates/plantas/delfino.html',
        controller: 'PlantasCtrl'
      }
    }
  })
  // Pantalla planta aderno
  .state('app.aderno', {
    url: '/aderno',
    views: {
      'menuContent': {
        templateUrl: 'templates/plantas/aderno.html',
        controller: 'PlantasCtrl'
      }
    }
  })
  // Pantalla planta marmolan
  .state('app.marmolan', {
    url: '/marmolan',
    views: {
      'menuContent': {
        templateUrl: 'templates/plantas/marmolan.html',
        controller: 'PlantasCtrl'
      }
    }
  })
  // Pantalla planta acevino
  .state('app.acevino', {
    url: '/acevino',
    views: {
      'menuContent': {
        templateUrl: 'templates/plantas/acevino.html',
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
  $urlRouterProvider.otherwise('/app/principal');
});
