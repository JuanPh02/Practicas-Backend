//Req dependenties
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyparser = require('body-parser');
require('./database')
const PORT = 8000;

//Config port

//app.set('port', process.env.PORT || 8000);
app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(cors({origen:'*'}))

app.use('/companies',require('./routes/companies.routes'))
app.use('/contacts',require('./routes/contacts.routes'))
app.use('/students',require('./routes/students.routes'))
app.use('/accounts',require('./routes/accounts.routes'))
app.use('/education',require('./routes/education.routes'))

app.listen(8000, () => {
    console.log(`Server started on port: http://localhost:${PORT}`)
})

