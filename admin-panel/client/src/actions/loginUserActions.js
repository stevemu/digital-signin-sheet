import {loginApi} from "../api";

export function loginUser(username, password) {

    // console.log(username);
    // console.log(password);

    return async function (dispatch) {
        dispatch({type: "AUTH_LOGINUSER_START"});

        try {
            let res = await loginApi(username, password);
            dispatch({
                type: "AUTH_LOGINUSER_FULFILLED",
                payload: {
                    userUUID: res.data.userUUID,
                    token: res.data.token,
                    username: res.data.username
                }
            })

        } catch (err) {
            // console.log(err.response);
            dispatch({
                type: "AUTH_LOGINUSER_ERROR",
                payload: {
                    error: err.response.data.error
                }
            })
        }

    }
}

export function logoutUser() {
    return async function (dispatch) {
        dispatch({type: "AUTH_LOGOUTUSER_START"});
        dispatch({type: "AUTH_LOGOUTUSER_FULFILLED"});
    }
}