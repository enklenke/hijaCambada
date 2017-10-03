// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.plantasController', 'starter.avesController', 'starter.esquemaController', 'starter.mapaController', 'ui.router'])

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
  // Pantalla planta acebino
  .state('app.acebino', {
    url: '/acebino',
    views: {
      'menuContent': {
        templateUrl: 'templates/plantas/acebino.html',
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

  // //***************** PAJAROS //*****************
  // Pantalla principal de pajaros (donde salen las letras)
  .state('app.principalPajaros', {
    url: '/principalPajaros',
    views: {
      'menuContent': {
        templateUrl: 'templates/aves/principalPajaros.html',
        controller: 'AvesCtrl'
      }
    }
  })

  // Pantalla principal de pajaros (donde salen las letras)
  .state('app.principalPajarosMenu', {
    url: '/principalPajarosMenu',
    views: {
      'menuContent': {
        templateUrl: 'templates/aves/principalPajarosMenu.html',
        controller: 'AvesCtrl'
      }
    }
  })

  // Pantalla principal del pajaro cuervo
  .state('app.pajaroCuervo', {
    url: '/pajaroCuervo',
    views: {
      'menuContent': {
        templateUrl: 'templates/aves/pajaroCuervo.html',
        controller: 'AvesCtrl'
      }
    }
  })

  // Pantalla principal del pajaro gavilan
  .state('app.pajaroGavilan', {
    url: '/pajaroGavilan',
    views: {
      'menuContent': {
        templateUrl: 'templates/aves/pajaroGavilan.html',
        controller: 'AvesCtrl'
      }
    }
  })

  // Pantalla principal del pajaro herrerillo
  .state('app.pajaroHerrerillo', {
    url: '/pajaroHerrerillo',
    views: {
      'menuContent': {
        templateUrl: 'templates/aves/pajaroHerrerillo.html',
        controller: 'AvesCtrl'
      }
    }
  })

  // Pantalla principal del pajaro mirlo
  .state('app.pajaroMirlo', {
    url: '/pajaroMirlo',
    views: {
      'menuContent': {
        templateUrl: 'templates/aves/pajaroMirlo.html',
        controller: 'AvesCtrl'
      }
    }
  })

  // Pantalla principal del pajaro mosquitero
  .state('app.pajaroMosquitero', {
    url: '/pajaroMosquitero',
    views: {
      'menuContent': {
        templateUrl: 'templates/aves/pajaroMosquitero.html',
        controller: 'AvesCtrl'
      }
    }
  })

  // Pantalla principal del pajaro paloma rabiche
  .state('app.pajaroPalomaRabiche', {
    url: '/pajaroPalomaRabiche',
    views: {
      'menuContent': {
        templateUrl: 'templates/aves/pajaroPalomaRabiche.html',
        controller: 'AvesCtrl'
      }
    }
  })

  // Pantalla principal del pajaro paloma turque
  .state('app.pajaroPalomaTurque', {
    url: '/pajaroPalomaTurque',
    views: {
      'menuContent': {
        templateUrl: 'templates/aves/pajaroPalomaTurque.html',
        controller: 'AvesCtrl'
      }
    }
  })

  // Pantalla principal del pajaro petirrojo
  .state('app.pajaroPetirrojo', {
    url: '/pajaroPetirrojo',
    views: {
      'menuContent': {
        templateUrl: 'templates/aves/pajaroPetirrojo.html',
        controller: 'AvesCtrl'
      }
    }
  })

  // Pantalla principal del pajaro pinzon
  .state('app.pajaroPinzon', {
    url: '/pajaroPinzon',
    views: {
      'menuContent': {
        templateUrl: 'templates/aves/pajaroPinzon.html',
        controller: 'AvesCtrl'
      }
    }
  })
  // ***************** FIN PAJAROS *****************

  // //***************** MAPA *****************
  // Pantalla principal de mapa
  .state('app.principalMapa', {
    url: '/principalMapa',
    views: {
      'menuContent': {
        templateUrl: './templates/mapa/principalMapa.html',
        controller: 'MapaCtrl'
      }
    }
  })

  .state('app.principalMapaMenu', {
    url: '/principalMapaMenu',
    views: {
      'menuContent': {
        templateUrl: './templates/mapa/principalMapaMenu.html',
        controller: 'MapaCtrl'
      }
    }
  })
  // ***************** FIN MAPA //*****************

  // //***************** ESQUEMA //*****************
  // Pantalla principal de esquema (donde estan las letras de esquema)
  .state('app.principalEsquema', {
    url: '/principalEsquema',
    views: {
      'menuContent': {
        templateUrl: 'templates/esquema/principalEsquema.html',
        controller: 'EsquemaCtrl'
      }
    }
  })

  // Pantalla principal de esquema menu (menu dentro del esquema)
  .state('app.principalEsquemaMenu', {
    url: '/principalEsquemaMenu',
    views: {
      'menuContent': {
        templateUrl: 'templates/esquema/principalEsquemaMenu.html',
        controller: 'EsquemaCtrl'
      }
    }
  })

  //Pantalla EsqueMa forma
  .state('app.esquemaForma', {
    url: '/esquemaForma',
    views: {
      'menuContent': {
        templateUrl: 'templates/esquema/esquemaForma.html',
        controller: 'EsquemaCtrl'
      }
    }
  })

  //Pantalla EsqueMa margen
  .state('app.esquemaMargen', {
    url: '/esquemaMargen',
    views: {
      'menuContent': {
        templateUrl: 'templates/esquema/esquemaMargen.html',
        controller: 'EsquemaCtrl'
      }
    }
  })

  //Pantalla EsqueMa venacion
  .state('app.esquemaVenacion', {
    url: '/esquemaVenacion',
    views: {
      'menuContent': {
        templateUrl: 'templates/esquema/esquemaVenacion.html',
        controller: 'EsquemaCtrl'
      }
    }
  })
  // //***************** FIN ESQUEMA //*****************

  // ************** ARBOLES *******************
   //Pantalla Arbol 1
  .state('app.arbol1', {
    url: '/arbol1',
    views: {
      'menuContent': {
        templateUrl: 'templates/arboles/arbol1.html',
        controller: 'PlantasCtrl'
      }
    }
  })
  //Pantalla Arbol 1.1
  .state('app.arbol1Descripcion', {
    url: '/arbol1Descripcion',
    views: {
      'menuContent': {
        templateUrl: 'templates/arboles/arbol1Descripcion.html',
        controller: 'PlantasCtrl'
      }
    }
  })

  //Pantalla Arbol 2
  .state('app.arbol2', {
    url: '/arbol2',
    views: {
      'menuContent': {
        templateUrl: 'templates/arboles/arbol2.html',
        controller: 'PlantasCtrl'
      }
    }
  })
  //Pantalla Arbol 2.1
  .state('app.arbol2Descripcion', {
    url: '/arbol2Descripcion',
    views: {
      'menuContent': {
        templateUrl: 'templates/arboles/arbol2Descripcion.html',
        controller: 'PlantasCtrl'
      }
    }
  })

  //Pantalla Arbol 3
  .state('app.arbol3', {
    url: '/arbol3',
    views: {
      'menuContent': {
        templateUrl: 'templates/arboles/arbol3.html',
        controller: 'PlantasCtrl'
      }
    }
  })
  //Pantalla Arbol 3.1
  .state('app.arbol3Descripcion', {
    url: '/arbol3Descripcion',
    views: {
      'menuContent': {
        templateUrl: 'templates/arboles/arbol3Descripcion.html',
        controller: 'PlantasCtrl'
      }
    }
  })

  //Pantalla Arbol 4
  .state('app.arbol4', {
    url: '/arbol4',
    views: {
      'menuContent': {
        templateUrl: 'templates/arboles/arbol4.html',
        controller: 'PlantasCtrl'
      }
    }
  })
  //Pantalla Arbol 4.1
  .state('app.arbol4Descripcion', {
    url: '/arbol4Descripcion',
    views: {
      'menuContent': {
        templateUrl: 'templates/arboles/arbol4Descripcion.html',
        controller: 'PlantasCtrl'
      }
    }
  })

  //Pantalla Arbol 5
  .state('app.arbol5', {
    url: '/arbol5',
    views: {
      'menuContent': {
        templateUrl: 'templates/arboles/arbol5.html',
        controller: 'PlantasCtrl'
      }
    }
  })
  //Pantalla Arbol 5.1
  .state('app.arbol5Descripcion', {
    url: '/arbol5Descripcion',
    views: {
      'menuContent': {
        templateUrl: 'templates/arboles/arbol5Descripcion.html',
        controller: 'PlantasCtrl'
      }
    }
  })

  //Pantalla Arbol 6
  .state('app.arbol6', {
    url: '/arbol6',
    views: {
      'menuContent': {
        templateUrl: 'templates/arboles/arbol6.html',
        controller: 'PlantasCtrl'
      }
    }
  })
  //Pantalla Arbol 6.1
  .state('app.arbol6Descripcion', {
    url: '/arbol6Descripcion',
    views: {
      'menuContent': {
        templateUrl: 'templates/arboles/arbol6Descripcion.html',
        controller: 'PlantasCtrl'
      }
    }
  })

  //Pantalla Arbol 7
  .state('app.arbol7', {
    url: '/arbol7',
    views: {
      'menuContent': {
        templateUrl: 'templates/arboles/arbol7.html',
        controller: 'PlantasCtrl'
      }
    }
  })
  //Pantalla Arbol 7.1
  .state('app.arbol7Descripcion', {
    url: '/arbol7Descripcion',
    views: {
      'menuContent': {
        templateUrl: 'templates/arboles/arbol7Descripcion.html',
        controller: 'PlantasCtrl'
      }
    }
  })

  //Pantalla Arbol 8
  .state('app.arbol8', {
    url: '/arbol8',
    views: {
      'menuContent': {
        templateUrl: 'templates/arboles/arbol8.html',
        controller: 'PlantasCtrl'
      }
    }
  })
  //Pantalla Arbol 8.1
  .state('app.arbol8Descripcion', {
    url: '/arbol8Descripcion',
    views: {
      'menuContent': {
        templateUrl: 'templates/arboles/arbol8Descripcion.html',
        controller: 'PlantasCtrl'
      }
    }
  })

  //Pantalla Arbol 9
  .state('app.arbol9', {
    url: '/arbol9',
    views: {
      'menuContent': {
        templateUrl: 'templates/arboles/arbol9.html',
        controller: 'PlantasCtrl'
      }
    }
  })
  //Pantalla Arbol 9.1
  .state('app.arbol9Descripcion', {
    url: '/arbol9Descripcion',
    views: {
      'menuContent': {
        templateUrl: 'templates/arboles/arbol9Descripcion.html',
        controller: 'PlantasCtrl'
      }
    }
  })

  //Pantalla Arbol 10
  .state('app.arbol10', {
    url: '/arbol10',
    views: {
      'menuContent': {
        templateUrl: 'templates/arboles/arbol10.html',
        controller: 'PlantasCtrl'
      }
    }
  })
  //Pantalla Arbol 10.1
  .state('app.arbol10Descripcion', {
    url: '/arbol10Descripcion',
    views: {
      'menuContent': {
        templateUrl: 'templates/arboles/arbol10Descripcion.html',
        controller: 'PlantasCtrl'
      }
    }
  })

  //Pantalla Arbol 11
  .state('app.arbol11', {
    url: '/arbol11',
    views: {
      'menuContent': {
        templateUrl: 'templates/arboles/arbol11.html',
        controller: 'PlantasCtrl'
      }
    }
  })
  //Pantalla Arbol 11.1
  .state('app.arbol11Descripcion', {
    url: '/arbol11Descripcion',
    views: {
      'menuContent': {
        templateUrl: 'templates/arboles/arbol11Descripcion.html',
        controller: 'PlantasCtrl'
      }
    }
  })

  //Pantalla Arbol 12
  .state('app.arbol12', {
    url: '/arbol12',
    views: {
      'menuContent': {
        templateUrl: 'templates/arboles/arbol12.html',
        controller: 'PlantasCtrl'
      }
    }
  })
  //Pantalla Arbol 12.1
  .state('app.arbol12Descripcion', {
    url: '/arbol12Descripcion',
    views: {
      'menuContent': {
        templateUrl: 'templates/arboles/arbol12Descripcion.html',
        controller: 'PlantasCtrl'
      }
    }
  })

  //Pantalla Arbol 13
  .state('app.arbol13', {
    url: '/arbol13',
    views: {
      'menuContent': {
        templateUrl: 'templates/arboles/arbol13.html',
        controller: 'PlantasCtrl'
      }
    }
  })
  //Pantalla Arbol 13.1
  .state('app.arbol13Descripcion', {
    url: '/arbol13Descripcion',
    views: {
      'menuContent': {
        templateUrl: 'templates/arboles/arbol13Descripcion.html',
        controller: 'PlantasCtrl'
      }
    }
  })

  //Pantalla Arbol 14
  .state('app.arbol14', {
    url: '/arbol14',
    views: {
      'menuContent': {
        templateUrl: 'templates/arboles/arbol14.html',
        controller: 'PlantasCtrl'
      }
    }
  })
  //Pantalla Arbol 14.1
  .state('app.arbol14Descripcion', {
    url: '/arbol14Descripcion',
    views: {
      'menuContent': {
        templateUrl: 'templates/arboles/arbol14Descripcion.html',
        controller: 'PlantasCtrl'
      }
    }
  })

  //Pantalla Arbol 15
  .state('app.arbol15', {
    url: '/arbol15',
    views: {
      'menuContent': {
        templateUrl: 'templates/arboles/arbol15.html',
        controller: 'PlantasCtrl'
      }
    }
  })
  //Pantalla Arbol 15.1
  .state('app.arbol15Descripcion', {
    url: '/arbol15Descripcion',
    views: {
      'menuContent': {
        templateUrl: 'templates/arboles/arbol15Descripcion.html',
        controller: 'PlantasCtrl'
      }
    }
  })

  //Pantalla Arbol 16
  .state('app.arbol16', {
    url: '/arbol16',
    views: {
      'menuContent': {
        templateUrl: 'templates/arboles/arbol16.html',
        controller: 'PlantasCtrl'
      }
    }
  })
  //Pantalla Arbol 16.1
  .state('app.arbol16Descripcion', {
    url: '/arbol16Descripcion',
    views: {
      'menuContent': {
        templateUrl: 'templates/arboles/arbol16Descripcion.html',
        controller: 'PlantasCtrl'
      }
    }
  })
  // ************FIN ARBOLES *****************

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
