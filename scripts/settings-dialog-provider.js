(function () {
  'use strict';

  var module = angular.module('app.home');

  module.provider('SettingsDialogProvider', Provider);

  function Provider() {

    this.$get = Dialog;

    Dialog.$inject = ['$uibModal'];

    function Dialog($uibModal) {

      DialogController.$inject = ['$scope', '$uibModalInstance', 'settings'];

      function DialogController($scope, $uibModalInstance, settings) {
        $scope.settings = settings;

        $scope.save = function () {
          $uibModalInstance.close($scope.settings);
        };

        $scope.cancel = function () {
          $uibModalInstance.dismiss('cancel');
        };
      }

      return {
        open: function (providedSettings, successCallback, errorCallback, notifyCallback) {
          var modalInstance = $uibModal.open({
            templateUrl: 'settings-dialog.html',
            controller: DialogController,
            backdrop: 'static',
            keyboard: false,
            resolve: {
              settings: function () {
                return providedSettings;
              }
            }
          });

          modalInstance.result.then(successCallback, errorCallback, notifyCallback);
        }
      };
    }
  }
})();
