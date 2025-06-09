const mongoose = require('mongoose');

const schema = mongoose.Schema;

const loginSchema = new schema({
    username: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }   
})

const login = mongoose.model("Login", loginSchema);
module.exports = login;