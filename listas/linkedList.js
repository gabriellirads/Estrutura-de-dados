import { defaultEuals } from "./util";
import { Node } from "./node";

// Define a classe de uma lista ligada (LinkedList)
module.exports = class LinkedList {
    constructor(equalsFn = defaultEuals) {
        this.equalsFn = equalsFn; // função de comparação
        this.count = 0;           // número de elementos na lista
        this.head = undefined;    // início da lista
    }

    // Adiciona um elemento no final da lista
    push(element) {
        const node = new Node(element);
        let current;

        if (this.head == null) {
            // Se a lista estiver vazia, o novo nó vira o head
            this.head = node;
        } else {
            // Senão, percorre até o final da lista
            current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            // Adiciona o novo nó no final
            current.next = node;
        }
        this.count++;
    }

    // Retorna o nó na posição informada
    getElementAt(index) {
        if (index >= 0 && index < this.count) {
            let node = this.head;
            for (let i = 0; i < index && node != null; i++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    }

    // Insere um elemento na posição especificada
    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element);

            if (index == 0) {
                // Inserção no início
                const current = this.head;
                node.next = current;
                this.head = node;
            } else {
                // Inserção no meio ou fim
                const previous = this.getElementAt(index - 1);
                node.next = previous.next;
                previous.next = node;
            }

            this.count++;
            return true;
        }
        return false;
    }

    // Remove o elemento na posição especificada
    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;

            if (index === 0) {
                // Remove o primeiro elemento
                this.head = current.next;
            } else {
                // Remove um elemento do meio ou final
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = current.next;
            }

            this.count--;
            return current.element;
        }
        return undefined;
    }
};
