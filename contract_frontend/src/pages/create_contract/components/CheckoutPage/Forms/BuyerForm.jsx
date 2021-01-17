import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField, CheckboxField, SelectField } from '../../FormFields';
import AccountBoxRoundedIcon from "@material-ui/icons/AccountBoxRounded";

const cities = [
    {
        value: undefined,
        label: 'None'
    },
    {
        value: '1',
        label: 'Melbourne'
    },
    {
        value: '2',
        label: 'Sydney'
    },
    {
        value: '3',
        label: 'Perth'
    },
    {
        value: '3',
        label: 'Brisbane'
    },
    {
        value: '3',
        label: 'Gold Coast'
    }
];

const states = [
    {
        value: undefined,
        label: 'None'
    },
    {
        value: '11',
        label: 'Victoria'
    },
    {
        value: '22',
        label: 'NSW'
    },
    {
        value: '33',
        label: 'South Australia'
    },
    {
        value: '33',
        label: 'Northern Territory'
    }
    ,
    {
        value: '33',
        label: 'Queensland'
    },
    {
        value: '33',
        label: 'Western Australia'
    },
    {
        value: '33',
        label: 'Tasmania'
    }
];

const countries = [
    {
        value: null,
        label: 'None'
    },
    {
        value: 'United States',
        label: 'United States'
    },
    {
        value: 'Australia',
        label: 'Australia'
    },

];

export default function BuyerForm(props) {
    const {
        formField: {
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

        }
    } = props;
    return (
        <React.Fragment>
            <Grid container alignItems="center" style={{ marginBottom: "0.7em" }}>
                <Grid item style={{ marginRight: "0.5em" }}>
                    <AccountBoxRoundedIcon fontSize='large' />
                </Grid>
                <Grid item>
                    <Typography
                        variant="h6"
                        style={{ fontSize: "1.5em", fontWeight: "bolder" }}
                    >
                        Buyer Information
          </Typography>
                </Grid>
            </Grid>
            <br />
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <InputField variant="outlined" name={buyer_name.name} label={buyer_name.label} fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField variant="outlined" name={buyer_contact_name.name} label={buyer_contact_name.label} fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField variant="outlined" name={buyer_contact_phone.name} label={buyer_contact_phone.label} fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField variant="outlined" name={buyer_contact_email.name} label={buyer_contact_email.label} fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField variant="outlined" name={buyer_ABN_number.name} label={buyer_ABN_number.label} fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <InputField variant="outlined" name={buyer_street_address.name} label={buyer_street_address.label} fullWidth />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <SelectField
                        name={buyer_city.name}
                        label={buyer_city.label}
                        data={cities}
                        fullWidth

                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SelectField
                        name={buyer_state.name}
                        label={buyer_state.label}
                        data={states}
                        fullWidth

                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField variant="outlined" name={buyer_post_code.name} label={buyer_post_code.label} fullWidth />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <InputField variant="outlined" name={buyer_post_name.name} label={buyer_post_name.label} fullWidth />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <SelectField
                        name={buyer_country.name}
                        label={buyer_country.label}
                        data={countries}
                        fullWidth

                    />
                </Grid>

            </Grid>
        </React.Fragment>
    );
}
