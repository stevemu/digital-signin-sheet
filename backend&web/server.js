require('dotenv').config();

let express =  require('express');
let bodyParer = require('body-parser');

const app = express();
app.use(bodyParer.json({limit: '5000mb'}));
app.set("port", process.env.PORT || 3001);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
    console.log('using client/build');
    app.use("/", express.static("client/build"));
}

let r = require('rethinkdbdash')({
    port: process.env.RETHINK_PORT,
    host: process.env.RETHINK_HOST
});

const dbName = process.env.DB_NAME;
const db = r.db(dbName);

require('./routes/user')(app);
require('./routes/records')(app, db);

app.listen(app.get("port"), () => {
    console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});