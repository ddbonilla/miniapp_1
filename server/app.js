const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const knex = require('knex')(require('./knexfile.js')['development']);

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => 
    res.status(200).send('Hello World!')
)

app.get('/movies', (req, res) => {
    knex('movies_tbl')
        .select('title')
        .then(data => res.status(200).json(data))
})

module.exports = app;
