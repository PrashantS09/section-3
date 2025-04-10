require('dotenv').config();
const express = require('express');
const UserRouter = require('./routers/UserRouter');

const app = express();

const port = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use('/user', UserRouter);

// endpoint or route

app.get('/', (req, res) => {
    res.send('response from express');
});

app.get('/', (req, res) => {
    res.send('response from add');
})

//getall
//delete

app.listen(port, () => {
    console.log('server started');
});