angular.module('starter.services', [])


    .service("DynamicStateService", function($state, TabsService, $timeout) {

        var generateTabs = function(tabs) {

            angular.forEach(tabs, function(tab) {

                var stateConfig = {};
                stateConfig.url = tab.stateUrl;
                stateConfig.views = {};
                stateConfig.views[tab.viewName] = {};
                stateConfig.views[tab.viewName].templateUrl = tab.template;

                app.stateProvider.state(tab.state, stateConfig)

            });

            $state.go(tabs[0].state);

        }

        TabsService.getTabs().then(
            function(tabs) {
                generateTabs(tabs);
            }
        )

    })

    .factory("TabsService", function($q, $timeout) {

        var tabs = [
            {
                "label"     : "Dash",
                "state"     : "tab.dash",
                "viewName"  : "tab-dash",
                "stateUrl"  : "/dash",
                "url"       : "#/tab/dash",
                "template"  : "templates/tab-dash.html",
                "icon"      : "ion-home"
            },
            {
                "label"     : "Friends",
                "state"     : "tab.friends",
                "viewName"  : "tab-friends",
                "stateUrl"  : "/friends",
                "url"       : "#/tab/friends",
                "template"  : "templates/tab-friends.html",
                "icon"      : "ion-heart"
            },
            {
                "label"     : "Account",
                "state"     : "tab.account",
                "viewName"  : "tab-account",
                "stateUrl"  : "/account",
                "url"       : "#/tab/account",
                "template"  : "templates/tab-account.html",
                "icon"      : "ion-gear-b"
            },
        ];

        var getTabs = function() {

            var deferred = $q.defer();

            $timeout( function() {
                deferred.resolve(tabs);
            }, 200)

            return deferred.promise;
        };

        return {
            getTabs : getTabs
        };
    })
