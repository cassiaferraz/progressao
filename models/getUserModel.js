const sqlServer = require('../utils/sqlServer');




async function getUser(id) {
   
    const sql = `SELECT NOME FROM dbo.COLABORADORES WHERE ID_COLABORADOR = '${id}' `;
    const results = await sqlServer.dispatchQuery(sql)
    return results;
}   



async function getAllUsers() {
    const sql = `SELECT * FROM dbo.COLABORADORES`;
    const results = await sqlServer.dispatchQuery(sql)
    return results;
}   



module.exports = {
    getUser,
    getAllUsers
}

