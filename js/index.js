/**
 * Created by christos on 30/4/2016.
 */

//$(document).ready(function() {
//    $(document).scroll(function () {
//        var scroll = $(this).scrollTop();
//        var topDist = $("#nav").position();
//        if (scroll > topDist.top) {
//            $('nav').css({"position":"fixed","top":"0"});
//        } else {
//            $('nav').css({"position":"static","top":"auto"});
//        }
//    });
//});

// LOAD WORK EXPERIENCE VIEW
$( document ).ready(function(){
    $("#work-experience").load("cv-views/work_experience.html");
    $("#education-coursework").load("cv-views/education-coursework.html");
    $("#skills").load("cv-views/skills.html");
});

$('.social i').hover(function(){
    $(this).toggleClass('white-font');
});

// Smooth scrolling when clicking an anchor link
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});



