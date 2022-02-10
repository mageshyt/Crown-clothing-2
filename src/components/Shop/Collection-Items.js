import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { addItem } from "../../redux/cart/cart.action";

const CollectionItems = ({ item, addItem }) => {
  // console.log(imageUrl);
  const { id, name, price, imageUrl } = item;
  return (
    <Container className="relative  cursor-pointer  hover:opacity-100  flex items-center flex-col">
      <div
        className="image-container border-2 border-gray-900   "
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content flex text-lg justify-between font-semibold w-full ">
        <h1>{name}</h1>
        <h1>{price}$</h1>
      </div>
      {/* Shop how btn */}
      <div
        onClick={() => addItem(item)}
        className="absolute shop-btn bottom-20 hover:border-black hover:text-white bg-white w-[70%] text-center hidden  py-2 border-[1px] hover:border-white hover:bg-black "
      >
        <span className="font-medium text-xl k ">ADD TO CART</span>
      </div>
    </Container>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItems);
const Container = styled.div`
  height: 450px;
  width: 22vw;

  transition: all 0.5s ease-in-out;
  .image-container {
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin-bottom: 5px;
  }
  :hover {
    opacity: 0.8;
    .shop-btn {
      opacity: 0.85;
      display: block;
      transition: all 0.5s ease-in-out;
    }
  }
  @media (max-width: 550px) {
    width: 70%;
    height: 400px;
  }
`;
