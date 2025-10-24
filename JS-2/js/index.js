// // the following statemant returns string 
// document.writeln("sum: "+Number(prompt("Enter First Number"))+Number(prompt("Enter Last Number"))+'<br>');
// // the following statemant returns number
// document.writeln(Number(prompt("Enter First Number"))+Number(prompt("Enter Last Number")));

//string functoin
let a = "ASDDD";
//length
document.writeln("Length: " +a.length+'<br>');
//tolower
document.writeln("lowerCase: " + a.toLowerCase() +'<br>');
//toupper
document.writeln("upperCase: " + a.toUpperCase() +'<br>');
//to slice
document.writeln("slice: "+ a.slice(0,3)+'<br>');

//arithmatic operwatioe
let b = 123;
let c = 456;
document.writeln("additional: " + (b+c)+ "<br>subtraction: "+(b-c)+ "<br>multipication: "+(b*c)+ "<br>modolus: "+(c%b));

//assignment operatord 
d = ++b;
d = d+1;
d+=1;