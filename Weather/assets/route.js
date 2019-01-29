app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "assets/pages/home.htm",
        controller : "homeController"
    })
    .when("/forecast", {
        templateUrl : "assets/pages/forcast.html",
        controller : "forecastController"
    })
    .when("/forecast/:page", {
        templateUrl : "assets/pages/forcast.html",
        controller : "forecastController"
    })
   
});
