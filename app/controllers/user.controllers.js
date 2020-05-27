const Useres = require('../models/User.model.js');

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "User details can not be empty"
        });
    }

    // Create a Useres
    const Useres = new Useres({
        title: req.body.title || "Untitled User", 
        content: req.body.content
    });

    // Save Useres in the database
    Useres.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the User."
        });
    });
};

// Retrieve and return all Useres from the database.
exports.findAll = (req, res) => {
    Useres.find()
    .then(Useress => {
        res.send(Useress);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving User."
        });
    });
};

// Find a single User with a Userid
exports.findOne = (req, res) => {
    Useres.findById(req.params.userid)
    .then(Useres => {
        if(!Useres) {
            return res.status(404).send({
                message: "Useres not found with id or does not exits" + req.params.userid
            });            
        }
        res.send(Useres);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: err.message + "/n Useres not found with id or some Error" + req.params.userid
            });                
        }
        return res.status(500).send({
            message: err.message + " /n Error retrieving Useres with id " + req.params.userid
        });
    });
};

// Update a Useres identified by the Useresid in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Useres content can not be empty"
        });
    }

    // Find Useres and update it with the request body
    Useres.findByIdAndUpdate(req.params.userid, {
        title: req.body.title || "Untitled Useres",
        content: req.body.content
    }, {new: true})
    .then(Useres => {
        if(!Useres) {
            return res.status(404).send({
                message: "Useres not found with id " + req.params.userid
            });
        }
        res.send(Useres);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Useres not found with id " + req.params.userid
            });                
        }
        return res.status(500).send({
            message: "Error updating Useres with id " + req.params.userid
        });
    });
};

// Delete a Useres with the specified Useresid in the request
exports.delete = (req, res) => {
    Useres.findByIdAndRemove(req.params.userid)
    .then(Useres => {
        if(!Useres) {
            return res.status(404).send({
                message: "Useres not found with id " + req.params.userid
            });
        }
        res.send({message: "Useres deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Useres not found with id " + req.params.userid
            });                
        }
        return res.status(500).send({
            message: "Could not delete Useres with id " + req.params.userid
        });
    });
};

