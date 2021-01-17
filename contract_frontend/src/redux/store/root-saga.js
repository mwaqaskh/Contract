import { all, call } from 'redux-saga/effects';

import { onFetchUserStart } from '../user/user.sagas';

export default function* rootSaga() {
    yield all([call(onFetchUserStart)]);
}