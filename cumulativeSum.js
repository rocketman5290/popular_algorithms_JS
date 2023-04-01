// Given an array of integers, calculate the cumulative sum of the array...
// [1, 2, 3, 4] => [1, 3, 6, 10]
// const sumOne = [1,2,3,4,5].reduce((acc, curr) => acc + curr, 0)
//OR
export function cumulativeSum(arr) {
    let total = 0;
    for(let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}