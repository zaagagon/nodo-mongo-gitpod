//archivo encargado de arrancar o llamar la aplicacion
//como llamar la base de datos
//vamos a requerir app
const app=require('./app');
//ahora vamos a requerir la bases de datos
require('./database')

app.listen(3000);
console.log('server on port 3000');

module.exports = app;