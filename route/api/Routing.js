const express=require('express');
const Router= express.Router();
const bodyParser = require('body-parser');

Router.use(bodyParser.json());
Router.use(bodyParser.urlencoded(({extended:true})));

const ApiController=require('../../controller/api/apiController')

Router.post('/student',ApiController.store)




module.exports=Router;