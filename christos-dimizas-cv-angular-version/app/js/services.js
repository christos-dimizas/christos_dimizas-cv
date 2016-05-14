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
                workName: "Software Engineer",
                companyName:"SciFY N.P.O.",
                companyDescription:"",
                companyImage: "images/scify_logo_108.png",
                date: "May 2015 - April 2016",
                url:"http://www.scify.gr/site/el/",
                details: ["Implementing mockups designs with HTML5, CSS3, JavaScript & JQuery.",
                    "PHP wed based MVC projects (Laravel 5 Framework). Both front-end & back-end development according to mockups designs and client’s specifications.",
                    "Customer requirements collection & specifications analysis.",
                    "CMS Projects development (Drupal, WordPress).",
                ],
                topProjects:[
                    {
                        projectName:"Benefile Platform",
                        projectURL:"http://benefile-project.scify.org/",
                        projectDetails:"Enables PRAKSIS N.P.O. to maintain an online administration of immigrants medical and personal information.",
                        responsibilities:"PHP MVC development (Laravel 5 framework), Front-end & Back-end platform development."
                    },
                    {
                        projectName:"EKPIZO N.P.O. website",
                        projectURL:"https://www.ekpizo.gr/",
                        projectDetails:"A Non for Profit Organization which defends the rights of all people, as consumers.",
                        responsibilities:"CMS (Drupal) website development, custom PHP admin panel development for managing subscribed users."
                    },
                    {
                        projectName:"JoinCargo",
                        projectURL:"http://www.joincargo.com/",
                        projectDetails:"A logistics web platform that brings together shippers andcarriers.",
                        responsibilities:"Reconfigure HTML5 / CSS3 website design, according to new mockups and new template, in order to be functional with Laravel Framework & Blade templating engine."
                    }
                ]
            },
            {
                workName: "N.S.R.F. Voucher Software Engineer",
                companyName: "SciFY N.P.O.",
                companyDescription:"",
                companyImage: "images/scify_logo_108.png",
                date: "Nov. 2014 - May 2015",
                url:"http://www.scify.gr/site/el/",
                details: [
                    "R&D Ontology Learning Java pet project.",
                    "Ontologies creation by extracting corresponding domain’s terms and their relationships from a corpus of natural language text.",
                    "Refactor & new version development."
                ],
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
                workName: "N.S.R.F. Voucher - Executives SMEs",
                companyName: "Alkyon E.E.",
                companyDescription:"Construction company",
                companyImage: "images/alkyon.jpg",
                date: "January 2014 - July 2014",
                url:"http://www.alkyon-energy.gr/",
                details: [
                    "Customer Service. Communication with suppliers.",
                    "Translation of documents from Greek to English and vice versa.",
                    "Responsible for external payments (Banks,Public Services)."
                ],
                topProjects:[
                    {
                        projectName:"",
                        projectURL:"",
                        projectDetails:"",
                        responsibilities:""
                    }
                ]
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
                academicTitle: "Private Tutor (Self-employed)",
                image: "",
                date: "May 2013 - Nov. 2013 & October 2011 - June 2012",
                url:"",
                details: "Undergraduate & high school students."
            },
            {
                _id:0,
                academicTitle: "Physics lab teacher",
                image: "",
                date: "April 2009 - April 2011 & Sept. 2006 – Feb. 2007",
                url:"",
                details: "Univ. of Crete"
            },
            {
                _id:0,
                academicTitle: "Computational Research (Out of campus) & Post Graduate Research",
                image: "",
                date: "March 2012 - January 2013 & April 2009 - August 2011",
                url:"",
                details: "Computer simulation & Electric characterization research of III-Nitride Double Barrier Resonant Tunneling Diodes."
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
                educationTitle: "M.Sc. in Microelectronics – Optoelectronics",
                university:"University of Crete, Greece",
                date: "September 2008 – September 2011",
                url:"",
                details: ""
            },
            {
                _id:1,
                educationTitle: "B.Sc. in Physics",
                university:"University of Crete, Greece",
                date: "September 2003 - June 2008",
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
                title: "Front-End JavaScript Frameworks AngularJS",
                provider:"Coursera",
                university:"Hong Kong University of Science and Technology",
                date: "",
                url:"",
                details: "",
                status:"IN PROGRESS"
            },
            {
                _id:1,
                title: "Server-side Development with NodeJS",
                provider:"Coursera",
                university:"Hong Kong University of Science and Technology",
                date: "",
                url:"",
                details: "",
                status:"ON QUEUE"
            },
            {
                _id:2,
                title: "Multiplatform Mobile App Development with Web Technologies",
                provider:"Coursera",
                university:"Hong Kong University of Science and Technology",
                date: "",
                url:"",
                details: "",
                status:"ON QUEUE"
            },
            {
                _id:3,
                title: "Machine Learning",
                provider:"Coursera",
                university:"Stanford University",
                date: "",
                url:"",
                details: "ten weeks e-course",
                status:"COMPLETED"
            },
            {
                _id:4,
                title: "Web Development Course",
                provider:"Udemy.com Learning Platform",
                university:"",
                date: "",
                url:"",
                details: "HTML,CSS, PHP, Ajax, JSON, jQuery, JavaScript, XML",
                status:""
            },
            {
                _id:5,
                title: "Introduction to Java programming",
                provider:"Udacity",
                university:"University of San Jose",
                date: "Aug. 2014 -Nov. 2014",
                url:"",
                details: "",
                status:""
            },
            {
                _id:6,
                title: "Physics (Applied Quantum Physics, Optoelectronics & Lasers, Semiconductor physics and semiconductor devices (PN, BJT, MOSFETs, RTDs, etc.) Analog & Digital Electronics and circuits.)",
                provider:"",
                university:"University of Crete",
                date: "",
                url:"",
                details: "Post & Under Graduate Student",
                status:""
            },
            {
                _id:7,
                title: "Introduction to computational finance & financial econometrics",
                provider:"Coursera",
                university:"University of Washington",
                date: "",
                url:"",
                details: "",
                status:""
            },
            {
                _id:8,
                title: "Credit Risk Management",
                provider:"edX",
                university:"TUDeft University",
                date: "",
                url:"",
                details: "",
                status:""
            },
            {
                _id:9,
                title: "W3Cx's HTML5.0x",
                provider:"edX",
                university:"W3Cx",
                date: "",
                url:"",
                details: "Five weeks course",
                status:""
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
                skill: "Object Oriented Analysis & Design principles."
            },
            {
                _id:1,
                skill: "Scrum (agile software development methodology), Git Software, Swing, SQL, HTML5, CSS3, JavaScript, PHP, JAVA, JQuery, Drupal, WordPress, Bootstrap framework, JIRA proprietary issue tracking."
            },
            {
                _id:2,
                skill: "Customer requirements Collection &specifications analysis."
            },
            {
                _id:3,
                skill: "Eclipse, PHPStorm, Mathematica."
            },
            {
                _id:4,
                skill: "Excellent knowledge of Microsoft Office (Word, Excel, PowerPoint)."
            },
            {
                _id:5,
                skill: "Familiar with MatLab, Octave, AngularJS."
            },
            {
                _id:6,
                skill: "Familiar with Windows & Linux."
            },
            {
                _id:7,
                skill: "Excellent Analytical Skills, Oral Presentation Skills, People Skills, Team work"
            },
            {
                _id:8,
                skill: "Self-motivated, able to work with minimum supervision."
            },
            {
                _id:9,
                skill: "Foreign Languages : Fluent English."
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
                name: {
                    title:"Scholarship from the Foundation for Research and Technology – Hellas (FORTH) – Heraklion Crete. - M.Sc. in Microelectronics & Optoelectronics. (September 2008 – May 2010)",
                    list:[]
                }
            },
            {
                _id:1,
                name: {
                    title:"Posters",
                    list:["C. Dimizas , P. Dimitrakis , G. Deligeorgis , E. Iliopoulos 17th European Molecular Beam Epitaxy Workshop (Euro-MBE 2013) Poster - “Double barrier AlGaN/GaN (0001) resonant tunneling diodes: The effects of polarization fields”",
                        "G. Deligeorgis, P. Dimitrakis, C. Dimizas, A. Kostopoulos, G. Konstantinidis, R. Normand and E. Iliopoulos, “Negative differential resistance and charge trapping phenomena in (0001) Al(Ga)N/GaN double barrier resonant tunneling diodes”, Micro&Nano 2010, Athens, Greece, December 2010."
                    ]
                }
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
                name: "Funding member of GRIoT team, member of The Things Network community. Our main goal is to contribute to the community by adding a gateway which increases the range of the LoraWAN network and to develop small IoT devices which utilize this network in order to exchange information.",
                url:"http://thethingsnetwork.org/"
            },
            {
                _id:1,
                name: "Hydrogen production system using hydrolyses method in order to reduce fuel consumption in internal combustion engines, regardless the fuel type.",
                url:""
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
                description: "Music for people with hearing problems pet project. Experimental part using Arduino platform. Software part using Java programming and Fourier transform."
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

    // CONTACT INFO
    .factory('ContactFactory', function() {

        var contact = {};

        var contactList = [
            {
                _id:0,
                address   : "Avidou 133, Zografou, 15772 Athens",
                phone     : "+30 2155305098",
                mobile    : "+30 6945231725",
                email     : "christos.dimizas@gmail.com",
                linkedin  : "https://gr.linkedin.com/pub/christos-dimizas/48/883/baa",
                skypeName : "christos.dimizas"
            }
        ];

        // get all contact info
        contact.getAllContact = function(){
            return contactList;
        };

        // get one contact item by index number
        contact.getContactItem = function (index) {
            return contactList[index];
        };

        return contact;
    })

;