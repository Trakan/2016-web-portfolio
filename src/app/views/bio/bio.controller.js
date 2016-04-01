export class BioController {

  // controller written as a controller function, exported as ES6 module
  constructor ($log, $state, $stateParams) {
    'ngInject';

    this.$log = $log;

    // UI ROUTER
    this.$state = $state;
    this.$stateParams = $stateParams;

    // CUSTOM SERVICES
    //this.$Data = DataService;

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
    this.initView();

  } //<-- End of Constructor


  loadView() {
    this.$log.debug('init BIO');
  }

  initView() {

    switch (this.$state.current.name) {
      case 'bio':
        this.loadView();
        break;
    }
  }

}
