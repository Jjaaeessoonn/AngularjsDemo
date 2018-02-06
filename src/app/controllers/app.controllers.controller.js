'use strict';
(function() {
	angular
		.module("app")
		.controller("simpleController", simpleController);

		simpleController.$inject = ['simpleFactory'];
		
		function simpleController(simpleFactory) {
			var vm = this;
			vm.search = "";
			vm.name = "";
			vm.newCustomer = {name: "", city: ""};
			vm.customers = simpleFactory.getCustomers();
			vm.orders = simpleFactory.getOrders();
			vm.addCustomer = addCustomer;
			vm.removeCustomer = removeCustomer;

			function addCustomer() {
				if (vm.newCustomer.name != "" && vm.newCustomer.city != "") {
					vm.customers.push(vm.newCustomer);
				}
				else {
					alert("Please fill out the name and city fields!");
				}
			};

			function removeCustomer() {
				var temp = {};
				var counter = 0;
				for (var x in vm.customers) {
					if (x.name.toUpperCase() == vm.name.toUpperCase()) {
						temp = x;
					}
					counter+=1;

				}
				if (Object.keys(temp).length === 0 && temp.constructor === Object) {
					return;  // if still an empty object
				}
				vm.customers.splice(counter, 1);
			}

			
		}

})();