import React from "react";
import MaterialLayout from './components/Layout/MaterialLayout';
import AddVendors from './components/CheckoutPage';


function addVendorMainPage() {
    return (
        <React.Fragment>
            <MaterialLayout>
                <AddVendors />
            </MaterialLayout>
        </React.Fragment>
    );
}

export default addVendorMainPage;
