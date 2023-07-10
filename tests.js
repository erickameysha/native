const findsum = (array, sum) => {

    const sortArray = array.sort((a, b) => b - a)
    const result = []
    const t = []
    debugger
    for (let i = 0; i < sortArray.length; i++) {
        for (let j = 0; j < sortArray.length; j++) if (sortArray[i] + sortArray[j] === sum) {
            if (!sortArray.includes(sortArray[j])) {

                result.push(sortArray[i], sortArray[j])
            }
        } else if (sortArray[i] + sortArray[j] + sortArray[i + 1] === sum) {
            result.push(sortArray[i], sortArray[j], sortArray[i + 1])
        }
    }

    return result


}


const summa = (massivChisel, chislo) => {
    const sortArray = massivChisel.sort((a, b) =>
        a - b)
    let result = []

    const filterValue = (container, num, index) => {
        if ( num === 0){
            result.push(container.slice())
        }
        for (let i = index; i < massivChisel.length; i++) {
            let curr = massivChisel[i];
            if (curr> num){
                break
            }
            container.push(curr)

            filterValue(container, num-curr, i+1)
            container.pop()
        }



    }

    filterValue([], chislo, 0)

    return result


}

const r = summa([8, 2, 3, 4, 6, 7, 1], 5)
console.log(r)
