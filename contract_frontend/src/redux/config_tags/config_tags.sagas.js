import { takeEvery, takeLatest, put, call } from 'redux-saga/effects'

import * as CONFIG_TAGS_types from './config_tags.types';
import axios from '../../utils1.js/axios'

import {
    delTAGSStart,
    delTAGSSuccess,
    delTAGSFailure,
    addTAGSStart,
    addTAGSSuccess,
    addTAGSFailure,
    fetchTAGSStart,
    fetchTAGSSuccess,
    fetchTAGSFailure
} from './config_tags.actions'

//Fetch TAGS Saga
export function* fetchTAGSs() {
    try {
        console.log('running axios')
        const tagsList = yield axios.get(`/basic/tag/`);
        console.log(tagsList)

        yield put(fetchTAGSSuccess(tagsList.data));
    } catch (error) {
        yield put(fetchTAGSFailure(error.message));
    }
}

export function* onFetchTAGSStart() {
        yield takeLatest(CONFIG_TAGS_types.FETCH_TAGS_START, fetchTAGSs);
    }
    //Add TAGS Saga
export function* addTAGSs(action) {
    try {
        console.log('running axios')
        const tagsList = yield axios.post(`/basic/tag/`, action.payload);
        // console.log(tagsList)

        yield put(addTAGSSuccess(tagsList.data));
        yield put(fetchTAGSStart());
    } catch (error) {
        yield put(addTAGSFailure(error.message));
    }
}

export function* onAddTAGSStart() {
    yield takeLatest(CONFIG_TAGS_types.ADD_TAGS_START, addTAGSs);
}

//Delete TAGS Saga
export function* delTAGSs(action) {
    try {
        console.log('running axios')
        const tagsList = yield axios.delete(`/basic/tag/` + action.payload.id);
        console.log(tagsList)

        yield put(delTAGSSuccess(tagsList.data));
        yield put(fetchTAGSStart());
    } catch (error) {
        yield put(delTAGSFailure(error.message));
    }
}

export function* onDelTAGSStart() {
    yield takeLatest(CONFIG_TAGS_types.DEL_TAGS_START, delTAGSs);
}