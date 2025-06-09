// circular-linkedlist.js

import { CircularNode } from "./circular-node.js";

export class CircularLinkedList {
    constructor() {
        this.head = null;
        this.count = 0;
    }

    // Adiciona no final
    push(element) {
        const node = new CircularNode(element);

        if (this.head === null) {
            this.head = node;
            node.next = this.head; // aponta para si mesmo
        } else {
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next;
            }
            current.next = node;
            node.next = this.head;
        }

        this.count++;
    }

    // Retorna nó na posição
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

    // Insere em posição
    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new CircularNode(element);

            if (index === 0) {
                if (this.head == null) {
                    this.head = node;
                    node.next = this.head;
                } else {
                    node.next = this.head;

                    // Encontrar o último nó para atualizar seu next
                    let last = this.head;
                    while (last.next !== this.head) {
                        last = last.next;
                    }
                    last.next = node;
                    this.head = node;
                }
            } else {
                const previous = this.getElementAt(index - 1);
                node.next = previous.next;
                previous.next = node;
            }

            this.count++;
            return true;
        }

        return false;
    }

    // Remove da posição
    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;

            if (index === 0) {
                if (this.count === 1) {
                    this.head = null;
                } else {
                    let last = this.head;
                    while (last.next !== this.head) {
                        last = last.next;
                    }
                    this.head = this.head.next;
                    last.next = this.head;
                }
            } else {
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = current.next;
            }

            this.count--;
            return current.element;
        }

        return undefined;
    }

    // Converte em string
    toString() {
        if (this.head == null) return "";

        let objString = `${this.head.element}`;
        let current = this.head.next;

        while (current !== this.head) {
            objString += ` -> ${current.element}`;
            current = current.next;
        }

        return objString + " -> (volta ao início)";
    }
}
