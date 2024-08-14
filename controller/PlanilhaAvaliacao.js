const bodyParser = require('body-parser')

const planilhasModel = require('../models/planilhaAvaliacao.js');



    const createPlanilha = async (req, res) => {
        try {
          const id = req.params.id;
          const planilhaData = await planilhasModel.createUser(id)
          res.status(200).json(planilhaData)
    } catch (err) {
    console.log(err)
    res.status(404).json({message: 'Deu ruim'})
    }
    };

module.exports = {
    createPlanilha
}
