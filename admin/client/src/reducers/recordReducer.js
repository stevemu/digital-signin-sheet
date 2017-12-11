
const initialState = [
    // {
    //     id: "1",
    //     username: "b",
    //     time: "July 22, 2017 8:00pm",
    //     name: "Steve",
    //     phone: "718-864-1267",
    //     email: "qmu@bu.edu"
    // },
    // {
    //     id: "2",
    //     username: "b",
    //     time: "July 23, 2017 8:00pm",
    //     name: "Qi",
    //     phone: "718-864-1267",
    //     email: "qmu@bu.edu"
    // },
    // {
    //     id: "3",
    //     username: "b",
    //     time: "July 24, 2017 8:00pm",
    //     name: "Qi2",
    //     phone: "718-864-1267",
    //     email: "qmu@bu.edu"
    // }
];


const recordReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case "FETCH_RECORDS_FOR_USERNAME_FULFILLED":
        {
            state = [
                ...state.filter((record) => {
                  return record.username != action.payload.username
                }),
                ...action.payload.records
            ];
            break;
        }

    }
    return state;
};

export default recordReducer;