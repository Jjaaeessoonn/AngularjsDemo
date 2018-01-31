angular
	.module("app")
	.config(routing);

	//routing.$inject = ['$routeProvider'];

	function routing($routeProvider) {
		$routeProvider
			.when('/', {
				controller: 'simpleController',
				templateUrl: 'partials/View1.html'
			})
			.when('/view2', {
				controller: 'simpleController',
				templateUrl: 'partials/View2.html'
			})
			.otherwise({ redirectTo: '/' });
	}