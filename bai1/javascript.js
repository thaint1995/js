// JavaScript Document
document.write("<table border='1' width='500' style='text-align:center'>");
		for(i=1; i<=2;i++){
				document.write("<tr>");
				for(j=1;j<=5;j++){
						document.write("<td>");
						for(k=1; k<=10;k++){
								a=j+(i-1)*5;
								document.write(a+"x"+k+"="+a*k+"<br/>");
							}
						document.write("</td>");
					}
				document.write("</tr>");
				
			}
		document.write("</table>");