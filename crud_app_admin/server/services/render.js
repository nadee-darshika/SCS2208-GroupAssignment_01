const axios = require('axios');


exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:8080/api/doctor')
        .then(function(response){
            res.render('index', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports.add_doctor = (req, res) =>{
    res.render('add_doctor');
}

exports.update_doctor = (req, res) =>{
    axios.get('http://localhost:8080/api/doctor', { params : { id : req.query.id }})
        .then(function(doctordata){
            res.render("update_doctor", { doctor : doctordata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}