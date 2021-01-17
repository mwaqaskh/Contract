import * as CC_types from './cc.types';

export const setCCData = CCData => ({
    type: CC_types.CREATE_CONTRACT,
    payload: CCData
})


export const setSMPC = () => ({
    type: CC_types.SET_SMPC,

})

export const setCIR = () => ({
    type: CC_types.SET_CIR,

})

export const setONG = () => ({
    type: CC_types.SET_ONG,
})