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
  constructor ($state, $scope, $window, $document, ConfigService) {
    'ngInject';

    this.$state = $state;
    this.navMenuOptions = ConfigService.MENU_OPTS.nav;
    this.headerTitle = ConfigService.TITLE;

    /** EVENT HANDLING **/

    // shrink/fix navbar on scroll position, using jqlite
    // fixme - is there a way to do this witout jquery or document?
    let navMenuElement = angular.element(document.querySelector('.navbar'));
    let fixedNavClass = 'affix-nav';
    let scrollThreshold = document.querySelector('.navbar-header').offsetHeight;

    angular.element($window).bind('scroll', function() {
      if ( ($window.scrollY > scrollThreshold) && (!navMenuElement.hasClass(fixedNavClass)) ) {
        navMenuElement.addClass(fixedNavClass);
      } else if ( ($window.scrollY <= scrollThreshold) && (navMenuElement.hasClass(fixedNavClass)) ) {
        navMenuElement.removeClass(fixedNavClass);
      }
      $scope.$apply(); //scope.$apply() - scroll runs outside normal digest cycle
    });

  }
}
