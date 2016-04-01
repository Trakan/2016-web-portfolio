/* global moment:false */

// configs
import { config } from './app.config';
import { routerConfig } from './app.route';

// make angular aware of controller modules
import { PortfolioController } from './views/portfolio/portfolio.controller';
import { ContactController } from './views/contact/contact.controller';
import { BioController } from './views/bio/bio.controller';
import { ResumeController } from './views/resume/resume.controller';

// services
import { ConfigService } from '../app/services/config/config.service';

// directives/components
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
  .controller('ContactController', ContactController)
  .controller('BioController', BioController)
  .controller('ResumeController', ResumeController)

  .directive('navbar', NavbarDirective)
  .directive('footnav', FootNavDirective)
;
