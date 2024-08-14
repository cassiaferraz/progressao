const sqlServer = require('../../utils/sqlServer');

const Qualidade = {
  findById: async (id) => {
    const request = pool.request();
    const result = await request
      .input('id', sql.Int, id)
      .query('SELECT TDNA, IFI, IRR FROM dbo.Indicadores_individuais WHERE ID_COLABORADOR = @id');
    return result.recordset[0];
  },

  // Outros métodos como create, update, delete, etc.
};

module.exports = Qualidade;