(function () {
  var module = angular.module("app", [
    'app.home'
    , 'ui.bootstrap'
  ]);

  module.config(AppConfig);

  AppConfig.$inject = [];

  function AppConfig() { }
})();
