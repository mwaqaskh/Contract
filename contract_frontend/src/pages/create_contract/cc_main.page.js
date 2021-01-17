import React from "react";
import MaterialLayout from './components/Layout/MaterialLayout';
import CheckoutPage from './components/CheckoutPage';


function ccMainPage() {
    return (
        <React.Fragment>
            <MaterialLayout>
                <CheckoutPage />
            </MaterialLayout>
        </React.Fragment>
    );
}

export default ccMainPage;
