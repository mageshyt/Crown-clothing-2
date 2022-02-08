import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import CartItem from "./cart-item";

const Cart_Drop_Down = ({ cartItems, history }) => {
  return (
    <div className="absolute flex flex-col w-[250px] h-[350px] top-[70px] bg-white border-2 border-black p-5 z-50 right-[10px] ">
      <div className="cart-items flex flex-col h-[340px] justify-center  overflow-scroll">
        {cartItems.map(
          (item) => (
            <CartItem key={item.id} item={item} />
          )
          //   console.log("cart 🛒", item);
        )}
        {/* check out btn */}
        <span
          onClick={() => history.push("/checkout")}
          className="hover:bg-black mt-auto border-black  border-2 p-2 text-xl hover:text-white font-medium text-center cursor-pointer"
        >
          GO TO CHECKOUT
        </span>
      </div>
    </div>
  );
};

const mapDispatchToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});
export default connect(mapDispatchToProps)(withRouter(Cart_Drop_Down));
