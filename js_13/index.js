console.log('kfkkf')

const men = {
    _date: {},
    _counter: {
        value: 0,
        step: 2
    },
    increment(step) {
        if (step === undefined) {

            step = this._counter.step
        }

        this._counter.value += step
    },
    // getter
    getCount() {
        return this._counter.value
    },
    // setter
    setStep(newStep) {
        return this._counter.step = newStep
    }

}

// men.setStep(10)
// men.increment()
//
// console.log(men.getCount())
//

const  anyFunc = (counterable)=>{
    console.log(counterable.getCount())
}
anyFunc(men)