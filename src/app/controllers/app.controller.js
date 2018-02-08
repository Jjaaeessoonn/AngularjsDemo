'use strict';
(function() {
	angular
		.module("app")
		.controller("simpleController", simpleController);

		simpleController.$inject = ['simpleFactory'];
		
		/* @ngInject */
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
					var index = 0;
					for ( index in vm.customers ){
						if (vm.customers[index].name.toUpperCase() == vm.newCustomer.name.toUpperCase()){
							alert("Can't add duplicate customer name!");
							return;
						}
						//console.log(vm.customers[index]);
					}

					vm.customers.push(vm.newCustomer);
				}
				else {
					alert("Please fill out the name and city fields!");
				}
			};

			function removeCustomer() {
				var counter = -1;

				if (vm.name == "") {
					return;
				}
				for (var x in vm.customers) {
					if (vm.customers[x].name.toUpperCase() == vm.name.toUpperCase()) {
						//temp = x;
						counter = x;
						break;
					}
					
				}
				if (counter < 0){
					alert("Person not found!");
					return;
				}
				
				vm.customers.splice(counter, 1);
			}

			
		}

})();