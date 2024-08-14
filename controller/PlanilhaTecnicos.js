const planilhasModel = require('../models/planilhaTecnicos.js');

const createPlanilha = async (req, res) => {
    try {
        const id = req.params.id;
        const planilhaData = await planilhasModel.createUser(id);


        res.status(200).json({planilhaData, message: 'DADOS INSERIDOS NO BANCO COM SUCESSO!!!'});
    } catch (err) {
        console.error(err);
        res.status(404).json({ message: 'Algo deu errado' });
    }
};

module.exports = {
    createPlanilha
};
