const express = require('express');
const controller = require('../controller/Controller');

const app = express();

// app.get('/', controller.home);
// app.get('/adduser', controller.adduser);
// app.get('/alluser', controller.alluser);
// app.post('/create', controller.create);
// app.get('/edituser/:id', controller.edituser);
// app.post('/updateuser',controller.updateuser);
// app.get('/deleteuser/:id',controller.deleteuser);




const { Router } = require('express');



const apiController = require('../controller/api/apiController')

app.post('/', apiController.store)



module.exports = app;