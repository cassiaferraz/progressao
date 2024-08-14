const bcrypt = require('bcryptjs');
const update = require('../models/update.js');


const updateUserPassword = async (req, res) => {
    try {
        const userId = req.userId;
        const userPassword = req.body.password;
        // const userConfirmedPassword = req.body.confirmPassword

        // if (userPassword == userConfirmedPassword){
        const saltRounds = 10;
        const hash = await bcrypt.hash(userPassword, saltRounds);

      
        await update.updateUser(userId, hash);

        // console.log("\n-> Atualização DE Senha:");
        // console.log("ID USUARIO:", userId);
        // console.log("SENHA: ", userPassword);
        // console.log("HASH: ", hash);

        res.status(201).json({ message: 'Senha do usuário atualizada com sucesso' });
        // }
    } catch (err) {
        console.error("Erro em updateUserPassword:", err);
        res.status(500).json({ error: 'Erro ao atualizar a senha no banco de dados.' });
    }
};

module.exports = { updateUserPassword };