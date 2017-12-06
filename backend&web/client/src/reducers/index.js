import { combineReducers } from 'redux';

import records from "./recordReducer";

const combinedReducer = combineReducers({
    records
});

export default combinedReducer;