const bodyParser = require('body-parser')
const medalhasModel = require('../models/medalhasModel');
 
 
 
 
const getUserMedalha = async (req, res) => {
  try {
    const id = req.params.id;
    const HabData = await medalhasModel.getUser(id)
    res.status(200).json(HabData)
  } catch (err) {
    console.log(err)
    res.status(404).json({message: 'Deu ruim'})
  }
};
 
module.exports = {
    getUserMedalha
}