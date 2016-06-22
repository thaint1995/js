// JavaScript Document
var html="";
var monthnames = new Array("January","Februrary","March","April","May", "June","July","August","September","October","November","Decemeber");
var monthDays = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
var todayDate = new Date();
var thisday=todayDate.getDay();
var thisMonth=todayDate.getMonth();
var thisDate=todayDate.getDate();
var thisYear=todayDate.getFullYear();

if (((thisYear % 4 == 0) && !(thisYear % 100 == 0))||(thisYear % 400 ==0))
    monthDays[1]++;
notDate=thisDate;
while (notDate > 7) {
    notDate-=7;
}
notDate = thisday - notDate + 1;
if (notDate < 0) {
    notDate+=7;
}
html += "<table border= 1 >";
html += '<tr><td id="month" colspan="7"><strong>' + monthnames[thisMonth] + ' '+
    thisYear + '</strong></td></tr>';
html += "<tr><td>Su</td><td>M</td><td>Tu</td><td>W</td><td>Th</td><td>F</td><td>Sa</td></tr>";
html += "<tr>";
for (s = 0; s < notDate; s++) {
    html +="<td>&nbsp</td>";
}
date=1;
while (date <= monthDays[thisMonth])
{
    for (i = notDate;i<7;i++)
    {
        if (date <= monthDays[thisMonth]){
            if(date == thisDate){
                html +='<td style = "color:red;"><b>' + date + '</b></td>';
            }else{
                html +='<td>' + date + '</td>';
            }
        }
        else{
            html +="&nbsp";
        }
        date++;
    }
    html +="</tr>";
    notDate=0;
}
html +="</table></p>";

document.getElementById('calendar').innerHTML = html;
