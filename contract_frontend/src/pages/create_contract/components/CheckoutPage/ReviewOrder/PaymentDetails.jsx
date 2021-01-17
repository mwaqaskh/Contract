import React from "react";
import moment from "moment";
import { Typography, Grid } from "@material-ui/core";
import useStyles from "./styles";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import AccountBoxRoundedIcon from "@material-ui/icons/AccountBoxRounded";
import AssignmentIcon from "@material-ui/icons/Assignment";
import CardTravelIcon from '@material-ui/icons/CardTravel';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';



function PaymentDetails(props) {
  const { formValues } = props;
  const classes = useStyles();
  const {
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
    contract_title,
    contract_risk,
    contract_type,
    contract_manager,
    contract_initiator,
    contract_value,
    administrator,
    business_representative,
    purchase_type,
    contract_items,
    contract_owner,
    date_signed,
    review_date,
    price_review_date,
    contract_expiry,
    commencement_date,
    contract_insurance_req,
    ongoing,
    initial_term,
    contract_rates,
    department,
    business_unit,
    divisions,
    regions,
    category1,
    category2,
    category3,
    site,
  } = formValues;
  return (
    <Grid container>
      <Grid item container spacing={6}>
        <Grid item container xs={12} sm={6} className={classes.reviewcard} >
          <Grid container alignItems="center" >
            <Grid item >
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
          <Grid item xs={12} sm={6} className={classes.reviewlabel}>
            Supplier Name :{" "}
            <span className={classes.reviewvalue}>{supplier_name}</span>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.reviewlabel}>
            Supplier Type :{" "}
            <span className={classes.reviewvalue}>{supplier_type}</span>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.reviewlabel}>
            Supplier Contact Name :{" "}
            <span className={classes.reviewvalue}>{supplier_contact_name}</span>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.reviewlabel}>
            Supplier Contact Phone :{" "}
            <span className={classes.reviewvalue}>
              {supplier_contact_phone}
            </span>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.reviewlabel}>
            Supplier Contact Email :{" "}
            <span className={classes.reviewvalue}>
              {supplier_contact_email}
            </span>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.reviewlabel}>
            Supplier ABN :{" "}
            <span className={classes.reviewvalue}>{supplier_ABN_number}</span>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.reviewlabel}>
            Managed As Panel Contractor :{" "}
            <span className={classes.reviewvalue}>
              {String(managed_as_panel_contractor)}
            </span>
          </Grid>

          <Grid item xs={12} sm={6} className={classes.reviewlabel}>
            Panel Ranking :
            <span className={classes.reviewvalue}>{panel_ranking}</span>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.reviewlabel}>
            Supplier Street Address :{" "}
            <span className={classes.reviewvalue}>
              {supplier_street_address}
            </span>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.reviewlabel}>
            Supplier City :{" "}
            <span className={classes.reviewvalue}>{supplier_city}</span>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.reviewlabel}>
            Supplier State :{" "}
            <span className={classes.reviewvalue}>{supplier_state}</span>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.reviewlabel}>
            Supplier PostCode :{" "}
            <span className={classes.reviewvalue}>{supplier_post_code}</span>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.reviewlabel}>
            Supplier Post Code Name :{" "}
            <span className={classes.reviewvalue}>{supplier_post_name}</span>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.reviewlabel}>
            Supplier Country :{" "}
            <span className={classes.reviewvalue}>{supplier_country}</span>
          </Grid>
        </Grid>

        <Grid item container xs={12} sm={6}>
          <Grid container alignItems="center" >
            <Grid item >
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
          <Grid item xs={12} sm={6} className={classes.reviewlabel}>
            Buyer Name :{" "}
            <span className={classes.reviewvalue}>{buyer_name}</span>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.reviewlabel}>
            Buyer Contact Name :{" "}
            <span className={classes.reviewvalue}>{buyer_contact_name}</span>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.reviewlabel}>
            Buyer Contact Phone :{" "}
            <span className={classes.reviewvalue}>{buyer_contact_phone}</span>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.reviewlabel}>
            Buyer Contact Email :{" "}
            <span className={classes.reviewvalue}>{buyer_contact_email}</span>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.reviewlabel}>
            Buyer Street Address :{" "}
            <span className={classes.reviewvalue}>{buyer_street_address}</span>
          </Grid>

          <Grid item xs={12} sm={6} className={classes.reviewlabel}>
            Buyer State :
            <span className={classes.reviewvalue}>{buyer_state}</span>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.reviewlabel}>
            Buyer ABN :{" "}
            <span className={classes.reviewvalue}>{buyer_ABN_number}</span>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.reviewlabel}>
            Buyer Post Code :{" "}
            <span className={classes.reviewvalue}>{buyer_post_code}</span>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.reviewlabel}>
            Buyer Post Code Name :{" "}
            <span className={classes.reviewvalue}>{buyer_post_name}</span>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.reviewlabel}>
            Buyer City :{" "}
            <span className={classes.reviewvalue}>{buyer_city}</span>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.reviewlabel}>
            Buyer Country :{" "}
            <span className={classes.reviewvalue}>{buyer_country}</span>
          </Grid>
        </Grid>

        <Grid item container xs={12} sm={6} className={classes.reviewcard1} >
          <Grid item xs={12} sm={12}>
            <Grid container alignItems="center" >
              <Grid item >
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
          </Grid>
          <Grid item xs={12} sm={6} className={classes.reviewlabel}>
            Contract Title :{" "}
            <span className={classes.reviewvalue}>{contract_title}</span>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.reviewlabel}>
            Contract Risk:{" "}
            <span className={classes.reviewvalue}>{contract_risk}</span>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.reviewlabel}>
            Contract Type :{" "}
            <span className={classes.reviewvalue}>{contract_type}</span>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.reviewlabel}>
            Contract Manager:{" "}
            <span className={classes.reviewvalue}>{contract_manager}</span>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.reviewlabel}>
            Contract Initiator :{" "}
            <span className={classes.reviewvalue}>{contract_initiator}</span>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.reviewlabel}>
            Contract Value:{" "}
            <span className={classes.reviewvalue}>{contract_value}</span>
          </Grid>
        </Grid>
      </Grid>

      <Grid item container xs={12} sm={6}>
        <Grid item xs={12} sm={12}>
          <Grid container alignItems="center" >
            <Grid item >
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
        </Grid>
        <Grid item xs={12} sm={6} className={classes.reviewlabel}>
          Administrator :{" "}
          <span className={classes.reviewvalue}>{administrator}</span>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.reviewlabel}>
          Business Representative :{" "}
          <span className={classes.reviewvalue}>{business_representative}</span>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.reviewlabel}>
          Contract Owner :{" "}
          <span className={classes.reviewvalue}>{contract_owner}</span>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.reviewlabel}>
          Date Signed :{" "}
          <span className={classes.reviewvalue}>{date_signed}</span>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.reviewlabel}>
          Review Date:{" "}
          <span className={classes.reviewvalue}>{review_date}</span>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.reviewlabel}>
          Price Review Date:{" "}
          <span className={classes.reviewvalue}>{price_review_date}</span>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.reviewlabel}>
          Contract Expiry:{" "}
          <span className={classes.reviewvalue}>{contract_expiry}</span>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.reviewlabel}>
          Commencement Date:{" "}
          <span className={classes.reviewvalue}>{commencement_date}</span>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.reviewlabel}>
          Insurance Required? :{" "}
          <span className={classes.reviewvalue}>
            {String(contract_insurance_req)}
          </span>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.reviewlabel}>
          Is Project Ongoing? :{" "}
          <span className={classes.reviewvalue}>{String(ongoing)}</span>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.reviewlabel}>
          Initial Term :{" "}
          <span className={classes.reviewvalue}>{initial_term}</span>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.reviewlabel}>
          Purchase Type :{" "}
          <span className={classes.reviewvalue}>{purchase_type}</span>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.reviewlabel}>
          Contract Items :{" "}
          <span className={classes.reviewvalue}>{contract_items}</span>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.reviewlabel}>
          Contract Rate:{" "}
          <span className={classes.reviewvalue}>{contract_rates}</span>
        </Grid>
      </Grid>

      <Grid item container xs={12} sm={6}>
        <Grid container alignItems="center" >
          <Grid item >
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
        <Grid item xs={12} sm={6} className={classes.reviewlabel}>
          Department : <span className={classes.reviewvalue}>{department}</span>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.reviewlabel}>
          Business Unit :{" "}
          <span className={classes.reviewvalue}>{business_unit}</span>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.reviewlabel}>
          Division : <span className={classes.reviewvalue}>{divisions}</span>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.reviewlabel}>
          Regions : <span className={classes.reviewvalue}>{regions}</span>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.reviewlabel}>
          Category Level 1:{" "}
          <span className={classes.reviewvalue}>{category1}</span>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.reviewlabel}>
          Category Level 2:{" "}
          <span className={classes.reviewvalue}>{category2}</span>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.reviewlabel}>
          Category Level 3:{" "}
          <span className={classes.reviewvalue}>{category3}</span>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.reviewlabel}>
          Site: <span className={classes.reviewvalue}>{site}</span>
        </Grid>
      </Grid>
    </Grid >
  );
}

export default PaymentDetails;
