const Server = require('./Server');
let vaiUtilizarCluster = process.argv[2];

Server.iniciarServidor(vaiUtilizarCluster);