import React from "react";
import { connect } from "react-redux";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "../Shop/Cart/card.selector";
import { addItem, toggleCartHidden } from "../../redux/cart/cart.action";
const style = {
  image: "h-[150px] w-[150px] ",
};
const CheckOutPage = ({ cartItems, totalPrice, addItem }) => {
  console.log({ cartItems });
  return (
    <div className=" h-screen flex items-center pt-[10px] flex-col bg-white ">
      <div className="flex  w-[55%] text-xl font-semibold  pt-10   justify-around ">
        <div className="flex-[5]">Prodcut</div>
        <div className="flex-[4] hidden lg:block">description</div>
        <div className="flex-[3] hidden lg:block">Quantity</div>
        <div className="flex-[2]">Price</div>
        <div className="flex-[1]">Remove</div>
      </div>
      <div className="divider w-[65%]" />
      {cartItems.map((cartItem) => (
        <div className="flex  w-[55%] text-lg font-bold items-center">
          {/* Image */}
          <div className="flex-[5] mb-4">
            {<img className={style.image} src={cartItem.imageUrl} alt="" />}
          </div>
          {/* Description */}
          <div className="flex-[4] hidden lg:block">{cartItem.name}</div>
          {/* Quantity */}
          <div className="flex-[3] hidden lg:block">
            <div className="flex items-center space-x-2">
              {/* removing item */}
              <FaLessThan className=" text-black cursor-pointer" />
              <span>{cartItem.quantity}</span>
              {/* adding item */}
              <FaGreaterThan
                onClick={() => addItem(cartItem)}
                className="text-black cursor-pointer"
              />
            </div>
          </div>
          {/* Price */}
          <div className="flex-[2] ">
            {cartItem.price * cartItem.quantity} $
          </div>
          {/* Remove */}
          <div className="flex-[1]">x</div>
        </div>
      ))}
      <h1 className="text-4xl font-bold">Total : {totalPrice} $</h1>
      <div className="divider w-[65%]" />
    </div>
  );
};

const mapStateToProps = (state) =>
  createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectCartTotal,
  });

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckOutPage);
