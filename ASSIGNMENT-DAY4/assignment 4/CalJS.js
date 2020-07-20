function fn(){
   var x  = document.getElementById("i1").value;
   var y  = document.getElementById("i2").value;
   var z = document.getElementById("s1");
   var c = z.options[z.selectedIndex].value;

   switch(c){
       case "1" : document.getElementById("p1").innerHTML = "Result : "+(x+y);
                  document.getElementById("p2").innerHTML = "";
                   break;
       case "2" : document.getElementById("p1").innerHTML = "Result : "+(x-y);
                  document.getElementById("p2").innerHTML = "";
                   break;
       case "3" : document.getElementById("p1").innerHTML = "Result : "+(x*y);
                  document.getElementById("p2").innerHTML = "";
                  break;
       case "4" : document.getElementById("p1").innerHTML = "Result : "+(x/y);
                  document.getElementById("p2").innerHTML = "";
                   break;
       case "5" : document.getElementById("p1").innerHTML = "Result : "+(x%y);
                  document.getElementById("p2").innerHTML = "";
                  break;
       case "6" : document.getElementById("p1").innerHTML = "Result : "+(Math.sqrt(x));
                  document.getElementById("p2").innerHTML = "Result : "+(Math.sqrt(y));
                   break;
       case "7" : document.getElementById("p1").innerHTML = "Result : "+(Math.pow(x,y));
                   document.getElementById("p2").innerHTML = "";
                     break;
       case "8" : document.getElementById("p1").innerHTML = "Result : "+(Math.abs(x));
                  document.getElementById("p2").innerHTML = "Result : "+(Math.abs(y));
                   break;
       case "9" : document.getElementById("p1").innerHTML = "Result : "+(Math.ceil(x));
                  document.getElementById("p2").innerHTML = "Result : "+(Math.ceil(y));
                  break;
       case "10" : document.getElementById("p1").innerHTML = "Result : "+(Math.floor(x));
                  document.getElementById("p2").innerHTML = "Result : "+(Math.floor(y));  
                   break;

   }

}