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
  constructor ($state, $scope, $window, ConfigService) {
    'ngInject';

    this.$state = $state;
    this.navMenuOptions = ConfigService.MENU_OPTS.nav;
    this.headerTitle = ConfigService.TITLE;

    /** EVENT HANDLING **/

    // shrink/fix navbar on scroll position, using jqlite
    // FIXME - how to use $document to accomplish this, instead of document
    let navMenuElement = angular.element(document.querySelector('.navbar'));
    let fixedNavClass = 'affix-nav';
    let scrollThreshold = document.querySelector('.navbar-header').offsetHeight;

    angular.element($window).bind('scroll', () => {
      if ( ($window.scrollY > scrollThreshold) && (!navMenuElement.hasClass(fixedNavClass)) ) {
        navMenuElement.addClass(fixedNavClass);
      } else if ( ($window.scrollY <= scrollThreshold) && (navMenuElement.hasClass(fixedNavClass)) ) {
        navMenuElement.removeClass(fixedNavClass);
      }
      $scope.$apply(); // scroll runs outside normal digest cycle
    });

  }
}
