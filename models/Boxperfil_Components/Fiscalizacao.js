// const sqlServer = require('../../utils/sqlServer');

// const Fiscalizacao = {
//   findById: async (id) => {
//     const request = pool.request();
//     const result = await request
//       .input('id', sql.Int, id)
// <<<<<<< HEAD
//       .query('SELECT FISCALIZACAO FROM dbo.Avaliacoes_individuais WHERE ID_COLABORADOR = @id');
// =======
//       .query('SELECT FISCALIZACAO FROM dbo.Avaliacao_individuais WHERE ID_COLABORADOR = @id');
// >>>>>>> f9ad45ccb170529470572bfd7052469091b7ac51
//     return result.recordset[0];
//   },

//   // Outros métodos como create, update, delete, etc.
// };

// module.exports = Fiscalizacao;