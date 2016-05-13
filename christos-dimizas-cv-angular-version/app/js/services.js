/**
 * Created by christos on 13/5/2016.
 */

angular.module('dimizasCVApp')

    // WORK EXPERIENCE
    .factory('workExpFactory', function() {

        var workExp = {};

        var workList = [
            {
                _id:0,
                workName: "",
                image: "",
                date: "",
                url:"",
                details: [],
                topProjects:[
                    {
                        projectName:"",
                        projectURL:"",
                        projectDetails:"",
                        responsibilities:""
                    }
                ]
            },
            {
                workName: "",
                image: "",
                date: "",
                url:"",
                details: []
                //topProjects:[
                //    {
                //        projectName:"",
                //        projectURL:"",
                //        projectDetails:"",
                //        responsibilities:""
                //    }
                //]
            }

        ];

        // get all previous works
        workExp.getWorks = function(){
            return workList;
        };

        // get one work by index number
        workExp.getWork = function (index) {
            return workList[index];
        };

        return workExp;
    })

    // ACADEMIC EXPERIENCE
    .factory('academicExpFactory', function() {

        var academicExp = {};

        var academicList = [
            {
                _id:0,
                academicTitle: "",
                image: "",
                date: "",
                url:"",
                details: ""
            }

        ];

        // get all previous academic experience
        academicExp.getAcademics = function(){
            return academicList;
        };

        // get one academic experience by index number
        academicExp.getAcademic = function (index) {
            return academicList[index];
        };

        return academicExp;
    })

    // EDUCATION
    .factory('educationFactory', function() {

        var education = {};

        var educationList = [
            {
                _id:0,
                educationTitle: "",
                university:"",
                date: "",
                url:"",
                details: ""
            }

        ];

        // get all educations
        education.getEducations = function(){
            return educationList;
        };

        // get one education by index number
        education.getEducation = function (index) {
            return educationList[index];
        };

        return education;
    })

    // COURSEWORK
    .factory('courseworkFactory', function() {

        var coursework = {};

        var courseworkList = [
            {
                _id:0,
                title: "",
                provider:"",
                date: "",
                url:"",
                details: ""
            }

        ];

        // get all courseworks
        coursework.getCourseworks = function(){
            return courseworkList;
        };

        // get one coursework by index number
        coursework.getCoursework = function (index) {
            return courseworkList[index];
        };

        return coursework;
    })

    // TECHNICAL SKILLS
    .factory('skillsFactory', function() {

        var skills = {};

        var skillsList = [
            {
                _id:0,
                skill: ""
            }

        ];

        // get all skills
        skills.getSkills = function(){
            return skillsList;
        };

        // get one skills by index number
        skills.getSkill = function (index) {
            return skillsList[index];
        };

        return skills;
    })

    // ACHIEVEMENTS
    .factory('achievementsFactory', function() {

        var achievements = {};

        var achievementsList = [
            {
                _id:0,
                name: ""
            }

        ];

        // get all achievements
        achievements.getAchievements = function(){
            return achievementsList;
        };

        // get one achievement by index number
        achievements.getAchievement = function (index) {
            return achievementsList[index];
        };

        return achievements;
    })

    // PERSONAL INTERESTS & HOBBIES
    .factory('interestsFactory', function() {

        var interests = {};

        var interestsList = [
            {
                _id:0,
                name: ""
            }

        ];

        // get all interests
        interests.getInterests = function(){
            return interestsList;
        };

        // get one interest by index number
        interests.getInterest = function (index) {
            return interestsList[index];
        };

        return interests;
    })

    // PERSONAL PROJECTS
    .factory('myProjectsFactory', function() {

        var myProjects = {};

        var myProjectsList = [
            {
                _id:0,
                name: ""
            }

        ];

        // get all Projects
        myProjects.getMyProjects = function(){
            return myProjectsList;
        };

        // get one Project by index number
        myProjects.getMyProject = function (index) {
            return myProjectsList[index];
        };

        return myProjects;
    })

;