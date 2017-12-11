let moment = require("moment");
let {verifyPassword} = require("./util");

let {USERS_TABLE} = require("../config/index").APP_CONSTANTS;
let {getDocuments, insertDocument, getOneWithFilter} = require("./db");
let {generateJWT} = require("./util");

async function handleLogin(conn, {username, password}) {

    if (!username || !password) {
        throw new Error("Error: Username or password is empty");
    }

    // get user object
    let user = await getOneWithFilter(conn, USERS_TABLE, {username});

    if (!user) {
        throw new Error("Error: User not found");
    }

    // generate jwt token
    let token = generateJWT(user.userUUID);

    // check password
    if (verifyPassword(password, user.passwordHash)) {

        return {
            userUUID: user.userUUID,
            token,
            username: user.username
        }
    } else {
        throw new Error("Error: Wrong password");
    }

}

module.exports = { handleLogin };