const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const mongoose = require("mongoose")
const dotenv = require('dotenv');
const userRouter = require("./routes/userRoutes")
const cors = require('cors')

// const connectDB = require('./config/db');

//dotenv config
dotenv.config();


//rest object
const app = express();

//middlewares

app.use(express.json());
app.use(morgan('dev'));
app.use(cors())

//routes
app.use('/api/v1/user',userRouter);

//port
const port = process.env.PORT || 8080

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    app.listen(port,()=> console.log(`Server Port: ${port}`))
}).catch((error) => console.log(`${error} did not connect`))
