const Servidor = require('./Servidor');
let vaiUtilizarCluster = process.argv[2];

Servidor.iniciarServidor(vaiUtilizarCluster);