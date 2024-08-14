
// // const userModel = require('../models/Boxperfil_Components/boxperfilModel');

// // async function updateCoins(req, res) {
// //   const { userId, coins } = req.body;
// //   try {
// //     await userModel.updateCoins(userId, coins);
// //     res.status(200).send('Moedas atualizadas com sucesso');
// //   } catch (err) {
// //     res.status(500).send('Erro ao atualizar moedas');
// //   }
// // }

// // async function updateXP(req, res) {
// //   const { userId, xp } = req.body;
// //   try {
// //     await userModel.updateXP(userId, xp);
// //     res.status(200).send('XP atualizado com sucesso');
// //   } catch (err) {
// //     res.status(500).send('Erro ao atualizar XP');
// //   }
// // }

// // module.exports = {
// //   updateCoins,
// //   updateXP
// // };

// testar CODIGO ABAIXO
// const userModel = require('./userModel');

// async function updateCoinsAndXP(req, res) {
//   const { userId, coins, xp } = req.body;
//   try {
//     const user = await userModel.getUser(userId);
//     const newCoins = user.MOEDAS + coins;
//     const newXP = user.XP + xp;
//     const updatedUser = await userModel.updateUser(userId, newCoins, newXP);
//     res.status(200).json(updatedUser);
//   } catch (err) {
//     res.status(500).send('Erro ao atualizar moedas e XP');
//   }
// }

// module.exports = {
//   updateCoinsAndXP
// };



const User = require('../models/getUserModel');
const Assiduidade = require('../models/Boxperfil_Components/Assiduidade');
const Fiscalizacao = require('../models/Boxperfil_Components/Fiscalizacao');
const Laudos = require('../models/Boxperfil_Components/Laudos');
const Postura = require('../models/Boxperfil_Components/Postura');
const Qualidade = require('../models/Boxperfil_Components/Qualidade');
const Veiculo = require('../models/Boxperfil_Components/Veiculo');

exports.Boxperfil_Missoes = async (req, res) => {

    // console.log(req.userId)
    try {
        const userId = req.userId;
        const user = await User.getUser(userId);

        if (user) {
            const assiduidadeData = await Assiduidade.findById(userId);
            const fiscalizacaoData = await Fiscalizacao.findById(userId);
            const laudosData = await Laudos.findById(userId);
            const posturaData = await Postura.findById(userId);
            const qualidadeData = await Qualidade.findById(userId);
            const veiculoData = await Veiculo.findById(userId);

            const countTrueFields = (fields) => fields.filter(Boolean).length;

            const components = [
                { name: 'Assiduidade', fields: [assiduidadeData.ASSIDUIDADE_ALMOX, assiduidadeData.ASSIDUIDADE_BANCO, assiduidadeData.ASSIDUIDADE_ROTA, assiduidadeData.ASSIDUIDADE_ALMOCO, assiduidadeData.ASSIDUIDADE_INICIO], reward: 200 },
                { name: 'Veiculo', fields: [veiculoData.VEICULO_FIELD1, veiculoData.VEICULO_FIELD2, veiculoData.VEICULO_FIELD3], reward: 200 },
                { name: 'Laudos', fields: [laudosData.LAUDOS_FIELD1, laudosData.LAUDOS_FIELD2], reward: 100 },
                { name: 'Postura', fields: [posturaData.POSTURA_FIELD1, posturaData.POSTURA_FIELD2, posturaData.POSTURA_FIELD3], reward: 250 },
                { name: 'Fiscalização', fields: [fiscalizacaoData.FISCALIZACAO], reward: 250 },
                { name: 'Qualidade', fields: [qualidadeData.TDNA, qualidadeData.IFI, qualidadeData.IRR], reward: 250 }
            ];

            let totalCoins = 0;
            let totalXp = 0;

            components.forEach(component => {
                const trueCount = countTrueFields(component.fields);
                const totalFields = component.fields.length;
                const threshold = 0.9 * totalFields;

                if (trueCount >= threshold) {
                    totalCoins += component.reward;
                    totalXp += component.reward;
                }
            });

            await User.updateUser(userId, user.coins + totalCoins, user.xp + totalXp);

            // return { moedas: totalCoins, xp: totalXp };
       
            res.status(200).json({moedas: totalCoins, xp: totalXp });
 
        } else {
          res.status(400).json({message: 'user não encontrado'});
            // throw new Error('Usuário não encontrado.');
        }
    } catch (error) {
        // throw new Error('Erro ao atualizar recompensas.');
        res.status(400).json({message: 'quase lá'});
    }
};