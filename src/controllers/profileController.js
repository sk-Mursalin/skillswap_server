const { editFieldValidation } = require("../utils/validation");

const viewProfile = (req, res) => {
    try {
        const userProfile = req.userData;
        res.status(200).json({ data: userProfile })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const editProfile = async (req, res) => {
    try {
        isEditAllow = editFieldValidation(req);
        if (!isEditAllow) {
            throw new Error("this object is not an editable field");
        }

        const userProfile = req.userData;
        Object.keys(req.body).forEach((key) => {
            userProfile[key] = req.body[key]
        });
        await userProfile.save();
        res.status(200).json({ message: "your profile update successfully" })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

module.exports = {
    viewProfile,
    editProfile
}