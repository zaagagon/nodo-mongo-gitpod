const moongose=require('mongoose');
moongose.connect('mongodb+srv://zag:zag@cluster0-fivkt.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology : true
})
.then(()=>console.log('db esta conectada'))
.catch(e=>console.log(e));
//instalamos nodaemon -D como dependencia de desarrollo
//npm i nodemon -D
//para no estar cancelando la consola a toda hora