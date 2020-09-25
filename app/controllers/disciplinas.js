const Disciplina = require('../models/disciplina');

module.exports.listarDisciplinas = function(req, res){
    let promise = Disciplina.find().exec();
    promise.then(
        function(disciplinas){
            res.status(200).json(disciplinas);
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    )
}

module.exports.adicionarDisciplina = function(req, res){
    let disciplina = req.body;
    let promise = Disciplina.create(disciplina);
    promise.then(
        function(disciplina){
            res.status(201).json(disciplina);
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    )
}