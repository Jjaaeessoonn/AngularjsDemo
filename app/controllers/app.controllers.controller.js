angular
	.module("app")
	.controller("simpleController", simpleController);

	//simpleController.$inject = ['$scope','simpleFactory'];
	
	function simpleController($scope, simpleFactory) {
		$scope.customers = simpleFactory.getCustomers();

		$scope.addCustomer = function() {
			$scope.customers.push(
				{
					name: $scope.newCustomer.name,
					city: $scope.newCustomer.city
				}
			);
		};

		/*$scope.goToState = function(stateName) {
			$state.go('.'+stateName);
		};*/
	}