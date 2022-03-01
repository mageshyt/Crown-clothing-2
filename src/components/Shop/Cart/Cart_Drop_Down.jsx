import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./cart-item";
import {
  selectCartItemCount,
  selectCartItems,
} from "../../../redux/cart/card.selector";
import { toggleCartHidden } from "../../../redux/cart/cart.action";
import { useHistory } from "react-router-dom";

const style = {
  checkOutBtn:
    "hover:bg-black mt-auto border-black mb-2 border-2 p-2 text-xl hover:text-white font-medium text-center cursor-pointer",
};
const Cart_Drop_Down = () => {
  const history = useHistory();

  // ! item count
  const itemCount = useSelector(selectCartItemCount);
  //! cart items from redux
  const cartItems = useSelector(selectCartItems);
  //! toggle hidden
  const dispatch = useDispatch();
  const toggleHidden = () => dispatch(toggleCartHidden());
  return (
    <div className="absolute flex pb-2 flex-col w-[250px] h-[370px] top-[70px] overflow-hidden   bg-white border-2 border-black p-5 z-50 right-[10px] ">
      <div className="cart-items flex flex-col h-[340px]  overflow-scroll  ">
        {itemCount ? (
          cartItems.map(
            // console.log("cart 🛒", item)
            (item) => <CartItem key={item.id} item={item} />
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
              toggleHidden();
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

export default Cart_Drop_Down;
