(function () {
  'use strict';

  var module = angular.module('app.home', []);

  module.controller('HomeController', Controller);

  Controller.$inject = ['$scope', '$sce', 'SettingsDialogProvider'];

  function Controller($scope, $sce, SettingsDialogProvider) {

    $scope.message = {
      body: 'this is a wonder'
    };

    $scope.options = {
      toolbar: [
        { name: 'clipboard', items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord'] },
        { name: 'editing', items: ['Undo', 'Redo'] },
        { name: 'links', items: ['Link', 'Unlink', 'Anchor'] },
        { name: 'insert', items: ['Image', 'Table', 'HorizontalRule', 'SpecialChar'] },
        { name: 'basicstyles', items: ['Bold', 'Italic', 'Strike', '-', 'RemoveFormat'] },
        { name: 'paragraph', items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote'] },
        { name: 'styles', items: ['Styles', 'Format'] }
      ]
    };

    $scope.renderHtml = null;

    $scope.updateHtml = function () {
      console.log("ng-change handler called: updateHtml")
      $scope.renderHtml = $sce.trustAsHtml($scope.message.body);
    };

    $scope.openSettingsModal = function () {
      SettingsDialogProvider.open($scope.options, function (settings) {
        $scope.options = settings;
      });
    };
  }
})();
