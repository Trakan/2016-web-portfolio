/* global moment:false */

// configs
import { config } from './app.config';
import { routerConfig } from './app.route';

// make angular aware of controller modules
import { MainController } from './main/main.controller';

// services
import { ConfigService } from '../app/services/config/config.service';

// TODO - remove any bower components we anticipated that we don't end up using, in the end
angular.module('uiMikeTrakan', [
  'ngAnimate',
  'ngCookies',
  'ngSanitize',
  'ngAria',
  'ngResource',
  'ui.router',
  'mgcrea.ngStrap'
])

  .constant('moment', moment)

  .config(config)
  .config(routerConfig)

  .service('ConfigService', ConfigService)

  .controller('MainController', MainController)

;
