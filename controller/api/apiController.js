const apiModel = require('../../model/apiModel');


exports.store = async (req, res) => {
    if (!req.body.name && !req.body.email  && !req.body.city) {
        res.status(400).send({ message: 'Fill all the input fields' });
    }
    const addStudent = new apiModel({
        name: req.body.name,
        email: req.body.email,
        city: req.body.city,
    })
    await addStudent.save().then(data => {
        res.status(200).send({ success: true, msg: "User created successfully", student: data })
    }).catch(error => {
        res.status(500).send({
            message: error.message || "Some erroe occurred while creating student"
        });
    });
};
