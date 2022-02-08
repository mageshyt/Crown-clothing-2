import React from "react";
import { RiShoppingBagLine } from "react-icons/ri";
import { connect } from "react-redux";
// import "./cart-dropdown.styles.scss";
import styled from "styled-components";
import { toggleCartHidden } from "../../../redux/cart/cart.action";
import { selectCartItemCount } from "./card.selector";
import { createStructuredSelector } from "reselect";
const styles = {
  CartIconContainer: "w-10 h-10 relative center text-gray-900 cursor-pointer ",
  shoppingIcon: "w-10 h-10",
  Count: "absolute text-[16px] font-semibold bottom-[1px]",
};
const CartIcon = ({ toggleCartHidden, itemCount }) => {
  console.log("count 🔄", itemCount);
  return (
    <Container onClick={toggleCartHidden} className={styles.CartIconContainer}>
      <RiShoppingBagLine className={styles.shoppingIcon} />
      <span className={styles.Count}>{itemCount}</span>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) =>
  createStructuredSelector({
    itemCount: selectCartItemCount,
  });
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

const Container = styled.div``;
