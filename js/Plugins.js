/*global $*/

$(document).ready(function () {
    
    "use strict";
    
    var serviceOff = $('.service').offset(),
        navH       = $('.navbar').height(),
        subOff      = $('.subscribe').offset(),
        aboutOff     = $('.about').offset();
    
    $(window).scroll(function () { if ($(this).scrollTop() >= 10) {
        
        $(".navbar").addClass('nav-back');
        $('#brand span').css('color', '#aaa');
        $('.navbar-inverse .navbar-toggle .icon-bar').css('backgroundColor', '#13B1CD');

    } else {
        
        $(".navbar").removeClass('nav-back');
        $('#brand span').css('color', '#fff');
        $('.navbar-inverse .navbar-toggle .icon-bar').css('backgroundColor', '#FFF');
    }
							                                  
        });
	
   
	$('.project ul li').click(function () {
		
		$(this).addClass('selected').siblings('li').removeClass('selected');
//		window.console.log($(this).data('class'));
	    $('.project .row .col-md-4').hide();
	    $('.' + $(this).data('class')).fadeTo(1200, 1);
        
	});
	
    
    // Scroll Down On Clicking The icon-down arrow
	$('.carousel .carousel-inner .icon-down').click(function () {
		
		$("html,body").animate({scrollTop: (serviceOff.top) - 65}, 800);
	});
	
    
	//Hide Scroll top button
	$(window).scroll(function () { if (
        
        $(this).scrollTop() >= 300
        
    ) { $('.scroll-top').fadeIn();  } else { $('.scroll-top').fadeOut();
           
             }
                                  
        });
    
    //Scroll Top Button
	$('.scroll-top').click(function () {
						   
        $("html,body").animate({scrollTop: 0}, 800);
    });
    
    //Show sidebar menu on clicking navbar-toggle
    $('.navbar-toggle').click(function () {
        
        $('.navbar-links').toggleClass('remove');
    });
    
    //Hide Sidemenu on clicking x icon
    $('.close').click(function () {
        
        $(this).parent().addClass('remove');
    });
});
	

// Loading Page 
$(window).on('load', function () {

    "use strict";

    $(".loading-overlay .spinner").fadeOut(2000, function(){

        $('.loading-overlay').fadeOut(1000);

    });

});


// Navbar White
 $(window).scroll(function () { if ($(this).scrollTop() >= 20 ) 
 
 
 {
	 $(".navbar-default").css("backgroundColor", "#FFF").end();
	 $(".navbar-inverse .nav-toggle .span").css("backgroundColor", "#555").end();
	 
 } else
 
 
 {
	 $(".navbar-default").css("backgroundColor", "transparent").end();
  	$(".navbar-inverse .nav-toggle .span").css("backgroundColor", "#FFF").end();
           
 }
							                                  
});


$(".nav-toggle").click(function () {
    
    $('.overlay-page').toggleClass('hide-nw');
    
});






