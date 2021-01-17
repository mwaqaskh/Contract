import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField, CheckboxField, SelectField, DatePickerField, SelectUserField, CheckboxField_cir, CheckboxField_ong } from '../../FormFields';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import { useSelector } from 'react-redux';
import { selectUserList } from '../../../../../redux/user/user.selector'

import styled from "styled-components/macro";

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

const purchase_type_list = [
    {
        value: 'Purchase Order',
        label: 'Purchase Order'
    },
    {
        value: 'Via Travel Manager USA',
        label: 'Via Travel Manager USA'
    },
    {
        value: 'SSI',
        label: 'SSI'
    },
    {
        value: 'Credit Card',
        label: 'Credit Card'
    },
    {
        value: 'Purchase Order Bulk',
        label: 'Purchase Order Bulk'
    },
    {
        value: 'Fuel Card',
        label: 'Fuel Card'
    },
    ,
    {
        value: 'P Card',
        label: 'P Card'
    }
];

const countries = [
    {
        value: undefined,
        label: 'None'
    },
    {
        value: '111',
        label: 'United States'
    },
    {
        value: '222',
        label: 'Italy'
    },
    {
        value: '333',
        label: 'Vietnam'
    }
];

export default function BuyerForm(props) {
    const user_list = useSelector(state => selectUserList(state))
    const {
        formField: {
            administrator,
            business_representative,
            purchase_type,
            contract_items,
            contract_owner,
            initial_term,
            contract_rates,
            contract_insurance_req,
            ongoing,
            contract_expiry,
            commencement_date,
            review_date,
            price_review_date,

        }
    } = props;
    return (
        <React.Fragment>
            <Grid container alignItems="center" style={{ marginBottom: "0.7em" }}>
                <Grid item style={{ marginRight: "0.5em" }}>
                    <CardTravelIcon fontSize='large' />
                </Grid>
                <Grid item>
                    <Typography
                        variant="h6"
                        style={{ fontSize: "1.5em", fontWeight: "bolder" }}
                    >
                        Contract Details
          </Typography>
                </Grid>
            </Grid>
            <br />
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <InputField variant="outlined" name={contract_items.name} label={contract_items.label} fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField variant="outlined" name={initial_term.name} label={initial_term.label} fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField variant="outlined" name={contract_rates.name} label={contract_rates.label} fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <CheckboxField_cir
                        name={contract_insurance_req.name}
                        label={contract_insurance_req.label}
                    />
                </Grid>
                <Grid item xs={12}>
                    <CheckboxField_ong
                        name={ongoing.name}
                        label={ongoing.label}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SelectUserField
                        name={administrator.name}
                        label={administrator.label}
                        data={user_list}
                        fullWidth

                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SelectUserField
                        name={business_representative.name}
                        label={business_representative.label}
                        data={user_list}
                        fullWidth

                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SelectField
                        name={purchase_type.name}
                        label={purchase_type.label}
                        data={purchase_type_list}
                        fullWidth

                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SelectUserField
                        name={contract_owner.name}
                        label={contract_owner.label}
                        data={user_list}
                        fullWidth

                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <DatePickerField
                        name={contract_expiry.name}
                        label={contract_expiry.label}
                        format="MM/dd/yyyy"

                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <DatePickerField
                        name={commencement_date.name}
                        label={commencement_date.label}
                        format="MM/dd/yyyy"
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <DatePickerField
                        name={review_date.name}
                        label={review_date.label}
                        format="MM/dd/yyyy"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <DatePickerField
                        name={price_review_date.name}
                        label={price_review_date.label}
                        format="MM/dd/yyyy"
                        fullWidth
                    />
                </Grid>

            </Grid>
        </React.Fragment>
    );
}
