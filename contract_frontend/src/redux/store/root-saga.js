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
//DEPT Sagas
import { onFetchDEPTStart, onAddDEPTStart, onDelDEPTStart } from '../config_dept/config_dept.sagas';
//Division Sagas
import { onFetchDIVStart, onAddDIVStart, onDelDIVStart } from '../config_div/config_div.sagas';
//Site Sagas
import { onfetchSITEstart, onaddSITEstart, ondelSITEstart } from '../config_sites/config_sites.sagas';

export default function* rootSaga() {
    yield all([call(onFetchUserStart), call(onFetchRegionStart), call(onAddRegionStart), call(onDelRegionStart), call(onFetchBUStart), call(onAddBUStart), call(onDelBUStart),
    call(onFetchTAGSStart),
    call(onAddTAGSStart),
    call(onDelTAGSStart)

        , call(onFetchDEPTStart)
        , call(onAddDEPTStart)
        , call(onDelDEPTStart)
        , call(onFetchDIVStart),
    call(onAddDIVStart), call(onDelDIVStart), call(onfetchSITEstart), call(onaddSITEstart),
    call(ondelSITEstart)

    ]);

}