'use strict'

app.config(function($stateProvider, $urlRouterProvider){
	$stateProvider.state('home', {
		url: '/home',
		templateUrl: '/public/js/home/home.template.html'
	});
	$urlRouterProvider.otherwise('/home');
});