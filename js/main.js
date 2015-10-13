jQuery(document).ready(function(){

	$(function(){
	  $("#header").load("header.html"); 
	  $("#footer").load("footer.html"); 
	});

    // Sticky menu
	$(window).scroll(function() {
	if ($(this).scrollTop() > 50){  
	    $('#header').addClass("sticky");
	  }
	  else{
	    $('#header').removeClass("sticky");
	  }
	});

    // Burger menu mobile
    function layoutHandler(){
        if(window.innerWidth < 700){
            jQuery('body').addClass("mobile");
        } else {}
    }
    window.onresize = layoutHandler;
    layoutHandler();

    $('.burger-icon').click(function(){
        $(".navegacion").fadeToggle(100);
    });

});