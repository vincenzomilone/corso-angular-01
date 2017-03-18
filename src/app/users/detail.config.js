(function() {
  'use strict';

  angular
    .module('ngUsers')
    .config(usersConfig);

  /** @ngInject */
  function usersConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app.users.detail', {
        url: '/:userId',        
        views: {
          'content@app.users': {
            templateUrl: 'app/users/detail/detail.html',
            controller: 'UserDetailController',
            controllerAs: '$user'
          }
        }
      });

  }

})();
