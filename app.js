require('dotenv').config();
require('express-async-errors');

const express = require ('express');
const app = express();
const connectDB = require('./db/connect')
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/userRoutes');

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

//middleware
app.use(express.static('./public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>')
})

//product route
app.use('/api/v1/products', productRoutes);

//user routes
app.use('/api/v1/user', userRoutes);

app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 4000;


const start = async() =>{
    try {
        //connectDB
        //await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Sever is listening on port ${port} ....  `))
    } catch (error) {
        console.log(error.message) 
        
    }
}

start()