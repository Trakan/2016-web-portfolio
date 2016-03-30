export class MainController {

  // controller written as a controller function, exported as ES6 module
  constructor ($log, $state, $stateParams, ConfigService) {
    'ngInject';

    this.$log = $log;

    // UI ROUTER
    this.$state = $state;
    this.$stateParams = $stateParams;

    // CUSTOM SERVICES
    //this.$Data = DataService;

    // CONFIGS
    this.menuOptions = ConfigService.MENU_OPTS;

    // STATE VARS
    this.isLoading = false;


    /** HELPER FUNCTION **/
    //helper function to replicate 'for loop' in views' ng-repeats
    // TODO - move this to a utility library?
    /*
    this.forLoop = (num) => {
      return new Array(num);
    };
    */

    /** INIT APP **/
    this.initPortfolio();

  } //<-- End of Constructor


  loadPortfolio() {
    this.$log.debug('init PORTFOLIO');
  }

  initPortfolio() {

    switch (this.$state.current.name) {
      case 'home':
        this.loadPortfolio();
        break;
    }
  }

}
