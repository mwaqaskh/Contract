import * as CONFIG_BU_types from './config_bu.types';

// BU Fetching Actions
export const fetchBUStart = () => ({
    type: CONFIG_BU_types.FETCH_BU_START
});

export const fetchBUSuccess = stateList => ({
    type: CONFIG_BU_types.FETCH_BU_SUCCESS,
    payload: stateList
});

export const fetchBUFailure = errorMessage => ({
    type: CONFIG_BU_types.FETCH_BU_FAILURE,
    payload: errorMessage
});

// BU Addition Actions
export const addBUStart = (newData) => ({
    type: CONFIG_BU_types.ADD_BU_START,
    payload: newData
});

export const addBUSuccess = stateList => ({
    type: CONFIG_BU_types.ADD_BU_SUCCESS,
    payload: stateList
});

export const addBUFailure = errorMessage => ({
    type: CONFIG_BU_types.ADD_BU_FAILURE,
    payload: errorMessage
});


//state Deletion actions
export const delBUStart = (row) => ({
    type: CONFIG_BU_types.DEL_BU_START,
    payload: row
});

export const delBUSuccess = stateList => ({
    type: CONFIG_BU_types.DEL_BU_SUCCESS,
    payload: stateList
});

export const delBUFailure = errorMessage => ({
    type: CONFIG_BU_types.DEL_BU_FAILURE,
    payload: errorMessage
});