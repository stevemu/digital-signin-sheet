let {
    USERS_TABLE
} = require("../config/index").APP_CONSTANTS;

let {getDocuments, insertDocument} = require("./db");
let {hashPassword} = require("./util");

async function handleRegistration(conn, {username, password}) {
    // console.log(username);
    // console.log(password);

    if (!username || !password) {
        throw new Error("Error: Username or password is emtpy.")
    }

    // check if users with the username exists
    let arr = await getDocuments(conn, USERS_TABLE, {username});
    if (arr.length > 0) {
        throw new Error("Error: Username already exists");
    }

    let user = {
        username,
        passwordHash: hashPassword(password)
    };

    await insertDocument(conn, USERS_TABLE, user);

}

module.exports = { handleRegistration };