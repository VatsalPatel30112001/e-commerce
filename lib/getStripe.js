// import { loadStripe } from "@stripe/stripe-js";
import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51LCncMSBek5e3KFB66731UP1Yct8IKGqVaDPi3rCg5H5HatKrxiX3lp1vPtKarLncYpauOiECs2G8mw2dJ5pTCot00xfGIx5L3"
    );
  }
  return stripePromise;
};

export default getStripe;
