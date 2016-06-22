// JavaScript Document
		function show() {
            var count = document.getElementById("count").value;
            var div ="";
            for(i=0;i<count;i++)
            {
				div+="<table>";
				div+="<tr><td><input type = 'text' id = 'name["+i+"]' id='name' ></td>";
				div+="<td><input type = 'text' id = 'figures["+i+"]' id='figures' >%</td></tr>";
				div+="</table>";
				
            }
            document.getElementById("input").innerHTML = div;
        }
		
        function draw() {
			   var name= new Array();
               var figures= new Array();
               var count = document.getElementById("count").value;
               var num= parseInt(count);

               for (i=0;i<num;i++)
               {
                    var bien = "name[" + i+"]";
                    name[i]=document.getElementById(bien).value;
               }
               for (i=0;i<num;i++)
               {
                	var bien = "figures["+i+"]";
                	figures[i]=document.getElementById(bien).value;
               }
			   document.write('<table border = "1">');
			   for(i=0; i<count; i++){
				   	var html1 = '';
					html1+='<tr><td>'+name[i]+'</td>';
					html1+='<td style="width:150px">';
					html1+='<div style="100px">';
					html1+='<div style = "border: solid red; width: '+figures[i]+'%; float: left; margin-top:5px; margin-right:3px"></div>';
					html1+='</div>';
					html1+='<label>'+figures[i]+'%</label></td>';
					html1+='</tr>';
					document.write(html1);
				}
				document.write('</table>');
        }
