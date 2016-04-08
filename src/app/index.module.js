// configs
import { config } from './app.config';
import { routerConfig } from './app.route';

// make angular aware of controller modules
import { PortfolioController } from './views/portfolio/portfolio.controller';
import { ContactController } from './views/contact/contact.controller';
import { ResumeController } from './views/resume/resume.controller';

// services
import { ConfigService } from '../app/services/config/config.service';
import { DataService } from '../app/services/data/data.service';

// directives/components
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { FootNavDirective } from '../app/components/footnav/footnav.directive';


// TODO - ARIA/accessibility

angular.module('uiMikeTrakan', [
  'ngSanitize',
  'ngAria',
  'ui.router'
])

  .config(config)
  .config(routerConfig)

  .service('ConfigService', ConfigService)
  .service('DataService', DataService)

  .controller('PortfolioController', PortfolioController)
  .controller('ContactController', ContactController)
  .controller('ResumeController', ResumeController)

  .directive('navbar', NavbarDirective)
  .directive('footnav', FootNavDirective)
;
