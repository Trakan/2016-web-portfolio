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
  constructor ($scope, $rootScope, $document, $window, ConfigService) {
    'ngInject';

    this.navMenuOptions = ConfigService.MENU_OPTS.nav;
    this.headerTitle = ConfigService.TITLE;

    let menuShrinkTrigger = ConfigService.NAV_SETTINGS.menuShrinkTriggerClass;

    /** EVENT HANDLING **/

    let initMenu = $rootScope.$on('initMenu', (event, args) => {
      // scroll to top on route change
      let scrollThreshold = $document[0].querySelectorAll(menuShrinkTrigger)[0].offsetHeight;
      //if user already scrolled past point where menu shrunk, keep it shrunk when scroll back to the top
      let scrollToPosY = ( args.curScrollPos >= scrollThreshold ) ? scrollThreshold : 0;
      $window.scrollTo(0, scrollToPosY); //todo - animate to make this smoother
    });

    // shrink/fix navbar on scroll position, using jqlite
    let navMenuElement = angular.element($document[0].querySelectorAll('.navbar')[0]);
    let fixedNavClass = 'affix-nav';
    let scrollThreshold = $document[0].querySelectorAll(menuShrinkTrigger)[0].offsetHeight;

    angular.element($window).bind('scroll', () => {
      if ( ($window.scrollY > scrollThreshold) && (!navMenuElement.hasClass(fixedNavClass)) ) {
        navMenuElement.addClass(fixedNavClass);
      } else if ( ($window.scrollY <= scrollThreshold) && (navMenuElement.hasClass(fixedNavClass)) ) {
        navMenuElement.removeClass(fixedNavClass);
      }
      $scope.$apply(); // scroll runs outside normal digest cycle
    });

    $rootScope.$on('$destroy', initMenu);
  }
}
