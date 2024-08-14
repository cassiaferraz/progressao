// const sqlServer = require('../../utils/sqlServer');

// const Assiduidade = {
//   findById: async (id) => {
//     const request = pool.request();
//     const result = await request
//       .input('id', sql.Int, id)
// <<<<<<< HEAD
//       .query('SELECT ASSIDUIDADE_ALMOX, ASSIDUIDADE_BANCO, ASSIDUIDADE_ROTA, ASSIDUIDADE_ALMOCO, ASSIDUIDADE_INICIO FROM dbo.Avaliacoes_individuais WHERE ID_COLABORADOR = @id');
// =======
//       .query('SELECT ASSIDUIDADE_ALMOX, ASSIDUIDADE_BANCO, ASSIDUIDADE_ROTA, ASSIDUIDADE_ALMOCO, ASSIDUIDADE_INICIO FROM dbo.Avaliacao_individuais WHERE ID_COLABORADOR = @id');
// >>>>>>> f9ad45ccb170529470572bfd7052469091b7ac51
//     return result.recordset[0];
//   },
  
// };

// module.exports = Assiduidade;
