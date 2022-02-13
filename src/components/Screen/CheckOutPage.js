import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "../Shop/Cart/card.selector";
import {
  addItem,
  clearItemFromCart,
  removeItem,
} from "../../redux/cart/cart.action";
import { AiFillDelete, AiOutlineDelete } from "react-icons/ai";
import styled from "styled-components";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import StripeButton from "../payments/StripeButton";
import toast, { Toaster } from "react-hot-toast";
import { withRouter } from "react-router-dom";
import { selectCurrentUser } from "../../redux/user reducer/user.selector";
const style = {
  image: "h-[190px] w-[160px] ",
  cartItem: "flex   lg:w-[55%] w-[80%]  text-lg font-bold items-center",
};
const CheckOutPage = ({
  cartItems,
  totalPrice,
  addItem,
  removeItem,
  clearItemFromCart,
  history,
  currentUser,
}) => {
  console.log("currentUser", currentUser);
  const [Animation, setAnimation] = useState(false);
  const [Active, setActive] = useState();
  const SignInCheckout = () => {
    if (currentUser === null) {
      toast((t) => (
        <div className="flex  items-center space-x-3">
          <span className="font-semibold">You have to sign in first</span>
          <button
            className="p-2 bg-purple-500 text-white rounded-lg font-bold"
            onClick={() => history.push("/signin")}
          >
            sign In
          </button>
        </div>
      ));
    }
  };
  return (
    <Container className=" checkout h-screen flex items-center pt-[10px] flex-col bg-white ">
      <div className="flex  lg:w-[55%] w-[80%] text-xl font-semibold  pt-10   justify-around ">
        <div className="flex-[5]">Prodcut</div>
        <div className="flex-[4] hidden lg:block">description</div>
        <div className="flex-[3] ">Quantity</div>
        <div className="flex-[2]">Price</div>
        <div className="flex-[1]">Remove</div>
      </div>
      <Toaster reverseOrder={false} />
      <div className="divider lg:w-[65%] w-[85%]" />
      {cartItems.map((cartItem) => (
        <div
          key={cartItem.id}
          className={
            //! we are checking animation is  true and clicked element and card id are  equal if both are true we will add the animation;
            Animation && Active === cartItem.id
              ? `${style.cartItem} item `
              : `${style.cartItem}  `
          }
        >
          {/* Image */}
          <div className="flex-[5] mb-4  ">
            <div className=" w-[190px] mb-10   h-[195px]">
              {<img className={style.image} src={cartItem.imageUrl} alt="" />}
            </div>
          </div>
          {/* Description */}
          <div className="flex-[4] hidden lg:block">{cartItem.name}</div>
          {/* Quantity */}
          <div className="flex-[3] ">
            <div className="flex items-center space-x-2">
              {/* removing item */}
              <MdArrowBackIosNew
                onClick={() => removeItem(cartItem)}
                className="text-black cursor-pointer"
              />
              <span>{cartItem.quantity}</span>
              {/* adding item */}
              <MdArrowForwardIos
                onClick={() => addItem(cartItem)}
                className="text-black  cursor-pointer"
              />
            </div>
          </div>
          {/* Price */}
          <div className="flex-[2] ">
            {cartItem.price * cartItem.quantity} $
          </div>
          {/* Remove */}
          <div
            onClick={() => {
              setAnimation(true);
              setActive(cartItem.id);
              setTimeout(() => {
                clearItemFromCart(cartItem);
              }, 2500);
            }}
            className="flex-[1] cursor-pointer remove"
          >
            <AiFillDelete className="text-xl hover:text-red-500 " />
          </div>
        </div>
      ))}
      <div
        className={totalPrice > 0 ? "divider lg:w-[65%] w-[85%]" : " hidden"}
      />
      {/* Out total bill */}
      <h1 className="text-4xl text-right w-[55%] font-medium ">
        Total : {totalPrice} $
      </h1>
      {/* Warning */}
      {totalPrice > 0 ? (
        <div>
          <div className="mt-4 text-xl font-medium md:text-2xl text-center text-red-500">
            *Please use the following test credit card for payments*
            <br />
            5555 5555 5555 4444 - Exp: 01/20 - CVV: 123
          </div>
          <div className="pb-10 flex justify-center  mt-4">
            {currentUser === null ? (
              <div>
                <span
                  className="font-bold bg-blue-400 p-2 text-white rounded-lg cursor-pointer"
                  onClick={SignInCheckout}
                >
                  PayNow
                </span>
              </div>
            ) : (
              <StripeButton price={totalPrice} />
            )}

            {/* <StripeButton price={totalPrice} /> */}

            {/* <StripeButton /> */}
          </div>
        </div>
      ) : (
        ""
      )}
    </Container>
  );
};

const mapStateToProps = (state) =>
  createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectCartTotal,
    currentUser: selectCurrentUser,
  });

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CheckOutPage));

const Container = styled.div`
  .item {
    animation: removed-item-animation 2.5s cubic-bezier(0.65, -0.02, 0.72, 0.29);
  }
  @keyframes removed-item-animation {
    0% {
      opacity: 1;
      transform: translateX(0);
    }

    30% {
      opacity: 1;
      transform: translateX(50px);
    }

    80% {
      opacity: 1;
      transform: translateX(-800px);
    }

    100% {
      opacity: 0;
      transform: translateX(-900px);
    }
  }
`;