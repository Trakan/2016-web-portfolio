export class ContactController {

  // controller written as a controller function, exported as ES6 module
  constructor ($log, $rootScope, $state, $window, DataService, ConfigService) {
    'ngInject';

    this.$log = $log;

    this.$window = $window;
    this.$rootScope = $rootScope;

    // UI ROUTER
    this.$state = $state;

    // CUSTOM SERVICES
    this.$Data = DataService;
    this.$Config = ConfigService;

    // DATA
    this.content = {};

    /** INIT APP **/
    this.initView();

  } //<-- End of Constructor


  loadView() {
    let that = this;

    // use callback to handle async response
    this.$Data.getData('contact', (response) => {
      that.content = response;

      // add the contact/samples links from the config file, shared with the footer
      that.content.contacts = that.$Config.MENU_OPTS.footer;
    });
  }


  initView() {
    //todo - add error handling - switch allows for graceful handing of 404 view
    switch (this.$state.current.name) {
      case 'contact':
        this.loadView();

        this.$rootScope.$emit('initMenu', {
          curScrollPos: this.$window.scrollY
        });

        break;
    }
  }
}
