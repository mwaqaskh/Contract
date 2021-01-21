import { takeEvery, takeLatest, put, call } from 'redux-saga/effects'

import * as CONFIG_types from './config.types';
import axios from '../../utils1.js/axios'

import {
    delRegionStart,
    delRegionSuccess,
    delRegionFailure,
    addRegionStart,
    addRegionSuccess,
    addRegionFailure,
    fetchRegionStart,
    fetchRegionSuccess,
    fetchRegionFailure
} from './config.actions'

//Fetch Region Saga
export function* fetchRegions() {
    try {
        console.log('running axios')
        const regionList = yield axios.get(`/basic/region/`);
        console.log(regionList)

        yield put(fetchRegionSuccess(regionList.data));
    } catch (error) {
        yield put(fetchRegionFailure(error.message));
    }
}

export function* onFetchRegionStart() {
        yield takeLatest(CONFIG_types.FETCH_REGION_START, fetchRegions);
    }
    //Add Region Saga
export function* addRegions(action) {
    try {
        console.log('running axios')
        const regionList = yield axios.post(`/basic/region/`, action.payload);
        console.log(regionList)

        yield put(addRegionSuccess(regionList.data));
    } catch (error) {
        yield put(addRegionFailure(error.message));
    }
}

export function* onAddRegionStart() {
    yield takeLatest(CONFIG_types.ADD_REGION_START, addRegions);
}

//Delete Region Saga
export function* delRegions(action) {
    try {
        console.log('running axios')
        const regionList = yield axios.delete(`/basic/region/`, action.payload);
        console.log(regionList)

        yield put(delRegionSuccess(regionList.data));
    } catch (error) {
        yield put(delRegionFailure(error.message));
    }
}

export function* onDelRegionStart() {
    yield takeLatest(CONFIG_types.DEL_REGION_START, delRegions);
}