$(document).ready(function () {
  $('#refluxblu').click(function(){

    if ($('#font-sample').hasClass('drkgable-white')) {
        $('#font-sample').removeClass('drkgable-white');
        $('#font-sample').addClass('refluxblu-white');
    }
    if ($('#font-sample').hasClass('cuulblu-refluxblu')) {
        $('#font-sample').removeClass('cuulblu-refluxblu');
        $('#font-sample').addClass('refluxblu-white');
    }
    if ($('#font-sample').hasClass('wurmgrey-refluxblu')) {
        $('#font-sample').removeClass('wurmgrey-refluxblu');
        $('#font-sample').addClass('refluxblu-white');
    } else {
        $('#font-sample').addClass('refluxblu-white');
    }

  });
  $('#cuulblu').click(function(){

    if ($('#font-sample').hasClass('refluxblu-white')) {
        $('#font-sample').removeClass('refluxblu-white');
        $('#font-sample').addClass('cuulblu-refluxblu');
    }
    if ($('#font-sample').hasClass('wurmgrey-refluxblu')) {
        $('#font-sample').removeClass('wurmgrey-refluxblu');
        $('#font-sample').addClass('cuulblu-refluxblu');
    }
    if ($('#font-sample').hasClass('drkgable-white')) {
        $('#font-sample').removeClass('drkgable-white');
        $('#font-sample').addClass('cuulblu-refluxblu');
    } else {
        $('#font-sample').addClass('cuulblu-refluxblu');
    }

  });
  $('#wurmgrey').click(function(){

    if ($('#font-sample').hasClass('refluxblu-white')) {
        $('#font-sample').removeClass('refluxblu-white');
        $('#font-sample').addClass('wurmgrey-refluxblu');
    }
    if ($('#font-sample').hasClass('cuulblu-refluxblu')) {
        $('#font-sample').removeClass('cuulblu-refluxblu');
        $('#font-sample').addClass('wurmgrey-refluxblu');
    }
    if ($('#font-sample').hasClass('drkgable-white')) {
        $('#font-sample').removeClass('drkgable-white');
        $('#font-sample').addClass('wurmgrey-refluxblu');
    } else {
        $('#font-sample').addClass('wurmgrey-refluxblu');
    }

  });
  $('#drkgable').click(function(){

    if ($('#font-sample').hasClass('refluxblu-white')) {
        $('#font-sample').removeClass('refluxblu-white');
        $('#font-sample').addClass('drkgable-white');
    }
    if ($('#font-sample').hasClass('cuulblu-refluxblu')) {
        $('#font-sample').removeClass('cuulblu-refluxblu');
        $('#font-sample').addClass('drkgable-white');
    }
    if ($('#font-sample').hasClass('wurmgrey-refluxblu')) {
        $('#font-sample').removeClass('wurmgrey-refluxblu');
        $('#font-sample').addClass('drkgable-white');
    } else {
        $('#font-sample').addClass('drkgable-white');
    }

  });
});
//   function refluxblu() {
//      var element = document.getElementById("font-sample");
//      element.classList.toggle("refluxblu-white");
//   }
//   function cuulblu() {
//      var element = document.getElementById("font-sample");
//      element.classList.toggle("cuulblu-refluxblu");
//   }
//   function wurmgrey() {
//      var element = document.getElementById("font-sample");
//      element.classList.toggle("wurmgrey-refluxblu");
//   }
//   function drkgable() {
//      var element = document.getElementById("font-sample");
//      element.classList.toggle("drkgable-white");
// }

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
  $("<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>").insertBefore(".push");
});
