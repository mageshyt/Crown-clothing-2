import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import CartItem from "./cart-item";
import { createStructuredSelector } from "reselect";
import { selectCartItemCount, selectCartItems } from "./card.selector";
import { toggleCartHidden } from "../../../redux/cart/cart.action";
const style = {
  checkOutBtn:
    "hover:bg-black mt-auto border-black  border-2 p-2 text-xl hover:text-white font-medium text-center cursor-pointer",
};
const Cart_Drop_Down = ({ cartItems, history, itemCount, dispatch }) => {
  return (
    <div className="absolute flex flex-col w-[270px] h-[350px] top-[70px] bg-white border-2 border-black p-5 z-50 right-[10px] ">
      <div className="cart-items flex flex-col h-[340px] justify-center   overflow-scroll">
        {itemCount ? (
          cartItems.map(
            (item) => <CartItem key={item.id} item={item} />
            //   console.log("cart 🛒", item);
          )
        ) : (
          <span className="text-red-400 text-center text-xl mt-auto w-full font-semibold">
            You dont have any item
          </span>
        )}

        {/* check out btn */}
        <span
          onClick={() => {
            if (itemCount > 0) {
              history.push("/checkout");
              dispatch(toggleCartHidden());
            } else {
              alert("You dont have any items");
            }
          }}
          className={
            itemCount > 0
              ? style.checkOutBtn
              : `${style.checkOutBtn} cursor-not-allowed`
          }
        >
          GO TO CHECKOUT
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) =>
  createStructuredSelector({
    cartItems: selectCartItems,
    itemCount: selectCartItemCount,
  });

export default connect(mapStateToProps)(withRouter(Cart_Drop_Down));
