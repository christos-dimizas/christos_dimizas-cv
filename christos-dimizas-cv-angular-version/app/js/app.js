/**
 * Created by christos on 13/5/2016.
 */

/**
 * Created by christos on 8/5/2016.
 */


'use strict';

// UI-ROUTER
angular.module('dimizasCVApp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

            // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html'
                    },
                    'landingPage': {
                        templateUrl : 'views/landingPage.html'
                    },
                    'workExperience': {
                        templateUrl : 'views/workExperience.html'
                    },
                    'education': {
                        templateUrl : 'views/education.html'
                    },
                    'skills': {
                        templateUrl : 'views/skills.html'
                    },
                    'interests': {
                        templateUrl : 'views/interests.html'
                    },
                    'contact': {
                        templateUrl : 'views/contact.html'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html'
                    }
                }

            });

            //// route for the aboutus page
            //.state('app.aboutus', {
            //    url:'aboutus',
            //    views: {
            //        'content@': {
            //            templateUrl : 'views/aboutus.html',
            //            controller  : 'AboutController'
            //        }
            //    }
            //})
            //
            //// route for the contactus page
            //.state('app.contactus', {
            //    url:'contactus',
            //    views: {
            //        'content@': {
            //            templateUrl : 'views/contactus.html',
            //            controller  : 'ContactController'
            //        }
            //    }
            //})
            //
            //// route for the menu page
            //.state('app.menu', {
            //    url: 'menu',
            //    views: {
            //        'content@': {
            //            templateUrl : 'views/menu.html',
            //            controller  : 'MenuController'
            //        }
            //    }
            //})
            //
            //// route for the dishdetail page
            //.state('app.dishdetails', {
            //    url: 'menu/:id',
            //    views: {
            //        'content@': {
            //            templateUrl : 'views/dishdetail.html',
            //            controller  : 'DishDetailController'
            //        }
            //    }
            //});

        $urlRouterProvider.otherwise('/');
    })
;
