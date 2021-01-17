import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField, CheckboxField, SelectField, SelectUserField } from '../../FormFields';
import AssignmentIcon from "@material-ui/icons/Assignment";
import { useSelector } from 'react-redux';
import { selectUserList } from '../../../../../redux/user/user.selector'

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



const contract_risk_opt = [
    {
        value: undefined,
        label: 'None'
    },
    {
        value: 'low',
        label: 'Low'
    },
    {
        value: 'medium',
        label: 'Medium'
    },
    {
        value: 'high',
        label: 'High'
    },
];
export default function BuyerForm(props) {

    const user_list = useSelector(state => selectUserList(state))

    const {
        formField: {
            contract_title,
            contract_risk,
            contract_type,
            contract_manager,
            contract_initiator,
            contract_value,
        }
    } = props;
    return (
        <React.Fragment>
            <Grid container alignItems="center" style={{ marginBottom: "0.7em" }}>
                <Grid item style={{ marginRight: "0.5em" }}>
                    <AssignmentIcon fontSize='large' />
                </Grid>
                <Grid item>
                    <Typography
                        variant="h6"
                        style={{ fontSize: "1.5em", fontWeight: "bolder" }}
                    >
                        Contract Information
          </Typography>
                </Grid>
            </Grid>
            <br />
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <InputField variant="outlined" name={contract_title.name} label={contract_title.label} fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField variant="outlined" name={contract_type.name} label={contract_type.label} fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField variant="outlined" name={contract_value.name} label={contract_value.label} fullWidth />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <SelectField
                        name={contract_risk.name}
                        label={contract_risk.label}
                        data={contract_risk_opt}
                        fullWidth

                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SelectUserField
                        name={contract_manager.name}
                        label={contract_manager.label}
                        data={user_list}
                        fullWidth

                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SelectUserField
                        name={contract_initiator.name}
                        label={contract_initiator.label}
                        data={user_list}
                        fullWidth

                    />
                </Grid>

            </Grid>
        </React.Fragment>
    );
}
