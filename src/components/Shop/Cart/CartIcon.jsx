import React from "react";
import { RiShoppingBagLine } from "react-icons/ri";
import { connect } from "react-redux";
// import "./cart-dropdown.styles.scss";
import styled from "styled-components";
import { toggleCartHidden } from "../../../redux/cart/cart.action";
const styles = {
  CartIconContainer: "w-10 h-10 relative center text-gray-900 cursor-pointer ",
  shoppingIcon: "w-10 h-10",
  Count: "absolute text-md font-bold bottom-[3px]",
};
const CartIcon = ({ toggleCartHidden }) => {
  return (
    <Container onClick={toggleCartHidden} className={styles.CartIconContainer}>
      <RiShoppingBagLine className={styles.shoppingIcon} />
      <span className={styles.Count}>0</span>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(null, mapDispatchToProps)(CartIcon);

const Container = styled.div``;
