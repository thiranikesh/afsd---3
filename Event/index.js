function sum () {
    const number1 = document.getElementById('text-1').value
    const number2 = document.getElementById('text-2').value
    const total = parseInt(number1)+parseInt(number2); 
    document.getElementById('display').innerText =total;
    console.log(total);

}
function equal () {
    const num1 = document.getElementById('equal-1').value
    const num2 = document.getElementById('equal-2').value
    if(num1==num2){
        document.getElementById('displa').innerText ="Equal..";
    }else{
        document.getElementById('displa').innerText ="Not Equal";
    }

}
function than () {
    const num3 = document.getElementById('than-1').value
    const num4 = document.getElementById('than-2').value
    if(num3<num4){
        document.getElementById('display-1').innerText ="GreaterThan";
    }else if(num3==num4){
        document.getElementById('display-1').innerText ="Equal";
    }
    else{
        document.getElementById('display-1').innerText ="LessThan";
    }

}
function sum2 () {
    let total = 0;
    let num5 = document.getElementById('sum-2').value
    for(let i=0; i<num5.length; i++){
        total =parseInt(total) + parseInt(num5[i]);
    }
    document.getElementById('display-2').innerText =total;
}

function mark () {
const m = document.getElementById('mark-1').value
let result =""
    if(m>=75){
        result ="A";
    }else if(m>=65){
        result ="B";
    }else if(m>=45){
        result ="C";
    }else if(m>=35){
        result ="S";
    }
    else{
        result ="Fail";
    }
    document.getElementById('display-3').innerText =result;
}

function keysubmit () {
    const inputkey = document.getElementById('key-1').value
    let fullName ="";
    switch (inputkey) {
         case 'intern':
            fullName ="Intern software engineer";
            break;
         case 'ase':
            fullName ="Aaaociate software engineer";
            break;
         case 'se':
            fullName ="Software Engineer";
            break;
         case 'sse':
            fullName ="Senior software engineer";
            break;
         case 'atl':
            fullName ="Assistent software engineer";
            break;
         case 'tl':
            fullName ="Tech Lead";
            break;
         default :
            fullName ="Error Key Word..";
            break;
    }
    document.getElementById('display-4').innerText=fullName;
}  

function arraySubmit () {
    const userInput = document.getElementById('text-3').value;
    const arr = []
    for(let i=0; i<userInput.length; i++){
       arr.push(" "+userInput[i]+" ") 
    }
    document.getElementById('display-5').innerText =arr;
}
const arr = []
function push () {
    const userInput = document.getElementById('text-4').value;
    arr.push(userInput);
    document.getElementById('text-4').value="";

}
function arraySubmit1 () {
    document.getElementById('display-6').innerText =arr;
}

function login () {
    const UN = "AdMin";
    const pW = "1234w";
    const inUN = document.getElementById('un').value;
    const inPW = document.getElementById('pw').value;
    // const ucUN = UN.toUpperCase();
    // const ucpW = pW.toUpperCase();
    // const ucinUN = inUN.toUpperCase();
    // const ucinPW = inPW.toUpperCase();
    // if (ucUN==ucinUN) {
    //     if (ucpW==ucinPW) {
    //         document.getElementById('display-7').innerText ="Login success ...";
    //     }else{
    //         document.getElementById('display-7').innerText ="Login Fail ...";
    //     }
    // }else{
    //     document.getElementById('display-7').innerText ="Login Fail ...";
    // }
    if (UN.toUpperCase() == inUN.toUpperCase() && pW.toUpperCase() == inPW.toUpperCase()) {
        document.getElementById('display-7').innerText ="Login success ...";
        document.getElementById('un').value="";
        document.getElementById('pw').value="";
    }else{
        document.getElementById('display-7').innerText ="Login Fail ...";
        document.getElementById('un').value="";
        document.getElementById('pw').value="";
    }


}


document.getElementById('disable-1').value = Math.round(Math.random() * 100);
document.getElementById('disable-2').value = Math.round(Math.random() * 100);
function RandomNum () {
    const num1 = parseInt(document.getElementById('disable-1').value)
    const num2 = parseInt(document.getElementById('disable-2').value)
    document.getElementById('display-8').innerText =num1 + num2;

}

let arrRandom = []
for (let i = 0; i <= 50; i++) {
    arrRandom.push(Math.round(Math.random() * 100))
}
document.getElementById('display-9').innerText = arrRandom;

let arrSeleted = []
function RandomNum2 () {
    let inputNum = document.getElementById('random-2').value;
    let m = 0
    for (let i = 0; i <= 50; i++) {
        if (arrRandom[i]%inputNum == 0) {
            arrSeleted.push(arrRandom[i])
            m++

        }else{
        }     
    }
    document.getElementById('display-10').innerText = arrSeleted+" seleted number "+m;
    console.log(arrSeleted)
}
