import * as CONFIG_TAGS_types from './config_tags.types';

// TAGS Fetching Actions
export const fetchTAGSStart = () => ({
    type: CONFIG_TAGS_types.FETCH_TAGS_START
});

export const fetchTAGSSuccess = stateList => ({
    type: CONFIG_TAGS_types.FETCH_TAGS_SUCCESS,
    payload: stateList
});

export const fetchTAGSFailure = errorMessage => ({
    type: CONFIG_TAGS_types.FETCH_TAGS_FAILURE,
    payload: errorMessage
});

// TAGS Addition Actions
export const addTAGSStart = (newData) => ({
    type: CONFIG_TAGS_types.ADD_TAGS_START,
    payload: newData
});

export const addTAGSSuccess = stateList => ({
    type: CONFIG_TAGS_types.ADD_TAGS_SUCCESS,
    payload: stateList
});

export const addTAGSFailure = errorMessage => ({
    type: CONFIG_TAGS_types.ADD_TAGS_FAILURE,
    payload: errorMessage
});


//state Deletion actions
export const delTAGSStart = (row) => ({
    type: CONFIG_TAGS_types.DEL_TAGS_START,
    payload: row
});

export const delTAGSSuccess = stateList => ({
    type: CONFIG_TAGS_types.DEL_TAGS_SUCCESS,
    payload: stateList
});

export const delTAGSFailure = errorMessage => ({
    type: CONFIG_TAGS_types.DEL_TAGS_FAILURE,
    payload: errorMessage
});