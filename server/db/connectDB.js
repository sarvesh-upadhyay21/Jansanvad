const mongoose = require('mongoose');
require('dotenv').config();
const color = require('colors');
mongoose.set("strictQuery", false);

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
           
            'mongodb+srv://jansavadUsername:Vikas@jansamvadcluster.4z9kz1e.mongodb.net/?retryWrites=true&w=majority', {
               //useNewUrlParser: true,
                // Other options...
            }
        );

        console.log('Database Connected Successfully'.cyan.underline.bold);
    } catch (error) {
        console.error('Database Connection Error:', error);
    }
};

module.exports = connectDB;
