module.exports = class Fila {
    constructor() {
        this.itens = {}
        this.count = 0
        this.lowerCount = 0
    }

    // Enfileirar
    enfilerar(elemento) {
        this.itens[this.count] = elemento
        this.count++
    }

    // Desenfileirar
    desenfilerar() {
        if (this.isEmpty()) {
            return "Lista vazia"
        }
        const resultado = this.itens[this.lowerCount]
        delete this.itens[this.lowerCount]
        this.lowerCount++
        return resultado
    }

    // Início da fila
    inicio() {
        if (this.isEmpty()) {
            return "Lista vazia"
        }
        return this.itens[this.lowerCount]
    }

    // Fim da fila
    fim() {
        if (this.isEmpty()) {
            return "Lista vazia"
        }
        return this.itens[this.count - 1]
    }

    // Tamanho
    size() {
        return this.count - this.lowerCount
    }

    // Verifica se está vazia
    isEmpty() {
        return this.size() === 0
    }
}
