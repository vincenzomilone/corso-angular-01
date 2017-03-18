(function() {
  'use strict';

  angular
    .module('corsoAngular01')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        url: '',        
        views: {
          'layout': {
            templateUrl: 'app/main/main.html',
            controller: 'MainController',
            controllerAs: 'main'
          }
        }
      });

    $urlRouterProvider.otherwise('/users');
  }

})();
