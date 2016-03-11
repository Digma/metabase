var Setup = angular.module('metabase.setup', ['metabase.setup.controllers']);

Setup.config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/metabase/setup/', {
        template: '<div mb-redux-component class="full-height" />',
        controller: 'SetupController',
        resolve: {
            appState: ["AppState", function(AppState) {
                return AppState.init();
            }]
        }
    });
}]);
