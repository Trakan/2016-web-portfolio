export class ConfigService {

  constructor ($log) {
    'ngInject';

    this.$log = $log;

    this.MENU_OPTS = {

       nav: [
         {
           label: 'portfolio',
           route: 'home',
           icon: 'fa-briefcase'
         },
         {
           label: 'resume',
           route: 'resume',
           icon: 'fa-file-text'
         },
         {
           label: 'bio',
           route: 'bio',
           icon: 'fa-user'
         },
         {
           label: 'contact',
           route: 'contact',
           icon: 'fa-envelope'
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
          label: 'Meetups',
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
