angular.module('starter.controllers', [])

    .controller("LoadingController", function($scope, $state, DynamicStateService) {

        $scope.$on('statesReady', function(event, data) {
            $state.go(data.startingState);
        });

    })

    .controller("TabController", function($scope, DynamicStateService, TabsService) {

        $scope.data = {};

        TabsService.getTabs().then(
            function(tabs) {
                $scope.data.tabs = tabs;
            }
        );

    })