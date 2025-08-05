const validator = require("validator")
const signupValidation = (req) => {
    const { firstName, lastName, email, password } = req.body

    if (firstName.length > 25) {
        throw new Error("please enter a small firstname");
    } else if (firstName.length < 2) {
        throw new Error("please enter firstname at least 2 character");
    } else if (lastName.length > 25) {
        throw new Error("please enter a small lastname");
    } else if (lastName.length < 3) {
        throw new Error("please enter  correct  lastname");
    }

    if (!email) {
        throw new Error("please enter email")
    } else if (!validator.isEmail(email)) {
        throw new Error("please enter valid email syntax")
    }

    if (!password) {
        throw new Error("please enter password")
    } else if (password.length < 6) {
        throw new Error("password should at least 6 character")
    }

}

const loginValidation = (req) => {
    const { email, password } = req.body
    if (!email) {
        throw new Error("please enter email")
    } else if (!validator.isEmail(email)) {
        throw new Error("please enter valid email syntax")
    }
    if (!password) {
        throw new Error("please enter password")
    } else if (password.length < 6) {
        throw new Error("password should at least 6 character")
    }

}

const editFieldValidation = (req) => {
    const acceptedFields = ["firstName", "lastName", "gender", "age", "skillsWantLearn", "skillsCanTeach", "photoUrl", "availability"]
    const isAllow = Object.keys(req.body).every((el) => acceptedFields.includes(el));
    return isAllow
}

module.exports = {
    signupValidation,
    loginValidation,
    editFieldValidation
}
