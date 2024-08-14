const sqlServer = require('../utils/sqlServer');
const express = require('express');
const app = express();
const sql = require('mssql/msnodesqlv8'); 
const XLSX = require('xlsx');
const path = require('path');
const dbConfig = require('../config/dbConfig');


async function createUser() {
     // Ler dados do Excel
     const filePath = path.join(__dirname, '../planilhas/Cadastro.xlsx');
     const workbook = XLSX.readFile(filePath);
     const sheetName = workbook.SheetNames[0];
     const xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);


     const valueMapping = {
        'OK': true,
        'NOK': false
    };

    // Conectar ao banco de dados
    try {
        const pool = await sql.connect(dbConfig);
        xlData.forEach((row) => {
            const mappedRow = {};
            for (const col in row) {
                if (valueMapping[row[col]] !== undefined) {
                    mappedRow[col] = valueMapping[row[col]];
                } else {
                    // Se o valor não for "OK" nem "NOK", mantenha o valor original
                    mappedRow[col] = row[col];
                }
            }

            // Inserir no banco de dados
            const sqlQuery = 'INSERT INTO COLABORADORES (NOME, ID_COLABORADOR, EMAIL, ID_REGIONAL, ID_PERMISSOES, SENHA, CARGO) VALUES (@NOME, @ID_COLABORADOR, @EMAIL, @ID_REGIONAL, @ID_PERMISSOES, @SENHA, @CARGO)';
             pool.request()
                .input('NOME', sql.VarChar, mappedRow.NOME)
                .input('ID_COLABORADOR', sql.Int, mappedRow.ID_COLABORADOR)
                .input('EMAIL', sql.VarChar, mappedRow.EMAIL)
                .input('ID_REGIONAL', sql.Int, mappedRow.ID_REGIONAL)
                .input('ID_PERMISSOES', sql.VarChar, mappedRow.ID_PERMISSOES)
                .input('SENHA', sql.VarChar, mappedRow.SENHA)
                .input('CARGO', sql.VarChar, mappedRow.CARGO)
                .query(sqlQuery)
                .catch((err) => {
                    console.error('Erro ao inserir dados:', err);
                });
        });
    } catch (error) {
        console.error('Erro na conexão com o banco de dados:', error);
    }

    const results = await sqlServer.dispatchQuery(sql, []); // Corrigi para usar await
    return results;
}

module.exports = {
    createUser
};
