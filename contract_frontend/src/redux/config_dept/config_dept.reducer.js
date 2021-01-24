import * as CONFIG_DEPT_types from './config_dept.types'

const INITIAL_STATE = {
    deptList: [],
    isDEPTFetching: false,
    errorDEPTMessage: undefined
};


const configDEPTReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        //DEPT Fetch
        case CONFIG_DEPT_types.FETCH_DEPT_START:
            return {
                ...state,
                isDEPTFetching: true
            };
        case CONFIG_DEPT_types.FETCH_DEPT_SUCCESS:
            return {
                ...state,
                isDEPTFetching: false,
                deptList: action.payload
            };
        case CONFIG_DEPT_types.FETCH_DEPT_FAILURE:
            return {
                ...state,
                isDEPTFetching: false,
                errorDEPTMessage: action.payload
            };
            //DEPT Add
        case CONFIG_DEPT_types.ADD_DEPT_START:
            return {
                ...state,
                isDEPTFetching: true
            };
        case CONFIG_DEPT_types.ADD_DEPT_SUCCESS:
            return {
                ...state,
                isDEPTFetching: false,
                deptList: [...state.deptList, action.payload]
            };
        case CONFIG_DEPT_types.ADD_DEPT_FAILURE:
            return {
                ...state,
                isDEPTFetching: false,
                errorDEPTMessage: action.payload
            };
            //DEPT Delete
        case CONFIG_DEPT_types.DEL_DEPT_START:
            return {
                ...state,
                isDEPTFetching: true
            };
        case CONFIG_DEPT_types.DEL_DEPT_SUCCESS:
            return {
                ...state,
                isDEPTFetching: false,
                deptList: state.deptList.filter((item, index) => item.id !== action.payload.id)
            };
        case CONFIG_DEPT_types.DEL_DEPT_FAILURE:
            return {
                ...state,
                isDEPTFetching: false,
                errorDEPTMessage: action.payload
            };
        default:
            return state;
    }
};

export default configDEPTReducer;