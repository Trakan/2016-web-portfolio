export class ResumeController {

  // controller written as a controller function, exported as ES6 module
  constructor ($log, $state, DataService) {
    'ngInject';

    this.$log = $log;

    // UI ROUTER
    this.$state = $state;

    // CUSTOM SERVICES
    this.$Data = DataService;

    // STATE VARS
    this.isLoading = false;

    // DATA
    this.content = {};

    /** INIT APP **/
    this.initView();

  } //<-- End of Constructor


  loadView() {
    let that = this;

    // use callback to handle async response
    this.$Data.getData('resume', function(response) {
      that.content = response;
      that.$log.debug('init RESUME', that.content);
    });
  }


  initView() {
    switch (this.$state.current.name) {
      case 'resume':
        this.loadView();
        break;
    }
  }

}
