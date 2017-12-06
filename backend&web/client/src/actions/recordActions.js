import axios from 'axios';

export function getRecords(username) {
    return async function (dispatch) {

        // const records = [
        //     {
        //         id: "1",
        //         username: "1",
        //         time: "July 22, 2017 6:00pm",
        //         name: "Steve",
        //         phone: "718-864-1267",
        //         email: "qmu@bu.edu"
        //     },
        //     {
        //         id: "2",
        //         username: "1",
        //         time: "July 23, 2017 6:00pm",
        //         name: "Qi",
        //         phone: "718-864-1267",
        //         email: "qmu@bu.edu"
        //     },
        //     {
        //         id: "3",
        //         username: "1",
        //         time: "July 24, 2017 6:00pm",
        //         name: "Qi2",
        //         phone: "718-864-1267",
        //         email: "qmu@bu.edu1111"
        //     }
        // ];

        const res = await axios.get(`/api/records/${username}`);
        const records = res.data;

        dispatch({
            type: "FETCH_RECORDS_FOR_USERNAME_FULFILLED",
            payload: { username, records }
        });



    }
}