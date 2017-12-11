const express = require('express');
const router = express.Router();

let { getRecords, saveRecord } = require("../lib/records");
let {authCheck} = require("../middleware");

router.get('/:org', authCheck, async (req, res) => {

    let conn = req._rdbConn;

    const org = req.params.org;
    console.log('at post /records/:org', org);

    try {
        const records = await getRecords(conn, org);
        res.status(200).json(records);

    } catch (errObj) {
        res.status(400).json({error: errObj.message});
    }


});

router.post("/", authCheck, async (req, res) => {

    let conn = req._rdbConn;

    const record = req.body;
    console.log('at post /records/:', record);

    try {
        await saveRecord(conn, record);
        res.status(200).json({success: true});
    } catch (errObj) {
        res.status(400).json({error: errObj.message});
    }
});

module.exports = router;
