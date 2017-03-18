(function() {
  'use strict';

  angular
    .module('ngUsers')
    .config(usersConfig);

  /** @ngInject */
  function usersConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app.users', {
        url: '/users',        
        views: {
          'main@app': {
            templateUrl: 'app/users/users.html',
            controller: 'UsersController',
            controllerAs: '$users'
          },
          'sidebar@app': {
            template: '<p>Sidebar</p>'
          },
          'content@app.users': {
            templateUrl: 'app/users/list/list.html'
          }
        }
      });

  }

})();
