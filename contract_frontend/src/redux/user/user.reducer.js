import * as USER_types from './user.types';


const INITIAL_STATE = {
    userList: [],
    isFetching: false,
    errorMessage: undefined
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_types.FETCH_USER_START:
            return {
                ...state,
                isFetching: true
            };
        case USER_types.FETCH_USER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                userList: action.payload
            };
        case USER_types.FETCH_USER_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;