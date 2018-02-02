
(function() {
	'use strict';
	
	angular
		.module("app")
		.controller("simpleController", simpleController);

		//simpleController.$inject = ['$scope','simpleFactory'];
		
		function simpleController($scope, simpleFactory) {
			var vm = this;
			vm.customers = simpleFactory.getCustomers();
			vm.orders = simpleFactory.getOrders();
			vm.addCustomer = addCustomer;
			vm.removeCustomer = removeCustomer;

			function addCustomer() {
				vm.customers.push(
					{
						name: $scope.newCustomer.name,
						city: $scope.newCustomer.city
					}
				);
			};

			function removeCustomer(cust) {
				var temp = {};
				var counter = 0;
				for (var x in vm.customers) {
					if (x.name.toUpperCase() == cust.toUpperCase()) {
						temp = x;
					}
					counter++;

				}
				if (Object.keys(temp).length === 0 && temp.constructor === Object) {
					return;  // no matching entries
				}
				vm.customers.splice(counter, 0);
			}

			
		}

})();