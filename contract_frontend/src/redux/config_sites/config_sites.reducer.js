import * as CONFIG_SITES_types from './config_sites.types';

const INITIAL_STATE = {
    sitesList: [],
    isSITEFetching: false,
    errorSITESMessage: undefined
};


const configSITESReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        //SITES Fetch
        case CONFIG_SITES_types.FETCH_SITES_START:
            return {
                ...state,
                isSITEFetching: true
            };
        case CONFIG_SITES_types.FETCH_SITES_SUCCESS:
            return {
                ...state,
                isSITEFetching: false,
                sitesList: action.payload
            };
        case CONFIG_SITES_types.FETCH_SITES_FAILURE:
            return {
                ...state,
                isSITEFetching: false,
                errorSITESMessage: action.payload
            };
            //SITES Add
        case CONFIG_SITES_types.ADD_SITES_START:
            return {
                ...state,
                isSITEFetching: true
            };
        case CONFIG_SITES_types.ADD_SITES_SUCCESS:
            return {
                ...state,
                isSITEFetching: false,
                sitesList: [...state.sitesList, action.payload]
            };
        case CONFIG_SITES_types.ADD_SITES_FAILURE:
            return {
                ...state,
                isSITEFetching: false,
                errorSITESMessage: action.payload
            };
            //SITES Delete
        case CONFIG_SITES_types.DEL_SITES_START:
            return {
                ...state,
                isSITEFetching: true
            };
        case CONFIG_SITES_types.DEL_SITES_SUCCESS:
            return {
                ...state,
                isSITEFetching: false,
                sitesList: state.sitesList.filter((item, index) => item.id !== action.payload.id)
            };
        case CONFIG_SITES_types.DEL_SITES_FAILURE:
            return {
                ...state,
                isSITEFetching: false,
                errorSITESMessage: action.payload
            };
        default:
            return state;
    }
};

export default configSITESReducer;