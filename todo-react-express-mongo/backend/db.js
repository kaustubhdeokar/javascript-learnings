const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/todos");

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String, 
        required: true
    },
    completed:{
        type: Boolean,
        required: false
    }
})

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = {
    Todo
}