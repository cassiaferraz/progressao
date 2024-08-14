const desafiosModel = require('../models/desafiosModel');
 
 
const getUserDesafios = async (req, res) => {
  try {
    const id = req.params.id;
    const Desafiosdata = await desafiosModel.getUser(id)
    res.status(200).json(Desafiosdata)
  } catch (err) {
    console.log(err)
    res.status(404).json({message: 'tente de novo'})
  }
};
 
module.exports = {
    getUserDesafios
}