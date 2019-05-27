/**
 * http://usejsdoc.org/
 */
$(window).resize(function() {
	var width = document.body.width;
	var height = document.body.height;

})
$(document).ready(function() {
	var width = screen.availWidth;
	var height = screen.availHeight;
	alert(width.toString()+":"+height.toString());
	$(document)
	//마우스 오버 이벤트
	$('.topmenu>li').hover(function() {
		$(this).css("background-color", "yellow");
	}, function() {
		$(this).css("background-color", "red");
	})
	$(".topmenu>li").click(function() {
		$(this).css("background-color", "green");
		var submenu = $(this).children("ul");
		if (submenu.is(":visible")) {
			//submenu.slideUp();
			//$(this).toggleClass("submenu1");
			//submenu.removeClass("submenu1");
			submenu.slideToggle(0);
			
		} else {
			//submenu.slideDown();
			//submenu.removeClass("submenu1");
			submenu.slideToggle(0);
		}
		//alert('dd');

	})
})
function draw(words) { 
                var cloud = svg.selectAll("text").data(words)
                //Entering words
                cloud.enter()
                    .append("text")
                    .style("font-family", "overwatch")
                    .style("fill", function (d) {
                        return (keywords.indexOf(d.text) > -1 ? "#fbc280" : "#405275");
                    })
                    .style("fill-opacity", .5)
                    .attr("text-anchor", "middle") 
                    .attr('font-size', 1)
                    .text(function (d) {
                        return d.text;
                    }); 
                cloud
                    .transition()
                    .duration(600)
                    .style("font-size", function (d) {
                        return d.size + "px";
                    })
                    .attr("transform", function (d) {
                        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
                    })
                    .style("fill-opacity", 1); 
            }

