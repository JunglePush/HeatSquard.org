console.log("hlep")

let number = 1 // this is a variable that can be changed.
const number2 = 2 // this variable cannot be changed because its a constant (const)

let person = {
    guh: "Hello",
    anotherkeyvalue: 30
}

person.anotherkeyvalue = 1
person.guh = "t"

function greet() {
 console.log("normal function")
}
() => {
    console.log("arrow function")
}

greet()