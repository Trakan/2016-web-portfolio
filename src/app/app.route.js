export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/portfolio/portfolio.html',
      controller: 'PortfolioController',
      controllerAs: 'PC'
    });

  $urlRouterProvider.otherwise('/');
}
