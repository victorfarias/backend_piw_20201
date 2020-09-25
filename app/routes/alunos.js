const controller = require("../controllers/alunos");

module.exports = function(app){
    app.get("/alunos", controller.listarAlunos);    
    app.get("/alunos/:id", controller.detalheAluno);
    app.get("/alunos/:id/disciplinas", controller.obterDisciplinas) // Retorna todas as disciplinas do aluno com id fornecido
    app.post("/alunos", controller.adicionarAluno);
}