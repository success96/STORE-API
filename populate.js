require('dotenv').config()

const connectDB = require('./db/connect');
const Product = require('./models/product');

const jsonProducts = require('./products.json');


const start = async()=> {
    try {
        await connectDB(process.env.MONGO_URI)
        console.log('Connected to DB Successfuly !!!!');

        await Product.deleteMany(); //to ensure the table is empty
        await Product.create(jsonProducts);

        console.log('Successfully added new products');
        process.exit(0);
    } catch (error) {
        console.log(error)   
        process.exit(1);
    }
}

start()