const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var desenvolvedorSchema = new Schema({
    nome: String,
    email: String,
    indice: Number
});

module.exports = mongoose.model('Desenvolvedores', desenvolvedorSchema);