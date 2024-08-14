const { user } = require('../config/dbConfig');
const DadosProgression = require('../models/DadosProgression');


const AdicionarNivelMoedas = async(id,moedas,xp) => {
    try{
        const userData = await DadosProgression.findTecProgressionData(id)
       
        const userProgressionData = userData[0]
        const totalcoins = parseInt(userProgressionData.MOEDAS)+moedas
        const totalexp = parseInt(userProgressionData.XP)+xp
        // console.log(`Tipo de variavel Moedas: ${typeof(userProgressionData.MOEDAS)} => ${userProgressionData.MOEDAS}`)
        
        const newLevel = VerificarNivel(totalexp,userProgressionData.NIVEL)
      
        const DataUpdate = {
            id:id,
            moedas:parseInt(totalcoins),
            xp:parseInt(totalexp),
            nivel:parseInt(newLevel)
        }

        DadosProgression.updateTecProgressionData(DataUpdate)

    }catch(err){
        console.log('Erro na requisição de tipagem')
       
    }
};

const VerificarNivel = (totalXP,levelUser) => {
    const LevelUser = parseInt(levelUser)
    let newLevel = 0
    if (totalXP >= 100){
        const level = totalXP / 100
        if (level > LevelUser){
            newLevel = level
        }else{
            newLevel = LevelUser
        }
    } else {
        newLevel = LevelUser
    }
  

    return newLevel
}


module.exports = {
    AdicionarNivelMoedas
}