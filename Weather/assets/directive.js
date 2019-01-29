app.directive("details",function(){

	return{
		restrict:"AEC",
		templateUrl:"assets/directives/directive.htm",
		replace:true,
		scope:{
			animalAndBirds:'='
		}
	}
})