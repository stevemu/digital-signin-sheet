const express = require('express');
const router = express.Router();

let { handleRegistration } = require("../lib/registration");
let { handleLogin } = require("../lib/login");

router.post('/login', async (req, res) => {
    let conn = req._rdbConn;

    let authData = req.body;
    console.log('route /api/user/login get: ', authData);

    try {
        let result = await handleLogin(conn, authData);
        return res.status(200).json(result);
    } catch (errObj) {
        console.log(errObj);
        res.status(400).json({error: errObj.message});
    }

});

router.post('/registration', async (req, res) => {
    let conn = req._rdbConn;

    // regData = {
    //     username,
    //     password
    // }
    let regData = req.body;

    try {
        await handleRegistration(conn, regData);
        res.status(200).json({success: true});

    } catch (errObj) {
        console.log(errObj);
        res.status(400).json({error: errObj.message});
    }


});

module.exports = router;
