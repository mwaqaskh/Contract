import * as CONFIG_DEPT_types from './config_dept.types'

// DEPT Fetching Actions
export const fetchDEPTStart = () => ({
    type: CONFIG_DEPT_types.FETCH_DEPT_START
});

export const fetchDEPTSuccess = stateList => ({
    type: CONFIG_DEPT_types.FETCH_DEPT_SUCCESS,
    payload: stateList
});

export const fetchDEPTFailure = errorMessage => ({
    type: CONFIG_DEPT_types.FETCH_DEPT_FAILURE,
    payload: errorMessage
});

// DEPT Addition Actions
export const addDEPTStart = (newData) => ({
    type: CONFIG_DEPT_types.ADD_DEPT_START,
    payload: newData
});

export const addDEPTSuccess = stateList => ({
    type: CONFIG_DEPT_types.ADD_DEPT_SUCCESS,
    payload: stateList
});

export const addDEPTFailure = errorMessage => ({
    type: CONFIG_DEPT_types.ADD_DEPT_FAILURE,
    payload: errorMessage
});


//state Deletion actions
export const delDEPTStart = (row) => ({
    type: CONFIG_DEPT_types.DEL_DEPT_START,
    payload: row
});

export const delDEPTSuccess = stateList => ({
    type: CONFIG_DEPT_types.DEL_DEPT_SUCCESS,
    payload: stateList
});

export const delDEPTFailure = errorMessage => ({
    type: CONFIG_DEPT_types.DEL_DEPT_FAILURE,
    payload: errorMessage
});