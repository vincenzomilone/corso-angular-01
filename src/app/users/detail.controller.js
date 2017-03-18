(function() {
  'use strict';

  angular
    .module('ngUsers')
    .controller('UserDetailController', UserDetailController);
  function UserDetailController($stateParams) {
    this.title = 'User Detail';
    this.userId = $stateParams.userId;
  }
})();