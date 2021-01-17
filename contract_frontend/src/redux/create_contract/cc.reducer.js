import * as cctypes from './cc.types';

const INTITIAL_STATE = {
    "supplier_name": null,
    "supplier_type": null,
    "supplier_contact_name": null,
    "supplier_contact_phone": null,
    "supplier_contact_email": null,
    "managed_as_panel_contractor": false,
    "panel_ranking": null,
    "supplier_street_address": null,
    "supplier_post_code": null,
    "supplier_post_name": null,
    "supplier_city": null,
    "supplier_state": null,
    "supplier_country": null,
    "supplier_ABN_number": null,
    "buyer_name": null,
    "buyer_contact_name": null,
    "buyer_contact_phone": null,
    "buyer_contact_email": null,
    "buyer_street_address": null,
    "buyer_post_code": null,
    "buyer_post_name": null,
    "buyer_city": null,
    "buyer_state": null,
    "buyer_country": null,
    "buyer_ABN_number": null,
    "contract_title": null,
    "contract_number": null,
    "contract_risk": null,
    "contract_status": null,
    "contract_type": null,
    "contract_manager": null,
    "contract_initiator": null,
    "contract_value": null,
    "administrator": null,
    "business_representative": null,
    "purchase_type": null,
    "contract_items": null,
    "contract_owner": null,
    "date_signed": null,
    "review_date": null,
    "price_review_date": null,
    "contract_expiry": null,
    "commencement_date": null,
    "contract_insurance_req": false,
    "ongoing": false,
    "initial_term": null,
    "contract_rates": null,
    "department": [],
    "business_unit": [],
    "divisions": [],
    "regions": [],
    "category1": [],
    "category2": [],
    "category3": [],
    "site": [],
}


const ccReducer = (state = INTITIAL_STATE, action) => {
    switch (action.type) {
        case cctypes.CREATE_CONTRACT:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state

    }
}

export default ccReducer