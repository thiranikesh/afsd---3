console.log("External script.......");

document.write("ACPT");
document.write("<br>");
document.write("AFSD");

document.write("<h2>ACPT</h2>");

document.write("<br>");
document.write("<br>");
document.write("<button>Click me </button>");

// alert("Thiran Nikesh")

// Numbers
const num = 12.5;

// string
const string = "Thiran"

// Boolean
const boo = true

const obj = {
    name: "Thiran",
    run: function () {
    }
}

const array = [12, 12.5, "acpt", "obj"]

// var/let/const
// #################################
// let

// 1****
let l = 10;
// let l = 12;can not redeclare

// 2****
{ let ll = 100; }
// console.log(ll);

// 3****
l = 30;
console.log(l);

// ###################################

// var

//1****
var v = 10;
// can redeclare
var v = 12;
console.log(v);

// 2****
{ var vv = "text" }
console.log(vv);

// 3****
// reassign
v = 22;
console.log(v);

// #####################################

// const

//1****
const c = 10;
// can not redeclare
// const c = 12;
// console.log(c);

// 2****
{ const cc = "text" }
// console.log(cc);

// 3****
//not reassign
const ccc = 33;
// ccc = 22;
// console.log(ccc);

// ##########################################

// Arithmetic operators
// Addition(+)
const a = 12;
const b = 8;

const Addition = a + b;
console.log(Addition);

// subtraction(-)
const sub = a - b;
console.log(sub);

//multiplication(*)
const mul = a * b;
console.log(mul);

// Division(/)\
const div = a / b;
console.log(div);

// Modulus(%)
const mod = a % b;
console.log(mod);

// Increment
let h = 10;
h++
h++
console.log(h);

// Decrement
let j = 12;
j--
j--
console.log(j);

// Comparison Operators
const e = 12;
const d = 13;

// Equal
console.log("Equal ", e == d);

// Not equal
console.log("Not equal ", e != d);

// Greater than 
console.log("Greater Than", e > d);

//less than
console.log("Less Than", e < d);

// Greater than or equal
console.log("greater than or equal ", e >= d);

//Less than or equal
console.log("Less than or equal ", e <= d);



// Logical Operators
const y = true;
const x = false;

// AND (&&)
console.log("AND ", y && x);

// OR (||)
console.log("OR ", y || x);

//NOT (!)
console.log("NOT ", !x);



//////////////////////////////////////////////////////////////
// function

function myName() {
    console.log("print function");
}
myName();

// Arrow function

const myarrowName = () => {
    console.log("print Arrow function");
}
myarrowName();

function myNameto(name, age, color) {
    console.log("My name = ", name);
    console.log("My age = ", age);
    console.log("I like color = ", color);
    console.log("-------------------------------")
}
myNameto("Thiran", 22, "red");
myNameto("kasun", 20, "black");
myNameto("wimal", 12, "red");
myNameto("Thiran", 22, "red");

const myarrowNameto = (name, age, color) => {
    console.log("My name = ", name);
    console.log("My age = ", age);
    console.log("I like color = ", color);
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>")
}
myarrowNameto("Thiran", 22, "red");
myarrowNameto("kasun", 20, "black");
myarrowNameto("wimal", 12, "red");
myarrowNameto("Thiran", 22, "red");

numEqual(12, 34);
function numEqual(num1, num2) {
    console.log("Sum Equal = ", num1 + num2);
}

function numReturn(num1, num2) {
    const equal = num1 + num2
    return equal;
}
const result = numReturn(200, 300);
console.log(result);

console.log(numReturn(40, 60));
/////////////////////////////////////////////////////////////////////////

// Flow controllers
const nu = 600;
const nu2 = 700;
if (nu > nu2) {
    console.log(true);
} else if (nu == nu2) {
    console.log("2-----");
} else {
    console.log("3----");
}


// switch
const val = "AFSD"
switch (val) {
    case "Thiran":
        console.log("1........");
        break;
         case "AFSD":
             console.log("2.......");
             break;
             case"ACPT":
             console.log("3........");
             break;
    default:
        break;
}


//For Loop
for(let i=0; i<10; i++){
    console.log(i)
}

const arr =[12,54,76,43];

for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

let stu = 0;
while(stu<arr.length){
    console.log(arr[stu],"------");
    stu++;
}

let chil = 0;
do{
    console.log(arr[chil],"*****");
    chil++
    if(arr[chil]==76){
        break;
    }  
}
while(chil<arr.length)


// Object
const person = {
    name:"Thiran",
    address:"Negombo",
    id:"200200800391",
    age:"22",
    run:function(){console.log("run")},
    eat:function(){console.log("eat")},
    sing:function(){console.log("sing")},
}

const name1 = person
console.log(name1);

const name2  = person.name
console.log(name2);

console.log(person.id);

console.log(person.address);

person.run();
person.eat();
person.sing();

//Array
const array1 = [22,"Thiran",true,person];
console.log(array1[3].name);
array1[3].run()

const fr = ["Banana","Orange","Apple","Mango"];
// pop
const fr1 = fr.pop();
console.log(fr);
console.log(fr1);

// push
fr.push("kiwi");
console.log(fr);

// shift
const fr2 = fr.shift();
console.log(fr);
console.log(fr2);

// unshift
fr.unshift("papol");
console.log(fr);


// Event
// onclick
function clickMe(){
    console.log("Click Button");
}

// onchange

const changeText= () =>{
    const text = document.getElementById('change-text').value
    document.getElementById('view-text').value = text
    console.log(text);
}


// Onmouse over
const mouseOver = () =>{
    document.getElementById('mouse').style.backgroundColor = 'blue'
    document.getElementById('mouse').style.width = '300px'
}

// Onmouse out
const mouseOut = () =>{
    document.getElementById('mouse').style.backgroundColor = 'red'
    document.getElementById('mouse').style.width = '200px'
}

const keyDown = () => {
    console.log("key Down......");
}

const keyUp = () => {
    console.log("key Up......");
}

const keyPress = () => {
    console.log("key Press......");
}

const changeName = () => {
    const text = document.getElementById('change-name').value
    document.getElementById('display-1').innerText = text
    console.log(text);
}

















