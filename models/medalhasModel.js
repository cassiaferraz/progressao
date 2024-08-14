const sqlServer = require('../utils/sqlServer');
 
 
function createUser() {
    const sql = "INSERT INTO dbo.Medalhas (col1, col2) VALUES ()";
    const results = sqlServer.dispatchQuery(sql)
    return results;
}  
 
function getUser(id) {
    const sql = `SELECT NOME_MEDALHAS FROM dbo.Medalhas ${id} `;
    const results = sqlServer.dispatchQuery(sql)
    return results;
}  
 
function updateUser(ide) {
    const sql = 'UPDATE SET * dbo.Medalhas WHERE ID_TECNICO = 40413278';
    const results = sqlServer.dispatchQuery(sql, [ide]);
    return results;
 
}  
 
function deleteUser() {
    const sql = "DELETE FROM dbo.Medalhas WHERE ID_TECNICO";
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