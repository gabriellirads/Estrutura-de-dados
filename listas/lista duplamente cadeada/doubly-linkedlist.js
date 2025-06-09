// doubly-linkedlist.js

import { DoublyNode } from "./doubly-node.js";

export class DoublyLinkedList {
    constructor() {
        this.head = null; // primeiro nó
        this.tail = null; // último nó
        this.count = 0;   // número de elementos
    }

    // Adiciona no final
    push(element) {
        const node = new DoublyNode(element);

        if (this.head === null) {
            // Lista vazia
            this.head = node;
            this.tail = node;
        } else {
            // Liga o novo nó ao final da lista
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }

        this.count++;
    }

    // Insere na posição indicada
    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new DoublyNode(element);
            let current = this.head;

            if (index === 0) {
                if (this.head == null) {
                    this.head = node;
                    this.tail = node;
                } else {
                    node.next = this.head;
                    this.head.prev = node;
                    this.head = node;
                }
            } else if (index === this.count) {
                // Inserção no final
                this.tail.next = node;
                node.prev = this.tail;
                this.tail = node;
            } else {
                let previous = this.getElementAt(index - 1);
                current = previous.next;
                node.next = current;
                node.prev = previous;
                previous.next = node;
                current.prev = node;
            }

            this.count++;
            return true;
        }

        return false;
    }

    // Remove da posição indicada
    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;

            if (index === 0) {
                this.head = this.head.next;
                if (this.count === 1) {
                    this.tail = null;
                } else {
                    this.head.prev = null;
                }
            } else if (index === this.count - 1) {
                current = this.tail;
                this.tail = this.tail.prev;
                this.tail.next = null;
            } else {
                current = this.getElementAt(index);
                const previous = current.prev;
                previous.next = current.next;
                current.next.prev = previous;
            }

            this.count--;
            return current.element;
        }

        return undefined;
    }

    // Retorna o nó na posição indicada
    getElementAt(index) {
        if (index >= 0 && index < this.count) {
            let node = this.head;
            for (let i = 0; i < index; i++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    }

    // Converte a lista em string
    toString() {
        if (this.head == null) return "";
        let objString = `${this.head.element}`;
        let current = this.head.next;

        while (current != null) {
            objString += ` <-> ${current.element}`;
            current = current.next;
        }

        return objString;
    }
}
