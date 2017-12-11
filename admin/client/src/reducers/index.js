// import { combineReducers } from 'redux';

import records from "./recordsReducer";
import loginUser from "./loginUserReducer";
import registration from "./registrationReducer";
import app from "./appReducer";

// const combinedReducer = combineReducers({
//     records,
//     loginUser
// });

export default {
    records,
    loginUser,
    registration,
    app
};