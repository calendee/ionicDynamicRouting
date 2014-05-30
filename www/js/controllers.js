angular.module('starter.controllers', [])

    .controller("LoadingController", ["$scope", "$state", "StateCreator", "TabsService", function($scope, $state, StateCreator, TabsService) {

        TabsService.getTabs().then(

            function(tabs) {

                angular.forEach(tabs, function(tab) {

                    StateCreator.createState(tab.parentState, tab);

                });

                $state.go(tabs[0].parentState + "." + tabs[0].state);

            }
        );

    }])

    .controller("TabController", ["$scope", "TabsService", function($scope, TabsService) {

        $scope.data = {};

        TabsService.getTabs().then(
            function(tabs) {
                $scope.data.tabs = tabs;
            }
        );

    }])

    .controller("ListController", ["$scope", "ListData", function($scope, ListData) {

        $scope.data.items = ListData;

    }]);