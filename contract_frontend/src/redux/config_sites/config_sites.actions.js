import * as CONFIG_SITES_types from './config_sites.types';

// SITES Fetching Actions
export const fetchSITESStart = () => ({
    type: CONFIG_SITES_types.FETCH_SITES_START
});

export const fetchSITESSuccess = stateList => ({
    type: CONFIG_SITES_types.FETCH_SITES_SUCCESS,
    payload: stateList
});

export const fetchSITESFailure = errorMessage => ({
    type: CONFIG_SITES_types.FETCH_SITES_FAILURE,
    payload: errorMessage
});

// SITES Addition Actions
export const addSITESStart = (newData) => ({
    type: CONFIG_SITES_types.ADD_SITES_START,
    payload: newData
});

export const addSITESSuccess = stateList => ({
    type: CONFIG_SITES_types.ADD_SITES_SUCCESS,
    payload: stateList
});

export const addSITESFailure = errorMessage => ({
    type: CONFIG_SITES_types.ADD_SITES_FAILURE,
    payload: errorMessage
});


//state Deletion actions
export const delSITESStart = (row) => ({
    type: CONFIG_SITES_types.DEL_SITES_START,
    payload: row
});

export const delSITESSuccess = stateList => ({
    type: CONFIG_SITES_types.DEL_SITES_SUCCESS,
    payload: stateList
});

export const delSITESFailure = errorMessage => ({
    type: CONFIG_SITES_types.DEL_SITES_FAILURE,
    payload: errorMessage
});