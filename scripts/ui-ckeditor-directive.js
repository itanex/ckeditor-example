(function () {
  'use strict';

  var module = angular.module('app');

  module.directive('uiCkeditor', Directive);

  Directive.$inject = [];

  function Directive() {
    return {
      restrict: 'A',
      require: 'ngModel',
      replace: true,
      scope: {
        uiOptions: '='
      },
      link: function (scope, element, attrs, controller) {

        var editor = CKEDITOR.replace(element[0], scope.uiOptions);

        if (!controller) {
          return;
        }

        editor.on('instanceReady', function () {
          editor.setData(controller.$viewValue);
        });

        editor.on('change', updateModel);
        editor.on('key', updateModel);
        editor.on('dataReady', updateModel);

        function updateModel(event) {
          controller.$setViewValue(editor.getData());
        }

        scope.$on("$destroy", function () {
          editor.removeAllListeners();
        }
        );

      }
    };
  }
})();
