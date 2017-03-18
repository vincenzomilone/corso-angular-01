(function() {
  'use strict';

  angular
    .module('corsoAngular01')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
