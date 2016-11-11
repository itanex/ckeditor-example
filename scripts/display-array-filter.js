(function () {
  var module = angular.module('app');

  module.filter('displayArray', Filter);

  Filter.$inject = [];
  function Filter() {
    return function (input) {
      if (Array.isArray(input)) {

        var result = '[\n\t' +
          input.join(',\n\t') +
          '\n]';

        return result;
      }

      return input;
    }
  }
})();
