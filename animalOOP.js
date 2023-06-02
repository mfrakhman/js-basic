class Animal {
    constructor(name, lifespan){
        this.name = name;
        this.lifespan = lifespan;
        console.log("animal");
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
    getLifespan(){
        return this.lifespan;
    }
    setLifespan(lifespan){
        this.lifespan = lifespan;
    }
    descript(){
        console.log("this animal named "+this.name+" have a lifespan about "+this.lifespan+" years");
    }
}

class Mamale extends Animal{
    constructor(name, lifespan, legs){
        console.log("mamale");
        super(name, lifespan);
        this.legs = legs;
    }
    //Call Parent Function
    descript(){
        super.descript();
        console.log("and this animal have "+this.legs+" legs");
    }
}

class Piscess extends Animal{
    constructor(name, lifespan, fins){
        console.log("pisces");
        super(name, lifespan);
        this.fins = fins;
    }
    // Override Parent Function
    descript(){
        console.log("this animal named "+this.name+" have a lifespan about "+this.lifespan+" years, and this animal have "+this.fins+" fins");
    }
}

let Cat = new Mamale("Cat", 15, 4);
let Shark = new Piscess("Shark", 100, 8);
Cat.descript();
Shark.descript();

// Log in Console
console.log('Hello World');
let name = 'fajar';
console.log(name);

// Cannot be a reserve word
// Should be meaningful
// Cannot start with a number e.g(1name)
// Cannot contain a space or hypen e.g(-)
// Are case-sesitive

let firstName = 'Fajar';
let lastName = 'Rakhman';

const interestRate = 0.3;
// Value cannot be changed
let inerestRate_Changed = 1;
// Value can be changed

let age = 24;
let isStraight = true;
let address = undefined;
let colorSkin = null;

let person = {
    nameOfPerson: 'Fajar',
    ageOfPerson: 24
};

// Dot Notation
person.nameOfPerson = 'Rakhman'
// Bracket Notation
person['nameOfPerson'] = 'Muhammad'

console.log(person)

// Array
let colorSelections = ['Black', 'White', 'Yellow'];
console.log(colorSelections);
console.log(colorSelections.length);

// Function
function greet(){
    console.log('this is a function');
}

// Function with parameter
function greeting(name, lastName){
    console.log('Hey '+name+' '+lastName)
}
// Calculation function
function powerOfTwo(number){
    return number*number;
}

greet();
greeting(name, lastName);

// The barbaric way to call a function in console
let number = powerOfTwo(3);
console.log(number)
// Calling other function in console
console.log(powerOfTwo(2));