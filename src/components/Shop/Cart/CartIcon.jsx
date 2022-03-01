import React from "react";
import { RiShoppingBagLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
// import "./cart-dropdown.styles.scss";
import styled from "styled-components";
import { toggleCartHidden } from "../../../redux/cart/cart.action";
import { selectCartItemCount } from "../../../redux/cart/card.selector";
const styles = {
  CartIconContainer: "w-10 h-10 relative center text-gray-900 cursor-pointer ",
  shoppingIcon: "w-10 h-10",
  Count: "absolute text-[16px] font-semibold bottom-[1px]",
};
const CartIcon = () => {
  const dispatch = useDispatch();
  //! use_dispatch -->This hook returns a reference to the dispatch function from the Redux store. You may use it to dispatch actions as needed.
  const checkToggle = () => dispatch(toggleCartHidden());
  //! use selector use select for object form redux
  const itemCount = useSelector(selectCartItemCount);

  return (
    <Container onClick={checkToggle} className={styles.CartIconContainer}>
      <RiShoppingBagLine className={styles.shoppingIcon} />
      <span className={styles.Count}>{itemCount}</span>
    </Container>
  );
};

export default CartIcon;

const Container = styled.div``;
