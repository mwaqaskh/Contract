import { takeEvery, takeLatest, put, call } from 'redux-saga/effects'

import * as USER_types from './user.types';
import axios from '../../utils1.js/axios'

import { fetchUserSuccess, fetchUserFailure } from './user.actions'


export function* fetchUsers() {
    try {

        console.log('running axios')
        const userList = yield axios.get(`/user/userlist/`);
        console.log('check123')
        console.log(userList)

        yield put(fetchUserSuccess(userList.data));
    } catch (error) {
        yield put(fetchUserFailure(error.message));
    }
}

export function* onFetchUserStart() {
    yield takeLatest(USER_types.FETCH_USER_START, fetchUsers);
}