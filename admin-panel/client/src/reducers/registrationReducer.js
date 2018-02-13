const initState = {
    regPending: false,
    error: null,
    regSuccess: null
};

export default (state = initState, action) => {

    switch (action.type) {
        case "REG_START": {
            state = {
                ...state,
                regPending: true,
                error: null,
                regSuccess: false
            };
            break;
        }
        case "REG_ERROR": {
            state= {
                ...state,
                regPending: false,
                error: action.payload.error,
                regSuccess: false
            };
            break;
        }
        case "REG_SUCCESS": {
            state = {
                ...state,
                regPending: false,
                error: null,
                regSuccess: true
            };
            break;
        }
        case "SEE_REG_SUCCESS_PAGE_SUCCESS": {
            state = {
                ...state,
                regSuccess: false,
                error: null
            }
        }
    }

    return state;
}