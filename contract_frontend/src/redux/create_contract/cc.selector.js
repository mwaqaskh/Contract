import { createSelector } from 'reselect';

const selectcheckBox = state => state.ccCheckBox


export const selectCCSMPC = createSelector(
    [selectcheckBox],
    selectcheckBox => selectcheckBox.managed_as_panel_contractor
)

export const selectCCCIR = createSelector(
    [selectcheckBox],
    selectcheckBox => selectcheckBox.contract_insurance_req
)

export const selectCCONG = createSelector(
    [selectcheckBox],
    selectcheckBox => selectcheckBox.ongoing
)