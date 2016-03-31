export class ConfigService {

  constructor ($log) {
    'ngInject';

    this.$log = $log;

    this.TITLE = "Mike Trakan ... Front-End Dev";

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
          url: 'https://twitter.com/miketrakan'
        },
        {
          label: 'Github',
          url: 'https://github.com/Trakan'
        },
        /*
        {
          label: 'Codedrops',
          url: 'http://www.trakan.com'
        },
        */
        {
          label: 'Meetups',
          url: 'http://www.meetup.com/members/54405852/'
        },
        {
          label: 'Contact',
          state: 'home'
        }
      ]
    };

  } //<-- End of Constructor

}
