import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { createStructuredSelector } from "reselect";
import { selectCartTotal } from "../Shop/Cart/card.selector";

const StripeButton = ({ totalPrice }) => {
  const priceForStripe = totalPrice * 100;

  const publishableKey =
    "pk_test_51KRXdeSF9TiHfvqkes1UiwPvIhE8yLOEbDYNi5jslkRPgnuwgFoH46oVYYA8ObDUwblI2U73AxkNyFpQAaJjIhA100gSh49wZH";

  // ! payments successfull
  const paymentsSuccessfull = () => {
    toast.success("Payment Successful !");
  };
  return (
    <div>
      <StripeCheckout
        label="Pay Now"
        name="magesh Clothing Ltd."
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $${totalPrice}`}
        // stripeKey={publishableKey}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={paymentsSuccessfull}
        stripeKey={publishableKey}
      />
      <Toaster />
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  totalPrice: selectCartTotal,
});
export default connect(mapStateToProps)(StripeButton);
