'use strict'

app.config(function($stateProvider, $urlRouterProvider){
	$stateProvider.state('generator', {
		url: '/home/generator',
		templateUrl: '/public/js/generator/generator.template.html'
	});
	$urlRouterProvider.otherwise('/home');
});