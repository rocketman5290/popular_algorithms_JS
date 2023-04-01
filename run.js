import { cumulativeSum } from "./cumulativeSum.js";
import { search as binarySearch} from "./binarySearch.js";
import { LRU } from "./LRUcache.js";

//cumulative sum example
console.log("cumulative sum example")
console.log(cumulativeSum([1,2,3,4,5]));
console.log(" ")

//binary search example
console.log("binary search example")
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 2));
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], -1));
console.log(" ")

//Latest Recently Used Cache example
console.log("LRU cache example")
const cache = new LRU(5);
  cache.putItem('a', 1);
  cache.putItem('b', 2);
  cache.putItem('c', 3);
  cache.putItem('d', 4);
  cache.putItem('e', 5);
  cache.putItem('f', 6);
  cache.putItem('g', 7);
  cache.getItem('a');
  cache.getItem('g');
  console.log(cache);
  console.log(" ")