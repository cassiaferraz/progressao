const sqlServer = require('../utils/sqlServer');
 
 
 
 async function getUser(id) {
    // const IntID = parseInt(id)
    const sql = `SELECT NIVEL, XP, MOEDAS FROM dbo._DADOS_PROGRESSAO WHERE ID_COLABORADOR = '${id}'`;
    const results = await sqlServer.dispatchQuery(sql)
    return results;
}  
 
 
 
module.exports = {
    getUser
}