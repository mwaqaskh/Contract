import * as CONFIG_types from './config.types';

const INITIAL_STATE = {
    regionList: [],
    isRegionFetching: false,
    errorRegionMessage: undefined
};


const configReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CONFIG_types.FETCH_REGION_START:
            return {
                ...state,
                isRegionFetching: true
            };
        case CONFIG_types.FETCH_REGION__SUCCESS:
            return {
                ...state,
                isRegionFetching: false,
                regionList: action.payload
            };
        case CONFIG_types.FETCH_REGION__FAILURE:
            return {
                ...state,
                isRegionFetching: false,
                errorRegionMessage: action.payload
            };
            //Region Add
        case CONFIG_types.ADD_REGION_START:
            return {
                ...state,
                isRegionFetching: true
            };
        case CONFIG_types.ADD_REGION__SUCCESS:
            return {
                ...state,
                isRegionFetching: false,
                regionList: [...state.regionList, action.payload]
            };
        case CONFIG_types.ADD_REGION__FAILURE:
            return {
                ...state,
                isRegionFetching: false,
                errorRegionMessage: action.payload
            };
            //Region Delete
        case CONFIG_types.DEL_REGION_START:
            return {
                ...state,
                isRegionFetching: true
            };
        case CONFIG_types.DEL_REGION__SUCCESS:
            return {
                ...state,
                isRegionFetching: false,
                regionList: state.regionList.filter((item, index) => item.id !== action.payload.id)
            };
        case CONFIG_types.DEL_REGION__FAILURE:
            return {
                ...state,
                isRegionFetching: false,
                errorRegionMessage: action.payload
            };
        default:
            return state;
    }
};

export default configReducer;