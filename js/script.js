const person = {
    name: "Alice",
    age: 30,
    isStudent: false
}

console.log(person.name)
console.log(person["age"])

const dog = {
    name: "Buddy",
    breed: "Labrador",
    bark: function () {
        console.log("Woof!");
    }
}

dog.bark();

const car = {
    brand: "Toyota",
    year: 2020,
    color: "black"
}

console.log(car.color);
console.log(car["color"])