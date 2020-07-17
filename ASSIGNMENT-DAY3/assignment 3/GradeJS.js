function fn1(){
    var x = document.getElementById("i2").value;
switch(true){
    case (x<=100 && x>=90) :
    {
        console.log("(Using Switch) Marks : "+x+" Grade : A");
        document.getElementById("p2").innerHTML = "Message printed in the console";
    } break;
    case (x<=89 && x>=80) :
    {
        console.log("(Using Switch) Marks : "+x+" Grade : B");
        document.getElementById("p2").innerHTML = "Message printed in the console";

    } break;
    case (x<=79 && x>=70) :
    {
        console.log("(Using Switch) Marks : "+x+" Grade : c");
        document.getElementById("p2").innerHTML = "Message printed in the console";

    } break;
    case (x<=69 && x>=60) :
    {
        console.log("(Using Switch) Marks : "+x+" Grade : D");
        document.getElementById("p2").innerHTML = "Message printed in the console";

    } break;
    case (x<=59 && x>=50) :
    {
        console.log("(Using Switch) Marks : "+x+" Grade : E");
        document.getElementById("p2").innerHTML = "Message printed in the console";

    } break;
    case (x<=49 && x>=0) :
    {
        console.log("(Using Switch) Marks : "+x+" Grade : F(Fail)");
        document.getElementById("p2").innerHTML = "Message printed in the console";

    } break;
    default : 
    document.getElementById("p2").innerHTML = "Type valid marks";
}
}