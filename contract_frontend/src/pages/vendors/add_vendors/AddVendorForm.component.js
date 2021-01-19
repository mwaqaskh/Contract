import React from "react";
import {
    withStyles,
    Card,
    CardContent,
    CardActions,
    TextField,
    MenuItem,
    Button,
    Grid,
} from "@material-ui/core";
import validationsForm from "./addVendorValidationSchema";
import { withFormik } from "formik";
import * as yup from "yup";

const styles = () => ({
    card: {
        maxWidth: "100%",
        marginTop: 14,
    },
    container: {
        display: "Flex",
        justifyContent: "center",
    },
    actions: {
        float: "right",
    },
});


const form = (props) => {
    const {
        classes,
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
    } = props;

    return (
        <div className={classes.container}>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={4}>
                    <Grid item sm={6} xs={12}>
                        <Card className={classes.card}>
                            <CardContent>
                                <TextField
                                    id="abn"
                                    label="ABN"
                                    value={values.abn}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={touched.abn ? errors.abn : ""}
                                    error={touched.abn && Boolean(errors.abn)}
                                    margin="dense"
                                    variant="outlined"
                                    fullWidth
                                />
                                <TextField
                                    id="supplier_name"
                                    label="Supplier Name"
                                    value={values.supplier_name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={touched.supplier_name ? errors.supplier_name : ""}
                                    error={touched.supplier_name && Boolean(errors.supplier_name)}
                                    margin="dense"
                                    variant="outlined"
                                    fullWidth
                                />
                                <TextField
                                    id="contact_name"
                                    label="Contact Name"
                                    value={values.contact_name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={touched.contact_name ? errors.contact_name : ""}
                                    error={touched.contact_name && Boolean(errors.contact_name)}
                                    margin="dense"
                                    variant="outlined"
                                    fullWidth
                                />
                                <TextField
                                    id="contact_email"
                                    label="Contact Email"
                                    type="email"
                                    value={values.contact_email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={touched.contact_email ? errors.contact_email : ""}
                                    error={touched.contact_email && Boolean(errors.contact_email)}
                                    margin="dense"
                                    variant="outlined"
                                    fullWidth
                                />
                                <TextField
                                    id="telephone"
                                    label="Telephone"
                                    value={values.telephone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={touched.telephone ? errors.telephone : ""}
                                    error={touched.telephone && Boolean(errors.telephone)}
                                    margin="dense"
                                    variant="outlined"
                                    fullWidth
                                />
                                <TextField
                                    id="mobile"
                                    label="Mobile"
                                    value={values.mobile}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={touched.mobile ? errors.mobile : ""}
                                    error={touched.mobile && Boolean(errors.mobile)}
                                    margin="dense"
                                    variant="outlined"
                                    fullWidth
                                />
                                <TextField
                                    id="primary_buyer_contact"
                                    label="Primary Buyer Contact"
                                    value={values.primary_buyer_contact}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={
                                        touched.primary_buyer_contact
                                            ? errors.primary_buyer_contact
                                            : ""
                                    }
                                    error={
                                        touched.primary_buyer_contact &&
                                        Boolean(errors.primary_buyer_contact)
                                    }
                                    margin="dense"
                                    variant="outlined"
                                    fullWidth
                                />
                                <TextField
                                    id="buyer_annual_spend_apprx"
                                    label="Buyer Annual Spend Apprx"
                                    value={values.buyer_annual_spend_apprx}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={
                                        touched.buyer_annual_spend_apprx
                                            ? errors.buyer_annual_spend_apprx
                                            : ""
                                    }
                                    error={
                                        touched.buyer_annual_spend_apprx &&
                                        Boolean(errors.buyer_annual_spend_apprx)
                                    }
                                    margin="dense"
                                    variant="outlined"
                                    fullWidth
                                />
                            </CardContent>
                        </Card>
                    </Grid>


                    <Grid item sm={6} xs={12}>
                        <Card className={classes.card}>
                            <CardContent>
                                <TextField
                                    id="address_line"
                                    label="Address"
                                    value={values.address_line}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={touched.address_line ? errors.address_line : ""}
                                    error={touched.address_line && Boolean(errors.address_line)}
                                    margin="dense"
                                    variant="outlined"
                                    fullWidth
                                />
                                <TextField
                                    id="address_suburb"
                                    label="Address Suburb"
                                    value={values.address_suburb}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={
                                        touched.address_suburb ? errors.address_suburb : ""
                                    }
                                    error={
                                        touched.address_suburb && Boolean(errors.address_suburb)
                                    }
                                    margin="dense"
                                    variant="outlined"
                                    fullWidth
                                />
                                <TextField
                                    id="address_state"
                                    label="Address State"
                                    value={values.address_state}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={touched.address_state ? errors.address_state : ""}
                                    error={touched.address_state && Boolean(errors.address_state)}
                                    margin="dense"
                                    variant="outlined"
                                    fullWidth
                                />
                                <TextField
                                    id="address_postcode"
                                    label="Address Post Code"
                                    value={values.address_postcode}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={
                                        touched.address_postcode ? errors.address_postcode : ""
                                    }
                                    error={
                                        touched.address_postcode && Boolean(errors.address_postcode)
                                    }
                                    margin="dense"
                                    variant="outlined"
                                    fullWidth
                                />
                                <TextField
                                    id="company_email"
                                    label="Company Email"
                                    type="email"
                                    value={values.company_email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={touched.company_email ? errors.company_email : ""}
                                    error={touched.company_email && Boolean(errors.company_email)}
                                    margin="dense"
                                    variant="outlined"
                                    fullWidth
                                />
                                <TextField
                                    id="website"
                                    label="Website"
                                    value={values.website}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={touched.website ? errors.website : ""}
                                    error={touched.website && Boolean(errors.website)}
                                    margin="dense"
                                    variant="outlined"
                                    fullWidth
                                />
                                <TextField
                                    id="supplier_revenue_annual"
                                    label="Supplier Revenue Annual"
                                    value={values.supplier_revenue_annual}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={
                                        touched.supplier_revenue_annual
                                            ? errors.supplier_revenue_annual
                                            : ""
                                    }
                                    error={
                                        touched.supplier_revenue_annual &&
                                        Boolean(errors.supplier_revenue_annual)
                                    }
                                    margin="dense"
                                    variant="outlined"
                                    fullWidth
                                />

                                <TextField
                                    id="company_size"
                                    label="Company Size"
                                    value={values.company_size}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={touched.company_size ? errors.company_size : ""}
                                    error={touched.company_size && Boolean(errors.company_size)}
                                    margin="dense"
                                    variant="outlined"
                                    fullWidth
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid container align='center' style={{ marginTop: '1em' }}>
                        <Grid item sm={12}>
                            <Button type="submit" color="primary" variant='contained' disabled={isSubmitting}>
                                CREATE VENDOR
                        </Button>
                            <Button color="secondary" onClick={handleReset}>
                                CLEAR
                        </Button>

                        </Grid>
                    </Grid>

                </Grid>

            </form>
        </div>
    );
};

const Form = withFormik({
    mapPropsToValues: ({
        abn,
        supplier_name,
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
    }) => {
        return {
            abn: abn || "",
            supplier_name: supplier_name || "",
            contact_name: contact_name || "",
            contact_email: contact_email || "",
            telephone: telephone || "",
            mobile: mobile || "",
            buyer_annual_spend_apprx: buyer_annual_spend_apprx || "",
            primary_buyer_contact: primary_buyer_contact || "",
            address_line: address_line || "",
            address_suburb: address_suburb || "",
            address_state: address_state || "",
            address_postcode: address_postcode || "",
            company_email: company_email || "",
            website: website || "",
            comments: comments || "",
            supplier_revenue_annual: supplier_revenue_annual || "",
            company_size: company_size || "",
        };
    },

    validationSchema: yup.object().shape(validationsForm),

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            // submit to the server
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },
})(form);

export default withStyles(styles)(Form);