const mongoose = require("mongoose");

const CommentsSchema = mongoose.Schema({
    name : String,
    email : String,
    movie_id : String,
    text : String,
    date : String
}); 

module.exports = mongoose.model("comments",CommentsSchema);
