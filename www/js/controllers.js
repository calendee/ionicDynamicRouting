angular.module('starter.controllers', [])

    .controller("LoadingController", ["$scope", "$state", "DynamicStateService", function($scope, $state, DynamicStateService) {

        $scope.$on('statesReady', function(event, data) {
            $state.go(data.startingState);
        });

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