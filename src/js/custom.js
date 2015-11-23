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

	function notDownloadNone () {
		$("#notDownload").css({"display": "none"});
	}

	var clear;

	$("img").mousedown(function(event) {
		if (event.which === 3) {
			clearTimeout(clear);
			$("#notDownload").css({"top": event.pageY, "left": event.pageX, "display": "block"});
			$("#notDownload").text("Нельзя скачивать!");
			clear = setTimeout(function () {notDownloadNone()}, 700); 
		}
		if (event.which === 1) {
			$(document).mousedown(false);
			$("#notDownload").css({"top": event.pageY, "left": event.pageX, "display": "block"});
			$("#notDownload").text("Не таскай меня!");
			clear = setTimeout(function () {notDownloadNone()}, 700); 
		}
	});
});


