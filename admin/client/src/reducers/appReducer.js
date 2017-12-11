import {REHYDRATE} from 'redux-persist/src/constants';

const initState = {
    hydrated: false
};

export default function (state = initState, action) {
    switch (action.type) {
        case REHYDRATE: {
            state = {
                ...state,
                hydrated: true
            }
        }
    }

    return state;
}