const sqlServer = require('../utils/sqlServer');
 
 
// Função de validação e conversão
function validateAndConvertValue(value) {
    if (value === undefined || value === null || value === NaN ) {
      console.log(value)
       
        return 0; 
    }
     return value;
}

// const StrID = ParseString(habilidade)

function createHabilidade(habilidade) {
    const ID_COLABORADOR = validateAndConvertValue(habilidade.ID_COLABORADOR);
    const CONECTIVIDADE = validateAndConvertValue(habilidade.CONECTIVIDADE);
    const CASA_INTELIGENTE = validateAndConvertValue(habilidade.CASA_INTELIGENTE);
    const ELETRICA = validateAndConvertValue(habilidade.ELETRICA);
    const AUDIO_VIDEO = validateAndConvertValue(habilidade.AUDIO_VIDEO);
    const PABX_VOIP = validateAndConvertValue(habilidade.PABX_VOIP);
    const METALICO = validateAndConvertValue(habilidade.METALICO);
    const DATA = habilidade.DATA;
 
    const sqlQuery = `INSERT INTO dbo._HABILIDADES
        (ID_COLABORADOR, CONECTIVIDADE, CASA_INTELIGENTE, ELETRICA, AUDIO_VIDEO, PABX_VOIP, METALICO, DATA)
        VALUES ('${ID_COLABORADOR}', ${CONECTIVIDADE}, ${CASA_INTELIGENTE}, ${ELETRICA}, ${AUDIO_VIDEO}, ${PABX_VOIP}, ${METALICO}, CONVERT(datetime, '${DATA}', 120))`;
 
 
 
 
    sqlServer.dispatchQuery(sqlQuery)
}
 
module.exports = createHabilidade;