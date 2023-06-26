//this (call apply bind constructor)

//!'use strict'{}
//!'use strict'{}, undefined,null
//1.GLobal scoupe
//2.function (simple | arrow)
//3 call apply bind
//4 function constructor

const f = () => {
    console.log(this)
}

f()
//OOP
const man = {
    _data: {},
    _counter: {
        value: 3,
        step: 2,
        // value: 0,
    },
    printCounterWithDelay(){
setTimeout(()=>{
    this.printCounter.bind(this)
},1000)
            // this.printCounter()

    },
    printCounter(){
        console.log(this._counter.value)
    },
    getCounter (){
        console.log('this' + this)
        return this._counter.value
    },

}
const print = man.printCounterWithDelay
print.bind(man)
// console.log(man.getCounter())
// const getCounter =man.getCounter
// console.log(getCounter())
const anyFnc = (counterable) => {
    console.log(counterable.getCounter())
}
let anyProps={
    getCounter:()=> {
        return man.getCounter()
    }}

anyFnc(anyProps)

// console.log(anyFunc(man))
// man.increment()
// // console.log(man)
// man.getCounter()

class Man {

    constructor(props) {
    this.props = props

    }
    render(){
        console.log(this.props.age)
    }


}
const  men1 = new Man({age: 10})
men1.render()