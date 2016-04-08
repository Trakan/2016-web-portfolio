export class DataService {

  constructor($log, $http) {
    'ngInject';

    this.$log = $log;
    this.$http = $http;

  }  //<-- End of Constructor


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
