const mongoose = require('mongoose');

const User = new mongoose.Schema({
    username:{ type : String , unique : true, required : true},
    password: { type: String, required: true },
    role: { type: String, required: true, default: "user" },
    history: [String],
    notification:[String]
});

module.exports = mongoose.model('User', User);
