const sqlUtils = require('../utils/sqlServer.js');


// Create PROMISSE 
function createTecProgressionData(data) {
    const sql = `INSERT INTO dbo._DADOS_PROGRESSAO (ID_COLABORADOR, MOEDAS, XP, NIVEL) VALUES ( '${data.id}', '${data.moedas}', '${data.xp}', '${data.nivel}')`;
    sqlUtils.dispatchQuery(sql);
} 
 
// Read
function findTecProgressionData(id){
    const sql = `SELECT * FROM dbo._DADOS_PROGRESSAO WHERE ID_COLABORADOR = '${id}'`;
    const result = sqlUtils.dispatchQuery(sql);
    return result;
}
function findAllTecProgressionDatas(){
    const sql = `SELECT * FROM dbo._DADOS_PROGRESSAO`;
    const result = sqlUtils.dispatchQuery(sql);
    return result;
}

// Update
function updateTecProgressionData(data){
    const sql = `UPDATE dbo._DADOS_PROGRESSAO SET XP = '${data.xp}', MOEDAS = '${data.moedas}', NIVEL = '${data.nivel}' WHERE ID_COLABORADOR = '${data.id}'`;
    const result = sqlUtils.dispatchQuery(sql);
    return result;   
}

// Delete
function deleteTecProgressionData(id){
    const sql = `DELETE dbo.DADOS_PROGRESSAO WHERE id = '${id}'`;
    const result = sqlUtils.dispatchQuery(sql);
    return result;
}

module.exports = {
    createTecProgressionData, 
    findTecProgressionData, 
    findAllTecProgressionDatas,
    updateTecProgressionData, 
    deleteTecProgressionData
};