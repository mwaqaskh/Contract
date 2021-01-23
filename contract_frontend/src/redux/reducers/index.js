import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import themeReducer from "./themeReducer";

import ccReducer from '../create_contract/cc.reducer';
import userReducer from '../user/user.reducer'
import ccCheckBox from '../create_contract/checkbox.reducer'
import configReducer from '../config/config.reducer'

import configBUReducer from '../config_bu/config_bu.reducer'
import configTAGSReducer from '../config_tags/config_tags.reducer'


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cc', 'ccCheckBox', 'configReducer', 'configBUReducer', 'configTAGSReducer']
}


const rootReducer = combineReducers({
    themeReducer: themeReducer,
    cc: ccReducer,
    userList: userReducer,
    ccCheckBox: ccCheckBox,
    configReducer: configReducer,
    configBUReducer: configBUReducer,
    configTAGSReducer: configTAGSReducer,
})

export default persistReducer(persistConfig, rootReducer)