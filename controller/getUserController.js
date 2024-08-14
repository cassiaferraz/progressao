const getUsuario = require('../models/getUserModel.js');
const getPerfil = require('../models/perfilModel.js');
const DadosProgression = require('../models/DadosProgression.js');


const getUserData = async (req, res) => {
  try {
    const userId = req.userId;
    const userName = await getUsuario.getUser(userId);
    const userPerfil = await getPerfil.getUser(userId);

    if (!userName || userName.length === 0) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    if (!userPerfil || userPerfil.length === 0) {
      return res.status(404).json({ message: 'Perfil do usuário não encontrado' });
    }
 
    const userData = {
      NOME: userName[0].NOME,
      MOEDAS: userPerfil[0].MOEDAS,
      XP: userPerfil[0].XP,
      NIVEL: userPerfil[0].NIVEL
    };

    res.status(200).json(userData);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Erro no servidor' });
  }

};

const createUserProgressionData = async(req,res) => {
  try{
    const allUser = await getUsuario.getAllUsers()
    allUser.forEach(user =>{
      if (user.CARGO == 'tecnico', 'gerente', 'coordenador', 'analista'){
        const  ParaCriarDadosprogression =  {
          id:user.ID_COLABORADOR,
          nivel: 0,
          moedas: 0,
          xp: 0
        }
        DadosProgression.createTecProgressionData(ParaCriarDadosprogression)
      }
    })
    res.status(200).json({message: 'Dados criados'})
  }catch(err){
    console.log(err)
    res.status(400).json({message: 'Deu ruim'})
  }
}

module.exports = {
  getUserData,
  createUserProgressionData
};