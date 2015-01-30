var app = angular.module('aswadeApp', ['ui.router', 'mm.foundation']);
app.config(function ($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/beranda");
    //
    // Now set up the states
    $stateProvider
            .state('beranda', {
                url: "/beranda",
                templateUrl: "partials/beranda.html"
            })
            .state('designers', {
                url: "/designers",
                templateUrl: "partials/designers.html",
                controller: "designerCtrl"
            })
            .state('detail-design', {
                url: "/detail-design",
                templateUrl: "partials/detail_design.html",
                controller: "designerCtrl"
            })
            .state('detail-designer', {
                url: "/detail-designer",
                templateUrl: "partials/detail_designer.html",
                controller: "designerCtrl"
            })
            .state('about', {
                url: "/about",
                templateUrl: "partials/about.html"
            })
            .state('searh-result', {
                url: "/search-result",
                templateUrl: "partials/search_result.html"
            })
            .state('login', {
                url: "/login",
                templateUrl: "partials/login.html"
            });
});
app.controller('aswadeCtrl', function ($scope) {
});

app.controller('berandaCtrl', function ($scope, $modal) {
    $scope.gallery = [1, 2, 3, 4];
    $scope.detailDesign = function () {

       
    };
});

app.controller('aboutCtrl', function ($scope) {
});

app.controller('loginCtrl', function ($scope) {
});

app.controller('designerCtrl', function ($scope) {
    $scope.gallery = [1, 2, 3, 4];
});

app.controller('detailDesignCtrl', function ($scope) {
$scope.gallery = [1, 2];
});



