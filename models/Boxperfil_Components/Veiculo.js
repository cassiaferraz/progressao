// const sqlServer = require('../../utils/sqlServer');

// const Veiculo = {
//   findById: async (id) => {
//     const request = pool.request();
//     const result = await request
//       .input('id', sql.Int, id)
// 
//       .query('SELECT VEICULO_LIMPEZAINTERNA, VEICULO_LIMPEZAEXTERNA, VEICULO_ORGANIZACAOFRENTE, VEICULO_ORGANIZACAOBAU, VEICULO_RECARGA FROM dbo.Avaliacoes_individuais WHERE ID_COLABORADOR = @id');
// 
//       .query('SELECT VEICULO_LIMPEZAINTERNA, VEICULO_LIMPEZAEXTERNA, VEICULO_ORGANIZACAOFRENTE, VEICULO_ORGANIZACAOBAU, VEICULO_RECARGA, VEICULO_MULTAS, VEICULO_SINISTROS FROM dbo.Avaliacao_individuais WHERE ID_COLABORADOR = @id');

//     return result.recordset[0];
//   },
// };

// module.exports = Veiculo;