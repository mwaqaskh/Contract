import * as CONFIG_types from './config.types';

// Region Fetching Actions
export const fetchRegionStart = () => ({
    type: CONFIG_types.FETCH_REGION_START
});

export const fetchRegionSuccess = stateList => ({
    type: CONFIG_types.FETCH_REGION__SUCCESS,
    payload: stateList
});

export const fetchRegionFailure = errorMessage => ({
    type: CONFIG_types.FETCH_REGION__FAILURE,
    payload: errorMessage
});

// Region Addition Actions
export const addRegionStart = (newData) => ({
    type: CONFIG_types.ADD_REGION_START,
    payload: newData
});

export const addRegionSuccess = stateList => ({
    type: CONFIG_types.ADD_REGION__SUCCESS,
    payload: stateList
});

export const addRegionFailure = errorMessage => ({
    type: CONFIG_types.ADD_REGION__FAILURE,
    payload: errorMessage
});


//state Deletion actions
export const delRegionStart = () => ({
    type: CONFIG_types.DEL_REGION_START
});

export const delRegionSuccess = stateList => ({
    type: CONFIG_types.DEL_REGION__SUCCESS,
    payload: stateList
});

export const delRegionFailure = errorMessage => ({
    type: CONFIG_types.DEL_REGION__FAILURE,
    payload: errorMessage
});