// archvo para configurar la aplicacion
const express = require('express');

const app = express();
/*YA NO VAMOS USAR ESTO
app.get('/',(req,res)=>{
    res.send('hello zag');
})*/
//USAREMOS DIRECTAMENTE EXPRESS
app.use(express.static(__dirname + '/public'));
//ya  no va a ser el encargado de arrancar el app.listen
//app.listen(3000);
//console.log('server on port 3000');
//ahora app va exportarlo
module.exports = app ;