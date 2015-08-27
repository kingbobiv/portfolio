(function() {
  'use strict';

  /**
   * @ngdoc  service
   * @name vpantanoApp.factory:sections
   * @description
   * # Data for sections
   * Service of the vpantanoApp
   */
  angular.module('vpantanoApp')
    .factory('sections', function() {
      var sections = {

        //Temporarily labeled sections a,b,c
        //until I get the ng-repeat to sort
        //non-alphabetically. convert to array?


        hello: {
          urlKey: 'hello',
          title: 'Hello!',
          subtitle: 'Welcome to my own small piece of the web',
          icon: 'stego'
        },


        projects: {
          urlKey: 'projects',
          title: 'Projects',
          subtitle: 'Have a look at some of my handywork.',
          icon: 'bronto',
          projects: {
            usElite: {
              title: 'U.S. Elite',
              href: 'http://www.us-elitegear.com',
              linkText: 'us-elitegear.com',
              date: 'November 2010 - Present',
              description: 'An Online Shop Selling Tactical &amp; Outdoor Gear to fuel the Warrior Lifestyle',
              details: 'I Maintain this Magento Store Built by <a href="http://www.orangecollarmedia.com/">Orange Collar Media',
              thumbnail: '../images/project-thumbnails/us-elite.jpg'
            },
            hswindows: {
              title: 'Home Supply Window & Door',
              href: 'http://hswindows.com',
              linkText: 'hswindows.com',
              date: 'Spring 2015',
              description: 'A simple and elegant business page for a local business in need of a web presence.',
              details: 'Managed the project from concept to launch, including meticulous responsive design considerations, highly modular UI, and user-friendly AJAX forms',
              thumbnail: '../images/project-thumbnails/hswindows.jpg'
            },
            tacp: {
              title: 'USAF TACP Assocation',
              href: 'http://www.usaftacp.org',
              linkText: 'USAFTACP.org',
              date: 'Summer & Fall 2014',
              description: 'A complete Wordpress / eCommerce store for the TACP Association',
              details: 'Managed the design and development, customized theme and plugins, worked tightly on design phase',
              thumbnail: '../images/project-thumbnails/tacp.jpg'
            },
            usEliteBlog: {
              title: 'U.S. Elite Blog',
              href: 'http://blog.us-elitegear.com',
              linkText: 'blog.us-elitegear.com',
              date: 'October 2014',
              description: 'A content-centric companion blog to U.S. Elite, with stories from real-deal heroes',
              details: 'I configured, launched, and manage this Squarespace blog (also photobombed the Image Gallery)',
              thumbnail: '../images/project-thumbnails/us-elite-blog.jpg'
            },
            portfolio: {
              title: 'This Very Site!',
              href: 'http://vpantano.com',
              linkText: 'vpantano.com',
              date: 'Summer 2014',
              description: 'An ever-improving personal sandbox used primarily to keep myself sharp and try new things.',
              details: 'Recently rebuilt with Angular and Sass, with a blog coming soon',
              thumbnail: '../images/project-thumbnails/portfolio.jpg'
            },
            jitney: {
              title: 'Jersey City Jitney Map App',
              href: 'http://openjerseycity.org/Jitney/',
              linkText: 'openjerseycity.org/Jitney',
              date: 'May 2014',
              description: 'A Fun Project to Improve Transit Experience During the <a href="http://hackforchange.org/">National Day of Civic Hacking</a> Hackathon',
              details: 'Built with the awesome team of <a href="https://twitter.com/patfmurray">@patfmurray</a> and <a href="https://twitter.com/carla_astudi">@carla_astudi</a>',
              thumbnail: '../images/project-thumbnails/jitney.jpg'
            },
            crossfitSoar: {
              title: 'CrossFit SOAR',
              href: 'http://www.crossfitsoar.com',
              linkText: 'crossfitsoar.com',
              date: 'Early 2014',
              description: 'A Community Page for a Local CrossFit Box',
              details: 'Wordpress installation, setup, and tweaking',
              thumbnail: '../images/project-thumbnails/crossfit-soar.jpg'
            },
            tsc: {
              title: 'Teaneck Surgical Center',
              href: 'http://teanecksurgicalcenter.com/',
              linkText: 'teanecksurgicalcenter.com',
              date: 'Winter 2013',
              description: 'A Place for TSC to Provide Info to Patients and Caregivers',
              details: 'Built from PSDs provided by <a href="http://www.pereiradesignllc.com/">Pereira Design',
              thumbnail: '../images/project-thumbnails/tsc.jpg'
            },
            leaKelly: {
              title: 'The Lea-Kelly Law Office',
              href: 'http://www.lkimmigration.com/',
              linkText: 'lkimmigration.com',
              date: 'Early 2013',
              description: 'A company site for a NYC-based immigration law office',
              details: 'Built from PSDs provided by <a href="http://www.pereiradesignllc.com/">Pereira Design</a>',
              thumbnail: '../images/project-thumbnails/lea-kelly.jpg'
            }
          }
        },


        contact: {
          urlKey: 'contact',
          title: 'Contact',
          subtitle: 'Find me on places such as the internet.',
          icon: 'rex',
          contactPoints: {
            email: {
              title: 'Email',
              href: 'mailto:v.e.pantano@gmail.com',
              linkText: 'v.e.pantano@gmail.com'
            },
            twitter: {
              title: 'Twitter',
              href: 'https://twitter.com/kingb0bIV',
              linkText: '@kingb0biv'
            },
            linkedin: {
              title: 'LinkdIn',
              href: 'https://www.linkedin.com/pub/vincent-pantano/54/102/3a6',
              linkText: 'linkedin.com/pub/vincent-pantano'
            },
            github: {
              title: 'GitHub',
              href: 'https://github.com/kingbobiv',
              linkText: 'github.com/kingbobiv'
            },
            codepen: {
              title: 'Codepen',
              href: 'http://codepen.io/vpantano/',
              linkText: 'codepen.io/vpantano'
            }
          }
        }



      };

      return sections;
    });
})();