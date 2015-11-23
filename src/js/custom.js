/**************************************/
/* Custom JavaScript files supervisor */
/**************************************/

$(document).ready(function() {

    /* Custom */

 /*    //= ./common/material-init.js */
 /*    //= ./common/google-analytics.js */
  var gallery = $("#insert_imgs");
  console.log("!!!");
  for (var i = 1; i <= 20; i++){
    gallery.append("<img src='img/images/"+i+".jpg'>");
  }
});
