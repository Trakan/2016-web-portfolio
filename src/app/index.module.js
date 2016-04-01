/* global moment:false */

// configs
import { config } from './app.config';
import { routerConfig } from './app.route';

// make angular aware of controller modules
import { PortfolioController } from './views/portfolio/portfolio.controller';

// services
import { ConfigService } from '../app/services/config/config.service';

// directives
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { FootNavDirective } from '../app/components/footnav/footnav.directive';

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

  .controller('PortfolioController', PortfolioController)

  .directive('navbar', NavbarDirective)
  .directive('footnav', FootNavDirective)
;
