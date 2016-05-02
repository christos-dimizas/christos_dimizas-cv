/**
 * Created by christos on 30/4/2016.
 */

// LOAD WORK EXPERIENCE VIEW
//$( document ).ready(function(){
//    $("#work-experience").load("cv-views/work_experience.html");
//    $("#education-coursework").load("cv-views/education-coursework.html");
//    $("#skills").load("cv-views/skills.html");
//    $("#extra-info").load("cv-views/interests-achievements.html");
//    $("#contact").load("cv-views/contact.html");
//});

// Smooth scrolling when clicking an anchor link
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});


jQuery(document).ready(function() {
    var offset = 250;
    var duration = 300;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').fadeIn(duration);
        } else {
            jQuery('.back-to-top').fadeOut(duration);
        }
    });

    jQuery('.back-to-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
});




