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
    printCounterWithDelay() {
        setTimeout(() => {
            this.printCounter.bind(this)
        }, 1000)
        // this.printCounter()

    },
    printCounter() {
        console.log(this._counter.value)
    },
    getCounter() {
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
let anyProps = {
    getCounter: () => {
        return man.getCounter()
    }
}

anyFnc(anyProps)

// console.log(anyFunc(man))
// man.increment()
// // console.log(man)
// man.getCounter()

class Man {

    constructor(props) {
        this.props = props

    }

    render() {
        console.log(this.props.age)
    }


}

const men1 = new Man({age: 10})
men1.render()

var isPalindrome = function (x) {
    let reverseFunction = x.toString().split('').reverse().join('')
    return x == reverseFunction;
};
console.log(isPalindrome(-121))

var romanToInt = function (s) {

    // let initNumber = s.toString().split('')
    let f = 0
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {

            case s[i] === 'I' && s[i + 1] === 'V':
                f +=5
                break;
            case s[i] ===  'I' && s[i + 1] === 'X':
                f+=9
                break;
            case s[i] ===  'X' && s[i + 1] === 'L':
                f+=40
                break;
            case  s[i] === 'X' && s[i + 1] === 'C':
                f+=90
                break;
            case s[i] === 'C' && s[i + 1] === 'C':
                f+=400
                break;
            case  s[i] === 'C' && s[i + 1] === 'm':
                f+=900
                break;

            case s[i]=== 'I':
                f+=1
                break;

            case   s[i]==='V':
                f+=5
                break;
            case  s[i]==='X':
                f+=10
                break;
            case  s[i]==='L':
                f+=50
                break;
            case  s[i]==='C':
                f+=100
                break;
            case  s[i]==='D':
                f+=500
                break;
            case  s[i]==='M':
                f+=1000
                break;
            default:
                f += s[i]
                break;
        }


    }
    return f
};
console.log(romanToInt('MCMXCIV'))

const romanHash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};
const s = "MCMLXXXIX";
// s = 1989
function romanToInt(s) {
    let accumulator = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "I" && s[i + 1] === "V") {
            accumulator += 4;
            i++;
        } else if (s[i] === "I" && s[i + 1] === "X") {
            accumulator += 9;
            i++;
        } else if (s[i] === "X" && s[i + 1] === "L") {
            accumulator += 40;
            i++;
        } else if (s[i] === "X" && s[i + 1] === "C") {
            accumulator += 90;
            i++;
        } else if (s[i] === "C" && s[i + 1] === "D") {
            accumulator += 400;
            i++;
        } else if (s[i] === "C" && s[i + 1] === "M") {
            accumulator += 900;
            i++;
        } else {
            accumulator += romanHash[s[i]];
        }
    }
    return accumulator;
}

console.log(romanToInt(s))