var app = angular.module('myApp', []);

app.directive('optIn', function() {
	return {
		templateUrl: 'template.html',
		restrict: 'E',
		transclude: true
	}
});