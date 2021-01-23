import { all, call } from 'redux-saga/effects';

import { onFetchUserStart } from '../user/user.sagas';
//Region Sagas
import { onFetchRegionStart } from '../config/config.sagas';
import { onAddRegionStart } from '../config/config.sagas';
import { onDelRegionStart } from '../config/config.sagas';
//BU Sagas
import { onFetchBUStart, onAddBUStart, onDelBUStart } from '../config_bu/config_bu.sagas';
//Tags Sagas
import { onFetchTAGSStart, onAddTAGSStart, onDelTAGSStart } from '../config_tags/config_tags.sagas';

export default function* rootSaga() {
    yield all([call(onFetchUserStart), call(onFetchRegionStart), call(onAddRegionStart), call(onDelRegionStart), call(onFetchBUStart), call(onAddBUStart), call(onDelBUStart), call(onFetchTAGSStart), call(onAddTAGSStart), call(onDelTAGSStart)]);

}