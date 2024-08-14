const sqlServer = require('./utils/sqlServer');
const express = require('express');
const app = express(); 
const sql = require('mssql/msnodesqlv8');
const XLSX = require('xlsx');
const excel = require('read-excel-file/node');
const path = require('path');
const cors = require ('cors');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const loginRoutes = require('./routes/loginRoutes')
const registerRoutes = require('./routes/resetPassword.js')


//app.use(cors());
app.use(cors({
  origin: 'http://localhost:5173', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true
}));
app.use(bodyParser.json());
app.use(cookieParser());



// ROTAS DA APLICAÇÃO 

const routes = require('./routes/routes');
const dbConfig = require('./config/dbConfig');
app.use('/', routes);
app.use("/", registerRoutes);
app.use("/", loginRoutes);



app.listen(3000, '0.0.0.0', () => {
  console.log('Servidor rodando na porta 3000');
});
