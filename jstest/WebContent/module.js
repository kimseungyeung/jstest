
	var dd = setInterval("nowtime()", 1000);
	
	jQuery( window ).resize(function() {
		var widhth =document.body.clientWidth;
		var height =document.body.clientHeight;
		document.getElementById("nowtimestring").innerHTML = "변형" + "<br>";  
		//창크기 변화 감지
		});

	function nowtime() {
		var today = new Date();

		var hourNow = today.getHours();
		var minNow = today.getMinutes();
		var secondNow = today.getSeconds();
		

		
		document.getElementById("nowtime").innerHTML = hourNow.toString()
				+ " : " + minNow.toString() + " : " + secondNow.toString();

	}
	function stoptime() {
		console.log("확인");
		document.getElementById("nowtimestring").innerHTML = "멈춤" + "<br>";
		clearInterval(dd);
			
	}
	function doDisplay(num) {
		var con = document.getElementsByClassName("hide");

		if (con[num].style.display == 'none') {
			con[num].style.display = 'inline-block';
			for(var i=0; i<7; i++){
				if(i!=num){
				con[i].style.display = 'none';
				}
			}
		} else {
			con[num].style.display = 'none';
			
		}
	}
	
	

