// const sqlServer = require('../../utils/sqlServer');

// const Laudos = {
//   findById: async (id) => {
//     const request = pool.request();
//     const result = await request
//       .input('id', sql.Int, id)

//       .query('SELECT LAUDOS_PREENCHIDOS FROM dbo.Avaliacoes_individuais WHERE ID_COLABORADOR = @id');
// 
//       .query('SELECT LAUDOS_PREENCHIDOS FROM dbo.Avaliacao_individuais WHERE ID_COLABORADOR = @id');

//     return result.recordset[0];
//   },

  
// };

// module.exports = Laudos;