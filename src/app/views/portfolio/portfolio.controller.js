export class PortfolioController {

  // controller written as a controller function, exported as ES6 module
  constructor ($log, $state, DataService) {
    'ngInject';

    this.$log = $log;

    // UI ROUTER
    this.$state = $state;

    // CUSTOM SERVICES
    this.$Data = DataService;

    // DATA
    this.content = {};

    /** INIT APP **/
    this.initView();

  } //<-- End of Constructor


  loadView() {
    let that = this;

    // use callback to handle async response
    this.$Data.getData('portfolio', (response) => {
      that.content = response;
    });
  }


  initView() {
    switch (this.$state.current.name) {
      case 'home':
        this.loadView();
        break;
    }
  }
}
