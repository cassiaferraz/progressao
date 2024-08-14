const sqlUtils = require('../utils/sqlServer.js');


// Create PROMISSE 
function createChallenge(ChallengeData) {
    const sql = `INSERT INTO dbo.DESAFIOS_TECNICOS (ID_COLABORADOR, NOME, DESCRICAO, STATUS) 
                VALUES (${ChallengeData.id}, '${ChallengeData.name}', '${ChallengeData.description}', '${ChallengeData.status}')`;
    sqlUtils.dispatchQuery(sql);
} 
 
// Read
function findChallenges(id){
    const sql = `SELECT * FROM dbo.DESAFIOS_TECNICOS WHERE ID_COLABORADOR = '${id}'`;
    const result = sqlUtils.dispatchQuery(sql);
    return result;
}


module.exports = {
    createChallenge, 
    findChallenges
};