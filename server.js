const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const mongoose = require("mongoose")
const dotenv = require('dotenv');
const userRouter = require("./routes/userRoutes")
const adminRouter = require("./routes/adminRoutes")
const cors = require('cors')

//dotenv config
dotenv.config();

//rest object
const app = express();

//middlewares

app.use(express.json());
// app.use(morgan('dev'));
app.use(cors())

//routes
app.use('/api/v1/user',userRouter);
app.use('/admin',adminRouter);

//port
const port = process.env.PORT || 8080

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    app.listen(port,()=> console.log(`Server Port: ${port}`));
}).catch((error) => console.log(`${error} did not connect`));
