let moment = require("moment");

let {RECORDS_TABLE} = require("../config/index").APP_CONSTANTS;
let {getDocuments, insertDocument} = require("./db");

async function getRecords(conn, username) {
    const arr = await getDocuments(conn, RECORDS_TABLE, {username});
    return arr;
}

async function saveRecord(conn, data) {
    data.time = moment.utc().format();
    let result = await insertDocument(conn, RECORDS_TABLE, data);
    return result;
}

module.exports = { getRecords, saveRecord };