import { all, call } from 'redux-saga/effects';

import { onFetchUserStart } from '../user/user.sagas';

import { onFetchRegionStart } from '../config/config.sagas';
import { onAddRegionStart } from '../config/config.sagas';
import { onDelRegionStart } from '../config/config.sagas';

export default function* rootSaga() {
    yield all([call(onFetchUserStart), call(onFetchRegionStart), call(onAddRegionStart), call(onDelRegionStart)]);

}