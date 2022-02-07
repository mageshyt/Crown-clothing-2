import React from "react";
import styled from "styled-components";
const CollectionItems = ({ imageUrl, price, name }) => {
  // console.log(imageUrl);
  return (
    <Container className=" cursor-pointer   flex items-center flex-col">
      <div
        className="image-container border-2 border-gray-900 rounded-xl  "
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content flex text-lg justify-between font-semibold w-full ">
        <h1>{name}</h1>
        <h1>{price}$</h1>
      </div>
    </Container>
  );
};

export default CollectionItems;
const Container = styled.div`
  height: 450px;
  width: 22%;
  .image-container {
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
  }

  @media (max-width: 550px) {
    width: 80%;
    height: 450px;
  }
`;
