import React from "react";
import SHOP_DATA from "../../assets/shop.data";
import Header from "../Home/Header";
import CollectionPreview from "../Shop/Collection-preview";
const ShopPage = () => {
  const collection = SHOP_DATA;

  return (
    <div className="bg-gray-200">
      <Header />
      {collection.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default ShopPage;
