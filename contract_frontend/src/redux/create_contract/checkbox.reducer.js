import * as cctypes from './cc.types';

const INTITIAL_STATE = {
    "managed_as_panel_contractor": false,
    "contract_insurance_req": false,
    "ongoing": false,
}


const ccCheckBox = (state = INTITIAL_STATE, action) => {
    switch (action.type) {

        case cctypes.SET_SMPC:
            return {
                ...state,
                managed_as_panel_contractor: !state.managed_as_panel_contractor
            }
        case cctypes.SET_CIR:
            return {
                ...state,
                contract_insurance_req: !state.contract_insurance_req
            }
        case cctypes.SET_ONG:
            return {
                ...state,
                ongoing: !state.ongoing
            }
        default:
            return state

    }
}

export default ccCheckBox