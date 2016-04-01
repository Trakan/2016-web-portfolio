export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/views/portfolio/portfolio.html',
      controller: 'PortfolioController',
      controllerAs: 'PVC'
    })
    .state('resume', {
        url: '/resume',
        templateUrl: 'app/views/resume/resume.html',
        controller: 'ResumeController',
        controllerAs: 'RVC'
      })
    .state('bio', {
        url: '/bio',
        templateUrl: 'app/views/bio/bio.html',
        controller: 'BioController',
        controllerAs: 'BVC'
      })
    .state('contact', {
        url: '/contact',
        templateUrl: 'app/views/contact/contact.html',
        controller: 'ContactController',
        controllerAs: 'CVC'
      });

  $urlRouterProvider.otherwise('/');
}
