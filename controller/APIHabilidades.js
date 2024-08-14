const bodyParser = require('body-parser')
const habilidadesModel = require('../models/habilidadesModel');
 
 
 
 
const getUserHabilidades = async (req, res) => {
  try {
    const userId = req.userId
    const HabData = await habilidadesModel.getUser(userId)
    res.status(200).json(HabData)
  } catch (err) {
    console.log(err)
    res.status(404).json({message: 'Deu ruim'})
  }
};
 
module.exports = {
    getUserHabilidades
}