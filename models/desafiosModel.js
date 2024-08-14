const sqlServer = require('../utils/sqlServer');

function getDesafios() {
    const sql = "SELECT * FROM dbo.DESAFIOS_TESTE";
    const results = sqlServer.dispatchQuery(sql);
    return results;
}

function createUser() {
    const sql = "INSERT INTO dbo.DESAFIOS_TESTE (col1, col2, col3, col4, col5) VALUES ()";
    const results = sqlServer.dispatchQuery(sql)
    return results;
}   

function getUser(id) {
    const sql = `SELECT * FROM dbo.DESAFIOS_TESTE WHERE ID_DESAFIOS = 01 `;
    const results = sqlServer.dispatchQuery(sql, [id])
    return results;
}    

function updateUser(ide) {
    const sql = 'UPDATE SET * dbo.DESAFIOS_TESTE WHERE ID_DESAFIOS = 01';
    const results = sqlServer.dispatchQuery(sql, [ide]);
    return results;
}     

function deleteUser() {
    const sql = "DELETE FROM dbo.DESAFIOS_TESTE WHERE ID_TECNICO";
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
    getDesafios
}