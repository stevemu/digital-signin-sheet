import {REHYDRATE} from 'redux-persist/src/constants';

const initState = {
    authenticated: false,
    username: null,
    userUUID: null,
    token: null,
    error: null,
    authInProgress: false,
    logoutInProgress: false
};

export default (state = initState, action) => {
    switch (action.type) {
        case "AUTH_LOGINUSER_START":
        {
            state = {
                ...state,
                authInProgress: true
            };
            break;
        }
        case "AUTH_LOGINUSER_ERROR":
        {
            state = {
                ...state,
                authInProgress: false,
                error: action.payload.error,
                authenticated: false,
                token: null
            };
            break;
        }
        case "AUTH_LOGINUSER_FULFILLED":
        {
            state = {
                ...state,
                authInProgress: false,
                error: null,
                authenticated: true,
                token: action.payload.token,
                userUUID: action.payload.userUUID,
                username: action.payload.username
            };
            break;
        }
        case "AUTH_LOGOUTUSER_START":
        {
            state = {
                ...state,
                logoutInProgress: true
            };
            break;
        }
        case "AUTH_LOGOUTUSER_FULFILLED":
        {
            state = {
                ...state,
                logoutInProgress: false,
                authenticated: false,
                token: null,
                userUUID: null,
                username: null,
                error: null
            };
            break;
        }
    }

    return state;

}
