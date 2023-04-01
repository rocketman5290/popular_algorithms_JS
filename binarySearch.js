// Binary search 0(log n)
export function search(arr, target, start=0, end=arr.length-1){
            
    if(start > end) {
        console.log('Not found!');
        return -1;
    }

    const middle = Math.floor( (start + end) / 2 );

    if(arr[middle] === target) {
        console.log(`${target} Found at index ${middle}`);
        return middle;
    }

    if(arr[middle] > target) {
        return search(arr, target, start, middle-1);
    }

    if(arr[middle] < target) {
        return search(arr, target, middle+1, end);
    }

}