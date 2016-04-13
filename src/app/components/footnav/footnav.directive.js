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
  constructor (ConfigService) {
    'ngInject';

    this.footerContent = ConfigService.MENU_OPTS.footer;
    this.builtNotes = ConfigService.BUILT_NOTES;

    this.currentTime = new Date();
  }
}
