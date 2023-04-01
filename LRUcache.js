// Using prototype to create a class
// const LRU = function (capacity) {};
// LRU.prototype.getItem = function (key) {};
// LRU.prototype.putItem = function (key, val) {};
// LRU.prototype.oldestItem = function () {};

// Using class
// LRUCache - Least Recently Used Cache
export class LRU {
    constructor(capacity) {
      this.capacity = capacity;
      this.cache = new Map();
    }
  
    getItem(key) {
      const item = this.cache.get(key);
  
      // Map keeps track of insertion order, this will refresh the item
      if (item) {
        this.cache.delete(key);
        this.cache.set(key, item);
      }
      return item;
    }
  
    putItem(key, val) {
      // delete to refresh the insertion order
      if (this.cache.has(key)) {
        this.cache.delete(key);
      }
      // evict the oldest item in the cache
      else if (this.cache.size == this.capacity) {
        this.cache.delete(this.oldestItem);
      }
  
      this.cache.set(key, val);
    }
  
    get oldestItem() {
      return this.cache.keys().next().value;
    }
  }
