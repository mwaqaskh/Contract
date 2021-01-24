import { takeEvery, takeLatest, put, call } from 'redux-saga/effects'

import * as CONFIG_DIV_types from './config_div.types';
import axios from '../../utils1.js/axios'

import {
    delDIVStart,
    delDIVSuccess,
    delDIVFailure,
    addDIVStart,
    addDIVSuccess,
    addDIVFailure,
    fetchDIVStart,
    fetchDIVSuccess,
    fetchDIVFailure
} from './config_div.actions'

//Fetch DIV Saga
export function* fetchDIVs() {
    try {
        console.log('running axios')
        const divList = yield axios.get(`/basic/div/`);
        console.log(divList)

        yield put(fetchDIVSuccess(divList.data));
    } catch (error) {
        yield put(fetchDIVFailure(error.message));
    }
}

export function* onFetchDIVStart() {
        yield takeLatest(CONFIG_DIV_types.FETCH_DIV_START, fetchDIVs);
    }
//Add DIV Saga
export function* addDIVs(action) {
    try {
        console.log('running axios')
        const divList = yield axios.post(`/basic/div/`, action.payload);
        // console.log(divList)

        yield put(addDIVSuccess(divList.data));
        yield put(fetchDIVStart());
    } catch (error) {
        yield put(addDIVFailure(error.message));
    }
}

export function* onAddDIVStart() {
    yield takeLatest(CONFIG_DIV_types.ADD_DIV_START, addDIVs);
}

//Delete DIV Saga
export function* delDIVs(action) {
    try {
        console.log('running axios')
        const divList = yield axios.delete(`/basic/div/` + action.payload.id);
        console.log(divList)

        yield put(delDIVSuccess(divList.data));
        yield put(fetchDIVStart());
    } catch (error) {
        yield put(delDIVFailure(error.message));
    }
}

export function* onDelDIVStart() {
    yield takeLatest(CONFIG_DIV_types.DEL_DIV_START, delDIVs);
}