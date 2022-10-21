const express = require('express');
const mongoose = require('mongoose');

const path = require('path');
const cors=require('cors')

const app = express();
 app.use(cors())

app.use(express.urlencoded({ extended: true }));
const router = require('./route/Routing');
app.use(router);
app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine", "ejs")
app.set("views", "views/common")
const ApiRoute=require('./route/api/Routing')
app.use('/api',ApiRoute)

const dbDriver = "mongodb+srv://nodejs:p03oXNCar3nMuG4L@cluster0.qk0lgka.mongodb.net/student_crud"

mongoose.connect(dbDriver, { useNewUrlParser: true, useUnifiedTopology: true })

const port = process.env.port || 8000;
app.listen(port, (error) => {
    if (!error) {
        console.log(`Server is running on port http://localhost:${port}`);
    } else ('Server is not running');
});