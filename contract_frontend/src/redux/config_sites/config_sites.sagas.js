import { takeEvery, takeLatest, put, call } from 'redux-saga/effects'

import * as CONFIG_SITES_types from './config_sites.types';
import axios from '../../utils1.js/axios'

import {
    delSITESStart,
    delSITESSuccess,
    delSITESFailure,
    addSITESStart,
    addSITESSuccess,
    addSITESFailure,
    fetchSITESStart,
    fetchSITESSuccess,
    fetchSITESFailure
} from './config_sites.actions'

//Fetch SITES Saga
export function* fetchSITEs() {
    try {
        console.log('running axios')
        const sitesList = yield axios.get(`/basic/site/`);
        console.log(sitesList)

        yield put(fetchSITESSuccess(sitesList.data));
    } catch (error) {
        yield put(fetchSITESFailure(error.message));
    }
}

export function* onfetchSITEstart() {
        yield takeLatest(CONFIG_SITES_types.FETCH_SITES_START, fetchSITEs);
    }
//Add SITES Saga
export function* addSITEs(action) {
    try {
        console.log('running axios')
        const sitesList = yield axios.post(`/basic/site/`, action.payload);
        // console.log(sitesList)

        yield put(addSITESSuccess(sitesList.data));
        yield put(fetchSITESStart());
    } catch (error) {
        yield put(addSITESFailure(error.message));
    }
}

export function* onaddSITEstart() {
    yield takeLatest(CONFIG_SITES_types.ADD_SITES_START, addSITEs);
}

//Delete SITES Saga
export function* delSITEs(action) {
    try {
        console.log('running axios')
        const sitesList = yield axios.delete(`/basic/site/` + action.payload.id);
        console.log(sitesList)

        yield put(delSITESSuccess(sitesList.data));
        yield put(fetchSITESStart());
    } catch (error) {
        yield put(delSITESFailure(error.message));
    }
}

export function* ondelSITEstart() {
    yield takeLatest(CONFIG_SITES_types.DEL_SITES_START, delSITEs);
}