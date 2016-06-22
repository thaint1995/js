// JavaScript Document
		 time;
		 m=0;
		 s=0;
		 ms=0;
	 	function str() {	 		
			
	 		m = parseInt(document.getElementById("m").innerHTML);
	 		s = parseInt(document.getElementById("s").innerHTML);
	 		ms = parseInt(document.getElementById("ms").innerHTML);
	 		if(ms+1==10) {
	 			if(s+1==60) {
	 				m++;
	 				if(m<10)
	 					document.getElementById("m").innerHTML="0"+m;
	 				else	
	 					document.getElementById("m").innerHTML=m;
	 				s=0;
	 				document.getElementById("s").innerHTML="0"+s;
	 				ms=0;
	 				document.getElementById("ms").innerHTML=ms;
	 			}
	 			else {
	 					s++;
	 					if(s<10)
	 						document.getElementById("s").innerHTML="0"+s;
	 					else
	 						document.getElementById("s").innerHTML=s;
	 					ms=0;
	 					document.getElementById("ms").innerHTML=ms;
	 			}
	 		} else {
	 			ms++;
	 			document.getElementById("ms").innerHTML=ms;
	 		}

		}	
		
		function start(){
			time = setInterval("str()", 100);
		}
		function pause() {
			clearInterval(time);	
		}

		function reset() {
			window.location.reload();
		}