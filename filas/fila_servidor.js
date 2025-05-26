const Fila = require("./queue")
module.exports = class ControladorRequisicoes {
    constructor() {
        this.filaUrgente = new Fila();
        this.filaNormal = new Fila();
    }

    adicionarRequisicao(requisicao) {
        if (requisicao.prioridade === 'urgente') {
            this.filaUrgente.enqueue(requisicao);
        } else {
            this.filaNormal.enqueue(requisicao);
        }
    }

    processar_requisicoes() {
        console.log("Iniciando processamento das requisições...");

        while (!this.filaUrgente.isEmpty() || !this.filaNormal.isEmpty()) {
            let requisicao;

            if (!this.filaUrgente.isEmpty()) {
                requisicao = this.filaUrgente.dequeue();
            } else {
                requisicao = this.filaNormal.dequeue();
            }

            console.log(`Processando requisição ID: ${requisicao.id}, Prioridade: ${requisicao.prioridade}, Timestamp: ${requisicao.timestamp}`);
        }

        console.log("Todas as requisições foram processadas.");
    }
}

