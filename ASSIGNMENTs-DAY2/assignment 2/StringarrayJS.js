function fn1(){
    var x = "Atomic Structure";
    var y = x.substring(2,9);
    document.getElementById("p1").innerHTML = "string : "+x;
    document.getElementById("p2").innerHTML = "Sub string : "+y;
}

function fn2(){
    var x = "Lord of the Rings";
    var y = x.slice(-7,-2);
    document.getElementById("p3").innerHTML = "original string : "+x;
    document.getElementById("p4").innerHTML = "New string extracted from original string  : "+y;
}

function fn3(){
    var x = "There are nine planets";
    var y = x.replace("nine","eight");
    document.getElementById("p5").innerHTML = "original string : "+x;
    document.getElementById("p6").innerHTML = "replaced string  : "+y;
}

function fn4(){
    var x = "Programming ";
    var y = x.repeat(3);
    document.getElementById("p7").innerHTML = "original string : "+x;
    document.getElementById("p8").innerHTML = "New string by copying original string(number of times)  : "+y;
}

function fn5(){
    var x = "Sherlock HoLmes";
    var z = x[6];
    var y = x.charCodeAt(6);
    document.getElementById("p9").innerHTML = "string : "+x;
    document.getElementById("p10").innerHTML = "character : "+z;
    document.getElementById("p11").innerHTML = "ASCII code of given character : "+y;
}

function fun1(){
    var x = ["mercury"," neptune"," uranus"," earth"," venus"];
    document.getElementById("1").innerHTML = "original array : "+x;
    var y = x.copyWithin(3,1,2);
    document.getElementById("2").innerHTML = "changed array : "+y;
}

function fun2(){
    var x = ["Nike"," Fila"," Puma"," Sketchers"];
    document.getElementById("3").innerHTML = "original array : "+x;
    var y = x.fill(" Reebok",2);
    document.getElementById("4").innerHTML = "changed array(with fixed elements in desired position) : "+y;
}

function fun3(){
    var x = ["Guuci"," Prada"," OffWhite"," Cadini"];
    document.getElementById("5").innerHTML = "array : "+x;
    var y = x.indexOf(" Prada");
    document.getElementById("6").innerHTML = "Index of the given element : "+y;
}

function fun4(){
    var x = ["mercury"," neptune"," uranus"," earth"," venus"];  
    document.getElementById("7").innerHTML = " unsorted array : "+x;
    var y = x.sort();
    document.getElementById("8").innerHTML = "sorted array(alphabetic wise) : "+y;
}

function fun5(){
    var x = ["C++"," is"," an object"," oriented"," programming", " language"];  
    document.getElementById("9").innerHTML = "array : "+x;
    var y = x.join(" ");
    document.getElementById("10").innerHTML = "array transformed into string : "+y;
}

