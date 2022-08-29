import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

function StripeContainer() {
  const PUBLIC_KEY =
    "pk_live_51Kr75TCmyBHOeaAVOiNjBH0BRf6k5lGYV8Sp0pf7MAkCW8nXZvsndFIY8COCJG0urOygY74cKxlawzncf54nEgMK00BRC4YYP6";

  const stripeTestPromise = loadStripe(PUBLIC_KEY);

  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}

export default StripeContainer;
