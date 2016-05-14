/**
 * Created by christos on 13/5/2016.
 */

angular.module('dimizasCVApp')

    // HOME PAGE
    .controller('IndexController',
        ['$scope', 'workExpFactory', 'academicExpFactory', 'educationFactory', 'courseworkFactory',
            'skillsFactory', 'achievementsFactory', 'interestsFactory', 'myProjectsFactory', "$location", "$anchorScroll",
        function($scope, workExpFactory, academicExpFactory, educationFactory, courseworkFactory,
                 skillsFactory, achievementsFactory, interestsFactory, myProjectsFactory, $location, $anchorScroll) {

            $scope.scrollTo = function(id) {
                $location.hash(id);
                $anchorScroll();
            };

            $scope.works = workExpFactory.getWorks();
            $scope.academics = academicExpFactory.getAcademics();
            $scope.educations = educationFactory.getEducations();
            $scope.courseworks = courseworkFactory.getCourseworks();
            $scope.skills = skillsFactory.getSkills();
            $scope.achievements = achievementsFactory.getAchievements();
            $scope.interests = interestsFactory.getInterests();
            $scope.myProjects = myProjectsFactory.getMyProjects();
    }])

    // WORK EXPERIENCE
    .controller('WorksController',['workExpFactory', function($scope,workExpFactory) {
        $scope.workExperiences = workExpFactory.getWorks();

    }])

    // ACADEMIC EXPERIENCE
    .controller('AcademicController',['academicExpFactory', function($scope,academicExpFactory) {
        $scope.academicExperiences = academicExpFactory.getAcademics();

    }])

    // EDUCATION
    .controller('EducationController',['educationFactory', function($scope,educationFactory) {
        $scope.education = educationFactory.getEducations();

    }])

    // COURSEWORK
    .controller('CourseworkController',['courseworkFactory', function($scope,courseworkFactory) {
        $scope.courseworks = courseworkFactory.getCourseworks();

    }])

    // TECHNICAL SKILLS
    .controller('SkillsController',['skillsFactory', function($scope,skillsFactory) {
        $scope.skills = skillsFactory.getSkills();

    }])

    // ACHIEVEMENTS
    .controller('AchievementsController',['achievementsFactory', function($scope,achievementsFactory) {
        $scope.achievements = achievementsFactory.getAchievements();

    }])

    // PERSONAL INTERESTS & HOBBIES
    .controller('InterestsController',['interestsFactory', function($scope,interestsFactory) {
        $scope.interests = interestsFactory.getInterests();

    }])

    // PERSONAL PROJECTS
    .controller('MyProjectsController',['myProjectsFactory', function($scope,myProjectsFactory) {
        $scope.interests = myProjectsFactory.getMyProjects();

    }])

    // CONTACT INFO
    .controller('ContactController',['ContactFactory', function($scope,ContactFactory) {
        $scope.contact = ContactFactory.getAllContact();

    }])





;