const sqlServer = require('../utils/sqlServer');


function createUser() {
    const sql = "INSERT INTO dbo.Indicadores_individuais (col1, col2) VALUES ()";
    const results = sqlServer.dispatchQuery(sql)
    return results;
}   

function getUser(id) {
    const sql = `SELECT TDNA, IFI, IRR FROM dbo.Indicadores_individuais WHERE  ID_COLABORADOR = '${id}'`;
    const results = sqlServer.dispatchQuery(sql)
    return results;
}   

function updateUser(ide) {
    const sql = 'UPDATE SET * dbo.Indicadores_individuais WHERE ID_TECNICO = 40413278';
    const results = sqlServer.dispatchQuery(sql, [ide]);
    return results;

}   

function deleteUser() {
    const sql = "DELETE FROM dbo.Indicadores_individuais WHERE ID_TECNICO";
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
    deleteUser

}