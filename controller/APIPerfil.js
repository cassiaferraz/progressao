const bodyParser = require('body-parser')

const perfilModel = require('../models/perfilModel.js');

const getUserperfil = async (req, res) => {
  try {
    const id = req.params.id;
    const userData = await perfilModel.getUser(id)
    res.status(200).json(userData)
  } catch (err) {
    console.log(err)
    res.status(404).json({message: 'Deu ruim'})
  }
};

module.exports = {
    getUserperfil
}
