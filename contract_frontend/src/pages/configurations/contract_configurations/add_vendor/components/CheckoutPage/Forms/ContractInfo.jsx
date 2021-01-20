import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import {
    InputField,
    CheckboxField,
    SelectField,
    SelectUserField,
} from "../../FormFields";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { useSelector } from "react-redux";
import { selectUserList } from "../../../../../../redux/user/user.selector";


export default function BuyerForm(props) {
    const user_list = useSelector((state) => selectUserList(state));

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
    } = props;
    return (
        <React.Fragment>
            <Grid container alignItems="center" style={{ marginBottom: "0.7em" }}>
                <Grid item style={{ marginRight: "0.5em" }}>
                    <AssignmentIcon fontSize="large" />
                </Grid>
                <Grid item>
                    <Typography
                        variant="h6"
                        style={{ fontSize: "1.5em", fontWeight: "bolder" }}
                    >
                        Supplier Basic Information
          </Typography>
                </Grid>
            </Grid>
            <br />
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <InputField
                        variant="outlined"
                        name={abn.name}
                        label={abn.label}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField
                        variant="outlined"
                        name={supp_name.name}
                        label={supp_name.label}
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <InputField
                        variant="outlined"
                        name={buyer_annual_spend_apprx.name}
                        label={buyer_annual_spend_apprx.label}
                        fullWidth
                    />
                </Grid>



                <Grid item xs={12} sm={6}>
                    <InputField
                        variant="outlined"
                        name={supplier_revenue_annual.name}
                        label={supplier_revenue_annual.label}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField
                        variant="outlined"
                        name={company_size.name}
                        label={company_size.label}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField
                        variant="outlined"
                        name={company_email.name}
                        label={company_email.label}
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <InputField
                        variant="outlined"
                        name={telephone.name}
                        label={telephone.label}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SelectUserField
                        name={primary_buyer_contact.name}
                        label={primary_buyer_contact.label}
                        data={user_list}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField
                        variant="outlined"
                        name={website.name}
                        label={website.label}
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12} sm={12}>
                    <Typography variant={'h4'}>Supplier Contact Info</Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <InputField
                        variant="outlined"
                        name={contact_name.name}
                        label={contact_name.label}
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <InputField
                        variant="outlined"
                        name={contact_email.name}
                        label={contact_email.label}
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <InputField
                        variant="outlined"
                        name={mobile.name}
                        label={mobile.label}
                        fullWidth
                    />
                </Grid>


                <Grid item xs={12} sm={12}>
                    <Typography variant={'h4'}>Supplier Address Info</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField
                        variant="outlined"
                        name={address_line.name}
                        label={address_line.label}
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <InputField
                        variant="outlined"
                        name={address_suburb.name}
                        label={address_suburb.label}
                        fullWidth
                    />
                </Grid>



                <Grid item xs={12} sm={6}>
                    <InputField
                        variant="outlined"
                        name={address_postcode.name}
                        label={address_postcode.label}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField
                        variant="outlined"
                        name={address_state.name}
                        label={address_state.label}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField
                        variant="outlined"
                        name={supp_city.name}
                        label={supp_city.label}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField
                        variant="outlined"
                        name={supplier_country.name}
                        label={supplier_country.label}
                        fullWidth
                    />
                </Grid>

            </Grid>
        </React.Fragment>
    );
}
