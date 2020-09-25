const Aluno = require('../models/aluno');
const Matricula = require('../models/matricula');

module.exports.listarAlunos = function(req, res){    
    let promise = Aluno.find().exec();
    promise.then(
        function(alunos){
            res.status(200).json(alunos);
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    )
}

module.exports.detalheAluno = function(req, res){
    let id = req.params.id;    
    let promise = Aluno.findById(id);
    promise.then(
        function(aluno){            
            res.status(200).json(aluno);
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    )
}

module.exports.adicionarAluno = function(req, res){
    let aluno_ = req.body;
    let promise = Aluno.create(aluno_);
    promise.then(
        function(aluno){
            res.status(201).json(aluno);
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    )
}

module.exports.obterDisciplinas = function(req, res){
    let id = req.params.id;
    let promise = Matricula.find({aluno: id})
                            .populate('disciplina')
                            .exec();
    promise.then(
        function(matriculas){
            // let disciplinas = []
            // for(let mat of matriculas){
            //     disciplinas.push(mat.disciplina);
            // }
            let disciplinas = matriculas.map((mat)=>(mat.disciplina));
            res.status(200).json(disciplinas);
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    )
}