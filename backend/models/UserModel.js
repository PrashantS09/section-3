const { Schema, model } = require('../connetion');

const mySchema = new Schema({
    name : String,
    email: { type: String, unique: true }, 
    password: { type: String, required: true},
    createdAt : { type:Date, default: Date.now}
});

module.exports = model(mySchema, 'users');