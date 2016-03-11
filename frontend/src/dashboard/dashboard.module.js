// Dashboard
var Dashboard = angular.module('metabase.dashboard', [
    'ngRoute',
    'metabase.directives',
    'metabase.services',
    'metabase.dashboard.controllers'
]);

Dashboard.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/metabase/dash/:dashId', {
        template: '<div mb-redux-component />',
        controller: 'Dashboard',
        reloadOnSearch: false
    });
}]);
