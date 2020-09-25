const express = require('express');
const alunosRouter = require('../app/routes/alunos')
const disciplinasRouter = require('../app/routes/disciplinas');
const matriculasRouter = require('../app/routes/matriculas');
const bodyParser = require('body-parser');

module.exports = function(){
    let app = express()    
    app.set("port", 3000);
    app.use(express.static('./public'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false })); 
    alunosRouter(app);
    disciplinasRouter(app);
    matriculasRouter(app);
    return app;
}