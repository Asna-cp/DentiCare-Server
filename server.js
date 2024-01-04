const express = require('express');
const colors = require('colors');
const mongoose = require("mongoose")
const dotenv = require('dotenv');
const userRouter = require("./routes/userRoutes")
const adminRouter = require("./routes/adminRoutes")
const doctorRouter = require('./routes/adminRoutes')
const cors = require('cors')
const morgan = require('morgan');
const bodyParser = require('body-parser');

//dotenv config
dotenv.config();

//rest object
const app = express();

// Fixing "413 Request Entity Too Large" Errors(large File solution)
app.use(express.json({ limit: "5mb" }));
app.use(
  express.urlencoded({ limit: "5mb", extended: true, parameterLimit: 50000 })
);
app.use(morgan("dev"));

////////////
app.use(
  bodyParser.urlencoded({
      extended: false
  })
);

app.use(bodyParser.json());
/////////////

//middlewares
app.use(express.json());

app.use(cors())

//routes
app.use('/api/v1/user', userRouter);
app.use('/admin', adminRouter);
app.use('/doctor', doctorRouter);

//port
const port = process.env.PORT || 8080

//MongoDB Connection

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(port, () => console.log(`Server Port: ${port}`));
}).catch((error) => console.log(`${error} did not connect`));

