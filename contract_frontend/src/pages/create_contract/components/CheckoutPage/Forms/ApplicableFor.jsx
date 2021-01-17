import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField, CheckboxField, SelectField, SelectMultiField } from '../../FormFields';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

import { department_data } from './StaticData'
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
        value: '111',
        label: 'United States'
    },
    {
        value: '222',
        label: 'Australia'
    },

];

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};


export default function BuyerForm(props) {
    const {
        formField: {
            department,
            business_unit,
            divisions,
            regions,
            category1,
            category2,
            category3,
            site,
        }
    } = props;
    return (
        <React.Fragment>
            <Grid container alignItems="center" style={{ marginBottom: "0.7em" }}>
                <Grid item style={{ marginRight: "0.5em" }}>
                    <SupervisedUserCircleIcon fontSize='large' />
                </Grid>
                <Grid item>
                    <Typography
                        variant="h6"
                        style={{ fontSize: "1.5em", fontWeight: "bolder" }}
                    >
                        Applicable For
          </Typography>
                </Grid>
            </Grid>
            <br />
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <SelectMultiField
                        name={department.name}
                        label={department.label}
                        data={department_data}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SelectMultiField
                        name={business_unit.name}
                        label={business_unit.label}
                        data={names}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SelectMultiField
                        name={divisions.name}
                        label={divisions.label}
                        data={names}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SelectMultiField
                        name={regions.name}
                        label={regions.label}
                        data={names}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SelectMultiField
                        name={category1.name}
                        label={category1.label}
                        data={names}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SelectMultiField
                        name={category2.name}
                        label={category2.label}
                        data={names}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SelectMultiField
                        name={category3.name}
                        label={category3.label}
                        data={names}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SelectMultiField
                        name={site.name}
                        label={site.label}
                        data={names}
                        fullWidth
                    />
                </Grid>


            </Grid>
        </React.Fragment>
    );
}
