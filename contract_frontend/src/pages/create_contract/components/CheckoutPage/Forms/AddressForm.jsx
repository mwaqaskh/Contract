import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField, CheckboxField, SelectField, CheckboxField_smpc } from '../../FormFields';
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";


const cities = [
  {
    value: undefined,
    label: 'None'
  },
  {
    value: 'Melbourne',
    label: 'Melbourne'
  },
  {
    value: 'Sydney',
    label: 'Sydney'
  },
  {
    value: 'Perth',
    label: 'Perth'
  },
  {
    value: 'Brisbane',
    label: 'Brisbane'
  },
  {
    value: 'Gold Coast',
    label: 'Gold Coast'
  }
];

const states = [
  {
    value: undefined,
    label: 'None'
  },
  {
    value: 'Victoria',
    label: 'Victoria'
  },
  {
    value: 'NSW',
    label: 'NSW'
  },
  {
    value: 'South Australia',
    label: 'South Australia'
  },
  {
    value: 'Northern Territory',
    label: 'Northern Territory'
  }
  ,
  {
    value: 'Queensland',
    label: 'Queensland'
  },
  {
    value: 'Western Australia',
    label: 'Western Australia'
  },
  {
    value: 'Tasmania',
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



export default function AddressForm(props) {

  const {
    formField: {
      supplier_name,
      supplier_type,
      supplier_contact_name,
      supplier_contact_phone,
      supplier_contact_email,
      supplier_ABN_number,
      panel_ranking,
      managed_as_panel_contractor,
      supplier_street_address,
      supplier_city,
      supplier_state,
      supplier_post_code,
      supplier_post_name,
      supplier_country,

    }
  } = props;
  return (
    <React.Fragment>
      <Grid container alignItems="center" style={{ marginBottom: "0.7em" }}>
        <Grid item style={{ marginRight: "0.5em" }}>
          <AccountCircleRoundedIcon fontSize='large' />
        </Grid>
        <Grid item>
          <Typography
            variant="h6"
            style={{ fontSize: "1.5em", fontWeight: "bolder" }}
          >
            Supplier Information
          </Typography>
        </Grid>
      </Grid>
      <br />

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField variant="outlined" name={supplier_name.name} label={supplier_name.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField variant="outlined" name={supplier_type.name} label={supplier_type.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField variant="outlined" name={supplier_contact_name.name} label={supplier_contact_name.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField variant="outlined" name={supplier_contact_phone.name} label={supplier_contact_phone.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField variant="outlined" name={supplier_contact_email.name} label={supplier_contact_email.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField variant="outlined" name={supplier_ABN_number.name} label={supplier_ABN_number.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField variant="outlined" name={panel_ranking.name} label={panel_ranking.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <CheckboxField_smpc
            name={managed_as_panel_contractor.name}
            label={managed_as_panel_contractor.label}
          />
        </Grid>
        <Grid item xs={12}>
          <InputField variant="outlined" name={supplier_street_address.name} label={supplier_street_address.label} fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <SelectField
            name={supplier_city.name}
            label={supplier_city.label}
            data={cities}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={supplier_state.name}
            label={supplier_state.label}
            data={states}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField variant="outlined" name={supplier_post_code.name} label={supplier_post_code.label} fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <InputField variant="outlined" name={supplier_post_name.name} label={supplier_post_name.label} fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <SelectField
            name={supplier_country.name}
            label={supplier_country.label}
            data={countries}
            fullWidth
          />
        </Grid>

      </Grid>
    </React.Fragment>
  );
}
