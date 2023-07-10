// function Car(brand, maxSpeed) {
//     this.brand= brand
//     this.maxSpeed = maxSpeed
// }
//  Car.prototype.statEngen = function (){
//      console.log('start' + this.brand)
//  }
// const car1= new Car('opel', 228)
// const car2= new Car('bmwl', 28)
// console.log(car1)
// console.log(car2)
//
// car1.statEngen()
// class Car {
//     constructor(brand,maxSpeed) {
//     this.brand = brand
//         this.maxSpeed = maxSpeed
//     }
//     startEngine(){
//         console.log(`start ${this.brand}`)
//     }
//
// }
//
//
// const car1= new Car('opel', 228)
// const car2= new Car('bmwl', 28)
// console.log(car1)
// console.log(car2)
//
// car1.startEngine()
class Car {
    #brand
    constructor(brand,maxSpeed) {
        this.#brand = brand
        this._maxSpeed = maxSpeed
    }
    getBrand(){
        return this.#brand
    }

}
const car1= new Car('opel', 228)
const car2= new Car('bmwl', 28)
console.log(car1)
console.log(car2)
// car1.startEngine()
const brand1 = car1.getBrand()
console.log(brand1)