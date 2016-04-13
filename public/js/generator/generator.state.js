'use strict'

app.config(function($stateProvider, $urlRouterProvider){
	$stateProvider.state('generator', {
		url: '/generator',
		templateUrl: '/public/js/generator/generator.template.html',
		controller: 'GeneratorController'
	});
});