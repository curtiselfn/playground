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
    type: "Corolla",
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

// since the function is inside an object, this.xxx should means the parent property

car.describe();

car.maintenance = {
    lastService: "2024-12-01",
    mileage: 15000,
    serviceCenter: "SuperAuto Garage"
};


car.maintenance.nextServiceDue = function () {
    console.log(`Next service due at ${this.mileage + 5000} miles`)
}

car.maintenance.nextServiceDue()

car.describe = function () {
    console.log(`This car is a ${this.year} ${this.brand} ${this.type}`)
}

car.describe()