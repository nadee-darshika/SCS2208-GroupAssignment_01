var doctordb = require('../model/model');

// create and save new doctor
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    console.log("hello")
    

    // new doctor
    const doctor = new doctordb({
        name : req.body.name,
        email : req.body.email,
        gender: req.body.gender,
        birthday : req.body.birthday,
        mobilenumber : req.body.mobilenumber,
        nic : req.body.nic,
        qualification : req.body.qualification,
        specialization : req.body.specialization
    })

    // save doctor in the database
    doctor
        .save(doctor)
        .then(data => {
            //res.send(data)
            res.redirect('/add-doctor');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}

// retrieve and return all doctors/ retrive and return a single doctor
exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        doctordb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found doctor with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Error retrieving doctor with id " + id})
            })

    }else{
        doctordb.find()
            .then(doctor => {
                res.send(doctor)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving doctor information" })
            })
    }

    
}

// Update a new idetified doctor by doctor id
exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    doctordb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update doctor with ${id}. Maybe doctor not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update doctor information"})
        })
}

// Delete a doctor with specified doctor id in the request
exports.delete = (req, res)=>{
    const id = req.params.id;

    doctordb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.redirect('/include/_show')
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete doctor with id=" + id
            });
        });
}