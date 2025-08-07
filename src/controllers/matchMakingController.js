const mutualMatch = (req, res) => {
    try {
        const { _id, skillsWantLearn, skillsCanTeach } = req.userData;

    } catch (err) {
        res.status().json({ message: err.message })
    }
}

module.exports = mutualMatch