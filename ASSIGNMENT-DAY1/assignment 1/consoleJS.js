//log()
var x = 5;
function add(){
    var y = 9;
    console.log("Sum : "+(x+y));
}
add();

//warn()
console.warn("Warning!!");

//error()
console.error("There is an error in your code!");

//time() timeEnd()
console.time("First Timer");
for(var i = 1;i<=5;i++){
    console.log(i*5);
}
console.timeEnd("First Timer");

//count()
var x = 20;
while(x>0){
    console.log((x-2));
    x = x-2;
    console.count("First Count");
}

//group() , groupEnd() 
console.log("Console has a method to create groups")
console.group("Group 1");
console.log("Group is created");
console.log((3+8),(5*7));

console.groupEnd("Group 1");
console.log("Group has been ended");


//clear()
function fn()
{
    console.clear();
    document.getElementById("p1").innerHTML = "Console is cleared.";
}

