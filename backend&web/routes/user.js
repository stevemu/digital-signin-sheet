let UserLib = require('../lib/user');

module.exports = function (app) {

    let userLib = new UserLib();

    app.get('/api/user/hello', async (req, res) => {

        const users = userLib.getUsers();
        res.status(200).json(users);

    });

    app.post('/api/user/login', async (req, res) => {

        let authData = req.body;
        if (authData.username == "a" && authData.password == "a") {
            res.status(200).json({success: true});
        } else if (authData.username == "1" && authData.password == "1") {
            res.status(200).json({success: true});
        }
        else {
            res.status(400).json({message: "not authenticated"});
        }


    });

};

