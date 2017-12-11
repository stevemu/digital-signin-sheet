var fs = require('fs');
const r = require('rethinkdb');

const rethinkdbDefault = {
    host: "localhost",
    port: 28015,
    authKey: "",
    db: "online_sign_in_sheet"
};

const APP_CONSTANTS = {
    USERS_TABLE: "Users",
    RECORDS_TABLE: "records"
};

const RETHINKDBHOST = process.env.SHEET_RETHINKDBHOST || rethinkdbDefault.host;
const RETHINKDBPORT = process.env.SHEET_RETHINKDBPORT || rethinkdbDefault.port;

const RETHINKDBDATABASE = process.env.SHEET_RETHINKDBDATABASE || rethinkdbDefault.db;
const RETHINKDBAUTHKEY = process.env.SHEET_RETHINKDBAUTHKEY || rethinkdbDefault.authKey;

let rethinkdbConfig = {
    host: RETHINKDBHOST,
    port: RETHINKDBPORT,
    db: RETHINKDBDATABASE,
    authKey: RETHINKDBAUTHKEY,
};

const SHEET_PORT = process.env.FOOD_PORT || 3001;
const SHEET_JWT_SECRET = process.env.FOOD_JWT_SECRET || "awesomesheet";

module.exports = { rethinkdbConfig, APP_CONSTANTS, SHEET_PORT, SHEET_JWT_SECRET };