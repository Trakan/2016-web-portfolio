export function NavbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/navbar/navbar.html',
    controller: NavbarController,
    controllerAs: 'ND',
    bindToController: true, // controllerAs functionality
    replace: true
  };

  return directive;
}

class NavbarController {
  constructor ($state, ConfigService) {
    'ngInject';

    this.$state = $state;
    this.navMenuOptions = ConfigService.MENU_OPTS.nav;
  }
}
