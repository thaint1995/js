// JavaScript Document
	function ve(){
		paint="";
		x=document.getElementById("value").value;
		for(i=1;i<=x;i++) {
					for(j=i;j>i/2;j--)
						paint += j%10+" ";
					if(i%2==1) 
						j+=2;
					else
						j++;
					while(j<=i) {
						paint += j%10+" ";
						j++;
					} 
					paint +="<br>";
		}
		document.getElementById("triangle").innerHTML=paint;
	}