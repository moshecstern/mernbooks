// import React from 'react';
// import {injectStripe} from 'react-stripe-elements';

// // import AddressSection from './AddressSection';
// import CardSection from './CardSection';

// // class CheckoutForm extends React.Component {
//     const CheckoutForm = props => {
//  function handleSubmit(event)  {
//     // We don't want to let default form submission happen here, which would refresh the page.
//     event.preventDefault();

//     // Use Elements to get a reference to the Card Element mounted somewhere
//     // in your <Elements> tree. Elements will know how to find your Card Element
//     // because only one is allowed.
//     // See our getElement documentation for more:
//     // https://stripe.com/docs/stripe-js/reference#elements-get-element
//     const cardElement = props.elements.getElement('card');

//     // From here we can call createPaymentMethod to create a PaymentMethod
//     // See our createPaymentMethod documentation for more:
//     // https://stripe.com/docs/stripe-js/reference#stripe-create-payment-method
//     props.stripe
//       .createPaymentMethod({
//         type: 'card',
//         card: cardElement,
//         billing_details: {name: 'Jenny Rosen'},
//       })
//       .then(({paymentMethod}) => {
//         console.log('Received Stripe PaymentMethod:', paymentMethod);
//       });

//     // You can also use confirmCardPayment with the PaymentIntents API automatic confirmation flow.
//     // See our confirmCardPayment documentation for more:
//     // https://stripe.com/docs/stripe-js/reference#stripe-confirm-card-payment
//     props.stripe.confirmCardPayment('{PAYMENT_INTENT_CLIENT_SECRET}', {
//       payment_method: {
//         card: cardElement,
//       },
//     });

//     // You can also use confirmCardSetup with the SetupIntents API.
//     // See our confirmCardSetup documentation for more:
//     // https://stripe.com/docs/stripe-js/reference#stripe-confirm-card-setup
//     props.stripe.confirmCardSetup('{PAYMENT_INTENT_CLIENT_SECRET}', {
//       payment_method: {
//         card: cardElement,
//       },
//     });

//     // You can also use createToken to create tokens.
//     // See our tokens documentation for more:
//     // https://stripe.com/docs/stripe-js/reference#stripe-create-token
//     // With createToken, you will not need to pass in the reference to
//     // the Element. It will be inferred automatically.
//     props.stripe.createToken({type: 'card', name: 'Moshe Stern'});
//     // token type can optionally be inferred if there is only one Element
//     // with which to create tokens
//     // this.props.stripe.createToken({name: 'Jenny Rosen'});

//     // You can also use createSource to create Sources.
//     // See our Sources documentation for more:
//     // https://stripe.com/docs/stripe-js/reference#stripe-create-source
//     // With createSource, you will not need to pass in the reference to
//     // the Element. It will be inferred automatically.
//     props.stripe.createSource({
//       type: 'card',
//       owner: {
//         name: 'Moshe Stern',
//       },
//     });
//   };

// //   render() {
//     return (
//       <form onSubmit={handleSubmit}>
//         {/* <AddressSection /> */}
//         <CardSection />
//         <button>Confirm order</button>
//       </form>
//     );
// //   }
// }

// export default injectStripe(CheckoutForm);
import React, { useState, useEffect } from 'react';
import { CardElement, injectStripe } from "react-stripe-elements";
// import "./CheckoutForm.css";
import api from "../Marketplace/api";

const CheckoutForm = props => {
    const [amount, setamount] = useState(0)
    const [currency, setcurrency] = useState("$")
    const [clientSecret, setclientSecret] = useState(null)
    const [error, seterror] = useState(null)
    const [metadata, setmetadata] = useState(null)
    const [disabled, setdisabled] = useState(false)
    const [succeeded, setsucceeded] = useState(false)
    const [processing, setprocessing] = useState(false)
// class CheckoutForm extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       amount: 0,
//       currency: "",
//       clientSecret: null,
//       error: null,
//       metadata: null,
//       disabled: false,
//       succeeded: false,
//       processing: false
//     };

//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
useEffect(() => {
    // api.getProductDetails().then(productDetails => {
        setamount(props.amount)
        // setcurrency
    // })
  }, []);
//   componentDidMount() {
//     // Step 1: Fetch product details such as amount and currency from API to make sure it can't be tampered with in the client.
//     api.getProductDetails().then(productDetails => {
//       this.setState({
//         amount: productDetails.amount / 100,
//         currency: productDetails.currency
//       });
//     });
//   }

  async function handleSubmit(ev) {
    ev.preventDefault();

    // Step 1: Create PaymentIntent over Stripe API
    api.createPaymentIntent({
        payment_method_types: ["card"]
      })
      .then(clientSecret => {
          setclientSecret(clientSecret)
          setdisabled(true)
          setprocessing(true)
        });

        // Step 2: Use clientSecret from PaymentIntent to handle payment in stripe.handleCardPayment() call
        props.stripe
          .handleCardPayment(clientSecret)
          .then(payload => {
            if (payload.error) {
              seterror(`Payment failed: ${payload.error.message}`)
              setdisabled(false)
              setprocessing(false)
              console.log("[error]", payload.error);
            } else {
                seterror("")
                setsucceeded(true)
                setprocessing(false)
                setmetadata(payload.paymentIntent)
              console.log("[PaymentIntent]", payload.paymentIntent);
            }
          });
    //   })
    //   .catch(err => seterror(err.message));
  }

 function renderSuccess() {
    return (
      <div className="sr-field-success message">
        <h1>Your test payment succeeded</h1>
        <p>View PaymentIntent response:</p>
        <pre className="sr-callout">
          <code>{JSON.stringify(metadata, null, 2)}</code>
        </pre>
      </div>
    );
  }

  const renderForm = () => {
    var style = {
      base: {
        color: "#32325d",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4"
        }
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    };
    return (
      <form onSubmit={handleSubmit}>
        <h1>
          {currency.toLocaleUpperCase()}{" "}
          {amount.toLocaleString(navigator.language, {
            minimumFractionDigits: 0
          })}{" "}
        </h1>
        <h4>Pre-order the Pasha package</h4>

        <div className="sr-combo-inputs">
          <div className="sr-combo-inputs-row">
            <input
              type="text"
              id="name"
              placeholder="Name"
              autoComplete="cardholder"
              className="sr-input"
            />
          </div>

          <div className="sr-combo-inputs-row">
            <CardElement className="sr-input sr-card-element" style={style} />
          </div>
        </div>

        {error && (
          <div className="message sr-field-error">{error}</div>
        )}

        {!succeeded && (
          <button className="btn" disabled={disabled}>
            {processing ? "Processing…" : "Pay"}
          </button>
        )}
      </form>
    );
  }

//   render() {
    return (
      <div className="checkout-form">
        <div className="sr-payment-form">
          <div className="sr-form-row" />
          {/* add () after functions */}
          {succeeded && renderSuccess()}
          {!succeeded && renderForm()}
        </div>
      </div>
    );
  }
// }

export default injectStripe(CheckoutForm);