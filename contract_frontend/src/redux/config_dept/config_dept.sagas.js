import { takeEvery, takeLatest, put, call } from 'redux-saga/effects'
import * as CONFIG_DEPT_types from './config_dept.types'
import axios from '../../utils1.js/axios'

import {
    delDEPTStart,
    delDEPTSuccess,
    delDEPTFailure,
    addDEPTStart,
    addDEPTSuccess,
    addDEPTFailure,
    fetchDEPTStart,
    fetchDEPTSuccess,
    fetchDEPTFailure
} from './config_dept.actions'

//Fetch DEPT Saga
export function* fetchDEPTs() {
    try {
        console.log('running axios')
        const deptList = yield axios.get(`/basic/dept/`);
        console.log(deptList)

        yield put(fetchDEPTSuccess(deptList.data));
    } catch (error) {
        yield put(fetchDEPTFailure(error.message));
    }
}

export function* onFetchDEPTStart() {
        yield takeLatest(CONFIG_DEPT_types.FETCH_DEPT_START, fetchDEPTs);
    }
    //Add DEPT Saga
export function* addDEPTs(action) {
    try {
        console.log('running axios')
        const deptList = yield axios.post(`/basic/dept/`, action.payload);
        // console.log(deptList)

        yield put(addDEPTSuccess(deptList.data));
        yield put(fetchDEPTStart());
    } catch (error) {
        yield put(addDEPTFailure(error.message));
    }
}

export function* onAddDEPTStart() {
    yield takeLatest(CONFIG_DEPT_types.ADD_DEPT_START, addDEPTs);
}

//Delete DEPT Saga
export function* delDEPTs(action) {
    try {
        console.log('running axios')
        const deptList = yield axios.delete(`/basic/dept/` + action.payload.id);
        console.log(deptList)

        yield put(delDEPTSuccess(deptList.data));
        yield put(fetchDEPTStart());
    } catch (error) {
        yield put(delDEPTFailure(error.message));
    }
}

export function* onDelDEPTStart() {
    yield takeLatest(CONFIG_DEPT_types.DEL_DEPT_START, delDEPTs);
}