var app = angular.module("starter", ["ionic", "starter.controllers", "starter.services"])

    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if(window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function($stateProvider, $urlRouterProvider) {

        app.stateProvider = $stateProvider;

        $stateProvider

            // setup an abstract state for the tabs directive
            .state("tab", {
                "url"           : "/tab",
                "abstract"      : true,
                "templateUrl"   : "templates/tabs.html"
            })

            .state("loading", {
                "url"           : "/loading",
                "templateUrl"   : "templates/loading.html",
                "controller"    : "LoadingController"
            });

        // Start on the loading view which will wait for states to be gathered and generated
        $urlRouterProvider.otherwise("loading");

    });