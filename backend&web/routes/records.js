let RecordLib = require('../lib/record');

module.exports = function (app, db) {

    let recordLib = new RecordLib(db);

    app.get('/api/records/:org', async (req, res) => {

        const org = req.params.org;
        const records = await recordLib.getRecords(org);
        res.status(200).json(records);

    });

    app.post("/api/records/", async (req, res) => {

        console.log(req.body);
        const records = await recordLib.saveRecords(req.body);
        res.status(200).json({name: "abc"});
    })


};

