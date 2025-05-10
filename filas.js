
module.exports = class fila {
    construtor() {
        this.itens = []
        this.count = 0
        this.lowercount = 0 
    }

    enfilerar(elemento) {
        this.itens[this.count] = elemento
        this.lowercount++
    }

    desifilerar() {
        if (this.isEmpty()) {
            return "Lista vazia"
        }
        else {
            this.itens.shift()
        }    
    }
    //inicio da fila
    lowercount() {
        if (this.isEmpty()) {
            return "Lista vazia"
        }
        else {
            return this.itens[this.count]
        }
    }
    //Fim da fila
    count() {
        if (this.isEmpty()) {
            return "Lista vazia"
        }
        else {
            return this.itens[this.lowercount]
        }
    }
    // tamanho
    size() {
        return this.count - this.lowercount 
    }

    isEmpty() {
        return this.itens.size()
    }

}