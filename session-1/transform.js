function compare(a, b) {
    return a - b;
}

function transform(arr) {
    return arr.map(item => item*item).sort(compare)
}

console.log('======TRANSFORM======')
let numList = [[5,2,3,4,1], [23, 1, 0, -6, 100]]
for (idx = 0; idx < numList.length; idx++) {
    console.log(`${numList[idx]} ➡️ ${transform(numList[idx])}`)
}
console.log('\n')

const nums = [4,9,5,3,8]
const sortedSquaredNums = transform(nums)
console.log(sortedSquaredNums) // [9,16,25,64,81]