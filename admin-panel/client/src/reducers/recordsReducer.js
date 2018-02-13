
const initialState = {
    recordFetchPending: false,
    recordFetchError: null,
    records: []
};


export default function (state = initialState, action) {
    switch (action.type) {
        case "RECORDS_LOAD_START":
        {
            state = {
                ...state,
                recordFetchPending: true,
                recordFetchError: null
            };
            break;
        }
        case "RECORDS_LOAD_ERROR":
        {
            state = {
                ...state,
                recordFetchPending: false,
                recordFetchError: action.payload.error
            };
            break;
        }
        case "RECORDS_LOAD_FULFILLED":
        {
            state = {
                ...state,
                records: [
                    state.records.filter((record) => {
                        return record.username !== action.payload.username
                    }),
                    ...action.payload.records
                ]

            };
            break;
        }

    }

    return state;
};