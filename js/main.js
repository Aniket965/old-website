//TODO: Attach Projects
//TODO: Add resume
const ANDROID_COLOR_HEX = '#74C043',
    WEB_COLOR_HEX = '#53B1E6',
    BACKEND_COLOR_HEX = '#669F5B',
    VR_COLOR_HEX = '#d89952'

$(document).ready(function () {
    $('.projects').hide(0);
    $('.contacts').hide(0);
    $('.about-section').hide(0);
    initializeSocialLinks();
    // Reveal Animations For Projects
    $('#android-project').click(()=>{
        var androidDiv = document.getElementById('android-project');
        RevealAnimation(androidDiv,ANDROID_COLOR_HEX);
    })
    $('#web-project').click(()=>{
        var webDiv = document.getElementById('web-project');
        RevealAnimation(webDiv,WEB_COLOR_HEX)
    })
    $('#backend-project').click(()=>{
        var webDiv = document.getElementById('backend-project');
        RevealAnimation(webDiv,BACKEND_COLOR_HEX)
    })
    $('#vr-project').click(()=>{
        var webDiv = document.getElementById('vr-project');
        RevealAnimation(webDiv,VR_COLOR_HEX)
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
function RevealAnimation(ele,hex) {
    ele.style.backgroundColor = hex;
    let scaleAnim =ele.animate([
        {transform: 'scale(0)'},
        {transform: 'scale(50)'},
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
