var a = 4, b=5.678;
var x = "computer" , y = "12_books"; var z = false;
var d ; const c = 3n ** 56n;
function book(title,price)
{
    this.title = title;
    this.price = price;
}
var b1 = new book("Harry Potter","$675");
document.write("<h2>Number");
document.write("<h2>variable a : "+a+"</h2>");
document.write("<h2>variable b : "+b+"</h2>");

document.write("<h2>String");
document.write("<h2>variable a : "+x+"</h2>");
document.write("<h2>variable b : "+y+"</h2>");
document.write("<h2>Concatenation of String : ");
document.write(x+y);


document.write("<h2>Boolean");
document.write("<h2>variable a : "+z+"</h2>");

document.write("<h2>BigInt");
document.write("<h2>variable a : "+c+"</h2>");

document.write("<h2>Undefined");
document.write("<h2>variable a : "+d+"</h2>");

document.write("<h2>Object");
document.write("<h2>property 1 : "+b1.title+" , property 2 : "+b1.price+"</h2>");

function fn()
{
    var x = Number(document.getElementById("id1").value);
    document.getElementById("h21").innerHTML = "Datatype is : "+(typeof(x));
}