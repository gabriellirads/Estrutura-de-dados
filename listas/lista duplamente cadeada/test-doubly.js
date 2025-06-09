// test-doubly.js

import { DoublyLinkedList } from "./doubly-linkedlist.js";

const list = new DoublyLinkedList();

list.push(10);
list.push(20);
list.push(30);

console.log("Lista após push:");
console.log(list.toString());

list.insert(15, 1);
console.log("Lista após inserir 15 na posição 1:");
console.log(list.toString());

const removed = list.removeAt(2);
console.log(`Elemento removido na posição 2: ${removed}`);
console.log("Lista após a remoção:");
console.log(list.toString());
