document.write("<h2>VAR : ");
var a = 5.67;
function mul()
{
    b = 7;
    document.write("<h2>Global variable : "+a);
    document.write("<h2>Prodcut : "+(a*b));
    a = "flower";
}
mul();
document.write("<h2>global variable value changed : "+a);

document.write("<h2>LET : ");
let x = 5.6; // here x is 5.6;
{
   let x = 123;
   document.write("<h2>Variable : "+x);
}
document.write("<h2>Outside the block , variable value has not changed : "+x);

document.write("<h2>In loops : ");
let i = "book";
for(let i=1; i<5 ; i++ ){
  document.write("<h2>value : "+i);
}
document.write("<h2>Outside the loop : "+i);

document.write("<h2>CONST : ");
const z = 7.6785;   //assigning when declared
document.write("<h2>variable : "+a);
document.write("<h2>Changing constant Arrays(cannot be reassigned)");
const arr = ["Harry Potter","Lord of Rings","Sherlock Holmes"];
document.write("<h2>Array : ")
document.write(arr);
arr[1] = "You";
document.write("<h2>Changed Array : ")
document.write(arr);