const Matricula = require('../models/matricula');

module.exports.listarMatriculas = function(req, res){    
    let promise = Matricula.find()
                           .populate('disciplina')
                           .populate('aluno')
                           .exec();
    promise.then(
        function(matriculas){
            res.status(200).json(matriculas);
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    )
}

module.exports.adicionarMatricula = function(req, res){
    let matricula = req.body;    
    let promise = Matricula.create(matricula);
    promise.then(
        function(matricula){
            res.status(201).json(matricula);
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    )
}