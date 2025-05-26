// @ts-check

module.exports = class Queue {
    constructor() {
      this.count = 0;
      this.lowestCount = 0;
      this.itens = [];
    }
  
    enqueue(element) {    
      this.itens[this.count] = element;
      this.count++;
      
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return undefined;
      }
  
      const result = this.itens[this.lowestCount];
      
      delete this.itens[this.lowestCount];
      this.lowestCount++;
      
      return result;
    }
  
    peek() {
      if (this.isEmpty()) {
        return undefined;
      }
      return this.itens[this.lowestCount];
    }
    end(){
      return this.itens[this.count - 1]
    }
  
    isEmpty() {
      return this.size() === 0;
    }
  
    clear() {
      this.items = [];
      this.count = 0;
      this.lowestCount = 0;
    }
  
    size() {
      return this.count - this.lowestCount;
    }
  
    toString() {
      if (this.isEmpty()) {
        return '';
      }
      let objString = `${this.itens[this.lowestCount]}`;
      for (let i = this.lowestCount + 1; i < this.count; i++) {
        objString = `${objString},${this.itens[i]}`;
      }
      return objString;
    }
  }
  