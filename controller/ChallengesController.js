const challengeModel = require('../models/ChallengeModel')



const getTechnicianChallenges = async (req, res) => {
    try {
        const techId = req.userId;
        const technicianChallenges = await challengeModel.findChallenges(techId)
        res.status(200).json(technicianChallenges)
    } catch(err) {
        console.log(err)
        res.status(400).json({message: 'deu ruim'})
    }
}


module.exports = {
    getTechnicianChallenges
}