$(document).ready(function() {
    //  $("#font-container").addClass("refluxblu-white");
    $("#refluxblu").click(function() {
        $("#font-sample").removeClass();
        $("#font-sample").addClass("frame refluxblu-white");
    });
    $("#cuulblu").click(function() {
        $("#font-sample").removeClass();
        $("#font-sample").addClass("frame cuulblu-refluxblu");
    });
    $("#wurmgrey").click(function() {
        $("#font-sample").removeClass();
        $("#font-sample").addClass("frame wurmgrey-refluxblu");
    });
    $("#drkgable").click(function() {
        $("#font-sample").removeClass();
        $("#font-sample").addClass("frame drkgable-white");
    });
});

// ==============

// function myFunction() {
//     var x = document.getElementById("myDIV");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }

$("#add").on("click", function() {
    $(
        "<h2>Added Content</h2><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>"
    ).insertBefore(".push");
});


window.onscroll = function() {
    myFunction()
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// TODO: updated 4.4.0 docs
$('body').scrollspy({
    target: '#sidebar',
    offset: 220
});


$('#monitor').html($(window).width());
$(window).resize(function() {
    var viewportWidth = $(window).width();
    $('#monitor').html(viewportWidth);
});

// CAUSING ISSUES
// $(function() {
//     $('[data-toggle="tooltip"]').tooltip({
//         delay: 5,
//         container: "a",
//         placement: 'auto',
//         html: true
//     });
// })


// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Function to show or hide the back-to-top button based on scroll position
function toggleBackToTopButton() {
    const backToTopButton = document.getElementById('back-to-top');
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
}

// Attach the scroll event listener to the window
window.addEventListener('scroll', toggleBackToTopButton);