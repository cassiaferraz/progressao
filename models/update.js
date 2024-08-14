const sqlServer = require('../utils/sqlServer');
 
// UPDATE
function updateUser(id, userPassword) {
    const sql = `UPDATE dbo.COLABORADORES SET SENHA = '${userPassword}' WHERE ID_COLABORADOR = '${id}'`;
    const results = sqlServer.dispatchQuery(sql);
    return results;
}
 
module.exports = {
    updateUser
}