import * as yup from "yup";

const validationsForm = {
    abn: yup.string().required("Required"),
    supplier_name: yup.string().required("Required"),
    contact_name: yup.string().required("Required"),
    contact_email: yup
        .string()
        .email("Enter a valid email")
        .required("Email is required"),
    telephone: yup.string().required("Telephone is required"),
    mobile: yup.string().required("Mobile number is required"),

    primary_buyer_contact: yup.string().required("Required"),

    address_line: yup.string().required("Address is required"),
    address_suburb: yup.string().required("Required"),
    address_state: yup.string().required("Required"),
    address_postcode: yup.string().required("Required"),
    company_email: yup
        .string()
        .email("Enter a valid email")
        .required("Email is required"),


};

export default validationsForm;