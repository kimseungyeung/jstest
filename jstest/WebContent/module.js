
	var dd = setInterval("nowtime()", 1000);
	
	$( window ).resize(function() {
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
			con[num].style.display = 'block';
			for(var i=0; i<7; i++){
				if(i!=num){
				con[i].style.display = 'none';
				}
			}
		} else {
			con[num].style.display = 'none';
			
		}
	}
	function dolDisplay(num) {
		var con2= document.getElementsByClassName("lhide");

		if (con2[num].style.display == 'none') {
			con2[num].style.display = 'block';
			for(var i=0; i<7; i++){
				if(i!=num){
				con2[i].style.display = 'none';
				}
			}
		} else {
			con2[num].style.display = 'none';
			
		}
	}
	function pageset(num) {
		var number=(num+1).toString();
		alert("페이지"+number);
			var con3 = document.getElementsByClassName("page");
				
				con3[num].style.display = 'block';
				for(var i=0; i<7; i++){
					if(i!=num){
					con3[i].style.display = 'none';
					}
				}
		
	}
	
	function view(){
		var dd =document.getElementById("input");
		var ff= dd.value;
		var value = $('#input').val();
		alert(ff);
		
		
	}
	function dropdownview(){
		var skillsSelect = document.getElementById("newSkill");
		var selectedText = skillsSelect.options[skillsSelect.selectedIndex].text;
		alert(selectedText);
		
	}
	

