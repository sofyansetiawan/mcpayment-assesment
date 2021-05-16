function twoSum(arrInteger, target){
    for(let i = 0; i < arrInteger.length; i++){
        for(let j = 0; j < arrInteger.length; j++){
            if(arrInteger[i] + arrInteger[j] === target && i != j){
                return [i, j]
            }
        }
    }
    return []
}

//* TESTCASE

console.log(twoSum([2,7,11,15], 13));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));