// window.alert(' Hello Form external JS');
console.log('Hello form console JS');
document.writeln("Hello World"+'<br>');

//data type initialization
let studentId = 123;
let studentCgpa = 3.75;
let studentName = 'shuvo';
let eS = " ";//empty string
let b = '123'

//print
document.writeln('<p style = "color:red">Student Id: '+studentId+'<br></p>');
document.writeln('<p style = "color:red">Student Id: '+studentCgpa+'<br></p>');
document.writeln('<p style = "color:red">Student Id: '+studentName+'<br></p>');

//console print
console.log('Student Id: '+studentId);
console.log('Student CGPA: '+studentCgpa);
console.log('Student Id: '+studentName);

//type casting
//Number
let cgpa = parseInt(studentCgpa);
document.writeln(cgpa);

//Integer to float
let id = parseFloat(studentId)/12;
document.writeln(id);
document.writeln(typeof(id));
document.writeln("To Fixed: "+id.toFixed(3));
document.writeln("To Precision: "+id.toPrecision(3));

//string to number(integer)
let bS = parseInt(b);
document.writeln('string to number: '+typeof(bS));
document.writeln(bS+"<br><br><br>");

//number to striung
let d = 987
let dS = String(d);
document.writeln('number to string: '+typeof(dS));
document.writeln(dS+"<br><br>");

//string to float
let e = '456.258'
document.writeln(e+'<br>');
document.writeln('data type: '+typeof(e)+'<br>');
let eF = parseFloat(e);
document.writeln(eF+'<br>');
document.writeln('data type: '+typeof(eF)+'<br>');

//try integer to string, string to number(float)
//string to number is NaN alphabets

//number function
document.writeln("string expressed with number: "+Number("ddsds")+ '<br>');
document.writeln("number expressed in number: "+Number("434")+'<br>');
document.writeln("number expressed in string: "+Number("     24    ")+'<br>');
document.writeln("number expressed in boolean "+Number(true)+'<br>');
