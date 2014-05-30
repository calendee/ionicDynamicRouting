angular.module("starter.services", [])

    .factory("StateCreator", ["$state", "$rootScope", function($state, $rootScope) {

        var createState = function(parentState, stateDetails) {

            var stateConfig = {};
            stateConfig.url = stateDetails.stateUrl;
            stateConfig.views = {};
            stateConfig.views[stateDetails.viewName] = {};
            stateConfig.views[stateDetails.viewName].templateUrl = stateDetails.template;

            switch(stateDetails.viewType) {
                case "list":
                    stateConfig.views[stateDetails.viewName].controller = "ListController";

                    var resolve = {
                        ListData : [ "DataSource", function(DataSource) {
                            return DataSource.getData(stateDetails.dataSource);
                        }]
                    };
                    stateConfig.resolve = resolve;

                    break;
            }

            app.stateProvider.state(parentState + "." + stateDetails.state, stateConfig);

            $rootScope.$broadcast("stateCreated", {
                "state"         : stateDetails.state,
                "parentState"   : parentState
            });

        }

        return {
            createState : createState
        }

    }])

    .factory("TabsService", ["$q", "$timeout", function($q, $timeout) {

        var tabs = [
            {
                "label"         : "Dash",
                "parentState"   : "tab",
                "state"         : "dash",
                "viewName"      : "tab-dash",
                "stateUrl"      : "/dash",
                "url"           : "#/tab/dash",
                "template"      : "templates/tab-dash.html",
                "icon"          : "ion-home",
                "viewType"      : "",
                "dataSource"    : ""
            },
            {
                "label"         : "Friends",
                "parentState"   : "tab",
                "state"         : "friends",
                "viewName"      : "tab-friends",
                "stateUrl"      : "/friends",
                "url"           : "#/tab/friends",
                "template"      : "templates/tab-friends.html",
                "icon"          : "ion-heart",
                "viewType"      : "list",
                "dataSource"    : "friends"
            },
            {
                "label"         : "Account",
                "parentState"   : "tab",
                "state"         : "account",
                "viewName"      : "tab-account",
                "stateUrl"      : "/account",
                "url"           : "#/tab/account",
                "template"      : "templates/tab-account.html",
                "icon"          : "ion-gear-b",
                "viewType"      : "",
                "dataSource"    : ""
            }
        ];

        var getTabs = function() {

            var deferred = $q.defer();

            $timeout( function() {
                deferred.resolve(tabs);
            }, 500);

            return deferred.promise;
        };

        return {
            getTabs : getTabs
        };

    }])

    .factory("DataSource", ["$q", "$timeout", function($q, $timeout) {

        var data = {

            "friends" : [
                {
                    "id"        : "ab0d07a8-4746-4047-8a92-a739a7ef7e94",
                    "firstName" : "John",
                    "lastName"  : "Doe"
                },
                {
                    "id"        : "01a3d0f2-f110-4d45-9d6c-8e1b4effbb7f",
                    "firstName" : "Jane",
                    "lastName"  : "Doe"
                }
            ]
        };


        var getData = function(dataProperty) {

            var deferred = $q.defer();

            deferred.resolve(data[dataProperty]);

            return deferred.promise;

        };

        return {
            getData : getData
        };
    }]);
