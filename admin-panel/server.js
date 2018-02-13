require('dotenv').config();

let express =  require('express');
let bodyParer = require('body-parser');
let {SHEET_PORT} = require("./src/config");
var {createConnection, closeConnection } = require('./src/middleware');

const app = express();
app.use(bodyParer.json({limit: '5000mb'}));
app.set("port", SHEET_PORT);
app.use(createConnection); // Create a RethinkDB connection

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
    console.log('using client/build');
    app.use("/", express.static("client/build"));
}

app.use("/api/records", require("./src/routes/records"));
app.use("/api/user", require("./src/routes/user"));

app.use(closeConnection);

app.listen(app.get("port"), () => {
    console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});