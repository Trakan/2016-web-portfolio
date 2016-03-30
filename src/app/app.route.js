export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'MC',
      resolve: {
        resolvedImages: () => {
          return {};
        }
      }
    });

  $urlRouterProvider.otherwise('/');
}
