const r = require('rethinkdb');
var config = require('./config/index');
let {verifyJWT} = require("./lib/util");
let wrap = require("express-async-wrap");

// following three functions taken from
// http://docs.rethinkdb.com/2.0/docs/examples/node-todo-promises/

// create the rethinkdb connection in middleware
function createConnection(req, res, next) {
    r.connect(config.rethinkdbConfig).then(function(conn) {
        // Save the connection in `req`
        req._rdbConn = conn;
        // Pass the current request to the next middleware
        next();
    }).error(handleError(res));
}

// handle Error on rethinkdb connection
function handleError(res) {
    return function(error) {
        res.send(500, {error: error.message});
    }
}

// close rethinkdb connection
function closeConnection(req, res, next) {
    req._rdbConn.close();
    next();
}

let authCheck = wrap(async (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).end();
    }

    const token = req.headers.authorization;

    try {
        await verifyJWT(token);
    } catch (err) {
        return res.status(401).end();
    }

    next();
});

module.exports = {createConnection, closeConnection, authCheck};