/**************************************/
/* Custom JavaScript files supervisor */
/**************************************/
document.oncontextmenu = function() {return false;}; 
$(document).ready(function() {

    /* Custom */

 /*    //= ./common/material-init.js */
 /*    //= ./common/google-analytics.js */
  var gallery = $("#insert_imgs");
  console.log("!!!");
  for (var i = 1; i <= 20; i++){
    gallery.append("<img src='img/images/"+i+".jpg'>");
  }

	$("img").mousedown(function(event) {
		if (event.which === 3) {
			$("#notDownload").css({"top": event.pageY, "left": event.pageX, "display": "block"});
			setTimeout(function () {$("#notDownload").css({"display": "none"})}, 700)
		}
		if (event.which === 1) {
			$(document).mousedown(false);
		}
	});
});


