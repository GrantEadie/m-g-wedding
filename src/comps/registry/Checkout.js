import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Card from "./Card";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
  }

  return stripePromise;
};

const Checkout = () => {
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const item = {
    price: "price_1KiPRmBxxlJCXXw1YZwmxtPl",
    quantity: 1,
  };

  const article = {
    title: "Donate to Our New Home",
    amount: 50,
    desc: "We're working on finishing the inside and outside of our recently purchased home. These donations will go to a new deck, raised beds, a perimeter fence, landscaping, and more."
  };

  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`,
  };

  const redirectToCheckout = async () => {
    setLoading(true);
    console.log("redirectToCheckout");

    const stripe = await getStripe();

    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);

    if (error) setStripeError(error.message);
    setLoading(false);
  };

  if (stripeError) alert(stripeError);

  return (
    <Container>
      <Card
        redirectToCheckout={redirectToCheckout}
        isLoading={isLoading}
        item={article}
      />
    </Container>
  );
};

export default Checkout;
