export class ConfigService {

  constructor ($log) {
    'ngInject';

    this.$log = $log;

    this.TITLE = "Mike Trakan";

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
         /* TODO - add these pages phase 2 ,
         {
           label: 'bio',
           route: 'bio',
           icon: 'fa-user'
         },
         */
         {
           label: 'contact',
           route: 'contact',
           icon: 'fa-envelope'
         }
       ],

      footer: [
        /*
        {
          label: 'Twitter',
          url: 'https://twitter.com/miketrakan',
          icon: 'twitter1'
        },
        {
          label: 'Codedrops',
          url: 'http://www.trakan.com',
          icon: ''
        },
        */
        {
          label: 'LinkedIn',
          url: 'https://www.linkedin.com/in/trakan',
          icon: 'linkedin'
        },
        {
          label: 'Github',
          url: 'https://github.com/Trakan',
          icon: 'github'
        },
        {
          label: 'Meetups',
          url: 'http://www.meetup.com/members/54405852/',
          icon: 'meetup'
        },
        {
          label: 'Contact',
          state: 'home',
          icon: 'email'
        }
      ]
    };

  } //<-- End of Constructor
}
