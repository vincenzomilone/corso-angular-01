(function() {
  'use strict';

  angular
    .module('corsoAngular01')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
