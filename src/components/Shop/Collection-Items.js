import React from "react";
import styled from "styled-components";
const CollectionItems = ({ imageUrl, price, name }) => {
  // console.log(imageUrl);
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
      <div className="absolute shop-btn bottom-20 hover:border-black hover:text-white bg-white w-[70%] text-center hidden  py-2 border-[1px] hover:border-white hover:bg-black ">
        <span className="font-medium text-xl k ">ADD TO CART</span>
      </div>
    </Container>
  );
};

export default CollectionItems;
const Container = styled.div`
  height: 450px;
  width: 22%;
  transition: all 0.5s ease-in-out;
  .image-container {
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
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
