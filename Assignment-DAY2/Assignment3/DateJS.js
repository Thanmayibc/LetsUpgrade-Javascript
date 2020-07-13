var Currentdate = new Date();
var d = Currentdate.getDate();

var m = Currentdate.getMonth()+1; 
var y = Currentdate.getFullYear();

if(d<10) 
      d ='0'+ d;


if(m <10) 
      m ='0'+ m;


document.write("<h2>Format : date/month/year");
Currentdate = d +'-'+ m +'-'+ y;
document.write("<h2>"+ Currentdate);
Currentdate = d +'/'+ m +'/'+ y;
document.write("<h2>"+ Currentdate);


document.write("<h2>Format : month/date/year");
Currentdate = m +'-'+ d +'-'+ y;
document.write("<h2>"+ Currentdate);
Currentdate = m +'/'+ d +'/'+y;
document.write("<h2>"+ Currentdate);