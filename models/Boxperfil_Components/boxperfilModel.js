// const { sql, poolPromise } = require('./d');

async function updateCoins(userId, coins) {
  const pool = await poolPromise;
  return pool.request()
    .input('userId', sql.Int, userId)
    .input('coins', sql.Int, coins)
    .query('UPDATE dbo.Tecnico SET MOEDAS = @coins WHERE ID_COLABORADOR = @userId');
}

async function updateXP(userId, xp) {
  const pool = await poolPromise;
  return pool.request()
    .input('userId', sql.Int, userId)
    .input('xp', sql.Int, xp)
    .query('UPDATE dbo.Tecnico SET XP = @xp WHERE Id = @userId');
}

module.exports = {
  updateCoins,
  updateXP
};