angular.module('myApp', [])
	.controller('myController', ['$http', '$scope', function($http, $scope) {
		$http.get('/user/profile').success(function(data, status, headers, config) {
			$scope.user = data;
			$scope.error = '';
		})
		.error(function(data, status, headers, confing) {
			$scope.user = {};
			$scope.error = data;
		});
	}]);
