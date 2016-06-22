// JavaScript Document
	function ve(){
		paint="";
		x=document.getElementById("value").value;
		for(i=1;i<=x;i++){
			for(j=i;j>=1;j--){
				paint+=j%10+" ";
			}
			paint+="<br/>";
		}
		document.getElementById("triangle").innerHTML=paint;
	}