import * as CONFIG_TAGS_types from './config_tags.types';


const INITIAL_STATE = {
    tagsList: [],
    isTAGSFetching: false,
    errorATAGSMessage: undefined
};


const configTAGSReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        //TAGS Fetch
        case CONFIG_TAGS_types.FETCH_TAGS_START:
            return {
                ...state,
                isTAGSFetching: true
            };
        case CONFIG_TAGS_types.FETCH_TAGS_SUCCESS:
            return {
                ...state,
                isTAGSFetching: false,
                tagsList: action.payload
            };
        case CONFIG_TAGS_types.FETCH_TAGS_FAILURE:
            return {
                ...state,
                isTAGSFetching: false,
                errorATAGSMessage: action.payload
            };
            //TAGS Add
        case CONFIG_TAGS_types.ADD_TAGS_START:
            return {
                ...state,
                isTAGSFetching: true
            };
        case CONFIG_TAGS_types.ADD_TAGS_SUCCESS:
            return {
                ...state,
                isTAGSFetching: false,
                tagsList: [...state.tagsList, action.payload]
            };
        case CONFIG_TAGS_types.ADD_TAGS_FAILURE:
            return {
                ...state,
                isTAGSFetching: false,
                errorATAGSMessage: action.payload
            };
            //TAGS Delete
        case CONFIG_TAGS_types.DEL_TAGS_START:
            return {
                ...state,
                isTAGSFetching: true
            };
        case CONFIG_TAGS_types.DEL_TAGS_SUCCESS:
            return {
                ...state,
                isTAGSFetching: false,
                tagsList: state.tagsList.filter((item, index) => item.id !== action.payload.id)
            };
        case CONFIG_TAGS_types.DEL_TAGS_FAILURE:
            return {
                ...state,
                isTAGSFetching: false,
                errorATAGSMessage: action.payload
            };
        default:
            return state;
    }
};

export default configTAGSReducer;