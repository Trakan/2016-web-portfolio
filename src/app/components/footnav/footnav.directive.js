export function FootNavDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/footnav/footnav.html',
    controller: FootNavController,
    controllerAs: 'FND',
    bindToController: true, // controllerAs functionality
    replace: true
  };

  return directive;
}

class FootNavController {
  constructor ($state, ConfigService) {
    'ngInject';

    this.$state = $state;
    this.footerMenuOptions = ConfigService.MENU_OPTS.footer;
  }
}
