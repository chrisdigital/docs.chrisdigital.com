//this is a sample lesson, output to console
/*console.log("Hello from myscript.js");

console.log("Hello again!");*/

//store the prompt data in the name variable
/*var name = prompt("What is your name?");

alert("Hello " + name);

if(name==="Chris"){//Do a check if it's me "Chris" nad switch it out for my nickname
name = "ChrisDigital"
};

//output to console with nickname
console.log("Hello " + name);
console.log("The user's name is " + name);*/

/*console.log("Before");

if(false){
	console.log("If block");
}



console.log("After");*/


//Loops, added counter
/*console.log("Before");

var counter = 10;

while (counter) {
	
	console.log("Hello World!");
	counter = counter - 1;
}

while (prompt("What is your name?")){ //infinite loop
	console.log ("Got your name")
}

console.log("After");*/


/*for (var counter = 10;counter; counter = counter -1) {
	console.log("Hello World", counter);
}*/

/*if("hi"){
	console.log("hello");
}*/

//Whole Numbers
var a = 11;//same as 11.0
    b = -123;

//all numbers are floating point in JS
var c = 1.5;
    d = 123.456789;

var e = 0.1;
    f= 0.2;

var result = e * f;

var g = 1000000; // literal 1 million
var g2 = 1E6;//1 to the 6th power, 1 million
var g3 = 1.23E16;

//working with octals
var h = 012;//leading 0 puts your numbers in a "diffrent base"
var h2= 019;//gotcha situation, 9 does not exist in octal 9 larger number is "7"

//hexideciamal numbers are base16
//ff 00 00
var i = 0xff; //255
var i2 = 0x00;//000

var j = parseInt("197");
var j2 = parseInt("012");
var j3 = parseInt("019");
var j4 = parseInt("019", 10);//always add the second argument "radix" of 10 - that sets base10 unless you have a specific reason to change base to avoid error

var k = parseInt("0000101", 2)//base 2 or "binary" for example

var l = parseInt("23 people", 10);//evaluates to 23, rest of string is ignored
var l2 = parseInt("There are 23 people", 10);// evaluates to "NaN" because the string starts off with letters, parser finds no numbers, stops

//NaN and Undefined are not the same, context is different
//l3 === isNan();//ignore
console.log(isNaN(l2));//only way to check for NaN

var m = parseFloat("123.456789 is a strange number");

