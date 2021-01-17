import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import themeReducer from "./themeReducer";

import ccReducer from '../create_contract/cc.reducer';
import userReducer from '../user/user.reducer'
import ccCheckBox from '../create_contract/checkbox.reducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cc', 'ccCheckBox']
}


const rootReducer = combineReducers({
    themeReducer: themeReducer,
    cc: ccReducer,
    userList: userReducer,
    ccCheckBox: ccCheckBox,
})

export default persistReducer(persistConfig, rootReducer)