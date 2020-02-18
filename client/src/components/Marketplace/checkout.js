import React, { useState, useEffect } from 'react';
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "./CheckoutForm";
import api from "./api";

const Checkout = props => {
    const [apiKey, setApiKey] = useState(null)

useEffect(() => {
    api.getPublicStripeKey().then(apiKey => setApiKey(apiKey))
  }, []);

    return (
      <div className="checkout">
        {apiKey && (
          <StripeProvider apiKey={apiKey}>
            <Elements>
              <CheckoutForm amount={props.amount}/>
            </Elements>
          </StripeProvider>
        )}
      </div>
    );
  }

export default Checkout;