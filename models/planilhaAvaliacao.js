const sqlServer = require('../utils/sqlServer');
const express = require('express');
const app = express();
const sql = require('mssql/msnodesqlv8'); 
const XLSX = require('xlsx');
const path = require('path');
const dbConfig = require('../config/dbConfig');


async function createUser() {
     // Ler dados do Excel
     const filePath = path.join(__dirname, '../planilhas/AvaliacaoMissoes.xlsx');
     const workbook = XLSX.readFile(filePath);
     const sheetName = workbook.SheetNames[0];
     const xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);


     const valueMapping = {
        'OK': true,
        'NOK': false,
        'Não possui' : false
        };

    // Mapeamento de nomes de colunas
const columnMapping = {
  'Id': 'ID_TECNICO',
  'ID_COLABORADOR': 'ID_COLABORADOR',
  'Data': 'DATA',
  'Nome': 'AVALIADOR',
  'Uniforme': 'POSTURA_UNIFORME',
  'Crachá': 'POSTURA_CRACHA',
  'Bota': 'POSTURA_BOTA',
  'Mala': 'POSTURA_MALA',
  'Comunicação': 'POSTURA_COMUNICACAO',
  'Comparecimento Almox' : 'ASSIDUIDADE_ALMOX',
  'Banco de Horas' : 'ASSIDUIDADE_BANCO',
  'Gestão de rota' : 'ASSIDUIDADE_ROTA',
  'Horário de Almoço' : 'ASSIDUIDADE_ALMOCO',
  'Início Atividades' : 'ASSIDUIDADE_INICIO',
  'Limpeza Interna' : 'VEICULO_LIMPEZAINTERNA',
  'Limpeza Externa' : 'VEICULO_LIMPEZAEXTERNA',
  'Organização Frente' : 'VEICULO_ORGANIZACAOFRENTE',
  'Organização Baú' : 'VEICULO_ORGANIZACAOBAU',
  'Horário - Recarga bateria' : 'VEICULO_RECARGA',
  'Multas' : 'VEICULO_MULTAS',
  'Sinistros' : 'VEICULO_SINISTROS',
  'Laudo - Preenchimento' : 'LAUDOS_PREENCHIDOS',
  'Fiscalização' : 'FISCALIZACAO'
}

    // Conectar ao banco de dados
    try {
        const pool = await sql.connect(dbConfig);
        xlData.forEach((row) => {
            const mappedRow = {};
            for (const col in row) {
              if(columnMapping[col]){
                if (valueMapping[row[col]] !== undefined) {
                    mappedRow[columnMapping[col]] = valueMapping[row[col]];
                } else {
                    // Se o valor não for "OK" nem "NOK", mantenha o valor original
                    mappedRow[columnMapping[col]] = row[col];
                }
            }
          }

            // Inserir no banco de dados
            const sqlQuery = `INSERT INTO Avaliacoes_individuais (ID_TECNICO, DATA, AVALIADOR, ID_COLABORADOR, POSTURA_UNIFORME, POSTURA_CRACHA, POSTURA_BOTA, POSTURA_MALA, POSTURA_COMUNICACAO, ASSIDUIDADE_ALMOX, ASSIDUIDADE_BANCO, ASSIDUIDADE_ROTA, ASSIDUIDADE_ALMOCO, ASSIDUIDADE_INICIO, VEICULO_LIMPEZAINTERNA, VEICULO_LIMPEZAEXTERNA, VEICULO_ORGANIZACAOFRENTE, VEICULO_ORGANIZACAOBAU, VEICULO_RECARGA, VEICULO_MULTAS, VEICULO_SINISTROS, LAUDOS_PREENCHIDOS, FISCALIZACAO)
            VALUES (@ID_TECNICO, @DATA, @AVALIADOR, @ID_COLABORADOR, @POSTURA_UNIFORME, @POSTURA_CRACHA, @POSTURA_BOTA, @POSTURA_MALA, @POSTURA_COMUNICACAO, @ASSIDUIDADE_ALMOX, @ASSIDUIDADE_BANCO, @ASSIDUIDADE_ROTA, @ASSIDUIDADE_ALMOCO, @ASSIDUIDADE_INICIO, @VEICULO_LIMPEZAINTERNA, @VEICULO_LIMPEZAEXTERNA, @VEICULO_ORGANIZACAOFRENTE, @VEICULO_ORGANIZACAOBAU, @VEICULO_RECARGA, @VEICULO_MULTAS, @VEICULO_SINISTROS, @LAUDOS_PREENCHIDOS, @FISCALIZACAO);`;
            
             pool.request()
             .input('ID_TECNICO', sql.Int, mappedRow.ID_TECNICO)
             .input('DATA', sql.Date, mappedRow.DATA)
             .input('AVALIADOR', sql.VarChar, mappedRow.AVALIADOR)
             .input('ID_COLABORADOR', sql.VarChar, mappedRow.ID_COLABORADOR)
             .input('POSTURA_UNIFORME', sql.Bit, mappedRow.POSTURA_UNIFORME)
             .input('POSTURA_CRACHA', sql.Bit, mappedRow.POSTURA_CRACHA)
             .input('POSTURA_BOTA', sql.Bit, mappedRow.POSTURA_BOTA)
             .input('POSTURA_MALA', sql.Bit, mappedRow.POSTURA_MALA)
             .input('POSTURA_COMUNICACAO', sql.Bit, mappedRow.POSTURA_COMUNICACAO)
             .input('ASSIDUIDADE_ALMOX', sql.Bit, mappedRow.ASSIDUIDADE_ALMOX)
             .input('ASSIDUIDADE_BANCO', sql.Bit, mappedRow.ASSIDUIDADE_BANCO)
             .input('ASSIDUIDADE_ROTA', sql.Bit, mappedRow.ASSIDUIDADE_ROTA)
             .input('ASSIDUIDADE_ALMOCO', sql.Bit, mappedRow.ASSIDUIDADE_ALMOCO)
             .input('ASSIDUIDADE_INICIO', sql.Bit, mappedRow.ASSIDUIDADE_INICIO)
             .input('VEICULO_LIMPEZAINTERNA', sql.Bit, mappedRow.VEICULO_LIMPEZAINTERNA)
             .input('VEICULO_LIMPEZAEXTERNA', sql.Bit, mappedRow.VEICULO_LIMPEZAEXTERNA)
             .input('VEICULO_ORGANIZACAOFRENTE', sql.Bit, mappedRow.VEICULO_ORGANIZACAOFRENTE)
             .input('VEICULO_ORGANIZACAOBAU', sql.Bit, mappedRow.VEICULO_ORGANIZACAOBAU)
             .input('VEICULO_RECARGA', sql.Bit, mappedRow.VEICULO_RECARGA)
             .input('VEICULO_MULTAS', sql.Bit, mappedRow.VEICULO_MULTAS)
             .input('VEICULO_SINISTROS', sql.Bit, mappedRow.VEICULO_SINISTROS)
             .input('LAUDOS_PREENCHIDOS', sql.Bit, mappedRow.LAUDOS_PREENCHIDOS)
             .input('FISCALIZACAO', sql.Bit, mappedRow.FISCALIZACAO)
             
                .query(sqlQuery)
                .catch((err) => {
                    console.error('Erro ao inserir dados:', err);
                });
        });
    } catch (error) {
        console.error('Erro na conexão com o banco de dados:', error);
    }

    const results = await sqlServer.dispatchQuery(sql, []); 
    return results;
}

module.exports = {
    createUser
};
