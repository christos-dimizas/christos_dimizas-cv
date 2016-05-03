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

$('#scify_projects').slideUp();
$('#show_more').on('click', function(){
    $('#scify_projects').slideToggle();
});

$(function(){
    var $elems = $('.animateblock');
    var winheight = $(window).height();
    var fullheight = $(document).height();

    $(window).scroll(function(){
        animate_elems();
    });

    function animate_elems() {
        wintop = $(window).scrollTop(); // calculate distance from top of window

        // loop through each item to check when it animates
        $elems.each(function(){
            $elm = $(this);

            if($elm.hasClass('animated')) { return true; } // if already animated skip to the next item

            topcoords = $elm.offset().top; // element's distance from top of page in pixels

            if(wintop > (topcoords - (winheight*.75))) {
                // animate when top of the window is 3/4 above the element
                $elm.addClass('animated');
            }
        });
    } // end animate_elems()
});


// Smooth scrolling when clicking an anchor link
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

//  BACK TO TOP BUTTON FUNCTIONALITY
$(document).ready(function() {
    var offset = 250;
    var duration = 300;
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(duration);
        } else {
            $('.back-to-top').fadeOut(duration);
        }
    });

    $('.back-to-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
});




