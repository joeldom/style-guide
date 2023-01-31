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
