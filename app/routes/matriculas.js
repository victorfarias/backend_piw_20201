const matriculaController = require('../controllers/matriculas');

module.exports = function(app){
    app.get('/matriculas', matriculaController.listarMatriculas);
    app.post('/matriculas', matriculaController.adicionarMatricula)
}