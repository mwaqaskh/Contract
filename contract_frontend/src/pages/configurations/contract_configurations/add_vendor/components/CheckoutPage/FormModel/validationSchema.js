import * as Yup from "yup";
import moment from "moment";
import checkoutFormModel from "./checkoutFormModel";
const {
    formField: {
        abn,
        supp_name,
        contact_name,
        contact_email,
        telephone,
        mobile,
        buyer_annual_spend_apprx,
        primary_buyer_contact,
        address_line,
        address_suburb,
        address_state,
        address_postcode,
        company_email,
        website,
        comments,
        supplier_revenue_annual,
        company_size,
        supp_city,
        supplier_country,
    },
} = checkoutFormModel;

const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;

export default [
    Yup.object().shape({
        [abn.name]: Yup.string().required(`${abn.requiredErrorMsg}`),
        [supp_name.name]: Yup.string().required(
            `${supp_name.requiredErrorMsg}`
        ),
        [contact_name.name]: Yup.string().required(
            `${contact_name.requiredErrorMsg}`
        ),
        [contact_email.name]: Yup.string()
            .email()
            .required(`${contact_email.requiredErrorMsg}`),
        [telephone.name]: Yup.string().required(`${telephone.requiredErrorMsg}`),
        [mobile.name]: Yup.string().required(`${mobile.requiredErrorMsg}`),
        [buyer_annual_spend_apprx.name]: Yup.string().required(
            `${buyer_annual_spend_apprx.requiredErrorMsg}`
        ),
        [primary_buyer_contact.name]: Yup.string()
            .nullable()
            .required(`${primary_buyer_contact.requiredErrorMsg}`),
        [address_line.name]: Yup.string().required(
            `${address_line.requiredErrorMsg}`
        ),

        [address_suburb.name]: Yup.string().required(
            `${address_suburb.requiredErrorMsg}`
        ),
        [address_state.name]: Yup.string().required(
            `${address_state.requiredErrorMsg}`
        ),
        [address_postcode.name]: Yup.string().required(
            `${address_postcode.requiredErrorMsg}`
        ),
        [company_email.name]: Yup.string()
            .email()
            .required(`${company_email.requiredErrorMsg}`),
        [website.name]: Yup.string(),

        [supplier_revenue_annual.name]: Yup.string().required(
                `${supplier_revenue_annual.requiredErrorMsg}`
            ).matches(/^[0-9]+$/, "Must be only digits")
            .min(1, 'Must be atleast 1 digits'),
        [company_size.name]: Yup.string()
            .nullable()
            .required(`${company_size.requiredErrorMsg}`)
            .matches(/^[0-9]+$/, "Must be only digits")
            .min(1, 'Must be atleast 1 digits'),
        [supp_city.name]: Yup.string().required(
            `${supp_city.requiredErrorMsg}`
        ),
        [supplier_country.name]: Yup.string().required(
            `${supplier_country.requiredErrorMsg}`
        ),
    }),
];