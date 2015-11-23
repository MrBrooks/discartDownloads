$(document).ready(function(){
	$("img").contextmenu(function(){
		return false;
	});
	$("img").mousedown(function(){
		alert("Warning!");
	})
});