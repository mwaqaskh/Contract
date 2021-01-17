import React from "react";
import { useFormikContext } from "formik";
import { Typography, Grid } from "@material-ui/core";
import ProductDetails from "./ProductDetails";
import ShippingDetails from "./ShippingDetails";
import PaymentDetails from "./PaymentDetails";
import MenuBookIcon from "@material-ui/icons/MenuBook";

export default function ReviewOrder() {
  const { values: formValues } = useFormikContext();
  return (
    <React.Fragment>
      <Grid container alignItems="center" style={{ marginBottom: "2.4em", marginTop: "0.4em" }}>
        <Grid item style={{ marginRight: "0.5em" }}>
          <MenuBookIcon fontSize='large' />
        </Grid>
        <Grid item>
          <Typography
            variant="h3"
            style={{ fontWeight: "bolder" }}
          >
            Contract Summary
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <PaymentDetails formValues={formValues} />
      </Grid>
    </React.Fragment>
  );
}
