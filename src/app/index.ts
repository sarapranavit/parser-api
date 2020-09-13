import express from  'express'
const bodyParser = require('body-parser')
const routeV1 = require('./routes/v1');
const routeV2 = require('./routes/v2');
const { validate, ValidationError, Joi } = require('express-validation');

const app = express();
app.use(bodyParser.json());

const port = 3000;

app.get('/', (req, res) => {
    res.send('This is my express app');
});

app.use("/api/v1", routeV1);
app.use("/api/v2", routeV2);


app.use(function(err, req, res, next){
    if(err instanceof ValidationError){
        return res.status(err.statusCode).json(err);
    }
})

module.exports = app.listen(port, ()=> {
    console.log(`server is running on ${port}`);
})