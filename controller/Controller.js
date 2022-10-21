const model = require('../model/Model');

exports.home = (req, res) => {
   res.render('Home', {
      title: "Home Page"
   })
};
exports.adduser = (req, res) => {
   res.render('AddUser', {
      title: "Adduser Page"
   })
};

//fetch user
exports.alluser = (req, res) => {
   model.find((error, data) => {
      console.log(data)
      if (!error) {
         res.render('AllUser', {
            allData: data
         })
      }
   })

};


//add user
exports.create = (req, res) => {
   const studentData = new model({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      city: req.body.city,
      state: req.body.state,
   })
   studentData.save().then((result) => {
      console.log(result, 'User Added')
      res.redirect('/alluser')
   }).catch((error) => {
      console.log(error, 'User Not Added');
   })

};

//edit user
exports.edituser = (req, res) => {
   const user = req.params.id;

   model.findById(user).then((result) => {
      res.render('EditUser', {
         data: result
      })
   })
}


//update user
exports.updateuser = (req, res) => {
   console.log('req.body: ', req.body)

   const ids = req.body.id
   const name = req.body.name
   const email = req.body.email
   const password = req.body.password
   const city = req.body.city
   const state = req.body.state

   model.findById(ids).then(result => {
      result.name = name
      result.email = email
      result.password = password
      result.city = city
      result.state = state

      result.save()
      .then(response => {
         res.redirect('/alluser')
         console.log(response, 'Data is updated')
      })
      .catch(error => {
         console.log(error, 'Data not updated')
      })
   })
};


exports.deleteuser = (req, res) => {
   const ids = req.params.id

   model.deleteOne({_id:ids})
   .then((error, data)=>{
      res.redirect('/alluser')
      console.log(data);
   }).catch(error=>{
      console.log(error);
   })
}