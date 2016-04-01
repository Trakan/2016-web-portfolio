export class DataService {

  constructor($log, $state, $http, ConfigService) {
    'ngInject';

    this.$log = $log;
    this.$http = $http;

    // UI ROUTER
    this.$state = $state;

    // CUSTOM SERVICES
    this.$Config = ConfigService;

  }  //<-- End of Constructor


  // todo - error handling

  getData(type, callbackResponse) {
    this.$http.get('app/data/' + type + '.json')

      .success((response) => {
        callbackResponse(response[0]);
      })

      .catch((error) => {
        this.$log.debug('ERROR:', error);

        if (!error.data) {
          //no connection
          // todo this.$rootScope.$emit('showError', '500 message');
        } else {
          // todo this.$rootScope.$emit('showError', error.data.error);
        }

      }
    );
  }

}
