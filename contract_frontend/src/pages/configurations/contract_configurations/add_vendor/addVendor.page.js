import React from "react";
import MaterialLayout from './components/Layout/MaterialLayout';
import AddVendors from './components/CheckoutPage';


function addVendorMainPage() {
    return (
        <React.Fragment>
            <MaterialLayout>
                <Typography>
                    Contract Configuration
                </Typography>
                <AddVendors />
            </MaterialLayout>
        </React.Fragment>
    );
}

export default addVendorMainPage;
