import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { createStructuredSelector } from "reselect";
import { order_completed } from "../../redux/cart/cart.action";
import { selectCartTotal } from "../Shop/Cart/card.selector";

const StripeButton = ({ totalPrice, order_completed }) => {
  const priceForStripe = totalPrice * 100;

  const publishableKey =
    "pk_test_51KRXdeSF9TiHfvqkes1UiwPvIhE8yLOEbDYNi5jslkRPgnuwgFoH46oVYYA8ObDUwblI2U73AxkNyFpQAaJjIhA100gSh49wZH";

  // ! payments successfull
  const paymentsSuccessfull = () => {
    toast.success("Payment Successful !");
    // ! dispatch the action
    //! after payment successfull clear the cart
    setTimeout(() => {
      order_completed();
    }, 1000);
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
const mapDispatchToProps = (dispatch) => ({
  order_completed: () => dispatch(order_completed(dispatch)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StripeButton);
