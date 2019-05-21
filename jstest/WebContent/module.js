
	var dd = setInterval("nowtime()", 1000);
/*	var mql = window.matchMedia("screen and (max-width: 768px)");

	mql.addListener(function(e) {
	    if(e.matches) {
	    	//alert('모바일 화면 입니다.');
	    } else {
	    	//alert('데스크탑 화면 입니다.');
	    	
	    }
	});*/
	$( window ).resize(function() {
		document.getElementById("nowtimestring").innerHTML = "변형" + "<br>"; 
		//창크기 변화 감지
		window.onfocus=function(){
		}
		window.onload=function(){
		 window.focus(); // 현재 window 즉 익스플러러를 윈도우 최상단에 위치
		window.moveTo(0,0); // 웹 페이지의 창 위치를 0,0 (왼쪽 최상단) 으로 고정
		window.resizeTo(1280,800); // 웹페이지의 크기를 가로 1280 , 세로 800 으로 고정(확장 및 축소)
		window.scrollTo(0,250); // 페이지 상단 광고를 바로 볼 수 있게 스크롤 위치를 조정
		}
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
	

