const ConfigExpressService = require('./service/factory/ConfigExpressService');
const OperariosService = require('./service/OperariosService');
const cpus = require('os').cpus();
const cluster = require('cluster');

class Servidor {

    static iniciarServidor(vaiUtilizarCluster = true) {
        if (vaiUtilizarCluster === true && cluster.isMaster) {
            OperariosService.iniciarOperarios(cpus);
            Servidor.configurarMaster();
        } else {
            ConfigExpressService.getExpress(process.env.PORT || 3000);
        }
    }

    static configurarMaster() {
        cluster.on('online', (thread) => {
            console.log(`Thread ${thread.process.pid} está online.`);
        });

        cluster.on('exit', (thread, code, signal) => {
            console.log(`Thread PID:${thread.process.pid} foi desligada, com código: ${code} e o sinal:${signal}.`);
            OperariosService.iniciarOperario(cluster.fork());
        });
    }
}

module.exports = Servidor;