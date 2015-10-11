jQuery(document).ready(function(){

	$(function(){
	  $("#header").load("header.html"); 
	  $("#footer").load("footer.html"); 
	});

	$(window).scroll(function() {
	if ($(this).scrollTop() > 50){  
	    $('#header').addClass("sticky");
	  }
	  else{
	    $('#header').removeClass("sticky");
	  }
	});

});