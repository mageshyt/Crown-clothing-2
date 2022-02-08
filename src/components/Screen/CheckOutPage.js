import React from "react";
import { connect } from "react-redux";

const CheckOutPage = ({ cartItems }) => {
  console.log({ cartItems });
  return (
    <div>
      <h1>Hello</h1>
      {cartItems.map((cartItem) => (
        <div>{cartItem.name}</div>
      ))}
    </div>
  );
};

const mapDispatchToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapDispatchToProps)(CheckOutPage);
