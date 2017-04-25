(function() {
  'use strict';

  angular.module('SpotifySearchApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    // Defining UI States
    $stateProvider

    .state('home', {
      url: '/',
      templateUrl: 'src/spotifysearchapp/home/home.template.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })

    ;
  }

})();
