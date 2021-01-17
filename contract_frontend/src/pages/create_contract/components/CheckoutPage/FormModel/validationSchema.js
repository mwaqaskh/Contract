import * as Yup from 'yup';
import moment from 'moment';
import checkoutFormModel from './checkoutFormModel';
const {
    formField: {
        supplier_name,
        supplier_type,
        supplier_contact_name,
        supplier_contact_phone,
        supplier_contact_email,
        supplier_ABN_number,
        supplier_street_address,
        supplier_city,
        supplier_state,
        supplier_post_code,
        supplier_country,
        buyer_name,
        buyer_contact_name,
        buyer_contact_phone,
        buyer_contact_email,
        buyer_street_address,
        buyer_post_code,
        buyer_post_name,
        buyer_city,
        buyer_state,
        buyer_country,
        buyer_ABN_number,
        nameOnCard,
        cardNumber,
        expiryDate,
        cvv,
        contract_title,
        contract_risk,
        contract_type,
        contract_manager,
        contract_initiator,
        contract_value,
        administrator,
        business_representative,
        purchase_type,
        contract_items,
        contract_owner,
        date_signed,
        review_date,
        price_review_date,
        contract_expiry,
        commencement_date,
        contract_insurance_req,
        ongoing,
        initial_term,
        contract_rates,
        department,
        business_unit,
        divisions,
        regions,
        category1,
        category2,
        category3,
        site,
    }
} = checkoutFormModel;

const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;

export default [
    Yup.object().shape({
        [supplier_name.name]: Yup.string().required(`${supplier_name.requiredErrorMsg}`),
        [supplier_type.name]: Yup.string().required(`${supplier_type.requiredErrorMsg}`),
        [supplier_contact_name.name]: Yup.string().required(`${supplier_contact_name.requiredErrorMsg}`),
        [supplier_contact_phone.name]: Yup.string().required(`${supplier_contact_phone.requiredErrorMsg}`),
        [supplier_contact_email.name]: Yup.string().email().required(`${supplier_contact_email.requiredErrorMsg}`),
        [supplier_ABN_number.name]: Yup.string().required(`${supplier_ABN_number.requiredErrorMsg}`),
        [supplier_street_address.name]: Yup.string().required(`${supplier_street_address.requiredErrorMsg}`),
        [supplier_city.name]: Yup.string()
            .nullable()
            .required(`${supplier_city.requiredErrorMsg}`),
        [supplier_state.name]: Yup.string()
            .nullable()
            .required(`${supplier_state.requiredErrorMsg}`),
        [supplier_post_code.name]: Yup.string()
            .required(`${supplier_post_code.requiredErrorMsg}`),

        [supplier_country.name]: Yup.string()
            .nullable()
            .required(`${supplier_country.requiredErrorMsg}`)

    }),
    Yup.object().shape({
        [buyer_name.name]: Yup.string().required(`${buyer_name.requiredErrorMsg}`),
        [buyer_contact_name.name]: Yup.string().required(`${buyer_contact_name.requiredErrorMsg}`),
        [buyer_contact_phone.name]: Yup.string().required(`${buyer_contact_phone.requiredErrorMsg}`),
        [buyer_contact_email.name]: Yup.string().email().required(`${buyer_contact_email.requiredErrorMsg}`),
        [buyer_ABN_number.name]: Yup.string().required(`${buyer_ABN_number.requiredErrorMsg}`),
        [buyer_street_address.name]: Yup.string().required(`${buyer_street_address.requiredErrorMsg}`),
        [buyer_city.name]: Yup.string()
            .nullable()
            .required(`${buyer_city.requiredErrorMsg}`),

        [buyer_state.name]: Yup.string()
            .nullable()
            .required(`${buyer_state.requiredErrorMsg}`),
        [buyer_post_name.name]: Yup.string()
            .required(`${buyer_post_name.requiredErrorMsg}`),

        [buyer_country.name]: Yup.string()
            .nullable()
            .required(`${buyer_country.requiredErrorMsg}`)
    }),
    Yup.object().shape({
        [contract_title.name]: Yup.string().required(`${contract_title.requiredErrorMsg}`),
        [contract_type.name]: Yup.string().required(`${contract_type.requiredErrorMsg}`),


        [contract_value.name]: Yup.string().required()
            .matches(/^[0-9]+$/, "Must be only digits")
            .min(3, 'Must be atleast 3 digits'),

        [contract_risk.name]: Yup.string()
            .nullable()
            .required(`${contract_risk.requiredErrorMsg}`),
        [contract_manager.name]: Yup.string()
            .nullable()
            .required(`${contract_manager.requiredErrorMsg}`),
        [contract_initiator.name]: Yup.string()
            .nullable()
            .required(`${contract_initiator.requiredErrorMsg}`),
    }),

    Yup.object().shape({
        [contract_items.name]: Yup.string().required(`${contract_items.requiredErrorMsg}`),
        [initial_term.name]: Yup.string().required(`${initial_term.requiredErrorMsg}`),
        [contract_rates.name]: Yup.string().required(`${contract_rates.requiredErrorMsg}`),
        [contract_items.name]: Yup.string()
            .nullable()
            .required(`${contract_items.requiredErrorMsg}`),
        [contract_owner.name]: Yup.string()
            .nullable()
            .required(`${contract_owner.requiredErrorMsg}`),
        [contract_expiry.name]: Yup.string()

            .required(`${contract_expiry.requiredErrorMsg}`),
        [commencement_date.name]: Yup.string()
            .required(`${contract_expiry.requiredErrorMsg}`),
        [administrator.name]: Yup.string()
            .nullable()
            .required(`${administrator.requiredErrorMsg}`),
        [business_representative.name]: Yup.string()
            .nullable()
            .required(`${business_representative.requiredErrorMsg}`),
        [purchase_type.name]: Yup.string()
            .nullable()
            .required(`${purchase_type.requiredErrorMsg}`),
    }),

    Yup.object().shape({
        [department.name]: Yup.array().min(1)
            .required(`${department.requiredErrorMsg}`),
        [business_unit.name]: Yup.array().min(1)
            .required(`${business_unit.requiredErrorMsg}`),
        [divisions.name]: Yup.array().min(1)
            .required(`${divisions.requiredErrorMsg}`),
        [regions.name]: Yup.array().min(1)
            .required(`${regions.requiredErrorMsg}`),
        [category1.name]: Yup.array().min(1)
            .required(`${category1.requiredErrorMsg}`),
        [category2.name]: Yup.array().min(1)
            .required(`${category2.requiredErrorMsg}`),
        [category3.name]: Yup.array().min(1)
            .required(`${category3.requiredErrorMsg}`),
        [site.name]: Yup.array().min(1)
            .required(`${site.requiredErrorMsg}`),

    })
];