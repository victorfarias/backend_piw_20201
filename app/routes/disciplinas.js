const disciplinaController = require('../controllers/disciplinas');

module.exports = function(app){
    app.get('/disciplinas', disciplinaController.listarDisciplinas);
    app.post('/disciplinas', disciplinaController.adicionarDisciplina);
}