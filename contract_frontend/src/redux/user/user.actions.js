import * as USER_types from './user.types';


export const fetchUserStart = () => ({
    type: USER_types.FETCH_USER_START
});

export const fetchUserSuccess = userList => ({
    type: USER_types.FETCH_USER_SUCCESS,
    payload: userList
});

export const fetchUserFailure = errorMessage => ({
    type: USER_types.FETCH_USER_FAILURE,
    payload: errorMessage
});