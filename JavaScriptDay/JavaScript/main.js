/*
let firstNumber = 45;
let secondNumber = 40;
thirdNumber = '60';
let result = firstNumber + secondNumber + parseInt(thirdNumber);

document.write('First Number ' + firstNumber +'<br/>');
document.write('Second Number ' + secondNumber + '<br/>');
document.write('Third Number ' + thirdNumber + firstNumber + '<br/>')
document.write('Sum of Numbers = ' + result + '<br/>');

console.log(firstNumber);
*/

/*if (1=='1'){
    console.log('true');
    document.write('<br/>this is true. </br>');
}*/

/*
var hVar = 200;
var aVar = 350;

var result = hVar + aVar;

if(hVar + aVar > 650){
    var total = result*0.9;
    var discount = result*0.1;
    message = 'Discount Amount = ' + discount.toFixed(2) + '<br/>Insurance Total = ' + total.toFixed(2);
}
else{
    message = 'Insurance Total = ' + result.toFixed(2);
}

document.write(message);*/

/*
let text;
let carName = prompt('Enter the car name: ');

switch(carName.toUpperCase()){
    case 'PEUGEOT' :
        text = 'This is a French car';
    break;
    case 'FORD' :
        text = 'This is an American car';
    break;
    case 'BMW' :
        text = 'This is a German car';
    break;
    default:
        text = "'\'Unknown'\'";
}

document.write(text);*/

/*let f;
for(let c=0; c<=100; c=c+10){
    f = c*9/5 + 32;
    document.write("<tr><td>" + c + "</td><td>"+ f + "</td></tr>");
  }*/

document.write("<br/></br>");
document.write('for of loop <br/>');

let numbers = [33,44,55,22,10,7];

for(let temp of numbers){
    document.write(temp + ' ');
}