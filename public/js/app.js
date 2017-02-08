angular.module("TestApp", [])
	.controller("TestController", function($http, $scope) {
		$http.get("/data")
			.then(function(response) {
				if (response.status >= 400) {
					$scope.error = [
						"There was an error",
						response.status
						].join(":");
				} else {
					$scope.data = response.data;
				}
			}, function(error) {
				console.log(error);
				$scope.error = [
					"There was an error",
					error.data,
					error.status
					].join(":");
			});
	});