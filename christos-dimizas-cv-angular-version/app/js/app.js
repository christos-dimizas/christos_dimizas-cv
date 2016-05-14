/**
 * Created by christos on 13/5/2016.
 */

/**
 * Created by christos on 8/5/2016.
 */


'use strict';

// UI-ROUTER
angular.module('dimizasCVApp', ['ui.router', 'ngAnimate'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

            // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'sidebar': {
                        templateUrl : 'views/sidebar.html'
                    },
                    'landingPage': {
                        templateUrl : 'views/landingPage.html',
                        controller  : 'IndexController'
                    }
                }

            })

            // route for the Work & Academic Experience page
            .state('app.workExperience', {
                url:'work-academic-experience',
                views: {
                    'landingPage@': {
                        templateUrl : 'views/workExperience.html'
                        //controller  : 'WorksController'
                    }
                }
            })

            // route for the education & coursework page
            .state('app.education', {
                url:'education-coursework',
                views: {
                    'landingPage@': {
                        templateUrl : 'views/education.html'
                        //controller  : 'EducationController'
                    }
                }
            })

            // route for the technical skills page
            .state('app.skills', {
                url: 'technical-skills',
                views: {
                    'landingPage@': {
                        templateUrl : 'views/skills.html'
                        //controller  : 'MenuController'
                    }
                }
            })

            // route for the interests & achievements page
            .state('app.interests', {
                url: 'interests',
                views: {
                    'landingPage@': {
                        templateUrl : 'views/interests.html'
                        //controller  : 'MenuController'
                    }
                }
            })

            // route for the contact page
            .state('app.contact', {
                url: 'contact',
                views: {
                    'landingPage@': {
                        templateUrl : 'views/contact.html',
                        controller  : 'ContactController'
                    }
                }
            });

        $urlRouterProvider.otherwise('/');
    })
;
