const comment = require("../models/comments.model.js");

//Create and Save a new Comment
exports.create = (req,res) => {
    //Validate Request
    if(!req.body.content){
        return res.status(400).send({
            message : "Comments cannot be empty"
        });
    }

    //Create a new Comment
    const comment = new comment({
        title : req.body.title || "Untitled Comment",
        content : req.body.content
    })

    //Save comment in the Database
    comment.save().then(data=>{
        res.send(data);
    }).catch(err=>{
        res.status(500).send({
            message : err.message || "Error While inserting Comment",
        });
    });
};

//Retrieve and return all Comments from the Database

exports.findall = (req,res)=> {
    comment.find().then(comments=>{
        res.send(comments);
    }).catch(err=>{
        res.status(404).send({
            message : err.message || "Error While Retrieving all Comments",
        });
    });
};

//Retrieve Comment by commentId
exports.findOne = (req,res)=>{
    comment.findById(req.params.commentid).then(comment=>{
        if(!comment){
            return res.status(404).send({
                messsage : "Comment not found with Comment Id :" + req.params.commentid
            });
        }
        res.send(comment);
    }).catch(err =>{
        if(err.kind === 'ObjectId'){
            return res.status(404).send({
                message : err.message + "Comment not found with Comment id or some error"
            });
        }
        return res.status(500).send({
            message : err.message +"/n Error Retrieving Comment with CommentId : " + req.params.commentid
        });
    });
};

//Update Comment by CommentId
exports.update= (req,res)=>{
    res.send("Not Yet Implmented");
};

exports.delete= (req,res)=>{
    res.send("Not Yet Implmented");
};
