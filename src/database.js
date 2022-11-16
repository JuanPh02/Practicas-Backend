//Create DB

const mongoose = require('mongoose');

URI=('mongodb://localhost/practicas')

mongoose.connect(URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
.then (db => console.log('Base de datos conectado', db.connection.name))
.catch(error => console.log(error))

module.exports= mongoose
