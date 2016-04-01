export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/views/portfolio/portfolio.html',
      controller: 'PortfolioController',
      controllerAs: 'PC'
    });

  $urlRouterProvider.otherwise('/');
}
