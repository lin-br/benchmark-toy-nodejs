const cluster = require('cluster');

class OperariosService {

    static iniciarOperarios(numeroDeTheads = []) {
        console.log(`Iniciando ${numeroDeTheads.length} clusters`);
        numeroDeTheads.forEach(() => OperariosService.configurarOperario(cluster.fork()));
    }

    static iniciarOperario(thread = null) {
        console.log(`Iniciando uma nova thread`);
        OperariosService.configurarOperario(thread);
    }

    static configurarOperario(operario) {
        operario.on('message', (message) => {
            console.log(message);
        });
    }
}

module.exports = OperariosService;