const sql = require('mssql/msnodesqlv8');
const bcrypt = require('bcryptjs');
const dbConfig = require('../config/dbConfig');

 
async function authenticateUser(userEmail, userPassword) {
    try {
        const pool = await sql.connect(dbConfig);
 
        const result = await pool.request()
            .input('userEmail', sql.VarChar, userEmail)
            .query('SELECT * FROM COLABORADORES WHERE EMAIL = @userEmail');

            console.log(result)
        if (result.recordset.length === 0) {
            return false; // Usuário não encontrado

        }
 
        const user = result.recordset[0];
        const passwordMatch = await bcrypt.compare(userPassword, user.SENHA);
      
        return passwordMatch ? user : false;

        // return user
    } catch (err) {
        console.error(err);
        throw err;

    }

}
 
module.exports = {
    authenticateUser
};