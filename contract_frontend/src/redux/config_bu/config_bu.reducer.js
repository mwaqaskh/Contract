import * as CONFIG_BU_types from './config_bu.types';

const INITIAL_STATE = {
    buList: [],
    isBUFetching: false,
    errorBUMessage: undefined
};


const configBUReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        //BU Fetch
        case CONFIG_BU_types.FETCH_BU_START:
            return {
                ...state,
                isBUFetching: true
            };
        case CONFIG_BU_types.FETCH_BU_SUCCESS:
            return {
                ...state,
                isBUFetching: false,
                buList: action.payload
            };
        case CONFIG_BU_types.FETCH_BU_FAILURE:
            return {
                ...state,
                isBUFetching: false,
                errorBUMessage: action.payload
            };
            //BU Add
        case CONFIG_BU_types.ADD_BU_START:
            return {
                ...state,
                isBUFetching: true
            };
        case CONFIG_BU_types.ADD_BU_SUCCESS:
            return {
                ...state,
                isBUFetching: false,
                buList: [...state.buList, action.payload]
            };
        case CONFIG_BU_types.ADD_BU_FAILURE:
            return {
                ...state,
                isBUFetching: false,
                errorBUMessage: action.payload
            };
            //BU Delete
        case CONFIG_BU_types.DEL_BU_START:
            return {
                ...state,
                isBUFetching: true
            };
        case CONFIG_BU_types.DEL_BU_SUCCESS:
            return {
                ...state,
                isBUFetching: false,
                buList: state.buList.filter((item, index) => item.id !== action.payload.id)
            };
        case CONFIG_BU_types.DEL_BU_FAILURE:
            return {
                ...state,
                isBUFetching: false,
                errorBUMessage: action.payload
            };
        default:
            return state;
    }
};

export default configBUReducer;