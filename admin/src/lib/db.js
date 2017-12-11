const r = require("rethinkdb");
let {rethinkdbConfig} = require("../config");
const {db} = rethinkdbConfig;

// get a document by primary key
async function getOne(conn, table, uuid) {
    let document = await r.db(db).table(table).get(uuid).run(conn);
    return document;
}

async function getOneWithFilter(conn, table, query) {

    let iterator = await r.db(db).table(table).filter({...query}).run(conn);
    let arr = await iterator.toArray();
    if (arr.length === 0) {
        return null;
    } else if (arr.length === 1) {
        return arr[0];
    } else {
        throw new Error("More than one documents found.")
    }
}

async function getDocuments(conn, table, query) {
    let iterator = await r.db(db).table(table).filter({...query}).run(conn);
    let arr = await iterator.toArray();
    return arr;
}

async function getDocumentsWithFuncQuery(conn, table, func) {
    let iterator = await r.db(db).table(table).filter(function(doc) {
        return func(doc).and(doc("valid").eq(true));
    }).run(conn);
    let arr = await iterator.toArray();
    return arr;
}

async function updateDocument(conn, table, queryUUID, newData) {
    let result = await r.db(db).table(table).get(queryUUID).update(newData).run(conn);
    return result;
}

async function insertDocument(conn, table, data) {
    let result = await r.db(db).table(table).insert({...data}).run(conn);
    return result;
}

async function invalidateDocument(conn, table, queryUUID) {
    let result = await r.db(db).table(table).get(queryUUID).update({valid: false}).run(conn);
    return result;
}

async function deleteDocument(conn, table, queryUUID) {
    let result = await r.db(db).table(table).get(queryUUID).delete().run(conn);
    return result;
}

module.exports = {
    getOne,
    getOneWithFilter,
    getDocuments,
    updateDocument,
    insertDocument,
    invalidateDocument,
    getDocumentsWithFuncQuery
};