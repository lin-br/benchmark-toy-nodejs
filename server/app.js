const expressFactory = require('./service/factory/ExpressFactory');

expressFactory.iniciarServidor(process.env.PORT || 3000);