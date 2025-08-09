const User = require("../models/user")
const mutualMatch = async (req, res) => {
    try {
        const { _id, skillsWantLearn, skillsCanTeach } = req.userData;
        const mutualUser = await User.find({
            $and: [
                { _id: { $ne: _id } },
                { skillsWantLearn: { $in: skillsCanTeach } },
                { skillsCanTeach: { $in: skillsWantLearn } }
            ]
        });
        res.send(mutualUser)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

module.exports = mutualMatch