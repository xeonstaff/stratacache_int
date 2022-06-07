// assumes input of list of integers
let listA = [1, 2, 3]
let listB = [1, 4, 5, 6, 21, 34, 3, 27, 32]
let listC = [100, -100, 0, 1000]

function convertit(arry) {
    let newarry = []

    for (let i = 0; i < arry.length; i++) {
        if (arry[i] % 2 == 0) {
            newarry.push(
                // assumes '1' for each undefined index (indexes length+1 and -1)
                (arry[i - 1] ? arry[i - 1] : 1) *
                (arry[i + 1] ? arry[i + 1] : 1)
            )
        }
        else if (arry[i] % 2 == 1) {
            newarry.push(
                // assumes '1' for each undefined index (indexes length+1 and -1)
                (arry[i - 1] ? arry[i - 1] : 1) +
                (arry[i + 1] ? arry[i + 1] : 1)
            )
        }
    }
    return newarry
}

console.log(convertit(listA))
// expected: [3, 3, 3]

console.log(convertit(listB))
// expected: [5, 5, 10, 105, 40, 63, 61, 35, 27]

console.log(convertit(listC))
// expected: [-100,100,-100000,1]
