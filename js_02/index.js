const student = [
    {
        name: 'Alex',
        age: 13,
        isMarried: false,
        scores: 10,

    }, {
        name: 'Max',
        age: 20,
        isMarried: true,
        scores: 100,

    }, {
        name: 'Masha',
        age: 30,
        isMarried: false,
        scores: 200,

    }, {
        name: 'John',
        age: 19,
        isMarried: false,
        scores: 210,

    }
]

//CRUD
//C => [...student, newStudent]
//R => map (el=>JSX.Element)
//U => map (condition ? obj => updated obj : obj)
//D => filter (condition)
const getNames = (array) => {
    const result = []
    const elMapFn = (st) => st.name
    for (let i = 0; i < array.length; i++) {
   const newValue = elMapFn(array[i])
        result[i] = newValue
    }
    return result
}


console.log(student.map((st)=> st.name))
console.log(getNames(student))

const salfeMadeFilter = (array, conditionFn) => {
  const result = []


    for (let i = 0; i < array.length; i++) {
        if (conditionFn(array[i])===true){
            result.push(array[i])
        }
    }

    return result
}
console.log(student.filter(st=> st.scores >= 100))
console.log(salfeMadeFilter(student, st=> st.scores >= 100))


const selfMadePush = (array, ...els) => {
    for (let i = 0; i <  els.length; i++) {

        array[array.length] =els[i]


    }


    return array.length
}
let arr = [1,2,3,4,5]
console.log(selfMadePush(arr, 6,7,8))


const selfMadeIncluds = (array, value)=>{
    for (let i = 0; i < array.length; i++) {
        if (array[i]===value){
          return true
        }

    }
    return false
}
console.log(arr.includes(4))
console.log(selfMadeIncluds(arr, 7))