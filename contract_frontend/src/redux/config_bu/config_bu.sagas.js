import { takeEvery, takeLatest, put, call } from 'redux-saga/effects'

import * as CONFIG_BU_types from './config_bu.types';
import axios from '../../utils1.js/axios'

import {
    delBUStart,
    delBUSuccess,
    delBUFailure,
    addBUStart,
    addBUSuccess,
    addBUFailure,
    fetchBUStart,
    fetchBUSuccess,
    fetchBUFailure
} from './config_bu.actions'

//Fetch BU Saga
export function* fetchBUs() {
    try {
        console.log('running axios')
        const buList = yield axios.get(`/basic/bu/`);
        console.log(buList)

        yield put(fetchBUSuccess(buList.data));
    } catch (error) {
        yield put(fetchBUFailure(error.message));
    }
}

export function* onFetchBUStart() {
        yield takeLatest(CONFIG_BU_types.FETCH_BU_START, fetchBUs);
    }
    //Add BU Saga
export function* addBUs(action) {
    try {
        console.log('running axios')
        const buList = yield axios.post(`/basic/bu/`, action.payload);
        // console.log(buList)

        yield put(addBUSuccess(buList.data));
        yield put(fetchBUStart());
    } catch (error) {
        yield put(addBUFailure(error.message));
    }
}

export function* onAddBUStart() {
    yield takeLatest(CONFIG_BU_types.ADD_BU_START, addBUs);
}

//Delete BU Saga
export function* delBUs(action) {
    try {
        console.log('running axios')
        const buList = yield axios.delete(`/basic/bu/` + action.payload.id);
        console.log(buList)

        yield put(delBUSuccess(buList.data));
        yield put(fetchBUStart());
    } catch (error) {
        yield put(delBUFailure(error.message));
    }
}

export function* onDelBUStart() {
    yield takeLatest(CONFIG_BU_types.DEL_BU_START, delBUs);
}