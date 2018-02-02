
(function(){
	'use strict';
	angular
		.module("app")
		.factory("simpleFactory", simpleFactory);
		
		function simpleFactory(){
			var factory = {
				customers: [
					{name: "John Smith", city: "Phoenix"},
					{name: "John Doe", city: "New York"},
					{name: "Jane Doe", city: "San Francisco"}
				],
				orders: [
					{title: "Shipping of flowers", name: customers[1].name, date: "12-12-2017"},
					{title: "Shipping of flowers", name: "Coco", date: "11-05-2017"},
					{title: "Shipping of flowers", name: customers[2].name, date: "01-05-2018"}
				],
				getCustomers: getCustomers(),
				getOrders: getOrders()
			};
			

			
			
			return factory;

			function getCustomers() {
				return customers;
			};
			function getOrders() {
				return orders;
			};
		}

})();