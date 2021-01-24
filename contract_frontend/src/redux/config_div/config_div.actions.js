import * as CONFIG_DIV_types from './config_div.types';

// DIV Fetching Actions
export const fetchDIVStart = () => ({
    type: CONFIG_DIV_types.FETCH_DIV_START
});

export const fetchDIVSuccess = stateList => ({
    type: CONFIG_DIV_types.FETCH_DIV_SUCCESS,
    payload: stateList
});

export const fetchDIVFailure = errorMessage => ({
    type: CONFIG_DIV_types.FETCH_DIV_FAILURE,
    payload: errorMessage
});

// DIV Addition Actions
export const addDIVStart = (newData) => ({
    type: CONFIG_DIV_types.ADD_DIV_START,
    payload: newData
});

export const addDIVSuccess = stateList => ({
    type: CONFIG_DIV_types.ADD_DIV_SUCCESS,
    payload: stateList
});

export const addDIVFailure = errorMessage => ({
    type: CONFIG_DIV_types.ADD_DIV_FAILURE,
    payload: errorMessage
});


//state Deletion actions
export const delDIVStart = (row) => ({
    type: CONFIG_DIV_types.DEL_DIV_START,
    payload: row
});

export const delDIVSuccess = stateList => ({
    type: CONFIG_DIV_types.DEL_DIV_SUCCESS,
    payload: stateList
});

export const delDIVFailure = errorMessage => ({
    type: CONFIG_DIV_types.DEL_DIV_FAILURE,
    payload: errorMessage
});