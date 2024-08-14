const sqlServer = require('../utils/sqlServer');


function createUser() {
    const sql = "INSERT INTO dbo.AVALIACOES (col1, col2) VALUES ()";
    const results = sqlServer.dispatchQuery(sql)
    return results;
}   

function getUser(id) {
    const sql = `SELECT  DATA, POSTURA_UNIFORME, POSTURA_CRACHA, POSTURA_BOTA, POSTURA_MALA, POSTURA_COMUNICACAO, ASSIDUIDADE_ALMOX, ASSIDUIDADE_BANCO, ASSIDUIDADE_ROTA, ASSIDUIDADE_ALMOCO, ASSIDUIDADE_INICIO, VEICULO_LIMPEZAINTERNA, VEICULO_LIMPEZAEXTERNA, VEICULO_ORGANIZACAOFRENTE, VEICULO_ORGANIZACAOBAU, VEICULO_RECARGA, VEICULO_MULTAS, VEICULO_SINISTROS, LAUDOS_PREENCHIDOS, FISCALIZACAO
    FROM dbo.Avaliacoes_individuais
    WHERE ID_COLABORADOR = '${id}'
    ORDER BY DATA ASC;`;
    
    const results = sqlServer.dispatchQuery(sql)
    return results;
}   


function getTotalAvaliations() {
    const sql = `SELECT *
    FROM dbo.Avaliacoes_individuais
    ORDER BY DATA DESC;`;
    const results = sqlServer.dispatchQuery(sql)
    return results;
}   



function updateUser(ide) {
    const sql = 'UPDATE SET * FROM dbo.Avaliacoes_individuais WHERE ID_TECNICO = 9';
    const results = sqlServer.dispatchQuery(sql, [ide]);
    return results;

}   

function deleteUser() {
    const sql = "DELETE FROM dbo.AVALIACOES (col1, col2) VALUES ()";
    const results = sqlServer.dispatchQuery(sql)
    return results;
}   

/*
    C
    R
    U
    D
*/


module.exports = {
    createUser,
    updateUser,
    getUser,
    deleteUser,
    getTotalAvaliations

}