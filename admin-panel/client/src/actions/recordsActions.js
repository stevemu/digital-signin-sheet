import axios from 'axios';

export function getRecords(username, token) {
    return async function (dispatch) {

        dispatch({type: "RECORDS_LOAD_START"});

        try {

            const res = await axios.create({
                headers: {authorization: token}
            }).get(`/api/records/${username}`);
            const records = res.data;
            console.log(records);
            dispatch({
                type: "RECORDS_LOAD_FULFILLED",
                payload: {
                    username,
                    records
                }
            })

        } catch (err) {
            dispatch({
                type: "RECORDS_LOAD_ERROR",
                payload: {
                    error: err.response.data.error
                }
            })
        }

    }
}


export function addRecord() {

}