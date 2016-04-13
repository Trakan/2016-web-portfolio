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
  constructor ($scope, $rootScope, $window, ConfigService) {
    'ngInject';

    this.navMenuOptions = ConfigService.MENU_OPTS.nav;
    this.headerTitle = ConfigService.TITLE;

    let menuShrinkTrigger = ConfigService.NAV_SETTINGS.menuShrinkTriggerClass;

    /** EVENT HANDLING **/

    $rootScope.$on('initMenu', (event, args) => {

      // scroll to top on route change
      let scrollThreshold = document.querySelector(menuShrinkTrigger).offsetHeight;
      let scrollToPosY = 0;

      //if user already scrolled past point where menu shrunk, keep it shrunk when scroll back to the top
      if ( args.curScrollPos >= scrollThreshold ) {
        scrollToPosY = scrollThreshold; //todo - animate; make this smoother
      }

      $window.scrollTo(0, scrollToPosY); //todo - animate to make this smoother


      // highlight current route in navbar
      // todo: use underscore to get proper value from config
      //args.routeName

    });



    // shrink/fix navbar on scroll position, using jqlite
    // FIXME - how to use $document to accomplish this, instead of document
    let navMenuElement = angular.element(document.querySelector('.navbar'));
    let fixedNavClass = 'affix-nav';
    let scrollThreshold = document.querySelector(menuShrinkTrigger).offsetHeight;

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
