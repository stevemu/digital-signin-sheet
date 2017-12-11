import {registrationApi} from "../api";

export function register(username, password) {
    return async function (dispatch) {
        dispatch({type: "REG_START"});

        try {
            await registrationApi({
                username,
                password
            });
            dispatch({type: "REG_SUCCESS"});

        } catch (err) {
            dispatch({
                type: "REG_ERROR",
                payload: {
                    error: err.response.data.error
                }
            })
        }

    }
}

export function seeRegSuccessPage() {
    console.log('see');
    return async function (dispatch) {
        dispatch({type: "SEE_REG_SUCCESS_PAGE_SUCCESS"});
    }
}