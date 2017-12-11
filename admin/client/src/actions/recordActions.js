import axios from 'axios';

export function getRecords(username) {
    return async function (dispatch) {

        const res = await axios.get(`/api/records/${username}`);
        const records = res.data;

        dispatch({
            type: "FETCH_RECORDS_FOR_USERNAME_FULFILLED",
            payload: { username, records }
        });


    }
}