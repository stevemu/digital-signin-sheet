let bc = require("bcrypt-nodejs");
let jwt = require("jsonwebtoken");
let {
    SHEET_JWT_SECRET
} = require("../config/index");

function generate4digit() {

    // generate a 4-digit code
    let val = Math.floor(1000 + Math.random() * 9000);
    return String(val);
}

function hashPassword(plaintext) {
    return bc.hashSync(plaintext);
}

function verifyPassword(plaintext, hashedPassword) {
    return bc.compareSync(plaintext, hashedPassword);
}

function generateJWT(userUUID) {
    const payload = {
        sub: userUUID
    };
    return jwt.sign(payload, SHEET_JWT_SECRET);
}

async function verifyJWT(token) {
    return await jwt.verify(token, SHEET_JWT_SECRET);
}

module.exports = {generate4digit, hashPassword, verifyPassword, generateJWT, verifyJWT};