function validateUsername(username) {
    return /^\w{3,}$/i.test(username)
}

function validatePassword(password) {
    return /^\w{5,}$/i.test(password)
}

export {validateUsername, validatePassword}