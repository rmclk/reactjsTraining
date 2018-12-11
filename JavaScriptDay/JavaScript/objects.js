class Person {
    constructor(fName, sName){
        this.firstName = fName;
        this.surname = sName;
        Person.numberOfPerson++;
    }

    work(){
        document.write(`${this.firstName} works in ANI`);
    }
    static countPerson(){
        return(`The number of people : ${Person.numberOfPerson}`);
    }
}

Person.numberOfPerson = 0;
let gbyrn = new Person('Gerry','Byrne');
let dwi34 = new Person('David', 'Wilson');

document.write(`<br/>` + Person.countPerson());

let display = (...people)=>{
    for(let individual of people){
        document.write(`<br/> ${individual.firstName} ${individual.surname} `)
        individual.work();
    }
}

display(gbyrn, dwi34);
