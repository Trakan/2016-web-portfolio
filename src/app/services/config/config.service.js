export class ConfigService {

  constructor ($log) {
    'ngInject';

    this.$log = $log;

    this.TITLE = "Mike Trakan";
    this.BUILT_NOTES = {
      how: "with AngularJS 1.4, ES2015, Sass, and Gulp",
      license: [
        "Please don't use any of the logos, but pretty sure nothing else is copyrighted",
        "Code free to <a href='https://github.com/Trakan' target='_blank'>look at and use if you want</a>"

      ]
    };

    this.NAV_SETTINGS = {
      menuShrinkTriggerClass: '.navbar-header'
    };

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
           label: 'contact',
           route: 'contact',
           icon: 'fa-envelope'
         }
       ],

      footer: [
        {
          desc: "Drop me a line",
          items : [
            {
              label: 'Email',
              desc: 'Shoot me an email',
              link: {
                "text": "trakan@gmail.com",
                "url": "mailto:trakan@gmail.com"
              },
              icon: 'email'
            },
            {
              label: 'LinkedIn',
              desc: 'Connect with me on LinkedIn',
              link: {
                "text": "linkedin.com/in/trakan",
                "url": "https://www.linkedin.com/in/trakan"
              },
              url: '',
              icon: 'linkedin'
            },
            /*
             {
             label: 'Twitter',
             desc: 'Follow me on Twitter',
             link: {
             "text": "@MikeTrakan",
             "url": "https://www.twitter.com/miketrakan"
             },
             icon: 'twitter1'
             },
             */
            {
              label: 'Meetups',
              desc: 'Find me at a meetup in Chicago',
              link: {
                "text": "meetup.com",
                "url": "http://www.meetup.com/members/54405852/"
              },
              icon: 'meetup'
            }
          ]
        },
        {
          "desc": "Check out some work I've done",
          "items": [
            {
              label: 'Github',
              desc: 'Some code samples (ask to sit and tour my private repos)',
              link: {
                "text": "github.com/Trakan",
                "url": "https://github.com/Trakan"
              },
              icon: 'github'
            }
            /*
             {
             label: 'Codepen',
             desc: 'See some other samples on Codepen',
             link: {
             "text": "codepen.io",
             "url": "http://www.codepen.io/"
             },
             icon: 'codepen'
             },
             */
          ]
        }
      ]

    };

  } //<-- End of Constructor
}
