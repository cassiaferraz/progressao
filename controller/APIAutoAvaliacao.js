const createHabilidade = require('../models/autoAvaliacaoModel');
 
const create = async (req, res) => {
 
    try {
        console.log(req.body)
 
        const userId = req.userId;
        const conectividade = req.body.CONECTIVIDADE;
        const casainteligente = req.body.CASA_INTELIGENTE;
        const Eletrica = req.body.ELETRICA;
        const AudioVideo = req.body.AUDIO_VIDEO;
        const Pabx = req.body.PABX_VOIP;
        const Metalico = req.body.METALICO;
        const dataAvaliacao = req.body.DATA_HORA;
 
        // Verificação básica para valores undefined
 
        if (
 
            userId === undefined ||
            conectividade === undefined ||
            casainteligente === undefined ||
            Eletrica === undefined ||
            AudioVideo === undefined ||
            Pabx === undefined ||
            Metalico === undefined
           
 
        ) {
 
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
 
           
 
        }
 
        const newHabilidade = {
 
            ID_COLABORADOR: userId,
            CONECTIVIDADE: conectividade,
            CASA_INTELIGENTE: casainteligente,
            ELETRICA: Eletrica,
            AUDIO_VIDEO: AudioVideo,
            PABX_VOIP: Pabx,
            METALICO: Metalico,
            DATA: dataAvaliacao
 
        };
 
         createHabilidade(newHabilidade);
 
        res.status(201).json({ message: 'Habilidades registradas com sucesso' });
 
    } catch (error) {
 
        res.status(500).json({ error: error.message });
 
    }
   
 
 
};
 
module.exports = {
 
    create
 
};