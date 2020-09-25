const mongoose = require('mongoose');

module.exports = function(){
    let schema = mongoose.Schema({
        aluno: {
            type: mongoose.Schema.ObjectId,
            ref: 'Aluno',
            required: true,
        },
        disciplina: {
            type: mongoose.Schema.ObjectId,
            ref: 'Disciplina',
            required: true,
        }
    })
    return mongoose.model('Matricula', schema);
}();