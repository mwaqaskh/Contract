export default {
    formId: 'checkoutForm',
    formField: {
        supplier_name: {
            name: 'supplier_name',
            label: 'Supplier Name*',
            requiredErrorMsg: 'Supplier Name is required'
        },
        supplier_type: {
            name: 'supplier_type',
            label: 'Supplier Type*',
            requiredErrorMsg: 'Supplier Type is required'
        },
        supplier_contact_name: {
            name: 'supplier_contact_name',
            label: 'Supplier Contact Name*',
            requiredErrorMsg: 'Supplier Contact Name is required'
        },
        supplier_contact_phone: {
            name: 'supplier_contact_phone',
            label: 'Supplier Contact Phone No*',
            requiredErrorMsg: 'Supplier Contact Phone is required'
        },
        supplier_contact_email: {
            name: 'supplier_contact_email',
            label: 'Supplier Contact Email*',
            requiredErrorMsg: 'Supplier Contact Email is required'
        },
        supplier_ABN_number: {
            name: 'supplier_ABN_number',
            label: 'Supplier ABN*',
            requiredErrorMsg: 'Supplier ABN is required'
        },
        panel_ranking: {
            name: 'panel_ranking',
            label: 'Panel Ranking',
        },
        managed_as_panel_contractor: {
            name: 'managed_as_panel_contractor',
            label: 'Managed As Panel Contractor'
        },
        supplier_street_address: {
            name: 'supplier_street_address',
            label: 'Supplier Street Address *',
            requiredErrorMsg: 'Supplier Street Address is required'
        },
        supplier_city: {
            name: 'supplier_city',
            label: 'Supplier City*',
            requiredErrorMsg: 'Supplier City is required'
        },
        supplier_state: {
            name: 'supplier_state',
            label: 'State/Province/Region',
            requiredErrorMsg: 'Supplier State is required'
        },
        supplier_post_code: {
            name: 'supplier_post_code',
            label: 'Supplier Post Code*',
            requiredErrorMsg: 'Supplier Post Code is required',
            invalidErrorMsg: 'Supplier Post Code is not valid (e.g. 70000)'
        },
        supplier_post_name: {
            name: 'supplier_post_name',
            label: 'Supplier Post Code Name',
        },
        supplier_country: {
            name: 'supplier_country',
            label: 'Supplier Country*',
            requiredErrorMsg: 'Supplier Country is required'
        },
        buyer_name: {
            name: 'buyer_name',
            label: 'Buyer Name*',
            requiredErrorMsg: 'Buyer Name is required'
        },
        buyer_contact_name: {
            name: 'buyer_contact_name',
            label: 'Buyer Contact Name*',
            requiredErrorMsg: 'Buyer Contact Name is required'
        },
        buyer_contact_phone: {
            name: 'buyer_contact_phone',
            label: 'Buyer Contact Phone No*',
            requiredErrorMsg: 'Buyer Contact Phone is required'
        },
        buyer_contact_email: {
            name: 'buyer_contact_email',
            label: 'Buyer Contact Email*',
            requiredErrorMsg: 'Buyer Contact Email is required'
        },
        buyer_ABN_number: {
            name: 'buyer_ABN_number',
            label: 'Buyer ABN*',
            requiredErrorMsg: 'Buyer ABN is required'
        },

        buyer_street_address: {
            name: 'buyer_street_address',
            label: 'Buyer Street Address *',
            requiredErrorMsg: 'Buyer Street Address is required'
        },
        buyer_city: {
            name: 'buyer_city',
            label: 'Buyer City*',
            requiredErrorMsg: 'Buyer City is required'
        },
        buyer_state: {
            name: 'buyer_state',
            label: 'State/Province/Region',
            requiredErrorMsg: 'Buyer State is required'
        },
        buyer_post_code: {
            name: 'buyer_post_code',
            label: 'Buyer Post Code*',
            requiredErrorMsg: 'Buyer Post Code is required',
            invalidErrorMsg: 'Buyer Post Code is not valid (e.g. 70000)'
        },
        buyer_post_name: {
            name: 'buyer_post_name',
            label: 'Buyer Post Code Name',
        },
        buyer_country: {
            name: 'buyer_country',
            label: 'Buyer Country*',
            requiredErrorMsg: 'Buyer Country is required'
        },
        //Contract Info & Basic detail & Terms

        contract_title: {
            name: 'contract_title',
            label: 'Contract Title*',
            requiredErrorMsg: 'Contract Title is required'
        },
        contract_title: {
            name: 'contract_title',
            label: 'Contract Title*',
            requiredErrorMsg: 'Contract Title is required'
        },
        contract_risk: {
            name: 'contract_risk',
            label: 'Contract Risk*',
            requiredErrorMsg: 'Contract Risk is required'
        },
        contract_type: {
            name: 'contract_type',
            label: 'Contract Type*',
            requiredErrorMsg: 'Contract Type is required'
        },
        contract_manager: {
            name: 'contract_manager',
            label: 'Contract Manager*',
            requiredErrorMsg: 'Contract Manager is required'
        },
        contract_initiator: {
            name: 'contract_initiator',
            label: 'Contract Initiator*',
            requiredErrorMsg: 'Contract Initiator is required'
        },
        contract_value: {
            name: 'contract_value',
            label: 'Contract Value*',
            requiredErrorMsg: 'Contract Value is required'
        },
        administrator: {
            name: 'administrator',
            label: 'Administrator*',
            requiredErrorMsg: 'Administrator is required'
        },
        business_representative: {
            name: 'business_representative',
            label: 'Business Representative*',
            requiredErrorMsg: 'Business Representative is required'
        },
        purchase_type: {
            name: 'purchase_type',
            label: 'Purchase Type*',
            requiredErrorMsg: 'Purchase Type is required'
        },
        contract_items: {
            name: 'contract_items',
            label: 'Contract Items*',
            requiredErrorMsg: 'Contract Items is required'
        },
        contract_owner: {
            name: 'contract_owner',
            label: 'Contract Owner*',
            requiredErrorMsg: 'Contract Owner is required'
        },
        date_signed: {
            name: 'date_signed',
            label: 'Date Signed*',
            requiredErrorMsg: 'Date Signed is required'
        },
        review_date: {
            name: 'review_date',
            label: 'Review Date*',
            requiredErrorMsg: 'Review Date is required'
        },
        price_review_date: {
            name: 'price_review_date',
            label: 'Price Review Date*',
            requiredErrorMsg: 'Price Review Date is required'
        },
        contract_expiry: {
            name: 'contract_expiry',
            label: 'Contract Expiry Date',
            requiredErrorMsg: 'Contract Expiry Date is required'
        },
        commencement_date: {
            name: 'commencement_date',
            label: 'Commencement Date*',
            requiredErrorMsg: 'Commencement Date is required'
        },
        contract_insurance_req: {
            name: 'contract_insurance_req',
            label: 'Contract Insurance Required*',
            requiredErrorMsg: 'Contract Insurance Info is required'
        },
        ongoing: {
            name: 'ongoing',
            label: 'Contract is Ongoing*',
            requiredErrorMsg: 'Ongoing Info required'
        },
        initial_term: {
            name: 'initial_term',
            label: 'Initial Term*',
            requiredErrorMsg: 'Initial Term is required'
        },
        contract_rates: {
            name: 'contract_rates',
            label: 'Contract Rates*',
            requiredErrorMsg: 'Contract Rates is required'
        },
        department: {
            name: 'department',
            label: 'Department*',
            requiredErrorMsg: 'Department is required'
        },
        business_unit: {
            name: 'business_unit',
            label: 'Business Unit*',
            requiredErrorMsg: 'Business Unit is required'
        },
        divisions: {
            name: 'divisions',
            label: 'Division*',
            requiredErrorMsg: 'Division is required'
        },
        regions: {
            name: 'regions',
            label: 'Regions*',
            requiredErrorMsg: 'Buyer Country is required'
        },
        category1: {
            name: 'category1',
            label: 'Category Level 1*',
            requiredErrorMsg: 'Category Level 1 is required'
        },
        category2: {
            name: 'category2',
            label: 'Category Level 2*',
            requiredErrorMsg: 'Category Level 2 is required'
        },
        category3: {
            name: 'category3',
            label: 'Category Level 3*',
            requiredErrorMsg: 'Category Level 3 is required'
        },
        site: {
            name: 'site',
            label: 'Site*',
            requiredErrorMsg: 'Site is required'
        },
        useAddressForPaymentDetails: {
            name: 'useAddressForPaymentDetails',
            label: 'Use this address for payment details'
        },
        nameOnCard: {
            name: 'nameOnCard',
            label: 'Name on card*',
            requiredErrorMsg: 'Name on card is required'
        },
        cardNumber: {
            name: 'cardNumber',
            label: 'Card number*',
            requiredErrorMsg: 'Card number is required',
            invalidErrorMsg: 'Card number is not valid (e.g. 4111111111111)'
        },
        expiryDate: {
            name: 'expiryDate',
            label: 'Expiry date*',
            requiredErrorMsg: 'Expiry date is required',
            invalidErrorMsg: 'Expiry date is not valid'
        },
        cvv: {
            name: 'cvv',
            label: 'CVV*',
            requiredErrorMsg: 'CVV is required',
            invalidErrorMsg: 'CVV is invalid (e.g. 357)'
        }
    }
};