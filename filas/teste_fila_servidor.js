const ControladorRequisicoes = require("./fila_servidor")
const Requisicao = require("./requisicao")
class Main {
    static executar() {
        const controlador = new ControladorRequisicoes();

        // Simula criação de requisições com timestamps diferentes
        const agora = Date.now();
        const requisicoes = [
            new Requisicao(1, agora + 1000, 'normal'),
            new Requisicao(2, agora + 2000, 'urgente'),
            new Requisicao(3, agora + 3000, 'normal'),
            new Requisicao(4, agora + 4000, 'urgente'),
            new Requisicao(5, agora + 5000, 'normal'),
        ];

        console.log("➡️  Adicionando requisições ao sistema...\n");

        requisicoes.forEach(req => {
            controlador.adicionarRequisicao(req);
            console.log(`➕ Requisição ID ${req.id} adicionada com prioridade '${req.prioridade}'`);
        });

        // Processa todas as requisições
        controlador.processar_requisicoes();
    }
}

// Executar a aplicação
Main.executar();