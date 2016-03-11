angular
.module('metabase.admin.datamodel', [
    'metabase.admin.datamodel.controllers'
])
.config(['$routeProvider', function ($routeProvider) {
    var metadataRoute = {
        template: '<div class="full-height spread" mb-react-component="MetadataEditor"></div>',
        controller: 'MetadataEditor',
        resolve: {
            databases: ['Metabase', function(Metabase) {
                return Metabase.db_list().$promise
            }]
        }
    };

    $routeProvider.when('/metabase/admin/datamodel/database', metadataRoute);
    $routeProvider.when('/metabase/admin/datamodel/database/:databaseId', metadataRoute);
    $routeProvider.when('/metabase/admin/datamodel/database/:databaseId/:mode', metadataRoute);
    $routeProvider.when('/metabase/admin/datamodel/database/:databaseId/:mode/:tableId', metadataRoute);
}]);
