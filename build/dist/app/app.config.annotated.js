"use strict";!function(){function e(e){e.when("/",{controller:"simpleController",controllerAs:"vm",templateUrl:"partials/View1.html",css:"css/main.css"}).when("/view2",{controller:"simpleController",controllerAs:"vm",templateUrl:"partials/View2.html",css:"css/main.css"}).otherwise({redirectTo:"/"})}angular.module("app").config(e),e.$inject=["$routeProvider"]}();