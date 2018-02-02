//IIFE keeps all vars in hera as local and disappears after it's called; avoids collisions when code is minified and prevenst making global vars

(function(){
	'use strict';
	angular
		.module("app")
		.config(routing);

		//routing.$inject = ['$routeProvider'];

		function routing($routeProvider) {
			$routeProvider
				.when('/', {
					controller: 'simpleController',
					controllerAs: 'vm',
					templateUrl: 'partials/View1.html',
					css: 'css/main.css'
				})
				.when('/view2', {
					controller: 'simpleController',
					controllerAs: 'vm',
					templateUrl: 'partials/View2.html',
					css: 'css/main.css'
				})
				.otherwise({ redirectTo: '/' });
		}
})();