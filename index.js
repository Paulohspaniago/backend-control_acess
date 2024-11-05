let express = require('express');
let app = express();
const PORT= 3000;

const sequelize = require('./config/db');

sequelize.authenticate().then(() => {
    console.log("conexao sucesso!"); 
}).catch(error => {
    console.log("error");
});

app.get('/', (req, res) => {
    res.send("Chamada ao recurso realizada com sucesso")
});

app.get('/user', (req, res) => {
    res.send("Aqui retorna os usuarios")
});

app.get('/user/:id', (req, res) => {
    console.log(req.params.id)
});
app.post('/rotapost', (req, res) => {
    res.send("Chamada ao recurso usando post")
});

app.listen(PORT, () => {
    console.log("Servidor aguardando requisões")
});
