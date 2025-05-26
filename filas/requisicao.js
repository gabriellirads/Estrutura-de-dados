module.exports = class Requisicao {
    constructor(id, timestamp, prioridade) {
        this.id = id;
        this.timestamp = timestamp;
        this.prioridade = prioridade;
    }
}