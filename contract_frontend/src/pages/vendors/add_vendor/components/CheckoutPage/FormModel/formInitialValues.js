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



export default {
    [abn.name]: "",
    [supp_name.name]: "",
    [contact_name.name]: "",
    [contact_email.name]: "",
    [telephone.name]: "",
    [mobile.name]: "",
    [buyer_annual_spend_apprx.name]: "",
    [primary_buyer_contact.name]: "",
    [address_line.name]: "",
    [address_suburb.name]: "",
    [address_state.name]: "",
    [address_postcode.name]: "",
    [company_email.name]: "",
    [website.name]: "",
    [comments.name]: "",
    [supplier_revenue_annual.name]: '',
    [company_size.name]: '',
    [supp_city.name]: '',
    [supplier_country.name]: '',
};