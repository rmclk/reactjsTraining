funName =(a,b)=>{
    result = a + b;
    console.log(result);
}

checkName=()=>{
    let firstName = document.getElementById("fname").value;
    let result = (firstName === "David")?"</br>Hello David!":"<br/>Hello. You're not David!";
    document.getElementById("content").innerHTML = result;
}

let policyTypes = ['Home', 'Vehicle', 'Boat'];

//Accessing array
document.write('The policy types are: ' + policyTypes + "<br/>");

document.write('The Second policy type is: ' + policyTypes[1] + '<br/>');

policyTypes.push = ("Hello World");

console.log(policyTypes);
console.log(policyTypes[1]);
console.log(policyTypes);