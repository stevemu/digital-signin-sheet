let moment = require("moment");

class RecordLib {

    constructor(db) {
        this.db = db;
    }

    async getRecords(username) {
        const result = await this.db.table("records").filter({username});
        return result;
    }

    async saveRecords(data) {
        data.time = moment.utc().format();
        const result = await this.db.table("records").insert(data);
        return result;
    }
}

module.exports = RecordLib;