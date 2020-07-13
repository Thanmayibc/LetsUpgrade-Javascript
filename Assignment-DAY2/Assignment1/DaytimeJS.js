  var Currentday = new Date();
  var day = Currentday.getDay();
  var dayArray = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  
  document.write("<h2>Today  : " + dayArray[day] + "</h2>");

  var h = Currentday.getHours();
  var min = Currentday.getMinutes();
  var sec = Currentday.getSeconds();
  var ABnoon = (h >= 12)? " PM ":" AM ";
  h = (h >= 12)? h - 12: h;
  if (h===0 && ABnoon===' PM ') 
  { 
       if (min===0 && sec===0)
        { 
          h=12;
          ABnoon=' Noon';
        } 
       else
        { 
           h=12;
           ABnoon=' PM';
         } 
  } 
  if (h===0 && ABnoon===' AM ') 
  { 
       if (min===0 && sec===0)
       { 
            h=12;
            ABnoon=' Midnight';
       } 
       else
       { 
           h=12;
           ABnoon=' AM';
        } 
  } 

document.write("<h2>Time : "+h + ABnoon + " : " + min + " min :  " + sec+" sec</h2>");