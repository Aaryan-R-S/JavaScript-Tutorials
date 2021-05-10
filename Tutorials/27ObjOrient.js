console.log('')
console.log("Tut 27")

//object literal for creating objects
let car ={
    name: 'Maruti',
    speedmax:'32',
    run: function(){
        console.log('Car is running!');
    }
}

//creating a constructors for cars
function x(givenname, givenspeedmax){
    this.name = givenname;
    this.speedmax = givenspeedmax;
    this.run = function() {
        console.log(`${this.name} is running`)
    }
    this.analyze = function(){
        console.log(`This car is slower than Audi by ${200-this.speedmax}km/hr`)
    }
}

car1 = new x('Nissan', 180)
car2 = new x('Honda', 80)
console.log(car, car1, car2)
