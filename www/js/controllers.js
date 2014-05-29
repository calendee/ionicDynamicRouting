angular.module('starter.controllers', [])

    .controller("TabController", function($scope, DynamicStateService, TabsService) {
        console.log("TabController!");

        $scope.data = {};

        TabsService.getTabs().then(
            function(tabs) {
                $scope.data.tabs = tabs;
            }
        );

    })