app.controller("homeController",["$scope","cityService",'inputService',"$location",function($scope,cityService,inputService,$location){

	$scope.city =  cityService.city;
	$scope.$watch('city',function(){
		cityService.city = $scope.city;
	});
	
	$scope.input =  inputService.input;
	$scope.$watch('input',function(){
		inputService.input = $scope.input;
	});

	 $scope.submit = function(){
	 	$location.path("/forecast");
	 }

}]);


app.controller("forecastController",["$scope","cityService","$http","$resource" ,"$log","inputService",'$routeParams',function($scope,cityService,$http,$resource,$log,inputService,$routeParams){

 $scope.city =  cityService.city;
 $scope.input = inputService.input;
$scope.page = $routeParams.page;


	 $http.get('https://openclipart.org/search/json/?&query=animal&page='+$scope.page+'&amount='+$scope.input)
   		.then(function (result){ 
    $scope.ProductCollections = result.data
  
  }),function(error){
  alert(data)
  }

}]);
