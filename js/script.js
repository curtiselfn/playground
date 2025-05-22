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
    color: "black",
    honk: function () {
        console.log("Beep beep!")
    }
}

console.log(car.color);
console.log(car["color"])
car.honk()
car.color = "blue"
car.owner = "Sam"

console.log(car.color);
console.log(car.owner);

car.describe = function () {
    console.log(
        `This car is a ${this.color} ${this.brand} from ${this.year} and ${this.owner} owned it.`
    );
};

car.describe();