//TODO: Attach Projects
//TODO: Add resume
$(document).ready(function () {
    $('.projects').hide(0);
    $('.contacts').hide(0);
    $('.about-section').hide(0);
    initializeSocialLinks();
    // Reveal Animations For Projects
    $('#android-project').click(()=>{
        RevealAnimation();
    })

    $('.navigater').click(function () {
        var clicked_id = $(this).attr('id');

        $('.navigater').children().addClass('inactive');
        $('.navigater').children().removeClass('active');
        $('#' + clicked_id).children().removeClass('inactive');
        $('#' + clicked_id).children().addClass('active');



        if (clicked_id === "home") {
            $('.contacts').hide(300);
            $('.projects').hide(300);
            $('.about-section').hide(300);
            $('.social').show(300);
        }
        else if (clicked_id === "projects") {
            $('.contacts').hide(300);
            $('.social').hide(300);
            $('.about-section').hide(300);
            $('.projects').show(300);

        }
        else if (clicked_id === "contacts") {
            $('.social').hide(300);
            $('.projects').hide(300);
            $('.about-section').hide(300);
            $('.contacts').show(300);
        }
        else if (clicked_id === "about") {

            $('.social').hide(300);
            $('.projects').hide(300);
            $('.contacts').hide(300);
            $('.about-section').show(300);
        }

        else {
            $('.social').hide(300);
            $('.projects').hide(300);
            $('.contacts').hide(300);
            $('.about-section').hide(300);
        }


    });

})
function RevealAnimation() {
    var andoridDiv = document.getElementById('android-project');
    // andoridDiv.className = 'circleEffect';
    // var bounds = andoridDiv.getBoundingClientRect();
    // andoridDiv.style.left = bounds.left + bounds.width / 2 + 'px';
    // andoridDiv.style.top = bounds.top + bounds.height / 2 + 'px';

    // var AndroidColor = 'hsl(74°, 46%, 42%)';
    // andoridDiv.style.background = AndroidColor;
    // var scaleSteps = [{transform: 'scale(0)'}, {transform: 'scale(1)'}];
    // var timing = {duration: 2500, easing: 'ease-in-out'};
    // var anim = andoridDiv.animate(scaleSteps, timing);
    // anim.addEventListener('finish', function() {
    //     header.style.backgroundColor = newColor;
    //     header.removeChild(effectNode);
    //   });
    // let anim = andoridDiv.animate({
    //     opacity: [0.5, 1],
    //     transform: ['scale(0.5)', 'scale(1)'],
    // }, {
    //     direction: 'alternate',
    //     duration: 500,
    //     iterations: Infinity,
    // });
    var hue = Math.random() * 360;
    andoridDiv.style.backgroundColor = 'hsl(' + hue + ', 85%, 67%)';
    let scaleAnim =andoridDiv.animate([
        {transform: 'scale(0)'},
        {transform: 'scale(1)'},
      ], {
        duration: 450,
        easing: 'cubic-bezier(.22,.67,.52,.92)',
        fill: 'forwards',
      });
}

function initializeSocialLinks() {
    $('.fa-facebook').click(function () {
        window.open("https://www.facebook.com/aniket.sharma.583671", "facebook");
    });
    $('.fa-twitter').click(function () {
        window.open("https://twitter.com/aniket965as", "twitter");
    });
    $('.fa-rss').click(function () {
        window.open("http://aniket965.tech/blog", "blog");
    });
    $('.fa-linkedin').click(function () {
        window.open("https://www.linkedin.com/in/aniket-sharma-548413131/", "linkedin");
    });
    $('.fa-medium').click(function () {
        window.open("https://medium.com/@aniket965", "medium");
    });
    $('.fa-github').click(function () {
        window.open("https://github.com/aniket965", "github");
    });

    $('.fa-envelope').click(function () {
        location.href = "mailto:aniket965.as@gmail.com";
    });
    $('.fa-google-plus').click(function () {
        window.open("https://plus.google.com/+AniketSharma965", "Google Plus");
    });

    $('.fa-codepen').click(function () {
        window.open("https://codepen.io/aniket965", "Codepen");
    });

}
