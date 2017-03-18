(function() {
  'use strict';

  angular
    .module('ngUsers')
    .controller('UsersController', UsersController);

  /** @ngInject */
  function UsersController() {
    var vm = this;

    vm.title = "Gestione utenti";
  }
})();
