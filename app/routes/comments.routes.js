module.exports = (app) => {
    const comment = require("../controllers/comments.controller.js");

    //Create a new Comment
    app.post("/comments",comment.create);

    //Retrieve all Comments
    app.get("/comments",comment.findall);

    //Retrieve a single comment by comment id
    app.get("/comments/:commentid",comment.findOne);

    //update a comment by CommentId
    app.put("/comments/:commentid",comment.update);

    //delete a comment by commentid
    app.delete("/comments:/commentid",comment.delete)
}