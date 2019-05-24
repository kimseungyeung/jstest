/**
 * http://usejsdoc.org/
 */
$( window ).resize(function() {
	
	
		})
$(document).ready(function() {
	$(".topmenu>a").click(function() {
		var submenu =$(this).next("ul"); 
		/*if(submenu.is(":visible")){*/
			//submenu.slideUp();
			submenu.toggleClass("submenu1");
			//submenu.removeClass("submenu1");
		/*	
		}else{
			//submenu.slideDown();
			submenu.removeClass("submenu1");
	
		
		}*/
alert("dd");
	})	
})

