export class ConfigService {

  constructor ($log) {
    'ngInject';

    this.$log = $log;

    this.MENU_OPTS = {

       nav: [
         {
           label: 'portfolio',
           route: '/',
           active: true
         },

         {
           label: 'resume',
           route: '/',
           active: true
         },

         {
           label: 'bio',
           route: '/',
           active: true
         },

         {
           label: 'contact',
           route: '/',
           active: true
         }
       ],

      footer: [
        {
          label: 'Twitter',
          url: 'http://www.trakan.com',
          external: true
        },
        {
          label: 'Github',
          url: 'http://www.trakan.com',
          external: true
        },
        {
          label: 'Codedrops',
          url: 'http://www.trakan.com',
          external: true
        },
        {
          label: 'Contact',
          url: 'http://www.trakan.com',
          external: true
        }
      ]
    };

  } //<-- End of Constructor

}
