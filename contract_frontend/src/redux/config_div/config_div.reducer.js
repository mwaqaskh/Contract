import * as CONFIG_DIV_types from './config_div.types';

const INITIAL_STATE = {
    divList: [],
    isDIVFetching: false,
    errorDIVMessage: undefined
};


const configDIVReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        //DIV Fetch
        case CONFIG_DIV_types.FETCH_DIV_START:
            return {
                ...state,
                isDIVFetching: true
            };
        case CONFIG_DIV_types.FETCH_DIV_SUCCESS:
            return {
                ...state,
                isDIVFetching: false,
                divList: action.payload
            };
        case CONFIG_DIV_types.FETCH_DIV_FAILURE:
            return {
                ...state,
                isDIVFetching: false,
                errorDIVMessage: action.payload
            };
            //DIV Add
        case CONFIG_DIV_types.ADD_DIV_START:
            return {
                ...state,
                isDIVFetching: true
            };
        case CONFIG_DIV_types.ADD_DIV_SUCCESS:
            return {
                ...state,
                isDIVFetching: false,
                divList: [...state.divList, action.payload]
            };
        case CONFIG_DIV_types.ADD_DIV_FAILURE:
            return {
                ...state,
                isDIVFetching: false,
                errorDIVMessage: action.payload
            };
            //DIV Delete
        case CONFIG_DIV_types.DEL_DIV_START:
            return {
                ...state,
                isDIVFetching: true
            };
        case CONFIG_DIV_types.DEL_DIV_SUCCESS:
            return {
                ...state,
                isDIVFetching: false,
                divList: state.divList.filter((item, index) => item.id !== action.payload.id)
            };
        case CONFIG_DIV_types.DEL_DIV_FAILURE:
            return {
                ...state,
                isDIVFetching: false,
                errorDIVMessage: action.payload
            };
        default:
            return state;
    }
};

export default configDIVReducer;